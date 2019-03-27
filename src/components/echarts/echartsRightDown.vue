<template>
  <div class="echartsRight-down">
    <div id="myOtherEcharts" :style="{width: '100%', height: '100%'}"></div>
  </div>
</template>
<script>
var echarts = require("echarts");
var macarons = require("echarts/theme/macarons.js");
export default {
  name: "echartsRight-down",
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
            {type:"value",name:"用时",min:0,max:250,position:"right",
            splitLine:{show:true,lineStyle:{color:'#29292B'}}
            },
            {type:"value",name:"得分率",min:0,max:25,position:"left",
            splitLine:{show:true,lineStyle:{color:'#29292B'}}
            }
            ],
        series:[
            {name:"用时",type:"line",data:[2,4.9,7,34.2,25.6,76.7,135.6,162.2,32.6,20,6.4,3.3]},
            {name:"得分率",type:"line",yAxisIndex:1,data:[2,2.2,3.3,4.5,6.3,10.2,20.3,23.4,23,16.5,12,6.2]}
        ]
      };

      // 基于准备好的dom，初始化echarts实例
      let myOtherEcharts = echarts.init(
        document.getElementById("myOtherEcharts"),
        macarons
      );
      // 绘制图表
      myOtherEcharts.setOption(option);
    }
  }
};
</script>
<style scoped="scoped">
.echartsRight-down {
  width: 100%;
  height: calc(100% - 250px);
}
</style>


