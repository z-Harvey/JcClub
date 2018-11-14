<script type="text/javascript">
import axios from 'axios'
const path = '/api'

/**
 * 用户进入界面  用code换取token  同时查看是不是用户  与当前状态
 */
axios.defaults.headers.Authorization = 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDI4MDA0NzksInVzZXJfaWQiOjQsImVtYWlsIjoiMTFAMTEuY29tIiwidXNlcm5hbWUiOiIxODIxMDI0NTc1MiJ9.whjRWys9moC6bS3rpsxz9fXzsukSdHJ-OlpRdSuMgPQ'
let getToken = function (data, success, error) {
  axios.post(path + '/public_login/', data).then(function (res) {
    success(res)
    console.log(res.data.token)
    axios.defaults.headers.Authorization = 'JWT ' + res.data.token
  }, function (err) {
    error(err.response)
  })
}
/**
 * 登陆流程中 获取俱乐部列表
 */
let getClubList = function (success, error) {
  axios.get(path + '/club/').then(function (res) {
    success(res)
  }).catch(function (err) {
    error(err.response)
  })
}
/**
 * 获取 未完成的 经验信息
 */
let getWorkNum = function (success, error) {
  axios.get(path + '/work/' + Date.parse(new Date()) + '/').then(function (res) {
    success(res)
  }).catch(function (err) {
    error(err.response)
  })
}
/**
 * 获取 未完成的 基本信息
 */
let getUserNum = function (success, error) {
  axios.get(path + '/user/' + Date.parse(new Date()) + '/').then(function (res) {
    success(res)
  }).catch(function (err) {
    error(err.response)
  })
}
/**
 * 提交 基本信息
 */
let postUserInfo = function (data, success, error) {
  axios.post(path + '/user/', data).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 提交 经验信息
 */
let postWorkInfo = function (data, success, error) {
  axios.post(path + '/work/', data).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 获取城市列表
 */
let getAreaList = function (data, success, error) {
  axios.get(path + '/area/?' + data).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 查询公司
 */
let getSearchCompany = function (data, success, error) {
  axios.get(path + '/company/?' + data).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 行业接口
 */
let getSearchIndustry = function (data, success, error) {
  axios.get(path + '/industry/?' + data).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 获取部门列表
 */
let getDepartmentList = function (success, error) {
  axios.get(path + '/department/').then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
export default{
  getToken,
  getClubList,
  getWorkNum,
  getUserNum,
  postUserInfo,
  postWorkInfo,
  getAreaList,
  getSearchCompany,
  getSearchIndustry,
  getDepartmentList
}
</script>
