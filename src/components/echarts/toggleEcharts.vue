<template>
  <div id="toggleEcharts">
      <div class="cl">
        <p class="echarts_path"><Icon type="md-information-circle" size="5" color="#6164AE" />{{subMenuName}}</p>
        <div class="echarts_arrow"></div>
      </div>
      <ul class="chartsList cl">
          <li v-for="(nameUp,index) in nameUps" :key="index">{{nameUp.name}}
      </li>
      </ul>
       <ul class="chartsList1 cl">
          <li v-for="(nameDown,index) in nameDowns" :key="index">{{nameDown.name}}
      </li>         
      </ul>
      <div class="timeOut">本次熟练的内容耗时占68%，需要更加具有挑战性的练习内容。</div>
  </div>
</template>

<script>
export default {
  name: "toggleEcharts",
  computed:{
      subMenuName(){
        return this.$store.state.subMenuName;
      },
  },
  data(){
      return {
          nameUps: [
                { name: "30`15``"},
                { name: "20`24``"},
                { name: "68.0%"},
                { name: "3"},
          ],
          nameDowns: [
                { name: "练习总用时"},
                { name: "熟练掌握耗时"},
                { name: "熟练掌握耗时率"},
                { name: "待加强知识点"},
          ],
      }
  }
}; 
</script>

<style scoped="scoped">
   .cl{clear: both;}
   #toggleEcharts{width:100%;height:130px;font-size:13px;color:#fff;font-weight: normal;}
   .echarts_path{width:30%;height:30px;float:left;}
   .echarts_arrow{width:60%;height:30px;float:left;}
   .chartsList{width:100%;height:35px;list-style: none;}
   .chartsList li{width:22%;height:35px;float: left;margin-left: 10px;font-size:20px;text-align:center;color:#B0486B;}
   .chartsList1{width:100%;height:35px;list-style: none;}
   .chartsList1 li{width:22%;height:35px;float: left;margin-left: 10px;text-align:center;}
   .timeOut{width:90%;height:30px;line-height:30px;background: #252C3F;border-radius:2%;margin:10px auto;}
</style>
