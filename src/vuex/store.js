//引入
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        childName: '',
        number:'',
        age:'',
        class:'',
        imgSrc:'',
        subMenuName:'',
        tabView: "echartsTriggle",
        echartsData:'',
      
    },
mutations: {
    save_childName(state, Payload) {
        state.childName = Payload;
    },
    number(state,Payload){
            state.number = Payload;
    },
    age(state,Payload){
        state.age = Payload;
    },
    class(state,Payload){
        state.class = Payload;
    },
    imgSrc(state,Payload){
        state.imgSrc = Payload;
    },
    subMenuName(state,Payload){
        state.subMenuName = Payload;
    },
    tabView(state,Payload){
        state.tabView = Payload;
    },
    echartsData(state,Payload){
        state.echartsData = Payload;
        console.log("vuex测试",Payload);

    },
}
})