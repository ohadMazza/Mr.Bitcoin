<script >
import AppHeader from '@/cmps/AppHeader.vue'
import UserMsg from "@/cmps/UserMsg.vue";

export default{
  components:{
    AppHeader,
    UserMsg,
  }
}
</script>

<template >
  <AppHeader/>
  <main class="main-content">
    <UserMsg />
    <RouterView/>
  </main>
</template>

<style scoped>
.main-content{
  min-height: calc(90vh-4em);
}

</style>
