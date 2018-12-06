<template>
    <div class="CuInfo" v-if="show">
        <div v-if="type === 'CuHome'">
            <div class="contBox">
                <div class="contTitle">
                    <div>基本信息</div>
                    <div @click="mol(0)">更多</div>
                </div>
                <div class="contcon">
                    <div>
                        <div>行业</div>
                        <div v-text="msg.industry || '--'">人力资源</div>
                    </div>
                    <div>
                        <div>官网地址</div>
                        <div v-text="msg.net_url || '--'">Http://www.xiaoshouniu.cn</div>
                    </div>
                    <div>
                        <div>公司地址</div>
                        <div v-text="msg.address || '--'">北京市昌平区龙锦苑东五区</div>
                    </div>
                    <div>
                        <div>企业类型</div>
                        <div v-text="msg.type || '--'">民营企业</div>
                    </div>
                </div>
            </div>
            <div class="contBox">
                <div class="contTitle">
                    <div>企业规模</div>
                    <div @click="mol(1)">更多</div>
                </div>
                <div class="contcon">
                    <div>
                        <div>人数</div>
                        <div v-text="msg.people_num || '--'">8</div>
                    </div>
                    <div>
                        <div>分支机构数</div>
                        <div v-text="msg.fzjg_num || '--'">0</div>
                    </div>
                    <div>
                        <div>营业额</div>
                        <div v-text="msg.turnover || '--'">1亿</div>
                    </div>
                </div>
            </div>
            <div class="contBox">
                <div class="contTitle">
                    <div>联系人</div>
                    <div @click="mol(2)">更多</div>
                </div>
                <div class="contcon" v-for="(item, index) in msg.contact_list" :key="index">
                    <div>
                        <div>姓名</div>
                        <div v-text="item.name || '--'">王**</div>
                    </div>
                    <div>
                        <div>职务</div>
                        <div v-text="item.position || '--'">CEO</div>
                    </div>
                    <div>
                        <div>电话</div>
                        <div v-text="item.phone || '--'">18*********</div>
                    </div>
                    <div>
                        <div>邮件</div>
                        <div v-text="item.email || '--'">***@***.***</div>
                    </div>
                </div>
              <div class="contFooter"><span v-text="'@' + msg.mark_people"></span>于 <span v-text="msg.add_time"></span> 标记</div>
            </div>
        </div>
        <div v-if="type === 'cardInfo'">
            <div class="contBox">
                <div class="contTitle">
                    <div>基本信息</div>
                    <div></div>
                </div>
                <div class="contcon">
                    <div>
                        <div>姓名</div>
                        <div v-text="msg.name || '--'">袁邦阳</div>
                    </div>
                    <div>
                        <div>公司</div>
                        <div v-text="msg.comname || '--'">北京聚牛天下网络科技有限公司</div>
                    </div>
                    <div>
                        <div>职位</div>
                        <div v-text="msg.position || '--'">CEO</div>
                    </div>
                    <div>
                        <div>年龄</div>
                        <div v-text="msg.age || '--'">24</div>
                    </div>
                    <div>
                        <div>学历</div>
                        <div v-text="msg.edu_background || '--'">博士后</div>
                    </div>
                    <div>
                        <div>所在地</div>
                        <div v-text="msg.area || '--'">北京·昌平</div>
                    </div>
                </div>
            </div>
            <div class="contBox">
                <div class="contTitle">
                    <div>联系方式</div>
                    <div></div>
                </div>
                <div class="contcon">
                    <div>
                        <div>手机号</div>
                        <div v-text="msg.mobile || '--'">188 8888 8888</div>
                    </div>
                    <div>
                        <div>邮箱</div>
                        <div v-text="msg.email || '--'">yby@xiaoshouniu.cn</div>
                    </div>
                    <div>
                        <div>微信号</div>
                        <div v-text="msg.wx_no || '--'">yuanbangyang</div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="type === 'SalesNotes'">
            <div class="contBox">
                <div class="contTitle">
                    <div>基本信息</div>
                    <div></div>
                </div>
                <div class="contcon">
                    <div>
                        <div>行业</div>
                        <div v-text="msg.industry || '--'"></div>
                    </div>
                    <div>
                        <div>官网地址</div>
                        <div v-text="msg.net_url || '--'"></div>
                    </div>
                    <div>
                        <div>公司地址</div>
                        <div v-text="msg.address || '--'"></div>
                    </div>
                    <div>
                        <div>企业类型</div>
                        <div v-text="msg.type || '--'">民营企业</div>
                    </div>
                </div>
            </div>
            <div class="contBox">
                <div class="contTitle">
                    <div>企业规模</div>
                    <div></div>
                </div>
                <div class="contcon">
                    <div>
                        <div>人数</div>
                        <div v-text="msg.people_num || '--'"></div>
                    </div>
                    <div>
                        <div>分支机构数</div>
                        <div v-text="msg.fzjg_num || '--'"></div>
                    </div>
                    <div>
                        <div>营业额</div>
                        <div v-text="msg.turnover || '--'">1亿</div>
                    </div>
                </div>
            </div>
            <div class="contBox">
                <div class="contTitle">
                    <div>客户关系</div>
                    <div></div>
                </div>
                <div class="contcon">
                    <div>
                        <div>合作关系</div>
                        <div v-text="msg.relation || '--'"></div>
                    </div>
                    <div>
                        <div>决策链线索</div>
                        <div v-text="msg.has_decision || '--'"></div>
                    </div>
                    <div>
                        <div>线索部门</div>
                        <div v-text="msg.department || '--'">1亿</div>
                    </div>
                </div>
            </div>
            <div class="contBox">
                <div class="contTitle">
                    <div>联系人</div>
                    <div></div>
                </div>
                <div class="contcon" v-for="(items, index) in msg.contact_list" :key="index">
                    <div>
                        <div>姓名</div>
                        <div v-text="items.name || '--'">王**</div>
                    </div>
                    <div>
                        <div>职务</div>
                        <div v-text="items.position || '--'">CEO</div>
                    </div>
                    <div>
                        <div>电话</div>
                        <div v-text="items.phone || '--'">18*********</div>
                    </div>
                    <div>
                        <div>邮件</div>
                        <div v-text="items.email || '--'">***@***.***</div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="type === 'CustomerInfo'">
            <div class="contBox">
                <div class="contTitle">
                    <div>客户关系</div>
                    <div></div>
                </div>
                <div class="contcon">
                    <div>
                        <div>合作关系</div>
                        <div>已合作</div>
                    </div>
                    <div>
                        <div>是否有线索</div>
                        <div>有</div>
                    </div>
                    <div>
                        <div>线索部门</div>
                        <div>技术部门</div>
                    </div>
                </div>
            </div>
            <div class="contBox">
                <div class="contTitle">
                    <div>基本信息</div>
                    <div></div>
                </div>
                <div class="contcon">
                    <div>
                        <div>行业</div>
                        <div>人力资源</div>
                    </div>
                    <div>
                        <div>官网地址</div>
                        <div>Http://www.xiaoshouniu.cn</div>
                    </div>
                    <div>
                        <div>公司地址</div>
                        <div>北京市昌平区龙锦苑东五区</div>
                    </div>
                    <div>
                        <div>企业类型</div>
                        <div>民营企业</div>
                    </div>
                </div>
            </div>
            <div class="contBox">
                <div class="contTitle">
                    <div>企业规模</div>
                    <div @click="mol">更多</div>
                </div>
                <div class="contcon">
                    <div>
                        <div>人数</div>
                        <div>8</div>
                    </div>
                    <div>
                        <div>分支机构数</div>
                        <div>0</div>
                    </div>
                    <div>
                        <div>营业额</div>
                        <div>1亿</div>
                    </div>
                </div>
            </div>
            <div class="contBox">
                <div class="contTitle">
                    <div>联系人</div>
                    <div @click="mol">更多</div>
                </div>
                <div class="contcon">
                    <div>
                        <div>姓名</div>
                        <div>王**</div>
                    </div>
                    <div>
                        <div>职务</div>
                        <div>CEO</div>
                    </div>
                    <div>
                        <div>电话</div>
                        <div>18*********</div>
                    </div>
                    <div>
                        <div>邮件</div>
                        <div>***@***.***</div>
                    </div>
                </div>
                <div class="contcon">
                    <div>
                        <div>姓名</div>
                        <div>王**</div>
                    </div>
                    <div>
                        <div>职务</div>
                        <div>CEO</div>
                    </div>
                    <div>
                        <div>电话</div>
                        <div>18*********</div>
                    </div>
                    <div>
                        <div>邮件</div>
                        <div>***@***.***</div>
                    </div>
                </div>
            </div>
        </div>
        <Toast ref="Toast"/>
    </div>
