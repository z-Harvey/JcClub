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
 * 首页模块 页面注册
 * homeContent      首页内容
 * International    公海
 * myCustomer       我的客户
 * my               我的
 * CuInfo           客户信息
 * FollowNumber     跟进会员数量
 * workEx           工作经验
 * saleFootprint    销售足迹
 */
import home from '@/components/Main_interface/home' // 首页 NAV 导航
import CuHome from '@/components/Main_interface/CuHome' // 客户首页
import ApplyOpen from '@/components/Main_interface/ApplyOpen' // 申请开通
import cardInfo from '@/components/Main_interface/cardInfo' // 名片信息
import HisCustomer from '@/components/Main_interface/HisCustomer' // Ta的客户
import HisFans from '@/components/Main_interface/HisFans' // Ta的粉丝
import HisFollow from '@/components/Main_interface/HisFollow' // Ta的关注
import MarkupCu from '@/components/Main_interface/MarkupCu' // 标记客户 、新增客户
import srceach from '@/components/Main_interface/srceach' // 搜索客户
import SalesNotes from '@/components/Main_interface/SalesNotes' // 客户笔记
import editComment from '@/components/Main_interface/editComment' // 编辑点评标记
import myNiuzuan from '@/components/Main_interface/myNiuzuan' // 我的牛钻
import NiuzuanRecord from '@/components/Main_interface/NiuzuanRecord' // 牛钻记录
import myInvitation from '@/components/Main_interface/myInvitation' // 我邀请的会员
import editInfo from '@/components/Main_interface/editInfo' //  编辑信息  个人信息、工作经验
import batchMarking from '@/components/Main_interface/batchMarking' //  标记客户入口  批量上传Excel入口
import batchNew from '@/components/Main_interface/batchNew' //  批量上传Excel
import dataConfirm from '@/components/Main_interface/dataConfirm' //  公司名匹配失败  数据确认

import homeContent from '@/components/Main_interface/home_content' // 会员
import International from '@/components/Main_interface/International' // 公海
import myCustomer from '@/components/Main_interface/myCustomer' // 我的客户 页面

import buOppo from '@/components/Main_interface/buOppo' // 商机
import buOppoInfo from '@/components/Main_interface/buOppoInfo' // 商机详情
import demand from '@/components/Main_interface/demand' // 需求
import demandInfo from '@/components/Main_interface/demandInfo' // 需求详情
import buOppoNew from '@/components/Main_interface/buOppoNew' // 新增商机
import demandNew from '@/components/Main_interface/demandNew' // 新增需求

/**
 * 管理员模块 页面注册
 */
import adminNav from '@/components/Admin/nav' //  管理员首页导航
import MemberList from '@/components/Admin/MemberList' //  会员列表
import newClub from '@/components/Admin/newClub' //  创建俱乐部
import memberInfo from '@/components/Admin/memberInfo' //  会员信息
import memberJournal from '@/components/Admin/memberJournal' //  会员日志
import CustomerInfo from '@/components/Admin/CustomerInfo' //  客户信息
import memberCustomer from '@/components/Admin/memberCustomer' //  会员客户
import adminPers from '@/components/Admin/adminPers' //  会员客户

Vue.use(Router)

export default new Router({
  // mode: 'history',
  mode: 'hash',
  routes: [
    { path: '/login', name: 'login', component: login },
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
    { path: '/editInfo', name: 'editInfo', component: editInfo },
    { path: '/batchMarking', name: 'batchMarking', component: batchMarking },
    { path: '/batchNew', name: 'batchNew', component: batchNew },
    { path: '/dataConfirm', name: 'dataConfirm', component: dataConfirm },
    { path: '/homeContent', name: 'homeContent', component: homeContent },
    { path: '/International', name: 'International', component: International },
    { path: '/myCustomer', name: 'myCustomer', component: myCustomer },
    { path: '/buOppo', name: 'buOppo', component: buOppo },
    { path: '/buOppoInfo', name: 'buOppoInfo', component: buOppoInfo },
    { path: '/demand', name: 'demand', component: demand },
    { path: '/demandInfo', name: 'demandInfo', component: demandInfo },
    { path: '/buOppoNew', name: 'buOppoNew', component: buOppoNew },
    { path: '/demandNew', name: 'demandNew', component: demandNew },
    /**
     * ------------------------------- Main_interface 文件夹下的文件
     */
    { path: '/adminNav', name: 'adminNav', component: adminNav },
    { path: '/MemberList', name: 'MemberList', component: MemberList },
    { path: '/newClub', name: 'newClub', component: newClub },
    { path: '/memberInfo', name: 'memberInfo', component: memberInfo },
    { path: '/memberJournal', name: 'memberJournal', component: memberJournal },
    { path: '/CustomerInfo', name: 'CustomerInfo', component: CustomerInfo },
    { path: '/memberCustomer', name: 'memberCustomer', component: memberCustomer },
    { path: '/adminPers', name: 'adminPers', component: adminPers }
  ]
})
