<template>
    <div id="app">
        <div class="amap-wrapper">
            <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mapA",
        data(){
            return{
                msg:'我的第一个mapapp',


            }
        }

    }
</script>

<style scoped>
    .amap-wrapper {
        width: 100%;
        height: 100%;
    }
</style>
