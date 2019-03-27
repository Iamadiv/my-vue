<template>
  <div id="Header" class="cl">
    <div class="menuLearn_leftadd">
     <Icon type="md-desktop" size="large" color='orange'/> 课堂数据资产</div>
     
     
   <div class="menuLearn_left">
      <Menu :theme="theme3" mode="horizontal" active-name="学情总览">
        <MenuItem v-for="(todos,index) in activeNames" :key="index" :name="todos.name" :to="todos.to">
          <Icon :type="todos.type"/> {{todos.name}}
        </MenuItem>  
      </Menu>
   </div> 
   <div class="menuLearn_Right">
      <Icon type="md-desktop" size="large" />
     <span>王继川</span>   
     <Icon type="ios-arrow-down" size="large" />
     </div>  
  </div>
</template>

<script>
export default {
  name: "Header",
  computed:{
    name(){
      return this.$store.state.childName;
    }
  },
  data() {
    return {
      childName: "",
      theme3: "dark",
      activeNames: [
        { name: "学情总览", to: "/commonpage", type: "md-archive" },
        { name: "学生表现", to: "/viewPage", type: "md-chatbubbles" },
        {
          name: "教学总览",
          to: "/commonpage",
          type: "md-battery-charging"
        },
        { name: "教师指数", to: "/commonpage", type: "md-leaf" },
        { name: "我的数据", to: "/commonpage", type: "md-appstore" },
      ]
    };
  }
};
</script>

<style scoped="scoped">
.cl{
  clear:both;
}
.menuLearn_leftadd{width: 120px;height:50px;float: left;}
#Header {
  width: 100%;
  height: 50px;
  background: #000;
  color: #fff;
  font-size: 15px;
  line-height: 50px;
  border-bottom:2px solid #1B2139;
}
.ivu-menu-dark{
    background: #000;
}
.ivu-menu-horizontal{
    height:49px;
    line-height: 49px;
}
.menuLearn_left{
  height:50px;float:left;
}
.menuLearn_Right{
  width:10%;height:50px;float:right;margin-left:60px;color:#fff;
}
.menuLearn_Right span{
     display:inline-block;width:70px;text-align:center;
}
 

</style>
