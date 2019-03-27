<template>
  <div id="echartsIndex">
    <div id="pathText">学生表现 / {{path}}</div>
    <div class="toggle">
      <div class="dataSelect fr">
        <dateComponent></dateComponent>
      </div>
      <div class="elSelect fr">
        <toggleSelect></toggleSelect>
      </div>
      <div class="elOption fr">
        <combox></combox>
      </div>
    </div>
    <div class="echarts-view">
      <div class="echarts-left fl">
        <echartsLeft></echartsLeft>
      </div>
      <div class="echarts-right fl">
          <echartsRight></echartsRight>  
      </div>
    </div>
  </div>
</template>

<script>
import combox from "../common/combox";
import toggleSelect from "../common/toggleSelect";
import dateComponent from "../common/dateComponent";
import echartsLeft from "./echartsLeft";
import echartsRight from "./echartsRight";
export default {
  name: "echartsIndex",
  components: {
    combox,
    toggleSelect,
    dateComponent,
    echartsLeft,
    echartsRight
  },
  computed:{
      path(){
         return this.$store.state.subMenuName;
      }
  },
  data() {
    return {
    
    };
  }
};
</script>

<style scoped="scoped">
#echartsIndex {
  height: 100%;
  font-size: 13px;
  font-weight: normal;
}
#pathText {
  width: 100%;
  height: 40px;
}
.toggle {
  width: 100%;
  height: 40px;
  clear: both;
}
.elOption {
  width: 100px;
  height: 40px;
  margin-right: 10px;
}
.elSelect {
  width: 150px;
  height: 40px;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.echarts-view {
  width: 100%;
  height: calc(100% - 80px);
  clear: both;
}
.echarts-left {
  width: 50%;
  height: 100%;
 
}
.echarts-right {
  width:47%;
  height: 100%;
  margin-left: 18px;
  

}
</style>
