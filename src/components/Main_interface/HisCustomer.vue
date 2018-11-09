<template>
    <div class="HisCustomer">
        <div class="screen">
            <div>
                <div>客户关系/线索</div>
                <img src="@/assets/bot2.png" alt="">
            </div>
            <div>
                <div>默认排序</div>
                <img src="@/assets/pai2.png" alt="">
            </div>
        </div>
        <div class="contBox">
            <div class="contTitle">
                <div class="titImg">
                    <img src="@/assets/qi.png" alt="">
                </div>
                <div class="titName">北京聚牛天下网络科技有限公司</div>
                <div class="location">
                    <img src="@/assets/location.png" alt="">
                    <div>北京</div>
                </div>
            </div>
            <div class="contcont">
                <div class="cc1">
                    <span>#有决策链线索#</span>
                    <span>#有决策链线索#</span>
                </div>
                <div class="cc2">
                    <span>线索部门</span> 此处显示部门名称、此处显示部门名称、此处显示部门名称
                </div>
            </div>
            <div class="footer">
                <span>1天前标记</span>
                <button @click="path(0)">客户主页</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HisCustomer',
  data () {
    return {
      tapBur: true
    }
  },
  methods: {
    path: function (num) {
      let _this = this
      switch (num) {
        case 0:
          _this.$router.push('/CuHome')
      }
    }
  },
  mounted (options) {
    console.log(this.type)
    document.title = 'Ta的客户'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.HisCustomer{
    position: fixed;
    top:0rem;
    left: 0rem;
    width:100%;
    height:100%;
    overflow: auto;
    background: #fafafa;
}
.screen{
    font-size: .6rem;
    height:2.25rem;
    display: flex;
    justify-content: space-around;
    line-height: 2.25rem;
    border-bottom: 1px solid #f7f7f7;
}
.screen>div{
    width:50%;
}
.screen>div>div{
    display: inline-block;
}
.screen>div>img{
    display: inline-block
}
.screen>div:first-child>img{
    width:.6rem;
    height:.6rem;
    vertical-align: text-top;
}
.screen>div:last-child>img{
    width:.75rem;
    height:.75rem;
    vertical-align: text-top;
}
.contBox{
    width:92%;
    background: #fff;
    margin:.5rem auto 0;
}
.contTitle{
    height:2.3rem;
    display: flex;
    padding:0 .75rem;
    position: relative;
    border-bottom: 1px solid #f7f7f7;
}
.titImg{
    align-self: center;
    width:.8rem;
    height:.8rem;
    border-radius: .15rem;
    background:rgba(255, 152, 0, 1);
    display: flex;
    margin-right:.2rem;
}
.titImg>img{
    width:.6rem;
    height:.6rem;
    align-self: center;
    margin:0 auto;
}
.titName{
    font-size: .7rem;
    line-height: 2.3rem;
}
.location{
    line-height: 2.3rem;
    position: absolute;
    right:.75rem;
}
.location>div{
    display: inline-block;
    font-size: .7rem;
    vertical-align: top;
}
.location>img{
    display: inline-block;
    width:.7rem;
    height: .7rem;
}
.contcont{
    padding:.5rem 1.65rem .5rem 1.75rem;
    text-align: left;
    border-bottom: 1px solid #f7f7f7;
}
.cc1>span{
    color:rgba(255, 152, 0, 1);
    font-size: .7rem;
}
.cc2{
    font-size: .7rem;
    color:#101010;
    margin-top:.4rem;
}
.cc2>span{
    font-weight: 600;
    line-height: 1rem;
}
.footer{
    padding:.5rem 1.65rem .5rem 1.75rem;
    font-size: .6rem;
    color:#888;
    line-height: 1.5rem;
    text-align: left;
}
.footer>button{
    border:0;
}
.footer>button{
    width: 4rem;
    height:1.5rem;
    border-radius: .75rem;
    background: rgba(255, 152, 0, 0.1);
    color:rgba(255, 152, 0, 1);
    line-height: 1.5rem;
    border:0;
    float: right;
}
</style>
