<template>
  <div id="home">
      <Header></Header>
      <router-view></router-view>
  </div>
</template>
<script>
import Header from "./Header";


export default {
  name: "home",
  components:{
      Header
  }　　
};
</script>

<style scoped="scoped">
   #home{height:100%;background: #000;}
</style>
