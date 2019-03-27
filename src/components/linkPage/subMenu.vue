<template>
  <div id="subMenu">
    <div class="list">
      <div class="photo">
        <img :src='imgSrc'>
      </div>
      <div class="info">
        <p>
          <span class="student_name">{{name}} </span>
          <span>{{age}}</span>
        </p>
        <p>{{number}}</p>
        <p>{{className}}</p>
      </div>
    </div>
    <div class="subMenu-navBar">
      <Row>
        <Col span="24">
          <Menu :theme="theme2" :open-names="['3']" accordion @on-select="selectMenu">
            <Submenu name="学生画像">
              <template slot="title">
                <Icon type="ios-paper"/>学生画像
              </template>
            </Submenu>
            <Submenu name="课堂回顾">
              <template slot="title">
                <Icon type="ios-people"/>课堂回顾
              </template>
            </Submenu>
            <Submenu name="练习分析">
              <template slot="title">
                <Icon type="ios-stats"/>练习分析
              </template>        
                <MenuItem name="练习完成情况">练习完成情况</MenuItem>
                <MenuItem name="练习成绩分析">练习成绩分析</MenuItem>
                <MenuItem name="练习效率分析">练习效率分析</MenuItem>     
            </Submenu>
			      <Submenu name="随堂测验分析">
              <template slot="title">
                <Icon type="ios-people"/>随堂测验分析
              </template>
            </Submenu>
          </Menu>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  name: "subMenu",
  data() {
    return {
      theme2: "dark"
    };
  },
  methods:{
    selectMenu(data){
      this.$router.push({name:'echartsIndex'});
      this.$store.commit('subMenuName',data);

      // this.$http.get('../../../static/echarts.json',{params:{name:'练习成绩分析'}}).then(function(res){
      //   console.log('返回数据',res.body[0]);
      //   this.$store.commit('echartsData',res.body);
      // },function(){
      //     console.log('请求失败处理');
      // });

      this.$http.post('/news/index',{params:{name:'练习成绩分析'}}).then(function(res){
        //console.log('返回数据',res.data);
      },function(){
          console.log('请求失败处理');
      });

      this.$http.post('/news/echartsleft1',{params:{name:'练习成绩分析'}}).then(function(res){
        //console.log('返回数据',res.data);
        this.$store.commit('echartsData',res.data);
      },function(){
          console.log('请求失败处理');
      });



    }
  },
  computed:{			
      name(){
        return this.$store.state.childName;
      },
      number(){
        return this.$store.state.number;
      },
        age(){
        return this.$store.state.age;
      },
        className(){
        return this.$store.state.class;
      },
        imgSrc(){
        return this.$store.state.imgSrc;
      },
    },
};
</script>

<style scoped="scoped">
#subMenu {
  width: 216px;
  height: 100px;
  font-size: 13px;
  color: #fff;
  text-align: left;
  line-height: 20px;
  padding-top: 8px;
  font-weight: normal; 
}
.list {
  width: 100%;
  height: 100%;
  clear: both;
}
.photo {
  width: 30%;
  height: 70%;
  line-height: 100px;
  float: left;
  border-radius: 50%;
  background: #fff;
  text-align: center;
  vertical-align: middle;
  
}
.photo img {
  width: 100%;
  height: 100%;
   border-radius: 50%;
}
.info {
  width: 60%;
  height: 100%;
  float: left;
  text-align: left;
  margin-left: 10px;
}
.subMenu-navBar {
  width: 100%;
  height: 100%;
  background: #ccc;
}
.student_name{
  width:60px;height:30px;display: inline-block;
}

</style>
