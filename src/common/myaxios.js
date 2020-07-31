import axios from 'axios'
//配置公共Url
axios.defaults.baseURL = "http://tt.linwenqin.com/api/tt"
//配置 请求 拦截器
axios.interceptors.request.use(function(config){
    return config;
},function(err){
    return Promise.reject(err)
})

//配置响应拦截器
axios.interceptors.response.use(function(response){
    return response.data;
},function(err){
    return Promise.reject(err)
})
//导出自定义的axios
export default axios
