import axios from 'axios';
import store from '../vuex/store';
import { getApiServer } from '../common/js/common';
let base = '';//ip授权
let development1 = 'http://192.168.1.150:7070';//开发ip
// base = development1;
let development = 'http://192.168.1.11:7070';//开发ip1
let index = "";
if(index === 0) {
    base = development1;
} else {
    base = development;
}
let test = '';//测试ip
let formal = '';//正式ip


let qs=require('qs');
let instance = axios.create({
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    withCredentials: true

});
// console.log(store.state.token);
instance.defaults.headers.common['token'] = store.state.token;
// 添加请求拦截器
instance.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    //判断是否存在token，如果存在将每个页面header都添加token
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    // console.log('token===>',store.state.token);
    if(store.state.token){
        config.headers.common['token'] = store.state.token;
    }
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// http response 拦截器
instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    this.$store.commit('del_token');
                    router.replace({
                        path: '/login',
                        query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
                    })
            }
        }
        return Promise.reject(error.response.data)
    });


export const requestLogin = params => { 
    return instance.post(`${base}/web/login`, qs.stringify(params)).then(res => res.data)
    .catch((error) => {
        console.log('error==>', error);
    });
};


export const logout = params => { 
    return instance.delete(`${base}/web/logout`,{ params: params }).then(res => res.data)
    .catch((error) => {
        console.log('error==>', error);
    });
};


export const menuList = params => { 
    // console.log('${base}==>', getApiServer(1));
    let server = getApiServer(1).concat('web/menu');
    console.log('server==>', server);
    return instance.get(server, { params: params }).then(res => res.data)
    .catch((error) => {
        console.log('error==>', error);
    });
};


export const getUserListPage = params => { 
    return instance.post(`${base}/web/pollutantSource/pollutantList`, qs.stringify(params)).then(res =>res.data)
    .catch((error) => {
        console.log('error==>', error);
    }); 
};

export const removeUser = params => { 
    return axios.get(`${base}/user/remove`, { params: params })
    .catch((error) => {
        console.log('error==>', error);
    });
};

export const batchRemoveUser = params => { 
    return axios.get(`${base}/user/batchremove`, { params: params })
    .catch((error) => {
        console.log('error==>', error);
    }); 
};

export const editUser = params => { 
    return axios.get(`${base}/user/edit`, { params: params })
    .catch((error) => {
        console.log('error==>', error);
    }); 
};

export const addUser = params => { 
    return axios.get(`${base}/user/add`, { params: params })
    .catch((error) => {
        console.log('error==>', error);
    });
};