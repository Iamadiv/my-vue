<template>
    <div class="echartsRight">
        <echartsRightDown></echartsRightDown>
        <echartsRightUp></echartsRightUp>
    </div>
</template>
<script>
import echartsRightUp from "./echartsRightUp";
import echartsRightDown from "./echartsRightDown";
export default {
    name:"echartsRight",
    components:{
        echartsRightUp,echartsRightDown 
    }

}
</script>
<style scoped="scoped">
    .echartsRight{
        height:100%;
        /* background:#202020;  */
        }
</style>


