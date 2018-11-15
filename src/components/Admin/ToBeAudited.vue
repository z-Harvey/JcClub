// 审核
<template>
  <div class="ToBeAudited">
      <div class="forBox">
          <div class="imgBox">
              <img src="@/assets/touxiang.jpg" alt="">
          </div>
          <div class="userInfo">
              <div>
                  <span>韩鹏翔</span>
                  <span>待审核</span>
              </div>
              <div class="userInfonth2">
                  <span>北京酷牛仔俱乐部</span>
              </div>
              <div>
                  <span>邀请者<span>@XXX</span></span>
              </div>
          </div>
          <div class="time">
              <div class="timeleftBox">
                  <img src="@/assets/membershipApp_shu.png" alt="">
                  <span>入会审核</span>
              </div>
              <div class="times">yyyy/mm/dd hh:mm</div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'ToBeAudited',
  data () {
    return {
    }
  },
  methods: {

  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ToBeAudited{
    position: fixed;
    top:4.2rem;
    width:100%;
    height:calc(100% - 6.45rem);
    overflow: auto;
}
.forBox{
    padding:.75rem 0;
    width:calc(92%);
    background:#fff;
    margin:.5rem auto 0;
    border-radius: .25rem;
}
.imgBox{
    width:2.5rem;
    height:2.5rem;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    float: left;
    margin:.2rem .65rem 0 .75rem;
}
.imgBox>img{
    width: 2.5rem;
    align-self: center;
}
.userInfo{
    font-size: .6rem;
    text-align: left;
    padding-right:.75rem;
}
.userInfo>div:first-child{
    font-size: .7rem
}
.userInfo>div:first-child>span:first-child{
    color: #101010;
    font-weight: 600;
}
.userInfo>div:first-child>span:last-child{
    color:rgba(255, 152, 0, 1);
    float: right;
}
.userInfo>div>span>span{
    color:rgba(255, 152, 0, 1);
}
.userInfonth2{
    margin:.2rem 0;
}
.time{
    margin-top:.75rem;
    padding:.75rem .5rem 0;
    font-size: .6rem;
    text-align: left;
    border-top: 1px solid #f7f7f7
}
.timeleftBox{
    display: inline-block;
}
.timeleftBox>img{
    width:.6rem;
    height:.6rem;
}
.times{
    float: right;
}
</style>
