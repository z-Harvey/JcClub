<template>
  <div class="home_content" v-if="show">
    <div class="srceach">
        <div class="inpBox">
            <img src="@/assets/srceach.png" alt="">
            <input type="text" name="" id="" placeholder="输入会员名称进行搜索">
        </div>
        <button class="srceBtn">搜索</button>
    </div>
    <div class="sort">
        <div>
            <span>客户关系/线索</span>
            <img v-if="true" src="@/assets/bot1.png" alt="">
            <img v-else src="@/assets/bot2.png" alt="">
        </div>
        <div>
            <span>默认排序</span>
            <img v-if="true" class="pai" src="@/assets/pai1.png" alt="">
            <img v-else class="pai" src="@/assets/pai2.png" alt="">
        </div>
    </div>
    <div style="height:5.25rem;"></div>
    <div class="content">
        <div class="contImg" @click="path">
            <img src="@/assets/touxiang.jpg" alt="">
        </div>
        <div class="cardInfo" @click="path">
            <p class="name">韩鹏翔</p>
            <p class="comName">CEO/北京聚牛天下网络科技有限公司</p>
            <div class="tagBox">
                <div>IT互联网</div>
                <div>IT互联网</div>
                <div>IT互联网</div>
            </div>
            <div class="regular"><span>对接部门</span> 此处显示部门名称、此处显示部门名称、此处显示部门名称</div>
        </div>
        <div class="footer">
            <div class="fooLeft">
                <img src="@/assets/membershipApp_shu.png" alt="">
                <span>北京酷牛仔俱乐部</span>
            </div>
            <div class="fooRight">
                <button class="guanzhu" v-if="true">关注Ta</button>
                <button class="yiguanzhu" v-else>已关注</button>
            </div>
        </div>
    </div>
    <div style="height:3rem;"></div>
  </div>
</template>

<script>
export default {
  name: 'home_content',
  data () {
    return {
    }
  },
  methods: {
    path: function () {
      console.log(1)
      this.$router.push('/cardInfo')
    }
  },
  mounted () {
    document.title = '酷牛仔'
  },
  props: ['show']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home_content{
    position: fixed;
    top:0rem;
    left:0rem;
    width:100%;
    height:100%;
    background: #f9f9f9;
    overflow: auto;
}
.srceach{
    width:100%;
    height:2rem;
    background: #fff;
    padding-top:.25rem;
    position: fixed;
    top:0rem;
    left:0rem;
    z-index: 9;
}
.inpBox{
    width:74%;
    height:1.75rem;
    background:#f1f1f1;
    border-radius: .25rem;
    margin-left:.8rem;
    display: flex;
    float: left;
}
.inpBox>img{
    width:.8rem;
    height:.8rem;
    float: left;
    margin:0 0 0 .35rem;
    align-self: center;
}
.inpBox>input{
    width:85%;
    height:1.5rem;
    align-self: center;
    margin-left:.5rem;
    border:0;
    background: rgba(0,0,0,0);
    line-height: 1.5rem;
    font-size: .7rem;
}
.srceBtn{
    width:2.75rem;
    height:1.75rem;
    float: right;
    margin-right:.75rem;
    border-radius: .15rem;
    background:rgba(255, 152, 0, 1);
    color:#fff;
    border:0;
    font-size: .7rem;
}
.srceBtn::after{
    border:0;
}
.sort{
    position: fixed;
    top:2rem;
    left:0;
    display: flex;
    justify-content:space-around;
    height:2.75rem;
    width:100%;
    font-size: .6rem;
    color:#101010;
    background: #fff;
    border-bottom: 1px solid #f7f7f7;
}
.sort>div{
    height:2.75rem;
    line-height: 2.75rem;
}
.sort>div>img{
    width:.65rem;
    height:.65rem;
}
.sort>div>.pai{
    width:.75rem;
    height:.75rem;
    vertical-align: text-top;
}

.content{
    width:calc(92% - 1rem);
    margin:0 auto;
    padding:.75rem .5rem .5rem .5rem;
    border-radius: .25rem;
    text-align: left;
    background: #fff;
    margin-bottom: .5rem;
}
.contImg{
    width:2.5rem;
    height:2.5rem;
    border-radius:50%;
    overflow: hidden;
    display: flex;
    float: left;
}
.contImg>img{
    width:2.5rem;
    align-self: center;
}
.cardInfo{
    padding-left:.65rem;
    width:75%;
    display: inline-block;
}
.name{
    font-size: .7rem;
    color:#101010;
    line-height: .7rem;
}
.comName{
    font-size: .6rem;
    color:#888;
    line-height: .6rem;
    margin:.2rem 0;
}
.tagBox{
    margin-bottom: .5rem;
}
.tagBox>div{
    padding: .1rem .4rem;
    background: #ececec;
    color:#888;
    font-size: .5rem;
    display: inline-block;
}
.regular{
    font-size: .7rem;
    line-height: 1rem;
    margin-bottom:.5rem;
}
.regular>span{
    font-weight: 600;
    color:#101010;
}
.footer{
    height:1.5rem;
    padding:.5rem;
    font-size: .6rem;
    vertical-align: top;
    border-top: 1px solid #f7f7f7
}
.fooLeft{
    float: left;
    line-height: 1.5rem;
}
.fooLeft>img{
    width:.6rem;
    height:.6rem;
}
.fooRight{
    float: right;
}
.fooRight>button{
    width:4rem;
    height: 1.5rem;
    border-radius:.75rem;
    font-size: .6rem
}
.fooRight>button::after{
    border:0;
}
.fooRight>.guanzhu{
    background: rgba(255, 152, 0, 0.1);
    color:rgba(255, 152, 0, 1);
    border:0;
}
.fooRight>.yiguanzhu{
    background: rgba(241, 241, 241, 1);
    color:#888;
    border:0;
}
</style>
