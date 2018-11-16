<template>
  <div class="home_content" v-if="show">
    <div class="srceach">
        <div class="inpBox">
            <img src="@/assets/srceach.png" alt="">
            <input type="text" name="" id="" placeholder="输入客户名称关键字，例：聚牛天下">
        </div>
        <button class="srceBtn">搜索</button>
    </div>
    <div class="sort">
        <div>
            <span>客户关系/线索</span>
            <img v-if="false" src="@/assets/bot1.png" alt="">
            <img v-else src="@/assets/bot2.png" alt="">
        </div>
        <div>
            <span>默认排序</span>
            <img v-if="false" src="@/assets/bot1.png" alt="">
            <img v-else src="@/assets/bot2.png" alt="">
        </div>
        <div>
            <span>全部状态</span>
            <img v-if="false" src="@/assets/bot1.png" alt="">
            <img v-else src="@/assets/bot2.png" alt="">
        </div>
    </div>
    <div class="sotrp">
            <img v-if="true" class="pai" src="@/assets/pai1.png" alt="">
            <img v-else class="pai" src="@/assets/pai2.png" alt="">
        </div>
    <div class="content">
        <div class="contFor">
            <div class="tapBox">
                <img src="@/assets/qi.png" alt="">
            </div>
            <div class="forRight">
                <div class="riCikename">
                    <div class="cikeName">北京聚牛天下网络科技有限公司</div>
                    <div class="cikeposition">
                        <img src="@/assets/lock.png" alt="">
                    </div>
                </div>
                <div class="ricTag">
                    <div>#有钱任性#</div>
                    <div>#有钱任性#</div>
                </div>
                <div class="forFuterr">
                    <div>
                        <img src="@/assets/foter.png" alt="">
                        <span>足迹 999</span>
                    </div>
                    <button @click="path(0)">销售笔记</button>
                </div>
            </div>
        </div>
    </div>
    <div style="height:2.75rem;"></div>
  </div>
</template>

<script>
export default {
  name: 'home_content',
  data () {
    return { }
  },
  methods: {
    path: function (num) {
      let _this = this
      switch (num) {
        case 0:
          _this.$router.push('/SalesNotes')
          break
      }
    },
    init: function () {
      let _this = this
      let str = ''
      _this.api.getMyCustomer(str, function (res) {
        console.log(res)
      }, function (err) {
        console.log(err)
      })
    }
  },
  mounted () {
    document.title = '我的客户'
  },
  props: ['show']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home_content{
    position: fixed;
    width: 100%;
    height:100%;
    top:0;
    left:0;
    overflow: auto;
    background: #f9f9f9;
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
    width:88%;
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

.sotrp{
    width:12%;
    position: fixed;
    right:0;
    top:2rem;
    height:2.75rem;
    display: flex;
    border-bottom: 1px solid #f7f7f7;
    background: #fff;
}
.sotrp>img{
    align-self: center;
    width:.65rem;
    height:.65rem;
    margin:0 auto;
}

.content{
    margin-top:4.75rem;
    padding-top:.5rem;
    padding-bottom: .5rem;
}
.contTit{
    padding:0 .75rem;
    height:2.25rem;
    font-size: .8rem;
    display: flex;
    position: relative;
    border-bottom: 1px solid #f7f7f7
}
.contTit>span{
    float: left;
    line-height: 2.25rem;
    color:#101010;
}
.contTit>img{
    width:2.9rem;
    height:.7rem;
    align-self: center;
    float: right;
    position: absolute;
    right: .75rem;
}
.contFor{
    margin:0 .75rem;
    padding:.75rem .5rem;
    border-radius: .25rem;
    background: #fff;
    margin-bottom: .5rem;
}
.tapBox{
    width:.8rem;
    height:.8rem;
    border-radius:.15rem;
    background: rgba(255, 152, 0, 1);
    display: flex;
    float: left;
}
.tapBox>img{
    width:.7rem;
    height:.7rem;
    align-self: center;
    margin:0 auto;
}
.forRight{
    min-height: 1rem;
    text-align: left;
    padding-left:1rem;
}
.riCikename{
    font-size: .7rem;
    line-height: .8rem;
}
.riCikename>.cikeName{
    display: inline-block;
}
.riCikename>.cikeposition{
    float: right;
    display: flex;
    color: #888;
}
.cikeposition>img{
    width:.7rem;
    height:.7rem;
    align-self: center;
}
.ricTag{
    font-size: .7rem;
    color: rgba(255, 152, 0, 1);
    margin:.45rem 0 .5rem 0;
}
.ricTag>div{
    line-height: .7rem;
    display: inline-block;
    margin-right:.5rem;
}
.forFuterr{
    color:#888;
    font-size:.6rem;
}
.forFuterr> div{
    display: inline-block;
    line-height: 1.5rem;
    margin-right: .4rem;
}
.forFuterr> div>img{
    width: .6rem;
    height:.6rem;
    vertical-align: text-top;
}
.forFuterr>button{
    width:4rem;
    height:1.5rem;
    border-radius:.75rem;
    border:0;
    line-height: 1.5rem;
    font-size: .6rem;
    color:rgba(255, 152, 0, 1);
    background:rgba(255, 152, 0, 0.1);
    float: right;
}
.forFuterr>button::after{
    border:0;
}
</style>