</template>

<script>
export default {
  name: 'CuInfo',
  data () {
    return {
      tapBur: true,
      msg: {},
      show: true
    }
  },
  methods: {
    mol (num) {
      this.$emit('mol', num)
    },
    cardInfoInit (data) {
      this.api.getUserCard(data, (res) => {
        this.msg = res.data
      }, (err) => {
        this.errMotl(err)
      })
    },
    cuHomeInit (id) {
      let str = 'company=' + id
      this.api.getCompanyInfo(str, (res) => {
        this.msg = res.data
        this.msg.contact_list = JSON.parse(res.data.contact_list)
      }, (err) => {
        this.errMotl(err)
      })
    },
    SalesNotesInit (id) {
      this.api.getMyCustomers(id, (res) => {
        let arr = ['有过合作', '正在合作', '有过跟进', '正在跟进']
        let arr1 = ['有决策链线索', '无决策链线索']
        this.show = true
        this.msg = res.data
        this.msg.contact_list = JSON.parse(this.msg.contact_list)
        this.msg.relation = arr[this.msg.relation]
        this.msg.has_decision = arr1[this.msg.has_decision]
      }, (err) => {
        this.errMotl(err)
      })
    },
    close () {
      this.show = false
    },
    errMotl (errData) {
      let errStr = ''
      let tit = this.Global.HTTPStatusCode[errData.status]
      for (let i in errData.data) {
        errStr += i + ' : '
        errStr += errData.data[i]
      }
      let obj = {
        Title: tit,
        Content: errStr || '无错误内容提示',
        type: 1,
        btn: 0
      }
      this.$refs.Toast.on_display(obj)
    }
  },
  mounted (options) {
    document.title = '酷牛仔'
  },
  props: ['type']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contBox{
    width:92%;
    border-radius: .25rem;
    background:#fff;
    margin: 0 auto .5rem;
}
.contTitle{
    padding:.65rem .5rem;
    height:.7rem;
    font-size: .7rem;
    line-height: .7rem;
}
.contTitle>div:first-child{
    color:#101010;
    float: left;
    font-weight: 600;
}
.contTitle>div:last-child{
    color:#888;
    float: right;
}
.contcon{
    border-radius: .25rem;
    border-top: 1px solid #f7f7f7;
    font-size: .7rem;
    padding:.25rem 0;
}
.contcon>div{
    padding:.25rem .5rem;
    min-height:.7rem;
    font-size: .7rem;
    line-height: .7rem;
}
.contcon>div>div:first-child{
    color:#101010;
    float: left;
}
.contcon>div>div:last-child{
    color:rgba(255, 152, 0, 1);
    text-align: right;
    padding-left:3rem;
}
.contFooter{
    border-radius: .25rem;
    border-top: 1px solid #f7f7f7;
    font-size: .6rem;
    padding:.75rem .5rem .9rem;
    text-align: left;
}
.contFooter>span{
    color:rgba(255, 152, 0, 1);
}
</style>
