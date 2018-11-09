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
    <div class="meContent" v-if="Success_or_failure">
        <div class="mCtit">
            <p>成功通过审核！欢迎加入酷牛仔~</p>
            <p>您的酷牛仔编号为：</p>
            <p>KAA001</p>
        </div>
        <input class="inviCode" type="text" placeholder="给自己取一个酷酷的江湖称号吧~">
    </div>
    <div class="meContent" v-else>
        <div class="mCtit">
            <p class="no_con">很遗憾，您未能通过审核~</p>
            <span class="no_content">原因：此处显示未通过原因此处显示未通过原因此处显示未通过原因此处显示未通过原因此处显示未通过原因此处显示未通过原因此处显示未通过原因</span>
        </div>
    </div>
    <p class="Rules" v-if="Success_or_failure">俱乐部准则</p>
    <div class="flxBtn" v-if="Success_or_failure">
        <button class="sqBtn" @click="sqBtn">申请</button>
    </div>
    <div class="flxBtn" v-else>
        <button class="sqBtn" @click="sqBtn">重新申请</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoMember',
  data () {
    return {
      Success_or_failure: true
    }
  },
  methods: {
    sqBtn: function () {
    //   wx.chooseImage({
    //     count: 1, // 默认9
    //     sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    //     sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    //     success: function (res) {
    //       console.log(res)
    //       var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
    //       console.log(localIds)
    //     }
    //   });
    //   return;
      console.log('开始 入会申请')
    //   this.$router.push('membershipApp')
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
.mCtit{
    margin:0 .75rem;
    font-size: .7rem;
}
.mCtit>p{
    font-size: .7rem;
    line-height: 1.15rem;
}
.inviCode{
    width: 92%;
    border:0;
    border-bottom: 2px solid rgba(255, 152, 0, 1);
    height:1.5rem;
    text-align: center;
    margin-top:.75rem;
}
.flxBtn{
    height:2.25rem;
    width:100%;
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
    color:#fff;
    margin: 0 auto;
    margin-top:.25rem;
}
.sqBtn::after{
    border:0;
}
.Rules{
    font-size: .7rem;
    width:92%;
    text-align: left;
    margin:.75rem auto;
}
.no_con{
    margin-bottom: .5rem;
    color:#101010;
}
.no_content{
    font-size: .7rem;
    line-height: 1rem;
    color:#888;
}
</style>
