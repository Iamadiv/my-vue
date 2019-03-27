<template>
  <div class="echartsTriggle">
    <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
  </div>
</template>
<script>
    var echarts = require("echarts");
    var macarons = require("echarts/theme/macarons.js");
    
   
    export default {
        name:"echartsTriggle",
        mounted() {
            this.drawLine();
        },
        data(){
            return {
               
            }
        },
        computed:{
             echartsData(){
                 return this.$store.state.echartsData;
             }   
        },
      watch:{
          echartsData(curVal,oldVal){
           //　console.log(curVal,oldVal);
            this.drawLine();
            }
      },
        methods:{
            drawLine(){
                //console.log('echarts取数据',this.$store.state.echartsData);
                var option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    color:['#3AD3BE','#29355D'],
                    textStyle:{
                        color:'#fff'
                    },
                    legend: {
                        align: 'right',
                        left: 30,
                        bottom:0,
                        textStyle:{color:'#fff'},
                    },
                    grid: {
                        left: '50',right: '60',bottom: '40'
                    },
                    yAxis: [{
                        type: 'category',
                        name: '题号',
                        nameGap:'30',
                        data: ['6', '5', '4', '3', '2',"1"],
                        splitLine:{show:true,lineStyle:{color:'#29292B'}}
                    }],
                    xAxis: [{
                        type: 'value',
                        position:"top",
                        name: '用时',
                        //nameLocation:'start',
                        nameGap:'20',
                        splitLine:{show:true,lineStyle:{color:'#29292B'}}
                    }],
                    series: this.$store.state.echartsData
                    // series:[
                    //         {
                    //         name: '班级平均用时',
                    //         type: 'bar',
                    //         data: [10,20, 12, 31, 160, 23]
                    //         }, 
                    //         {
                    //         name: '学生正确用时',
                    //         type: 'bar',
                    //         data: [90,10, 200, 5, 120, 100]
                    //         }
                    //     ]
                };
                // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.init(document.getElementById("myChart"), macarons);
                // 绘制图表
                myChart.setOption(option);      
                window.onresize = function(){
                    myChart.resize();
                };  
                 myChart.on('click', params=> { 
                     console.log(params.name);
                    
                     this.$store.commit('tabView','endEcharts');
                 })    
               
            }
        },
    }
</script>
<style scoped="scoped">

#myChart{
    color:#fff;margin-top:30px;
}
#myChart div{
    width:100%;
}

</style>


