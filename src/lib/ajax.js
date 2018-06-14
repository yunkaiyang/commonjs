import axios from "axios";
import qs from "qs";

let axiosIns = axios.create();
axiosIns.defaults.withCredentials = true;
axiosIns.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axiosIns.defaults.timeout = 30000;//超时时间

// 添加请求拦截器
axiosIns.interceptors.request.use(
  	function(config) {
    	return config;
  },
  function(error) {
    // 对请求错误做些什么
   	console.log("请求错误");
    return Promise.reject(error);
  }
);

export default axiosIns;
