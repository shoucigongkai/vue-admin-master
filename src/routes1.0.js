import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'
import Massage from './views/massage/massage'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '首页',
        iconCls: 'fa fa-home',//图标样式class
        leaf:true,
        children: [
            { path: '/main', component:Main , name: '首页' }
            // { path: '/table', component: Table, name: 'Table' },
            // { path: '/form', component: Form, name: 'Form' },
            // { path: '/user', component: user, name: '列表' },
        ]
    },
    {
        path:'/',
        component:Home,
        name:'消息管理',
        iconCls:'fa fa-comment-o ',
        leaf:false,
        children:[
            {path: '/Massage', component:Massage , name: '消息管理' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '系统管理',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: Page4, name: '用户管理' },
            { path: '/page5', component: Page5, name: '部门管理' },
            { path: '/page6', component: Page6, name: '角色管理' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/Table', component: Table, name: '站点管理' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '数据分析',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: '分析报告' },
            { path: '/Form', component: Form, name: '消息简报' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '污染事件',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/user', component: user, name: '污染管理' },
            // { path: '/echarts', component: Page10, name: '污染源管理' },
            // { path: '/echarts', component: Page11, name: '告警展示' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];
export default routes;