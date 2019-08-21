<template>
    <el-container style="height: 100%; border: 1px solid #eee">
        <el-aside style="width: auto;background-color: rgb(238, 241, 246)">
           <menuA :menuList="menuList"></menuA>
        </el-aside>
        <el-container>

            <el-main>
                <headerA :menuList="menuList" style="height: 30px"></headerA>
                <router-view style="height: 90%"></router-view>
                <footerA></footerA>

            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import menuA from './menuA'
    import power from './power'
    import headerA from './headerA'
    import footerA from './footerA'
    export default {
        name: "mainA",
        components:{
            menuA,
            headerA,
            footerA
        },
        data(){
          return{
              menuList:[],
          }
        },
        methods:{
            getMenuList(){
                this.menuList = power.admin;
            },
        },
        mounted() {
            this.getMenuList()
        }

    }
</script>

<style scoped>

</style>
