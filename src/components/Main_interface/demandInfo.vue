<template>
  <div class="demandInfo">
    <div class="title">
        <div class="titUserInfo">
            <div class="userImg" @click="pathCard()">
                <img :src="msg.avatarurl" alt="">
            </div>
            <div class="userInfo">
                <div class="userName" @click="pathCard()">
                    <div class="name" v-text="msg.nickname || '--'">袁邦阳（云端飞扬）</div>
                    <div class="nickName" v-text="(msg.position || '--') + '/' + (msg.company_name || '--')"></div>
                </div>
                <div class="userBtn gz" v-if="msg.is_collect === 0" @click="guanzhu(0)">关注</div>
                <div class="userBtn ygz" v-else @click="guanzhu(1)">已关注</div>
            </div>
            <div class="userInner" v-text="msg.desc || '--'">~</div>
        </div>
        <div class="titUserFoot">
            <div class="yan">
                <img src="@/assets/attention.png" alt="">
                <span v-text="msg.see_num || '--'">999</span>
            </div>
            <div class="time">
                <img src="@/assets/timeg.png" alt="">
                <div v-text="'剩余' + msg.residue_time + '天'"></div>
            </div>
            <div class="footRig">
                <span class="fR1">成交佣金</span>
                <span class="fR2" v-text="msg.money">1k-5k</span>
            </div>
        </div>
    </div>
    <div class="nickInfo">
        <div>
            <div class="lef">客户</div>
            <div class="rig" v-text="msg.customer || '--'"></div>
        </div>
        <div>
            <div class="lef">客户行业</div>
            <div class="rig" v-text="msg.industry || '--'"></div>
        </div>
        <div>
            <div class="lef">企业类型</div>
            <div class="rig" v-text="msg.type || '--'"></div>
        </div>
        <div>
            <div class="lef">需求部门</div>
            <div class="rig" v-text="msg.department || '--'"></div>
        </div>
    </div>
    <Toast ref="Toast"/>
  </div>
</template>

<script>
export default {
  name: 'demandInfo',
  data () {
    return {
      que: {},
      msg: {}
    }
  },
  methods: {
    guanzhu (num) {
      if (num === 0) {
        let obj = {
          puser: this.msg.user
        }
        this.api.MyCollect(obj, (res) => {
          if (res.status === 201) {
            this.msg.is_collect = 1
            this.msg.collect_id = res.data.collect_id
          } else {
            alert(res.status)
          }
        }, (err) => {
          this.errMotl(err)
        })
      } else if (num === 1) {
        this.api.delMyCollect(this.msg.collect_id, (res) => {
          if (res.status === 204) {
            this.msg.is_collect = 0
          } else {
            alert(res.status)
          }
        }, (err) => {
          this.errMotl(err)
        })
      }
    },
    pathCard (item) {
      this.$router.push({name: 'cardInfo', query: {user_id: this.msg.user}})
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
  mounted () {
    document.title = '需求详情'
    this.que = this.$route.query
    this.api.getDemand(this.que.id, (res) => {
      this.msg = res.data
    }, (err) => {
      this.errMotl(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demandInfo{
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: auto;
    top:0;
    left:0;
    background:#f9f9f9;
}
.title{
    padding:.75rem .75rem 0 .75rem;
    background:#fff;
}
.userImg{
    width:2.5rem;
    height:2.5rem;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    float: left;
}
.userImg>img{
    width:2.5rem;
    align-self: center;
}
.userInfo{
    text-align: left;
    height:2.5rem;
    padding-left:.4rem;
    display: flex;
    position: relative;
}
.userName{
    align-self: center;
}
.name{
    font-size: .7rem;
    color:#101010;
}
.nickName{
    font-size: .6rem;
    color:#888;
}
.userBtn{
    width:3rem;
    height:1.25rem;
    border-radius: .75rem;
    font-size: .6rem;
    line-height: 1.25rem;
    text-align: center;
    position: absolute;
    right:0rem;
    top:.625rem;
}
.gz{
    background: rgba(255, 152, 0, 0.1);
    color:rgba(255, 152, 0, 1);
}
.ygz{
    background: #f1f1f1;
    color:#888;
}
.userInner{
    font-size: .7rem;
    color:#101010;
    text-align:left;
    margin-top:.4rem;
    line-height: 1rem;
}
.titUserFoot{
    padding:.9rem 0;
    font-size: .6rem;
    text-align: left;
    vertical-align: text-top;
    line-height: .6rem;
    border-top: 1px solid rgba(240, 239, 245, 1);
    margin-top:.4rem;
}
.titUserFoot>.yan>img{
    width:.6rem;
    height:.6rem;
    vertical-align: top;
}
.titUserFoot>.time>img{
    width:.7rem;
    height:.7rem;
    vertical-align: top;
}
.titUserFoot>.time>div{
    line-height: .7rem
}
.titUserFoot>div{
    display: inline-block;
    margin-right:.4rem;
}
.titUserFoot>div>div{
    display: inline-block;
}
.nickInfo{
    margin-top:.5rem;
    background:#fff;
    font-size: .7rem;
    padding:.25rem .75rem;
    line-height: 1.2rem;
}
.nickInfo>div>.lef{
    float: left;
    text-align: left;
}
.nickInfo>div>.rig{
    text-align: right;
    color:rgba(255, 152, 0, 1);
}
.footRig{
    float: right;
    font-size: .7rem;
}
.fR2{
    color:rgba(255, 152, 0, 1);
    margin-left:.2rem;
}
</style>
