<template>
  <div class="echartsRight-up">
    <div id="myEcharts" :style="{width: '100%', height: '250px'}"></div>
  </div>
</template>
<script>
var echarts = require("echarts");
var macarons = require("echarts/theme/macarons.js");
export default {
  name: "echartsRight-up",
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        grid:{
            left:'50',
            right:'60'
        },
        color:['#3AD3BE','#29355D'],
        textStyle:{
            color:'#fff'
        },
        xAxis: [
          {
            type: "category",
            data:["12-01","12-02","12-03","12-04","12-05","12-06","12-07","12-08","12-09","12-10","12-11","12-12"],
            splitLine:{show:true,lineStyle:{color:'#29292B'}}
          }
        ],
        yAxis:[
            {type:"value",position:"right",splitLine:{show:true,lineStyle:{color:'#29292B'}}},
            {type:"value",position:"left",splitLine:{show:false,lineStyle:{color:'#29292B'}}}
            ],
        series:[
            {name:"得分排名",type:"bar",data:[2,4.9,7,34.2,25.6,76.7,135.6,162.2,32.6,20,6.4,3.3]},
            {name:"用时排名",type:"bar",data:[2,4.9,7,34.2,25.6,76.7,135.6,162.2,32.6,20,6.4,3.3]},
            {name:"效率指数",type:"line",yAxisIndex:1,data:[2,2.2,3.3,4.5,6.3,10.2,20.3,23.4,23,16.5,12,6.2]},
        ]
      };
       // 基于准备好的dom，初始化echarts实例
            let myEcharts = echarts.init(document.getElementById("myEcharts"), macarons);
            // 绘制图表
            myEcharts.setOption(option);     
    }
  }
};
</script>
<style scoped="scoped">
.echartsRight-up {
  width: 100%;
  height: 250px;
 
}
</style>


