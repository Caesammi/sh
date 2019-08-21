<template>
    <el-header class="headerA">
        <el-container style="height: 100%">
            <el-breadcrumb style="margin-top: 10px" separator="/">
                <el-breadcrumb-item v-for="item in breadCrumbList" :to="item.path">{{item.name}}</el-breadcrumb-item>
            </el-breadcrumb>
        </el-container>
    </el-header>
</template>

<script>
    export default {
        name: "headerA",
        data(){
            return{
                bbb:[],

            }
        },
        props:{
            menuList:Array

        },
        computed: {
            breadCrumbList () {
                const { name } = this.$route;
                console.log(name)
                let breadlist = [{ path: 'home', name: 'Home' }];
                this.menuList.forEach(item => {
                    if (item.childrens.length > 0) {
                        item.childrens.forEach(sub => {
                            if (sub.path === name) {
                                breadlist.push({ name: item.header }, { name: sub.name });
                            }
                        });
                    }
                });
                console.log(breadlist)
               return breadlist;
            }
        },
    }
</script>

<style scoped>
    .headerA{
        box-shadow:10px 2px 40px #ADADAD;
        border-top-right-radius: 25px;
        border-top-left-radius: 25px;
        background-color: #409EFF;
    }
</style>
