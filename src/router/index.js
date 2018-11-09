import Vue from 'vue'
import Router from 'vue-router'
/**
 * 不是用户，未登录 页面注册
 */
import login from '@/components/Logon_process/login' // 登录、注册
import NoMember from '@/components/Logon_process/NoMember' // 非会员提示
import membershipApp from '@/components/Logon_process/membershipApp' // 入会申请,工会列表
import submitAdd from '@/components/Logon_process/submitAdd' // 入会申请，编辑信息
import applySuccess from '@/components/Logon_process/applySuccess' // 入会申请，编辑信息
import examineType from '@/components/Logon_process/examineType' // 审核成功与失败
/**
 * 首页、主页面 页面注册
 */
import home from '@/components/Main_interface/home' // 首页 NAV 导航
// import test from '@/components/Main_interface/test' // 子路由测试 ******
// import homeContent from '@/components/Main_interface/home_content' // 首页 首页内容
// import International from '@/components/Main_interface/International' // 公海 页面
// import myCustomer from '@/components/Main_interface/myCustomer' // 我的客户 页面
// import my from '@/components/Main_interface/my' // 我的 页面
import CuHome from '@/components/Main_interface/CuHome' // 客户首页
// import CuInfo from '@/components/Main_interface/CuInfo' // 客户信息
// import CuInfo1 from '@/components/Main_interface/CuInfo' // 客户信息  ** 解决复用冲突/重复引用 **
// import CuInfo2 from '@/components/Main_interface/CuInfo' // 客户信息  ** 解决复用冲突/重复引用 **
// import FollowNumber from '@/components/Main_interface/FollowNumber' // 跟进会员数量
import ApplyOpen from '@/components/Main_interface/ApplyOpen' // 申请开通
import cardInfo from '@/components/Main_interface/cardInfo' // 名片信息
// import workEx from '@/components/Main_interface/workEx' // 工作经验
import HisCustomer from '@/components/Main_interface/HisCustomer' // Ta的客户
import HisFans from '@/components/Main_interface/HisFans' // Ta的粉丝
import HisFollow from '@/components/Main_interface/HisFollow' // Ta的关注

import MarkupCu from '@/components/Main_interface/MarkupCu' // 标记客户 、新增客户
import srceach from '@/components/Main_interface/srceach' // 搜索客户
import SalesNotes from '@/components/Main_interface/SalesNotes' // 销售笔记
// import saleFootprint from '@/components/Main_interface/saleFootprint' // 销售足迹
import editComment from '@/components/Main_interface/editComment' // 编辑点评标记
import myNiuzuan from '@/components/Main_interface/myNiuzuan' // 我的牛钻
import NiuzuanRecord from '@/components/Main_interface/NiuzuanRecord' // 牛钻记录
import myInvitation from '@/components/Main_interface/myInvitation' // 我邀请的会员
import editInfo from '@/components/Main_interface/editInfo' //  编辑信息  个人信息、工作经验

Vue.use(Router)

export default new Router({
  // mode: 'history',
  mode: 'hash',
  routes: [
    { path: '/', name: 'login', component: login },
    { path: '/NoMember', name: 'NoMember', component: NoMember },
    { path: '/membershipApp', name: 'membershipApp', component: membershipApp },
    { path: '/submitAdd', name: 'submitAdd', component: submitAdd },
    { path: '/applySuccess', name: 'applySuccess', component: applySuccess },
    { path: '/examineType', name: 'examineType', component: examineType },
    /**
     * ------------------------------- Main_interface 文件夹下的文件
     */
    { path: '/home', name: 'home', component: home },
    { path: '/CuHome', name: 'CuHome', component: CuHome },
    { path: '/ApplyOpen', name: 'ApplyOpen', component: ApplyOpen },
    { path: '/cardInfo', name: 'cardInfo', component: cardInfo },
    { path: '/HisCustomer', name: 'HisCustomer', component: HisCustomer },
    { path: '/HisFans', name: 'HisFans', component: HisFans },
    { path: '/HisFollow', name: 'HisFollow', component: HisFollow },
    { path: '/MarkupCu', name: 'MarkupCu', component: MarkupCu },
    { path: '/srceach', name: 'srceach', component: srceach },
    { path: '/SalesNotes', name: 'SalesNotes', component: SalesNotes },
    { path: '/editComment', name: 'editComment', component: editComment },
    { path: '/myNiuzuan', name: 'myNiuzuan', component: myNiuzuan },
    { path: '/NiuzuanRecord', name: 'NiuzuanRecord', component: NiuzuanRecord },
    { path: '/myInvitation', name: 'myInvitation', component: myInvitation },
    { path: '/editInfo', name: 'editInfo', component: editInfo }
  ]
})
