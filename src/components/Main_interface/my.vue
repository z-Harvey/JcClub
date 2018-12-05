<template>
    <div class="my" v-if="show">
    <div class="myBody">
        <div class="titleImg">
        <div class="titBox">
            <img :src="msg.avatarurl" alt="">
        </div>
        <p v-text="msg.nickname">李晓沫</p>
        <p class="hehe" v-text="msg.club_name||'- -'">XXXXXXX俱乐部</p>
        <p class="hehe" v-text="'ID:' + msg.club_num||0">ID</p>
    </div>
    <div class="codeMy">
        <div>
            <div @click="path(5)" v-text="'@' + msg.inviter||'- -'">袁邦阳</div>
            <div>我的邀请者</div>
        </div>
        <div @click="path(1)">
            <div v-text="msg.fans_count||0">99</div>
            <div>粉丝</div>
        </div>
        <div @click="path(0)">
            <div v-text="msg.collect_count||0">99</div>
            <div>关注</div>
        </div>
    </div>
    <div class="btnList">
        <div class="listLi" @click="path(6)">
            <div class="listLiLeft"><img src="@/assets/my_Customer.png" alt=""><span>我的客户</span></div>
            <div class="listLiRight"><span v-text="msg.mark_count">1</span><img src="@/assets/right.png" alt=""></div>
        </div>
        <div class="listLi" @click="path(7)">
            <div class="listLiLeft"><img src="@/assets/creative.png" alt=""><span>我的商机</span></div>
            <div class="listLiRight"><span v-text="msg.business_count">1</span><img src="@/assets/right.png" alt=""></div>
        </div>
        <div class="listLi" @click="path(8)">
            <div class="listLiLeft"><img src="@/assets/my_demand.png" alt=""><span>我的需求</span></div>
            <div class="listLiRight"><span v-text="msg.demand_count">1</span><img src="@/assets/right.png" alt=""></div>
        </div>
        <div class="listLi" @click="path(2)">
            <div class="listLiLeft"><img src="@/assets/choiceness.png" alt=""><span>我的牛钻</span></div>
            <div class="listLiRight"><span v-text="msg.niuz">400颗</span><img src="@/assets/right.png" alt=""></div>
        </div>
        <div class="listLi" @click="path(3)">
            <div class="listLiLeft"><img src="@/assets/profile.png" alt=""><span>我的名片</span></div>
            <div class="listLiRight"><span></span><img src="@/assets/right.png" alt=""></div>
        </div>
        <div class="listLi" @click="path(4)">
            <div class="listLiLeft"><img src="@/assets/group.png" alt=""><span>我邀请的会员</span></div>
            <div class="listLiRight"><span v-text="msg.invited_count + '/10'"></span><img src="@/assets/right.png" alt=""></div>
        </div>
    </div>
    </div>
    <div style="height:6.5rem;"></div>
    <div class="adminBtn" style="display:none;">
        <span>管理中心</span>
        <img src="@/assets/right1.png" alt="">
    </div>
    <Toast ref="Toast"/>
  </div>
</template>

