<template>
  <div class="Member">
      <div class="fl2">
          <div class="srcInp">
            <div>
                <img src="@/assets/srceach_1.png" alt="">
                <input type="text" placeholder="输入会员名称进行搜索">
            </div>
            <button>搜索</button>
        </div>
      </div>
      <div class="fl3">
          <div>
              <span>全部行业</span>
              <img v-if="true" src="@/assets/bot2.png" alt="">
              <img v-else src="@/assets/bot1.png" alt="">
          </div>
          <div>
              <span>全部行业</span>
              <img v-if="true" src="@/assets/bot2.png" alt="">
              <img v-else src="@/assets/bot1.png" alt="">
          </div>
          <div>
              <span>全部行业</span>
              <img v-if="true" src="@/assets/pai2.png" alt="">
              <img v-else src="@/assets/pai1.png" alt="">
          </div>
      </div>
      <div class="fl4">
          <img src="@/assets/structure.png" alt="">
      </div>
      <div class="content">
           <div class="forCont" @click="path">
               <div class="imgBox">
                   <img src="@/assets/touxiang.jpg" alt="">
               </div>
               <div class="userInfo">
                   <div class="in1">
                       <span>韩鹏翔</span>
                       <span>待审核</span>
                   </div>
                   <div class="in2">
                       <span>CEO/北京聚牛天下网络科技有限公司</span>
                   </div>
                   <div class="in3">
                       <span>188 8888 8888</span>
                   </div>
                   <div class="in4">
                       <span>邀请者@XXX</span>
                       <div>
                           <img src="@/assets/more.png" alt="">
                       </div>
                   </div>
               </div>
           </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Member',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    path: function () {
      this.$router.push('/memberInfo')
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Member{
    position: fixed;
    width:100%;
    height:100%;
    background:rgba(249, 249, 249, 1);
    overflow: auto;
    top:0;
    left:0;
}
.fl1l2{
    font-size: .6rem
}
.fl1l2>img{
    width:.6rem;
    height:.6rem;
}
.fl2{
    position: fixed;
    width:100%;
    top:0rem;
    left:0;
}
.srcInp{
    background:#fff;
    height:2.25rem;
    padding:0rem .75rem;
    display: flex;
    justify-content: space-around;
}
.srcInp>div{
    width:13.95rem;
    height:1.75rem;
    background:rgba(241, 241, 241, 1);
    color:#888;
    border-radius: .25rem;
    text-align: left;
    display: flex;
    margin-top:.25rem;
}
.srcInp>div>img{
    align-self: center;
    width:1rem;
    height:1rem;
    margin:0 .5rem;
}
.srcInp>div>input{
    align-self: center;
    width:11.5rem;
    height:1.5rem;
    background:rgba(0,0,0,0);
    text-align: left;
    border:0;
}
.srcInp>button{
    width:2.75rem;
    height:1.75rem;
    border-radius: .15rem;
    color:#fff;
    background: rgba(255, 152, 0, 1);
    border:0;
    margin-top:.25rem;
}
.srcInp>button::after{
    border:0;
}
.fl3{
    width:calc(100% - 2.25rem);
    height:2.25rem;
    position: fixed;
    top:2.25rem;
    font-size: .6rem;
    display: flex;
    justify-content: space-around;
    background:#fff;
    line-height: 2.25rem;
    border-right: 2px solid rgba(247, 247, 247, 1);
}
.fl3>div>img{
    width:.6rem;
    height:.6rem;
}
.fl3>div:last-child>img{
    width:.75rem;
    height:.75rem;
    vertical-align: text-top;
}
.fl4{
    width:2.25rem;
    height:2.25rem;
    position: fixed;
    right:0rem;
    top:2.25rem;
    background:#fff;
    display: flex;
    border-left: 2px solid rgba(247, 247, 247, 1);
}
.fl4>img{
    width:.75rem;
    height:.75rem;
    align-self: center;
    margin:  0 auto;
}
.content{
    padding-top:5rem;
}
.forCont{
    padding:.75rem .5rem;
    width:calc(92% - 1rem);
    border-radius: .25rem;
    background:#fff;
    margin:0 auto .5rem;
}
.imgBox{
    width:2.5rem;
    height:2.5rem;
    display: flex;
    border-radius: 50%;
    overflow: hidden;
    float: left;
}
.imgBox>img{
    align-self: center;
    width:2.5rem;
}
.userInfo{
    text-align: left;
    font-size: .6rem;
    padding-left:3.15rem;
}
.in1{
    font-size: .7rem;
}
.in1>span:first-child{
    color:#101010;
    font-weight: 600;
}
.in1>span:last-child{
    color:rgba(255, 152, 0, 1);
    float: right;
}
.in2{
    margin:.2rem 0 ;
    color:#2c2c2c;
}
.in4{
    display: flex;
    position: relative;
}
.in4>div{
    position: absolute;
    right:0;
}
.in4>div>img{
    width:.9rem;
    height:.9rem;
    transform: rotate(90deg);
    align-self: center;
}
</style>
