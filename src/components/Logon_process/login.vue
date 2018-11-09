<template>
  <div class="login">
    <div class="titleImg">
        <img src="@/assets/logo.png" alt="">
    </div>
    <div class="inpList">
        <input type="text" placeholder="请输入手机号">
        <div class="inpListInp3Box">
            <input type="text" placeholder="请输入短信验证码">
            <button>获取验证码</button>
        </div>
    </div>
    <div class="Go_register" @click="loginBtn">
        <img src="@/assets/log_btn.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return { }
  },
  methods: {
    loginBtn: function () {
      console.log('登录')
      this.$router.push('NoMember')
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
    margin-bottom:1rem;
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
</style>
