<template>
    <div class="myNiuzuan">
        <div class="title">
            <img src="@/assets/choiceness2.png" alt="">
            <div class="titText">
                <div class="titText1">当前牛钻</div>
                <div class="titText2" v-text="que.niuz">400</div>
            </div>
            <div class="titRight" @click="path(0)">
                牛钻记录
                <img src="@/assets/right1.png" alt="">
            </div>
        </div>
        <div class="titag">
            获取方式
        </div>
        <div class="content" v-for="(item, index) in dataList" :key="index">
            <div>
                <div class="contTitle" v-text="item.task_msg">每日签到</div>
                <div class="conttt conttiaojian" v-text="'条件：'+item.task_detail">每日登录酷牛仔</div>
                <div class="conttt contjiangli">
                    奖励：牛钻
                    <img src="@/assets/choiceness2.png" alt="">
                    <span v-text="'+' + item.task_niuz"></span>
                </div>
            </div>
            <button class="conBtn conBtns" @click="path(1)">新增客户</button>
        </div>
        <Toast ref="Toast"/>
    </div>
</template>

<script>
export default {
  name: 'myNiuzuan',
  data () {
    return {
      tapBur: true,
      dataList: [],
      que: {}
    }
  },
  methods: {
    path: function (num) {
      let _this = this
      switch (num) {
        case 0:
          _this.$router.push('/NiuzuanRecord')
          break
        case 1:
          _this.$router.push('/MarkupCu')
      }
    },
    errMotl (errData) {
      let errStr = ''
      let tit = this.Global.HTTPStatusCode[errData.status]
      for (let i in errData.data) {
        errStr += i +' : '
        errStr += errData.data[i]
      }
      let obj = {
        Title: tit,
        Content: errStr||'无错误内容提示',
        type: 1,
        btn: 0
      }
      this.$refs.Toast.on_display(obj)
    }
  },
  mounted () {
    document.title = '我的牛钻'
    let _this = this
    this.que = this.$route.query
    _this.api.getNiuzTask(function (res) {
      _this.dataList = res.data.task_detail
    }, function (err) {
      this.errMotl(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myNiuzuan{
    position: fixed;
    background: #f9f9f9;
    width:100%;
    height:100%;
    top: 0;
    left: 0;
}
.title{
    height:2.25rem;
    padding:.9rem .75rem .85rem;
    background:#fff;
    text-align: left;
}
.title>img{
    width:2.5rem;
    height:2.25rem;
}
.titText{
    display: inline-block;
    vertical-align: top;
}
.titText1{
    font-size: .7rem;
    line-height: 1.15rem;
}
.titText2{
    font-size: 1rem;
    line-height: 1.45rem;
    color:rgba(255, 152, 0, 1);
}
.titRight{
    font-size: .7rem;
    float: right;
    line-height: 2.25rem;
    color:rgba(255, 152, 0, 1);
}
.titRight>img{
    width:.7rem;
    height:.7rem;
    vertical-align: text-top;
}
.titag{
    padding:.3rem 0 0 .75rem;
    color: #101010;
    font-size: .7rem;
    line-height: 1.8rem;
    text-align: left;
    font-weight: 600;
}
.content{
    width:calc(92% - 1rem);
    padding:.75rem .5rem;
    border-radius: .25rem;
    background:#fff;
    text-align: left;
    margin: 0 auto;
    display: flex;
    position: relative;
    margin-bottom: .5rem;
}
.content>div{
    display: inline-block;
}
.conttt{
    font-size: .6rem;
    color:#919191;
    line-height: .85rem;
}
.contTitle{
    font-size: .7rem;
    line-height: 1.15rem;
    margin-bottom: .3rem;
}
.contjiangli>img{
    width:1.1rem;
    height:1rem;
    vertical-align: text-bottom;
    margin-top:.1rem;
}
.contjiangli>span{
    color:rgba(255, 152, 0, 1);
}
.conBtn{
    width:4rem;
    height:1.5rem;
    border-radius: .75rem;
    background:#f1f1f1;
    color:#888;
    border:0;
    line-height: 1.5rem;
    float: right;
    align-self: center;position: absolute;
    right: .5rem;
    font-size: .7rem;
}
.conBtns{
    background:rgba(255, 152, 0, 0.1);
    color:rgba(255, 152, 0, 1);
}
</style>
