// import Home from './views/Home.vue'
// import Main from './views/Main.vue'
// import Table from './views/nav1/Table.vue'
// import Form from './views/nav1/Form.vue'
// import user from './views/nav1/user.vue'
// import Page4 from './views/nav2/Page4.vue'
// import Page5 from './views/nav2/Page5.vue'
// import Page6 from './views/nav3/Page6.vue'
// import echarts from './views/charts/echarts.vue'
//
// // import {menuList} from "api/api.js";
// // let roles = sessionStorage.getItem('roles');
// // let menu =[]
// // menuList(roles).then(data =>{
// //     if (success === true) {
// //         console.log(data.data);
// //         menu = data.data
// //     }else {
// //         this.$message({
// //             message: message,
// //             type: 'error'
// //         });
// //     }
// // })
//
// 	// let menu = [
// 	// 			{
// 	// 				"children": [
// 	// 					{
// 	// 						"component": user,
// 	// 						"id": 2,
// 	// 						"name": "用户管理",
// 	// 						"path": "/userMana"
// 	// 					},
// 	// 					{
// 	// 						"component": user,
// 	// 						"id": 3,
// 	// 						"name": "部门管理",
// 	// 						"path": "/deptMana"
// 	// 					},
// 	// 					{
// 	// 						"component": Page4,
// 	// 						"id": 4,
// 	// 						"name": "角色管理",
// 	// 						"path": "/roleMana"
// 	// 					}
// 	// 				],
// 	// 				"component": Home,
// 	// 				"iconCls": "icon-filter",
// 	// 				"id": 1,
// 	// 				"leaf": false,
// 	// 				"name": "系统管理",
// 	// 				"path": "/"
// 	// 			},
// 	// 			{
// 	// 				"children": [{
// 	// 						"component": Table,
// 	// 						"id": 17,
// 	// 						"name": "分析报告",
// 	// 						"path": "/analysisReportMana"
// 	// 					}],
// 	// 				"component": Home,
// 	// 				"iconCls": "",
// 	// 				"id": 5,
// 	// 				"leaf": true,
// 	// 				"name": "站点管理",
// 	// 				"path": "/"
// 	// 			},
// 	// 			{
// 	// 				"children": [
// 	// 					{
// 	// 						"component": Table,
// 	// 						"id": 8,
// 	// 						"name": "分析报告",
// 	// 						"path": "/analysisReportMana"
// 	// 					},
// 	// 					{
// 	// 						"component": Table,
// 	// 						"id": 9,
// 	// 						"name": "消息简报",
// 	// 						"path": "/briefingNewsMana"
// 	// 					}
// 	// 				],
// 	// 				"component": Home,
// 	// 				"iconCls": "",
// 	// 				"id": 7,
// 	// 				"leaf": false,
// 	// 				"name": "数据分析",
// 	// 				"path": "/"
// 	// 			},
// 	// 			{
// 	// 				"children": [
// 	// 					{
// 	// 						"component": Page5,
// 	// 						"id": 11,
// 	// 						"name": "污染管理",
// 	// 						"path": "/polluteMana"
// 	// 					},
// 	// 					{
// 	// 						"component": echarts,
// 	// 						"id": 12,
// 	// 						"name": "污染源管理",
// 	// 						"path": "/pollutantSourceMana"
// 	// 					},
// 	// 					{
// 	// 						"component": echarts,
// 	// 						"id": 13,
// 	// 						"name": "告警展示",
// 	// 						"path": "/alarmMana"
// 	// 					}
// 	// 				],
// 	// 				"component": Home,
// 	// 				"iconCls": "",
// 	// 				"id": 10,
// 	// 				"leaf": false,
// 	// 				"name": "污染事件",
// 	// 				"path": "/"
// 	// 			}
// 	// 		];
// exports.menu=menu;