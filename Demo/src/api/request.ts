import axios from 'axios'

// 创建 axios 实例
const http = axios.create({
    // 统一 url 配置，定义访问前缀 baseURL
    baseURL: '/api',
    // 定义请求超时时间
    timeout: 10000,
    // 请求带上 cookie
    withCredentials: true,
    // 定义消息头
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
})

// 定义请求拦截器
http.interceptors.request.use(
    config => {
        console.log(`config in request interceptor: ${config}`);
        return config
    },
    error => {
        console.error(`Error in request interceptor: ${error}`);
        Promise.reject(error)
    }
)

// 定义响应拦截器
http.interceptors.response.use(
    response => {
        const res = response.data
        console.log(`data in response interceptor: ${response}`);
        // // 未找到页面时，跳转到 404 页面
        // if (res && res.code === 404) {
        //     router.push({
        //         name: '404'
        //     })
        // }
        return response
    },
    error => {
        console.error(`Error in response interceptor: ${error}`);
        return Promise.reject(error)
    }
)

export default http