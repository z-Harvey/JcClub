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
 * 获取个人信息
 */
let getMine = function (success, error) {
  axios.get(path + '/mine/' + (Date.parse(new Date()) + 3) + '/').then(function (res) {
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
 * pid=****
 */
let getAreaList = function (data, success, error) {
  axios.get(path + '/area/?' + data).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 查询公司 搜索
 * search=****
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
 * 关注Ta   ( p=id )
 */
let MyCollect = function (data, success, error) {
  axios.post(path + '/my_collect/?link=' + Date.parse(new Date()), data).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 取消关注   (id)
 */
let delMyCollect = function (data, success, error) {
  axios.delete(path + '/my_collect/' + data + '/?link=' + Date.parse(new Date())).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 公海List
 */
let getCompanySeaList = function (data, success, error) {
  axios.get(path + '/companySea/?link=' + Date.parse(new Date()) + '&' + data).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 我的客户List
 */
let getMyCustomer = function (data, success, error) {
  axios.get(path + '/my_customer/?link=' + Date.parse(new Date()) + '&' + data).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 是否有权限查看客户
 * status_choices  0: 未开通  1: 已开通  2: 审核中  3: 审核失败
 */
let CompanySeaStatus = function (data, success, error) {
  axios.get(path + '/companysea_status/?link=' + Date.parse(new Date()) + '&' + data).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 获取当前标记了多少客户
 * need_count : 需要标记  mark_count : 当前标记  also_need_count : 还需标记
 */
let CompanyPerm = function (success, error) {
  axios.get(path + '/company_perm/?link=' + Date.parse(new Date())).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 申请开通权限
 */
let PostCompanyPerm = function (success, error) {
  axios.post(path + '/company_perm/?link=' + Date.parse(new Date())).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 标记客户 提交标记信息
 * relation : 合作关系*
 * has_decision : 决策连*
 * department : 线索部门
 * simple_name : 简称
 * industry : 行业
 * type : 类型
 * net_url : 网址
 * province : 省份
 * city : 城市
 * area : 地区
 * address : 详细地址
 * people_num : 人数
 * fzjg_num : 分支机构数
 * turnover : 营业额
 * contact_list : 联系人列表
 * company : 公司
 */
let PostMyCustomer = function (data, success, error) {
  axios.post(path + '/my_customer/?link=' + Date.parse(new Date()), data).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 企业类型列表
 */
let getCompanytype = function (success, error) {
  axios.get(path + '/company_type/?link=' + Date.parse(new Date())).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 客户信息 头部
 */
let getCompanyHeader = function (data, success, error) {
  axios.get(path + '/company_header/?link=' + Date.parse(new Date()) + '&' + data).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 客户信息
 */
let getCompanyInfo = function (data, success, error) {
  axios.get(path + '/company_info/?link=' + Date.parse(new Date()) + '&' + data).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 客户 的跟进会员
 * user: 用户
 * relation: 关系枚举
 * mark_num: 跟进数
 * has_decision: 决策线索枚举
 * department: 部门
 * add_time: 创建时间
 * company: 公司id
 * avatarurl: 头像
 * collect_num: 关注数
 * is_collect: 是否关注
 */
let getCompanyMark = function (data, success, error) {
  axios.get(path + '/company_mark/?link=' + Date.parse(new Date()) + '&' + data).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 客户 的 基本信息   ( company = id )
 */
let getCompanyBasic = function (data, success, error) {
  axios.get(path + '/company_basic/?link=' + Date.parse(new Date()) + '&' + data).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 客户 的 规模信息   ( company = id )
 */
let getCompanyScale = function (data, success, error) {
  axios.get(path + '/company_scale/?link=' + Date.parse(new Date()) + '&' + data).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 客户 的 企业联系人   ( company = id )
 */
let getCompanyContact = function (data, success, error) {
  axios.get(path + '/company_contact/?link=' + Date.parse(new Date()) + '&' + data).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 获取解锁需要的牛钻数   ( company = id )
 * out_mark_count: 外部跟进数
 * out_unlock_niuz: 外部解锁牛钻
 * club_mark_count: 内部跟进
 * club_unlock_niuz: 内部解锁牛钻
 * user_niuz: 用户牛钻
 */
let getCompanyUnlock = function (data, success, error) {
  axios.get(path + '/company_unlock/?link=' + Date.parse(new Date()) + '&' + data).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 解锁这家公司   ( company : id is_deepunlock: 1-解锁内部 2-解锁外部 3-全部 )
 */
let postCompanyUnlock = function (data, success, error) {
  axios.post(path + '/company_unlock/?link=' + Date.parse(new Date()), data).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 销售笔记 头部   ( id=** )
 */
let getNotesHeader = function (data, success, error) {
  axios.get(path + '/notes_header/?link=' + Date.parse(new Date()) + '&' + data).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 销售笔记 个人信息   ( company = id )
 */
let getMyCustomers = function (data, success, error) {
  axios.get(path + '/my_customer/' + data + '/?link=' + Date.parse(new Date())).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 销售笔记 获取足迹   ( company = id )
 */
let getFootPrint = function (data, success, error) {
  axios.get(path + '/foot_print/?link=' + Date.parse(new Date()) + '&' + data).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 销售笔记 新增足迹   ( company = id )
 */
let postFootPrint = function (data, success, error) {
  axios.post(path + '/foot_print/?link=' + Date.parse(new Date()), data).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 我的关注   ( p = id )
 */
let getMyCollect = function (data, success, error) {
  axios.get(path + '/my_collect/?link=' + Date.parse(new Date()) + '&' + data).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 我的粉丝   ( p = id )
 */
let getMyFans = function (data, success, error) {
  axios.get(path + '/my_fans/?link=' + Date.parse(new Date()) + '&' + data).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 牛钻任务列表
 */
let getNiuzTask = function (success, error) {
  axios.get(path + '/niuz_task/?link=' + Date.parse(new Date())).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 牛钻记录
 */
let getNiuzDetail = function (success, error) {
  axios.get(path + '/niuz_detail/?link=' + Date.parse(new Date())).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 修改我的名片时 获取我的信息
 */
let getMyCardInfo = function (data, success, error) {
  axios.get(path + '/user/' + data + '/?link=' + Date.parse(new Date())).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 修改我的名片
 */
let putMyCardInfo = function (id, data, success, error) {
  axios.put(path + '/user/' + id + '/?link=' + Date.parse(new Date()), data).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 获取邀请人审核列表
 */
let getMyInvited = function (success, error) {
  axios.get(path + '/my_invited/?link=' + Date.parse(new Date())).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
/**
 * 是否同意 被邀请者 入会
 */
let postMyInvited = function (data, success, error) {
  axios.post(path + '/my_invited/?link=' + Date.parse(new Date()), data).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}

/**
 * 编辑工作经验  提交
 */
let putWorkInfo = function (data, success, error) {
  axios.put(path + '/work/' + Date.parse(new Date()) + '/', data).then(function (res) {
    success(res)
  }, function (err) {
    error(err.response)
  })
}
export default{
  login,
  getVerifyCode,
  getToken,
  getMine,
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
  delMyCollect,
  getCompanySeaList,
  getMyCustomer,
  CompanySeaStatus,
  CompanyPerm,
  PostCompanyPerm,
  PostMyCustomer,
  getCompanytype,
  getCompanyHeader,
  getCompanyInfo,
  getCompanyMark,
  getCompanyBasic,
  getCompanyScale,
  getCompanyContact,
  getCompanyUnlock,
  postCompanyUnlock,
  getMyCustomers,
  getNotesHeader,
  getFootPrint,
  postFootPrint,
  getMyCollect,
  getMyFans,
  getNiuzTask,
  getNiuzDetail,
  getMyCardInfo,
  putMyCardInfo,
  getMyInvited,
  postMyInvited,
  putWorkInfo
}
</script>
