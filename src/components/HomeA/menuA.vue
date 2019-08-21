<template>
    <div>
        <i :class="[arrow?'el-icon-menu Aback':'el-icon-more Afront']" class="arrow" @click="cc"></i>
        <el-menu class="el-menu-vertical-demo"
                 :default-openeds="['0']"
                 :collapse="isCollapse"
                 mode="vertical"
                 :unique-opened="true"
        >
            <el-submenu v-for="(item,index) in menuList" :index="index + ''" >
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.header}}</span>
                </template>
                <el-menu-item-group style="text-align: left">
                    <el-menu-item v-for="(children,i) in item.childrens" @click="handleClick(children.path)" :key="i" :index="children.path">{{children.name}}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>


    </div>
</template>

<script>
    export default {
        name: "menuA",
        props:{
            menuList:{
              type: Array,
              default: [],
          },
        },
        data(){
            return{
                isCollapse: false,
                arrow: false
            }
        },
        methods: {
            cc(){
              this.isCollapse = !this.isCollapse
                this.arrow = !this.arrow
            },
            handleClick (path) {
                this.$router.push(path);
            },
        }
    }
</script>

<style lang="css" scoped>
.arrow{
}
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 250px;
        min-height: 400px;
    }
    .Afront{
        transform:translate(220px,0);
        transition: all 0.3s;
    }
    .Aback{
        transform:translate(25px,0);
        transition: all 0.3s;
    }
</style>
