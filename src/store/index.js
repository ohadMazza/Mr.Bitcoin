import {createStore} from 'vuex'
import contact from './modules/contact.js'

const storeOptions={
    strict :true,
    state(){
        return{
            count:0,
        }
    },
    mutations: {
        increment(state){
            state.count++
        },
    },
    getters: {

    },
    modules:{
        contact,

    }
}


const store = createStore(storeOptions)
export default store