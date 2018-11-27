<template>
  <div class="NoMember">
    <div class="titleImg">
        <img src="@/assets/logo.png" alt="">
    </div>
    <div class="meContent">
        <div class="mCtit">感谢您的关注！</div>
        <div class="mCtit">您还未成为酷牛仔会员~</div>
        <div class="mCtit">请先进行入会申请</div>
        <input class="inviCode" type="number" v-model="phone" placeholder="请输入邀请者手机号" @blur="phonezz">
        <div class="res" :class="res?'reshei':''">手机号码错误</div>
    </div>
    <div class="nani">什么是酷牛仔？</div>
    <div class="wayCj"></div>
    <div class="sqBtnBox">
        <button v-if="btn" class="sqBtn" @click="sqBtn">申请</button>
        <button v-else class="sqBtns" disabled>申请</button>
    </div>
    <Toast ref="Toast"/>
  </div>
</template>

<script>
export default {
  name: 'NoMember',
  data () {
    return {
      phone: null,
      btn: false,
      res: true
    }
  },
  methods: {
    sqBtn: function () {
      let _this = this
      let obj = {
        mobile: _this.phone
      }
      _this.api.getApplyClub(obj, function (res) {
        _this.$router.push('/membershipApp')
      }, function (err) {
        if (err.data.mobile[0] === '邀请者未加入俱乐部') {
          let obj = {
            Title: '提示',
            Content: '邀请者未加入俱乐部',
            type: 1,
            btn: 0
          }
          _this.$refs.Toast.on_display(obj)
        } else if (err.data.mobile[0] === '邀请者手机号有误') {
          let obj = {
            Title: '提示',
            Content: '邀请者手机号有误',
            type: 1,
            btn: 0
          }
          _this.$refs.Toast.on_display(obj)
        } else if (err.data.mobile[0] === '邀请者邀请名额已达上限') {
          let obj = {
            Title: '提示',
            Content: '无法申请！邀请者邀请名额已达上限',
            type: 1,
            btn: 0
          }
          _this.$refs.Toast.on_display(obj)
        } else {
          alert(err.status)
        }
      })
    },
    phonezz: function () {
      this.btn = true
    }
  },
  mounted () {
    document.title = '酷牛仔'
    let _this = this
    console.log(_this.$route)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.NoMember{
    background: #F9F9F9 ;
    position: fixed;
    top:0;
    left:0;
    overflow: auto;
    width:100%;
    height:100%;
}
.res{
    color:red;
    font-size: .6rem;
    height:1rem;
    transition: .1s ease;
}
.reshei{
    height:0;
    overflow: hidden;
}
.titleImg{
    height:8.35rem;
    width:100%;
    background-image:url(../../assets/login_bg.png);
    background-size: 100% 100%;
}
.titleImg>img{
    width:7.35rem;
    height:7.35rem;
    margin-top: 0.75rem;
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
.mCtit{
    margin:0 .75rem;
    font-size: .7rem;
    color:#020202;
    line-height: 1.2rem;
}
.inviCode{
    width: 92%;
    border:0;
    border-bottom: 1px solid rgba(255, 152, 0, .5);
    height:1.5rem;
    text-align: center;
    margin-top:.75rem;
    font-size: .7rem;
    background:rgba(0,0,0,0);
}
.sqBtnBox{
    width:100%;
    height:2.25rem;
    background:#fff;
    position: fixed;
    bottom: 0rem;
    left:0rem;
}
.sqBtn{
    width:10rem;
    height:1.75rem;
    background: rgba(255, 152, 0, 1);
    border-radius: 1rem;
    font-size: .7rem;
    border:0;
    margin: .25rem auto;
    color:#fff;
}
.sqBtn::after{
    border:0;
}
.sqBtns{
    width:10rem;
    height:1.75rem;
    background: rgba(241, 241, 241, 1);
    border-radius: 1rem;
    font-size: .7rem;
    border:0;
    margin: .25rem auto;
    color:#888;
}
.sqBtns::after{
    border:0;
}
.wayCj{
    width:92%;
    background:#F2F2F3 100%;
    margin:2.4rem auto;
}
.nani{
    font-size: .7rem;
    color:#101010;
    width:92%;
    text-align: left;
    margin:.75rem auto;
}
</style>
