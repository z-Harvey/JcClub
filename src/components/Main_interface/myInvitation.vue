<template>
  <div class="myInvitation">
      <div class="content">
          <div class="yhimg">
              <img src="@/assets/touxiang.jpg" alt="">
          </div>
          <div class="contat">
              <div class="userName">韩鹏翔</div>
              <div class="cikeName">北京酷牛仔俱乐部</div>
              <div class="time">于yyyy/mm/dd hh:mm申请入会</div>
          </div>
          <div class="zhuangtai">
              <span class="z1">待审核</span>
              <span class="z1">待确认</span>
              <span class="z1">已通过</span>
              <span>未通过</span>
              <span>已退会</span>
          </div>
          <div class="btnList">
              <button class="b1">拒绝</button>
              <button class="b2">同意</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'myInvitation',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    document.title = '我邀请的会员'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myInvitation{
    position: fixed;
    width:100%;
    height:100%;
    background:#f9f9f9;
    overflow: auto;
}
.content{
    width:calc(92% - 1rem);
    padding:.75rem .5rem;
    margin:0 auto;
    border-radius: .25rem;
    background: #fff;
    text-align: left;
    position: relative;
}
.yhimg{
    width:2.5rem;
    height:2.5rem;
    border-radius:50%;
    overflow: hidden;
    display: inline-block;
}
.yhimg>img{
    width:2.5rem;
    align-self: center;
}
.contat{
    display: inline-block;
}
.userName{
    font-size: .7rem;
    color:#101010;
}
.cikeName{
    font-size: .7rem;
    color:#888;
}
.time{
    font-size: .6rem;
    color:#888;
}
.zhuangtai{
    font-size: .7rem;
    position: absolute;
    right:.75rem;
    top:.75rem;
}
.z1{
    color:rgba(255, 152, 0, 1);
}
.btnList{
    text-align: right;
    padding-top:.5rem;
    border:1px solid rgba(247, 247, 247, 1);
    margin-top:.5rem;
}
.btnList>button::after{
    border:0;
}
.btnList>button{
    width:4rem;
    height:1.5rem;
    border-radius: .75rem;
    border: 0;
    line-height: 1.5rem;
}
.b1{
    background: rgba(241, 241, 241, 1);
    color:#888;
}
.b2{
    background: rgba(255, 152, 0, 0.1);
    color:rgba(255, 152, 0, 1);
}
</style>
