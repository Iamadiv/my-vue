<template>
  <div class="echartsLeft">
    <div class="toggleEcharts">
        <toggleEcharts></toggleEcharts>
    </div>        
    <!--<echartsTriggle class="echartsLeft"></echartsTriggle>-->
      <keep-alive>
         <component :is="tabView"></component>
    </keep-alive>
          
    </div>
  </div>
</template>
<script>
  
    import toggleEcharts from './toggleEcharts';
    import echartsTriggle from './echartsTriggle';
    import endEcharts from './endEcharts';
   
    export default {
        name:"echartsLeft",
     
        data(){
            return {
                pathName:"练习效率分析",
                
            }
        },
        computed:{
          tabView(){
             return this.$store.state.tabView;
          }
        },
        components:{
            toggleEcharts,echartsTriggle,endEcharts
        },
        methods:{
           
        },
    }
</script>
<style scoped="scoped">
.echartsLeft {
  color: #000;
  width:100%;
  height:100%;
  /* background: #202020; */
}


</style>


