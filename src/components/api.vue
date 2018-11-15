<script type="text/javascript">
import axios from 'axios'
const path = '/api'

/**
 * 用户进入界面  用code换取token  同时查看是不是用户  与当前状态
 */
// axios.defaults.headers.Authorization = 'LS_yyPo8b3nWo1hs0uyj3FQk'
axios.defaults.headers.Authorization = 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDI4MDA0NzksInVzZXJfaWQiOjQsImVtYWlsIjoiMTFAMTEuY29tIiwidXNlcm5hbWUiOiIxODIxMDI0NTc1MiJ9.whjRWys9moC6bS3rpsxz9fXzsukSdHJ-OlpRdSuMgPQ'
let getToken = function (data, success, error) {
  axios.post(path + '/public_login/', data).then(function (res) {
    success(res)
    axios.defaults.headers.Authorization = 'JWT ' + res.data.token
  }, function (err) {
    error(err.response)
  })
}
/**
 * 注册
 */
let login = function (data, success, error) {
  axios.post(path + '/regist/', data).then(function (res) {
    success(res)
  }).catch(function (err) {
    error(err.response)
  })
}
/**
 * 获取验证码
 */
let getVerifyCode = function (data, success, error) {
  axios.post(path + '/verify_code/', data).then(function (res) {
    success(res)
  }).catch(function (err) {
    error(err.response)
  })
}
/**
 * 提交 邀请者手机号
 */
let getApplyClub = function (data, success, error) {
  axios.post(path + '/apply_club/', data).then(function (res) {
    success(res)
  }).catch(function (err) {
    error(err.response)
  })
}
/**
 * 提交 想要加入的俱乐部ID
 */
let getClubChoice = function (data, success, error) {
  axios.post(path + '/club_choice/', data).then(function (res) {
    success(res)
  }).catch(function (err) {
    error(err.response)
  })
}
/**
 * 登陆流程中 获取俱乐部列表
 */
let getClubList = function (success, error) {
  axios.get(path + '/club/?' + (Date.parse(new Date()) + 2)).then(function (res) {
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
  axios.get(path + '/user/' + (Date.parse(new Date()) + 1) + '/').then(function (res) {
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
/**
 * 获取加入俱乐部的状态
 */
let getApplyStatus = function (success, error) {
  axios.get(path + '/apply_status/?' + Date.parse(new Date())).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 为自己取一个酷酷的昵称
 */
let postUserNickname = function (data, success, error) {
  axios.post(path + '/user_nickname/', data).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 获取客户列表
 */
let getClubUser = function (data, success, error) {
  axios.get(path + '/club_user/?' + data + '&link=' + Date.parse(new Date())).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 获取 名片 头部信息
 */
let getUserHeader = function (data, success, error) {
  axios.get(path + '/user_header/' + data + '/?link=' + Date.parse(new Date())).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 获取 名片 中的 个人信息
 */
let getUserCard = function (data, success, error) {
  axios.get(path + '/user_card/' + data + '/?link=' + Date.parse(new Date())).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 获取 名片 工作经验
 */
let getUserCardWork = function (data, success, error) {
  axios.get(path + '/user_card_work/' + data + '/?link=' + Date.parse(new Date())).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 获取 对方的关注
 */
let getUserCollect = function (data, success, error) {
  axios.get(path + '/user_collect/?' + data + '&link=' + Date.parse(new Date())).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 获取 对方的粉丝
 */
let getUserFans = function (data, success, error) {
  axios.get(path + '/user_fans/?' + data + '&link=' + Date.parse(new Date())).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 获取 对方的客户
 */
let getUserCustomer = function (data, success, error) {
  axios.get(path + '/user_customer/?' + data + '&link=' + Date.parse(new Date())).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}

/**
 * 关注Ta
 */
let MyCollect = function (data, success, error) {
  axios.post(path + '/my_collect/?link=' + Date.parse(new Date()), data).then(function (res) {
    success(res)
    console.log(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 取消关注
 */
let delMyCollect = function (data, success, error) {
  axios.delete(path + '/my_collect/' + data + '/?link=' + Date.parse(new Date())).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
export default{
  login,
  getVerifyCode,
  getToken,
  getApplyClub,
  getClubList,
  getWorkNum,
  getUserNum,
  postUserInfo,
  postWorkInfo,
  getAreaList,
  getSearchCompany,
  getSearchIndustry,
  getDepartmentList,
  getApplyStatus,
  getClubChoice,
  postUserNickname,
  getClubUser,
  getUserHeader,
  getUserCard,
  getUserCardWork,
  getUserCollect,
  getUserCustomer,
  getUserFans,
  MyCollect,
  delMyCollect
}
</script>
