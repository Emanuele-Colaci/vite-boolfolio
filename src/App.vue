<script>
import AppHeader from './components/AppHeader.vue';


  export default {
    components:{
      AppHeader
    },
    data() {
      return {

      }
    },
  }
</script>
<template>
  <div>
    <AppHeader />
    <router-view></router-view>
  </div>
</template>
<style lang="scss">
  
</style>
