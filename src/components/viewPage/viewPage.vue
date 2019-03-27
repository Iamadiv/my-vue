<template>
  <div id="my-view">
    <div class="demo-split">
        <Split v-model="split1">
            <div slot="left" class="demo-split-pane">
                <menuPage></menuPage>
            </div>
            <div slot="right" class="demo-split-pane">
              <router-view></router-view> 
            </div>
        </Split>
    </div>
  </div>
</template>

<script>
    import menuPage from "./menuPage";  
    import linkPage from '../linkPage/link';
    export default {
    name: "viewPage",
    data () {
            return {
                split1: 0.14
            }
        },
        components:{
            menuPage,linkPage
        }
    };
</script>

<style scoped="scoped">
    #my-view{
        width:100%;color:#fff;font-size: 15px;
        height: calc( 100% - 50px );
     
    }
   .demo-split{
        height: 100%;
        border: none;
    }
    .demo-split-pane{
        height: 100%;
        padding: 10px;
    }
    .ivu-split-trigger-vertical {
    width: 0px;
    height: 100%;
    background: #f8f8f9;
    border-top: none;
    border-bottom: none;
    cursor: col-resize
}
.echartsbar{
    width:100%;
    height:100%;
  
}
</style>
