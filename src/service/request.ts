import axios from 'axios';
import qs from 'qs';

const Axios = axios.create({
    timeout: 60000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Accept': 'application/json'
    }
});

const CancelToken = axios.CancelToken;
const requestMap = new Map();

// 请求前置拦截器
Axios.interceptors.request.use(
    config => {

        // // 防重复提交
        const keyString = qs.stringify(Object.assign({}, { url: config.url, method: config.method }, config.data));
        // if (requestMap.get(keyString)) {
        //     // 取消当前请求
        //     config.cancelToken = new CancelToken((cancel) => {
        //         cancel('Please slow down a little');
        //     });
        // }
        requestMap.set(keyString, true);
        Object.assign(config, { _keyString: keyString });

        // if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
        //     // 序列化
        //     config.data = qs.stringify(config.data);
        // }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 返回响应拦截器
Axios.interceptors.response.use(
    res => {
        // 重置requestMap
        const config: any = res.config;
        requestMap.set(config._keyString, false);
        if (res.status === 200) {
            return res.data;
        }
        console.log(`request error：${res}`);
    },
    error => {
        console.log(error)
        return {
            code: -1
        };
    }
);

/**
 * @description
 * 请求
 * @param url
 * @param data
 * @param method
 */

type method = "GET" | "POST" | "DELETE" | "PUT" | "HEAD" | "OPTIONS" | "PATCH" | "get" | "delete" | "head" | "options" | "post" | "put" | "patch" | "link" | "LINK" | "unlink" | "UNLINK"
const request = (url: string, data: any = {}, method: method = 'GET', headers: any = {}) => {
    return Axios({
        method,
        url,
        data,
        params: method.toUpperCase() === 'GET' && data,
        headers
    });

};

export {
    request
};