<script>
export default {
  name: 'my',
  data () {
    return {
      msg: {
        avatarurl: '',
        club_name: '',
        club_num: '',
        collect_count: '',
        fans_count: '',
        id: '',
        invited_count: '',
        nickname: '',
        niuz: ''
      }
    }
  },
  methods: {
    path: function (num) {
      let _this = this
      switch (num) {
        case 0:
          _this.$router.push({ path: '/HisFollow', query: {source: 'my'} })
          break
        case 1:
          _this.$router.push({ path: '/HisFans', query: {source: 'my'} })
          break
        case 2:
          _this.$router.push({
            path: '/myNiuzuan',
            query: {
              niuz: _this.msg.niuz
            }
          })
          break
        case 3:
          _this.$router.push({
            path: '/cardInfo',
            query: {
              source: 'my',
              user_id: _this.Global.userInfo.myId
            }
          })
          break
        case 4:
          _this.$router.push({ path: '/myInvitation' })
          break
        case 5:
          _this.$router.push({
            path: '/cardInfo',
            query: {
              user_id: _this.msg.inviter_id
            }
          })
          break
        case 6:
          _this.$router.push('/myCustomer')
          break
        case 7:
          _this.$router.push({
            path: '/cardInfo',
            query: {
              source: 'my',
              user_id: _this.Global.userInfo.myId,
              typ: 1
            }
          })
          break
        case 8:
          _this.$router.push({
            path: '/cardInfo',
            query: {
              source: 'my',
              user_id: _this.Global.userInfo.myId,
              typ: 2
            }
          })
          break
      }
    },
    init: function () {
      let _this = this
      _this.api.getMine(function (res) {
        _this.msg = res.data
      }, function (err) {
        _this.errMotl(err)
      })
    },
    errMotl (errData) {
      let errStr = ''
      let tit = this.Global.HTTPStatusCode[errData.status]
      for (let i in errData.data) {
        errStr += i +' : '
        errStr += errData.data[i]
      }
      let obj = {
        Title: tit,
        Content: errStr||'无错误内容提示',
        type: 1,
        btn: 0
      }
      this.$refs.Toast.on_display(obj)
    }
  },
  mounted () {
    document.title = '我'
  },
  props: ['show']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my{
    position: fixed;
    width: 100%;
    height:calc(100% - 2.25rem);
    background: rgba(249, 249, 249, 1);
    overflow: auto;
    display: flex;
    flex-direction: column;
    overflow: auto;
}
.myBody{
    flex: 1;
}
.adminBtn{
    width: 100%;
    height:1rem;
    text-align: center;
    font-size: .7rem;
    padding:.5rem 0 3rem 0;
    color:rgba(255, 152, 0, 1);
    position:relative;
    bottom: 0;
}
.adminBtn>img{
    width:.7rem;
    height:.7rem;
    vertical-align: text-top;
}
.titleImg{
    height:7.6rem;
    width:100%;
    background: #fff;
    background-image: url(../../assets/login_bg.png);
    background-size: 100% 100%;
    padding-top:.75rem;
}
.meContent{
    width:92%;
    line-height: 1rem;
    min-height:5rem;
    border-radius: .25rem;
    margin:0 auto;
    box-shadow: 0 0 .5rem 0 rgba(170,170,170,.2);
    margin-top:.95rem;
    padding:.75rem 0;
}
.titBox{
    width:2.5rem;
    height:2.5rem;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    margin:.75rem auto .4rem;
}
.titBox>img{
    align-self: center;
    width:2.5rem;
}
.titleImg>p{
    font-size: .7rem;
    color:#fff;
    line-height: .7rem;
}
.titleImg>.hehe{
    margin:.4rem auto;
}
.codeMy{
    padding:0 .75rem;
    background: #fff;
    height:2.5rem;
}
.codeMy>div{
    display: inline-block;
    font-size: .7rem;
}
.codeMy>div{
    float: right;
}
.codeMy>div:first-child{
    float: left;
}
.codeMy>div:last-child{
    margin-right:1.25rem;
}
.codeMy>div>div:first-child{
    color:rgba(255, 152, 0, 1);
}
.btnList{
    margin-top:.5rem;
}
.listLi{
    font-size: .7rem;
    height:2.25rem;
    line-height: 2.25rem;
    padding:0 .75rem;
    background: #fff;
}
.listLiLeft{
    float: left;
    color:#101010;
    display: flex;
}
.listLiLeft>img{
    width:1.2rem;
    height:1.2rem;
    align-self: center;
    margin-right:.2rem;
}
.listLiRight{
    float: right;
    color:#888;
}
.listLiRight>img{
    vertical-align: text-top;
    width:.7rem;
    height:.7rem;
}
</style>
