import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import userMana from './views/nav1/user.vue'
import roleMana from './views/nav2/Page4.vue'
import deptMana from './views/nav2/Page5.vue'
import Site from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'
let routes = [
    {
        "component": Home,
         "iconCls": "icon-filter",
         "id": 1,
         "leaf": false,
         "name": "系统管理",
         "path": "/",
         "children": [
             {
                 "component": userMana,
                 "id": 2,
                 "name": "用户管理",
                 "path": "/userMana"
             },
             {
                 "component": deptMana,
                 "id": 3,
                 "name": "部门管理",
                 "path": "/deptMana"
             },
             {
                 "component": roleMana,
                 "id": 4,
                 "name": "角色管理",
                 "path": "/roleMana"
             }
         ]
     },
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
    }
];
export default routes;