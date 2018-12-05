<script type="text/javascript">
let navListType = [true, false]
let userInfo = {
  myId: null // 我的个人 ID
}
let stateList = {}
let flowInfo = {}
let temporary = null
let HTTPStatusCode = {
  400: '错误请求',
  401: '未授权',
  402: '402',
  403: '服务器拒绝请求',
  404: '未找到',
  405: '方法禁用',
  406: '不接受',
  407: '需要代理授权',
  408: '请求超时',
  409: '冲突',
  410: '已删除',
  411: '需要有效长度',
  412: '未满足前提条件',
  413: '413', // 请求实体过大
  414: '请求的 URI 过长',
  415: '不支持的媒体类型',
  416: '请求范围不符合要求',
  417: '417', // 未满足期望值
  500: '服务器内部错误',
  501: '尚未实施',
  502: '错误网关',
  503: '服务不可用',
  504: '网关超时',
  505: 'HTTP 版本不受支持'
}
export default{
  HTTPStatusCode, // HTTP 状态列表
  navListType, // 首页list状态
  userInfo, // 当前用户信息
  flowInfo, // 流程信息
  temporary, // 临时数据
  stateList // 状态列表
}
</script>
