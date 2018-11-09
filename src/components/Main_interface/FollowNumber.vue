<template>
    <div class="FollowNumber">
        <nav>
            <div>
                <span>客户关系</span>
                <img src="@/assets/bot2.png" alt="">
            </div>
            <div>
                <span>线索</span>
                <img src="@/assets/bot2.png" alt="">
            </div>
            <div>
                <span>默认排序</span>
                <img src="@/assets/pai2.png" alt="">
            </div>
        </nav>
        <div class="card">
            <div class="cardImg" @click="path(0)">
                <img src="@/assets/touxiang.jpg" alt="">
            </div>
            <div class="cardNameBtn" @click="path(0)">
                <div class="name">云端飞扬</div>
                <div class="nameNumber">
                    <span>999 跟进客户</span>
                    <span>999 关注</span>
                </div>
            </div>
            <button class="cardBtn">关注</button>
            <div class="cellInfo">
                <div class="yesNo">
                    <span>#有决策链线索#</span>
                    <span>#正在合作#</span>
                </div>
                <div class="department"><span>线索部门</span> 此处显示部门名称、此处显示部门名称、此处显示部门名称</div>
                <span class="days">1天前标记</span>
            </div>
        </div>
        <div class="footer">
            <button @click="unlock">15牛钻解锁其他俱乐部会员标记的数据</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FollowNumber',
  data () {
    return {
      niubi: 20
    }
  },
  methods: {
    // 调用父级 模板 的 弹出层
    unlock: function () {
      let _this = this
      this.$emit('alert', _this.niubi)
    },
    path: function (num) {
      let _this = this
      switch (num) {
        case 0:
          _this.$router.push('/cardInfo')
          break
      }
    }
  },
  mounted () {
    // document.title = '酷牛仔'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
    display: flex;
    justify-content: space-around;
    height:2.25rem;
    background:#fff;
}
nav>div{
    width:33%;
    font-size: .6rem;
    height:2.25rem;
    line-height: 2.25rem;
}
nav>div>img{
    width:.6rem;
    height:.6rem;
    vertical-align: text-top;
}
nav>div:last-child>img{
    width:.75rem;
    height:.75rem;
}
.card{
    width:calc(92% - 1rem);
    padding:.75rem .5rem;
    border-radius: .25rem;
    background:#fff;
    margin:.5rem auto 0;
    text-align: left;
}
.cardImg{
    width:2rem;
    height:2rem;
    display: flex;
    border-radius:50%;
    overflow: hidden;
    vertical-align: top;
    display: inline-block;
}
.cardImg>img{
    width:2rem;
    align-self: center;
}
.cardNameBtn{
    display: inline-block;
}
.name{
    font-size: .7rem;
    line-height: 1rem;
}
.nameNumber{
    font-size: .6rem;
    color:#888;
}
.cardNameBtn{
    display: inline-block;
}
.cardBtn{
    float: right;
    background:rgba(255, 152, 0, 0.1);
    border:0;
    vertical-align: top;
    border-radius: .75rem;
    width:3rem;
    height:1.25rem;
    line-height: 1.25rem;
    color:rgba(255, 152, 0, 1);
    margin-top:.4rem;
}
.cardBtn::after{
    border:0;
}
.cellInfo{
    margin-top:.5rem;
    padding-left:2.4rem;
}
.yesNo{
    font-size: .7rem;
    color: rgba(255, 152, 0, 1);
}
.yesNo>span{
    margin-right: .4rem;
}
.department{
    font-size: .7rem;
    line-height: 1rem;
    margin-top:.4rem;
}
.department>span{
    font-weight: 600;
}
.days{
    font-size: .6rem;
    color:#888;
}
.footer{
    width:100%;
    height:2.25rem;
    position: fixed;
    bottom: 0rem;
    left: 0rem;
    background: #fff;
}
.footer>button{
    width:13.7rem;
    height:1.75rem;
    line-height: 1.75rem;
    font-size: .7rem;
    color:#fff;
    background: rgba(255, 152, 0, 1);
    border-radius: 1.5rem;
    border:0;
    margin-top:.25rem;
}
.footer>button::after{
    border:0;
}
</style>
