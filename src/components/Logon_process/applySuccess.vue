<template>
  <div class="NoMember">
    <div class="titleImg">
        <div class="titBox">
            <img src="@/assets/touxiang.jpg" alt="">
        </div>
        <p>李晓沫</p>
        <p class="hehe">于 yyyy/mm/dd hh:mm 申请加入</p>
        <p>北京酷牛仔俱乐部</p>
    </div>
    <div class="meContent">
        <p>您已成功申请加入北京酷牛仔俱乐部</p>
        <p>请联系您的<span class="font-col">邀请者</span></p>
        <p>在“我-我邀请的会员”对您的邀请进行确认</p>
    </div>
    <div class="meContent">
        <p>您已成功申请加入北京酷牛仔俱乐部</p>
        <p>我们将在48小时内给您反馈</p>
        <p>请您留意<span class="font-sty">微信服务号</span>或<span class="font-sty">短信</span>的通知</p>
        <p>如有任何疑问您可以</p>
        <p>加客服微信：<span class="font-col">niumoumou</span></p>
        <p>拨打我们的电话：<span class="font-col">18888888888</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoMember',
  data () {
    return { }
  },
  methods: {
    sqBtn: function () {
      console.log('开始 入会申请')
      this.$router.push('membershipApp')
    }
  },
  mounted () {
    document.title = '酷牛仔'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titleImg{
    height:7.6rem;
    width:100%;
    background-image:url(../../assets/login_bg.png);
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
.titleImg>p:last-child{
    text-decoration:underline ;
}
.titleImg>.hehe{
    margin:.4rem auto;
}
.meContent>p{
    font-size: .7rem;
    line-height: 1.2rem
}
.meContent>p>.font-sty{
    text-decoration: underline;
    font-style:italic;
}
.meContent>p>.font-col{
    color:rgba(255, 152, 0, 1);
}
</style>
