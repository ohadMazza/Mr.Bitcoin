import axios from 'axios'
import { utilService } from '../services/util.service.js'

const REQ_INTERVAL = 10000
const BITCOIN_DATA = 'BITCOIN_DATA'

let btcData = utilService.loadFromStorage(BITCOIN_DATA) || {}

export const bitcoinService = {
  getRate,
  getMarketPriceHistory,
  getAvgBlockSize,
}

async function getRate() {
  const exchangeRate = btcData.exchangeRate
  const lastRequest = btcData?.exchangeRate?.reqTimeStamp
  if (exchangeRate && Date.now() - lastRequest < REQ_INTERVAL) {
    return exchangeRate.data
  } else {
    try {
      const response = await axios.get(
        'https://blockchain.info/tobtc?currency=USD&value=1'
      )
      btcData.exchangeRate = {
        data: response.data,
        reqTimeStamp: Date.now(),
      }

      utilService.saveToStorage(BITCOIN_DATA, btcData)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
}

async function getMarketPriceHistory() {
  const priceHistory = btcData.priceHistory
  const lastRequest = btcData?.priceHistory?.reqTimeStamp

  if (priceHistory && Date.now() - lastRequest < REQ_INTERVAL) {
    console.log('priceHistory.data:', priceHistory.data)

    return priceHistory.data
  } else {
    try {
      const response = await axios.get(
        // 'https://api.blockchain.info/charts/market-price?timespan=12months&format=json&cors=true'
      )

      btcData.priceHistory = {
        data: response.data,
        reqTimeStamp: Date.now(),
      }

      utilService.saveToStorage(BITCOIN_DATA, btcData)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
}

async function getAvgBlockSize() {
  const avgBlockSize = btcData.avgBlockSize
  const lastRequest = btcData?.avgBlockSize?.reqTimeStamp

  if (avgBlockSize && Date.now() - lastRequest < REQ_INTERVAL) {
    return avgBlockSize.data
  } else {
    try {
      const response = await axios.get(
        // 'https://api.blockchain.info/charts/avg-block-size?timespan=12months&format=json&cors=true'
      )
      btcData.avgBlockSize = {
        data: response.data,
        reqTimeStamp: Date.now(),
      }
      utilService.saveToStorage(BITCOIN_DATA, btcData)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
}
