<template>
    <div class="srceach">
        <div class="srcInp">
            <div>
                <img src="@/assets/srceach_1.png" alt="">
                <input type="text" v-model="inpVal" @blur="blurs($event)" placeholder="输入客户名称关键字">
            </div>
            <button @click="srceach">搜索</button>
        </div>
        <div style="height:2.25rem;"></div>
        <div class="or" v-if="meiyou">查无此客户，请确认输入的名称是否正确</div>
        <div class="Result" v-for="(item, index) in dataList" :key="index" @click="path(item)">
            <div class="resImg">
                <img src="@/assets/icon.png" alt="">
            </div>
            <div class="nameBox">
                <div class="cikename" v-text="item.name">阿里巴巴（中国）网络技术有限公司</div>
            </div>
        </div>
        <Toast ref="Toast"/>
        <!-- <div class="or">没搜到？试试看输入更全的客户名称or<span>点此进行深度搜索</span></div> -->
    </div>
</template>

<script>
export default {
  name: 'srceach',
  data () {
    return {
      inpVal: null,
      dataList: [],
      meiyou: false
    }
  },
  methods: {
    blurs (e) {
      document.documentElement.scrollTop = document.documentElement.scrollTop
      document.body.scrollTop = document.body.scrollTop
    },
    srceach: function () {
      let _this = this
      let str = 'search=' + _this.inpVal
      _this.api.getSearchCompany(str, function (res) {
        _this.dataList = res.data.results
        if (res.data.count === 0) {
          _this.meiyou = true
        } else {
          _this.meiyou = false
        }
      }, function (err) {
        _this.errMotl(err)
      })
    },
    path: function (data) {
      let _this = this
      _this.$router.push({
        name: 'MarkupCu',
        query: data
      })
    },
    errMotl (errData) {
      let errStr = ''
      let tit = this.Global.HTTPStatusCode[errData.status]
      for (let i in errData.data) {
        errStr += i + ' : '
        errStr += errData.data[i]
      }
      let obj = {
        Title: tit,
        Content: errStr || '无错误内容提示',
        type: 1,
        btn: 0
      }
      this.$refs.Toast.on_display(obj)
    }
  },
  mounted (options) {
    document.title = '搜索客户'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.srceach{
    position: fixed;
    width:100%;
    height:100%;
    top:0;
    left:0;
    background:#f9f9f9;
    overflow: auto;
}
.srcInp{
    background:#fff;
    height:2.25rem;
    padding:0rem .75rem;
    width:calc(100% - 1.5rem);
    display: flex;
    justify-content: space-around;
    position: fixed;
    top:0;
    left:0;
}
.srcInp>div{
    width:12rem;
    height:1.75rem;
    background:rgba(241, 241, 241, 1);
    color:#888;
    border-radius: .25rem;
    text-align: left;
    display: flex;
    margin-top:.25rem;
    justify-content: space-around;
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
    font-size: .7rem;
    text-align: left;
    border:0;
}
.srcInp>button{
    width:3.5rem;
    height:1.75rem;
    border-radius: .15rem;
    color:#fff;
    background: rgba(255, 152, 0, 1);
    border:0;
    margin-top:.25rem;
    font-size: .7rem;
}
.srcInp>button::after{
    border:0;
}
.Result{
    width: calc(92% - 1rem);
    min-height:2.5rem;
    background:#fff;
    border-radius: .25rem;
    padding:.75rem .5rem;
    margin:.5rem auto 0;
}
.resImg{
    width:2.5rem;
    height:2.5rem;
    border-radius:50%;
    overflow: hidden;
    float: left;
}
.resImg>img{
    width:2.5rem;
}
.nameBox{
    min-height: 2.5rem;
    display: flex;
}
.cikename{
    align-self: center;
    width:100%;
    display: inline-block;
    margin-left:.5rem;
    font-size: .7rem;
    text-align: left;
}
.or{
    margin-top:.5rem;
    font-size: .7rem;
    color:#888;
}
.or>span{
    color:rgba(255, 152, 0, 1);
}
</style>
