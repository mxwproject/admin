<template>
    <Sider ref="side1"  hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" :class="menuitemClasses">
        <Menu active-name="1-1"  theme="dark" width="auto" :accordion="true" :v-model="lists"> 
            <Submenu v-for="(list ,index) in lists" :name="list.name" :key="index">
                <template class="nav_1" slot="title">
                    <Icon :type="list.icon"></Icon>
                    <span class="layout-text">{{list.title}}</span>
                </template>
                <router-link v-for="item in list.pathTo" :to=item.path  :key="item.text">
                    <MenuItem :name=item.name>
                        <span class="layout-text">{{item.text}}</span>
                    </MenuItem>
                </router-link>
            </Submenu>
        </Menu>
    </Sider>
</template>
<script>
export default {
    props: ['collapsed'],
    data(){
        return {
            lists : [
                {   
                    name: "1",
                    icon : "person-stalker",
                    title : "订单管理",
                    pathTo : [
                        {
                            name: "1-1",
                            path : "/nosend",
                            text : "未发货订单"
                        },
                        {
                            name: "1-2",
                            path : "/send",
                            text : "已发货订单" 
                        },
                        {
                            name: "1-3",
                            path : "/finish",
                            text : "已完成订单"
                        }
                    ]
                }
            ],
            isCollapsed :false
        }
    },
    watch :{
        collapsed : function(){
            this.$refs.side1.toggleCollapse();
        }
    },
    computed : {
        menuitemClasses () {
            return [
                'menu-item',
                this.isCollapsed ? 'collapsed-menu' : ''
            ]
        }
    }
}
</script>
<style scoped>
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-item {
        height: 100%;
        float: left;
    }
    .menu-item span{
        display: inline-block;
        /* overflow: hidden; */
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>
