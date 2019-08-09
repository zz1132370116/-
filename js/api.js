//用于编写AJAX(更加利于路径的处理)
/* 所有ajax的代码写到这里 */
axios.defaults.baseURL='http://localhost:10010/v1'
// 设置AJAX超时时间
axios.defaults.timeout = 30000
// 设置提交数据时的格式
axios.defaults.headers['Content-Type'] = 'application/json'

// 设置前置拦截器->以后所有的AJAX都会自动添加上 Authorization:token 的协议头
axios.interceptors.request.use(function (config) {
    // 判断如果用户登录了就把 token 配置上 axios 的协议头中
    let token = localStorage.getItem('token')
    if (token) {
        config.headers['Authorization'] = token
    }
    // 处理请求前代码
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
//用于编写ajax（更加利于路径管理）

//登录
function getLogin(params){
    return axios.post("/admin-service/getLogin", params);
}
//从redis查询当前登录的管理员信息
function GetUserByRedis(){
    return axios.get("/admin-service/GetUserByRedis");
}
//查询会员数
function GetUserList(){
    return axios.get("/admin-service/GetUserList");
}
//查询记录数
function GetRecords(){
    return axios.get("/admin-service/GetRecords");
}
//查询异常数
function GetAbnormals(){
    return axios.get("/admin-service/GetAbnormals");
}
//查询所有订单
function getTransferRecords(params){
    return axios.post("/admin-service/getTransferRecords",params);
}
//查询所有用户
function getBankUserList(params){
    return axios.post("/admin-service/getBankUserList",params);
}
//启用(用户状态)
function memberStart(userId){
    return axios.get("/admin-service/memberStart/"+userId);
}
//停用(用户状态)
function memberStop(userId){
    return axios.get("/admin-service/memberStop/"+userId);
}
//退出
function loginOut(userName){
    return axios.get("/admin-service/loginOut/"+userName);
}

