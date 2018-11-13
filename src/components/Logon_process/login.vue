<template>
  <div class="login">
    <Toast ref="Toast"/>
    <div class="titleImg">
        <img src="@/assets/logo.png" alt="">
    </div>
    <div class="inpList">
        <input type="number" placeholder="请输入手机号" v-model="phone" @blur="zhengze">
        <div class="asc pohone_ts" :class="ph_ts?'hei1':''">请输入正确手机号</div>
        <div class="inpListInp3Box">
            <input type="number" maxlength="6" v-model="hehe" placeholder="请输入短信验证码">
            <button v-if="yzBtn" @click="getyzm" v-text="btnText">获取验证码</button>
            <button v-else disabled v-text="btnText">获取验证码</button>
        </div>
        <div class="asc yzm_ts" :class="yzm_yz?'hei1':''">验证码错误</div>
    </div>
    <div class="Go_register">
        <img @click="loginBtn" src="@/assets/log_btn.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      phone: 18210245752,
      ph_ts: false,
      yzm_yz: false,
      yzBtn: true,
      btnText: '获取验证码',
      yzm: null,
      hehe: null
    }
  },
  methods: {
    getyzm: function () {
      let _this = this
      let obj = {
        mobile: _this.phone
      }
      _this.$axios.post('/api/verify_code/', obj).then(function (res) {
        _this.yzBtn = false
        let s = 60
        _this.btnText = '正在发送'
        let index = setInterval(function () {
          if (s === 0) {
            _this.btnText = '获取验证码'
            clearInterval(index)
            return
          }
          _this.btnText = s + 's'
          s--
        }, 1000)
        _this.yzm = res.data.code
      }, function (err) {
        console.log(err)
      })
    },
    zhengze: function () {
      let _this = this
      if (!(/^1(3|4|5|7|8)\d{9}$/.test(_this.phone))) {
        _this.ph_ts = true
      } else {
        _this.ph_ts = false
      }
    },
    loginBtn: function () {
      let _this = this
      if (_this.yzm === null) {
        return
      }
      console.log(_this.yzm)
      console.log(_this.hehe)
      if (_this.yzm + '' === _this.hehe) {
        _this.$router.push('/NoMember')
      } else {
        _this.yzm_yz = false
        setTimeout(() => {
          _this.yzm_yz = true
        }, 1000)
      }
    }
  },
  mounted () {
    document.title = '登录'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.inpList{
    margin-top:1.24rem;
}
.inpList>input,.inpListInp3Box>input{
    /* margin-bottom:1rem; */
    width: 84%;
    height: 2.25rem;
    font-size: .7rem;
    box-shadow: 0rem 0rem .5rem .05rem rgba(170,17,170,.1);
    border-radius: .25rem;
    border:0;
    text-indent: 1rem;
}
.inpListInp3Box{
    width: 84%;
    display: inline-block;
    position: relative;
}
.inpListInp3Box>input{
    width:100%;
}
.inpListInp3Box>button{
    width: 4.5rem;
    height:2.25rem;
    font-size: .7rem;
    position: absolute;
    right:0;
    top:0;
    background: rgba(0,0,0,0);
    border:0;
    color:#FF9800;
}
.inpListInp3Box>button::after{
    border:0;
}
.Go_register{
    width:100%;
}
.Go_register>img{
    width:3rem;
    height:3rem;
    margin-top:5.1rem;
}
.asc{
    color:red;
    font-size: .7rem;
    padding-left:2.4rem;
    text-align: left;
    margin-bottom:1rem;
    transition: .2s ease;
    height:0rem;
    overflow: hidden;
}
.hei1{
    height:1rem;
}
</style>
