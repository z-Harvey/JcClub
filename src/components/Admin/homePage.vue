<template>
  <div class="homePage">
      <div class="forBox" @click="path">
          <div class="cont1">
              <img src="@/assets/membershipApp_shu.png" alt="">
              <span>北京酷牛仔俱乐部</span>
              <div>
                  <img src="@/assets/more.png" alt="">
                  <div class="moltTag">
                      <div>编辑</div>
                      <div>删除</div>
                  </div>
              </div>
          </div>
          <div class="pad cont2">北京第一家俱乐部</div>
          <div class="pad cont3">@袁邦阳 于yyyy/mm/dd 创建</div>
          <div class="pad cont4">
              <img src="@/assets/location1.png" alt="">
              <span>北京</span>
          </div>
          <div class="pad cont5">
              <img src="@/assets/friend(3).png" alt="">
              <span>北京</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'homePage',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    path: function () {
      this.$router.push('/MemberList')
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homePage{
    position: fixed;
    width:100%;
    height:100%;
    top:0;
    left:0;
    background: #f9f9f9;
}
.forBox{
    padding:.75rem .5rem;
    width:calc(92% - 1rem);
    background: #fff;
    margin:.5rem auto 0;
    border-radius: .25rem;
    text-align: left;
}
.cont1{
    font-size: .8rem;
}
.cont1>img{
    width:.8rem;
    height:.8rem;
    vertical-align: text-top;
}
.cont1>div{
    float: right;
    position: relative;
}
.moltTag{
    position: absolute;
    width:2.9rem;
    right:0;
    text-align: center;
    font-size: .8rem;
    line-height: 1.5rem;
    border-radius: .15rem;
    border:1px solid #f1f1f1;
    color:#101010;
}
.moltTag>div:hover{
    background:#ccc;
}
.cont1>div>img{
    width:.8rem;
    height:.8rem;
    transform: rotate(90deg);
}
.pad{
    padding-left:1rem;
}
.cont2{
    font-size: .7rem;
    color:#888;
    margin:.4rem 0 2.5rem;
}
.cont3{
    color:#2c2c2c;
    font-size: .6rem;
}
.cont4{
    color:#2c2c2c;
    font-size: .6rem;
    margin:.2rem 0;
}
.cont5{
    color:#2c2c2c;
    font-size: .6rem;
}
.cont4>img{
    width:.6rem;
    height:.6rem;
    vertical-align: text-top;
}
.cont5>img{
    vertical-align: text-top;
    width:.6rem;
    height:.6rem;
}
</style>
