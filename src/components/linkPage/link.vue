<template>
  <div id="link">
      <div class="link-left">
       <p class="listPath"> 菜单</p>  
        <subMenu></subMenu>
    </div>
    <div class="link-right">
         <router-view></router-view>
    </div>
  </div>
</template>

<script>
    import subMenu from './subMenu';
    import echartsIndex from '../echarts/echartsIndex';
    import commonpage from '../common/commonpage';
    export default {
      name: "linkPage",
      components:{
          subMenu,echartsIndex,commonpage
      }
    };
</script>

<style scoped="scoped">
     #link{width:100%;height:100%;clear:both;}
     .link-left{width:216px;height:100%;float:left;}
     .link-right{width:calc(100% - 216px);height:100%;float:left;}
    .listPath{width:216px;height:40px;line-height: 20px;color: #4564F0;}
</style>
