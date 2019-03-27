<template>
  <div id="menu">
    <p class="listPath">名册</p>
    <Tree :data="data1" @on-select-change="treeRouter"></Tree>
  </div>
</template>
<script>
export default {
  name: "menuPage",
  data() {
    return {
      data1: [
        {
          title: "二年级",
          type: "grade",
          disabled: "false",
          expand: true,
          children: [
            {
              title: "二年级 1班",
              type: "class",
              disabled: "false",
              expand: true,
              children: [
                {
                  title: "范冰冰",
                  type: "student",
                  id: "001",
                  number:'20190301',
                  class:'二年级 1班',
                  age:34,
                  src:require('../../assets/1.jpg'),
                },
                {
                  title: "刘德华",
                  type: "student",
                  id: "002",
                   number:'20190388',
                  class:'二年级 1班',
                   age:22,
                   src:require('../../assets/2.jpg'),
                },
                {
                  title: "易烊千玺",
                  type: "student",
                  id: "003",
                   number:'20190302',
                  class:'二年级 1班',
                   age:12,
                   src:require('../../assets/3.jpg'),
                },
                {
                  title: "李四",
                  type: "student",
                  id: "004",
                   number:'20190303',
                  class:'二年级 1班',
                   age:64,
                   src:require('../../assets/4.jpg'),
                },
                {
                  title: "张三",
                  type: "student",
                  id: "005",
                   number:'20190304',
                  class:'二年级 1班',
                   age:27,
                   src:require('../../assets/5.jpg'),
                },
                {
                  title: "李四",
                  type: "student",
                  id: "006",
                   number:'20190305',
                  class:'二年级 1班',
                   age:33,
                   src:require('../../assets/6.jpg'),
                }
              ]
            },
            {
              title: "二年级 2班",
              type: "grade",
              disabled: "false",
              expand: true,
              children: [
                {
                  title: "姚晨",
                  type: "student",
                  id: "007",
                   number:'20190306',
                  class:'二年级 2班',
                   age:50,
                    src:require('../../assets/7.jpg'),
                },
                {
                  title: "大大",
                  type: "student",
                  id: "008",
                  number:'20190307',
                  class:'二年级 2班',
                  age:40,
                  src:require('../../assets/8.jpg'),
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    treeRouter(data){ 
        this.$router.push({name:'linkPage'});
        this.$store.commit('save_childName',data[0].title);
        this.$store.commit('number',data[0].number);
        this.$store.commit('age',data[0].age);
        this.$store.commit('class',data[0].class);
        this.$store.commit('imgSrc',data[0].src);
    }
  }
};
</script>
<style scoped="scoped">
.listPath {
  width: 216px;
  height: 40px;
  line-height: 20px;
  color: #4564f0;
}
.ivu-tree-title {
  color: red;
}
</style>
