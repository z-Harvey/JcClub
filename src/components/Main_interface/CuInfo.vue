<template>
    <div class="CuInfo" v-if="show">
        <div v-if="type === 'CuHome'" class="contBox">
            <div class="contTitle">
                <div>基本信息</div>
                <div @click="mol">更多</div>
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
        <div v-if="type === 'CuHome'" class="contBox">
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
        <div v-if="type === 'CuHome'" class="contBox">
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
            <div class="contFooter"><span>@xxxxx</span>于yyyy/mm/dd标记</div>
        </div>
        <div v-if="type === 'cardInfo'" class="contBox">
            <div class="contTitle">
                <div>基本信息</div>
                <div></div>
            </div>
            <div class="contcon">
                <div>
                    <div>姓名</div>
                    <div v-text="msg.name">袁邦阳</div>
                </div>
                <div>
                    <div>公司</div>
                    <div v-text="msg.comname">北京聚牛天下网络科技有限公司</div>
                </div>
                <div>
                    <div>职位</div>
                    <div v-text="msg.position">CEO</div>
                </div>
                <div>
                    <div>年龄</div>
                    <div v-text="msg.age">24</div>
                </div>
                <div>
                    <div>学历</div>
                    <div v-text="msg.edu_background">博士后</div>
                </div>
                <div>
                    <div>所在地</div>
                    <div v-text="msg.area">北京·昌平</div>
                </div>
            </div>
        </div>
        <div v-if="type === 'cardInfo'" class="contBox">
            <div class="contTitle">
                <div>联系方式</div>
                <div></div>
            </div>
            <div class="contcon">
                <div>
                    <div>手机号</div>
                    <div v-text="msg.mobile">188 8888 8888</div>
                </div>
                <div>
                    <div>邮箱</div>
                    <div v-text="msg.email">yby@xiaoshouniu.cn</div>
                </div>
                <div>
                    <div>微信号</div>
                    <div v-text="msg.wx_no">yuanbangyang</div>
                </div>
            </div>
        </div>
        <div v-if="type === 'SalesNotes'" class="contBox">
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
        <div v-if="type === 'SalesNotes'" class="contBox">
            <div class="contTitle">
                <div>企业规模</div>
                <div></div>
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
        <div v-if="type === 'SalesNotes'" class="contBox">
            <div class="contTitle">
                <div>联系人</div>
                <div></div>
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
</template>

<script>
export default {
  name: 'CuInfo',
  data () {
    return {
      tapBur: true,
      msg: {}
    }
  },
  methods: {
    mol: function () {
      this.$emit('mol')
    },
    cardInfoInit: function (data) {
      let _this = this
      _this.api.getUserCard(data, function (res) {
        console.log(res)
        _this.msg = res.data
      }, function (err) {
        console.log(err)
      })
    }
  },
  mounted (options) {
    console.log(this.type)
    document.title = '酷牛仔'
  },
  props: ['type', 'show']
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
    height:.7rem;
    font-size: .7rem;
    line-height: .7rem;
}
.contcon>div>div:first-child{
    color:#101010;
    float: left;
}
.contcon>div>div:last-child{
    color:rgba(255, 152, 0, 1);
    float: right;
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
