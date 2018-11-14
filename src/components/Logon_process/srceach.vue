<template>
    <div class="srceach" v-if="show">
        <div class="srcInp">
            <div>
                <img src="@/assets/srceach_1.png" alt="">
                <input type="text" v-model="inpText" placeholder="输入公司名称关键字，例：聚牛天下">
            </div>
            <button @click="sear">搜索</button>
        </div>
        <div class="cont_box">
            <div v-if="youme" class="or">查无此客户，请确认输入的名称是否正确</div>
            <div class="Result" v-for="(item, index) in DataList" :key="index" @click="btn(item)">
                <div class="resImg">
                    <img src="@/assets/icon.png" alt="">
                </div>
                <div class="cikename" v-text="item.name">阿里巴巴（中国）网络技术有限公司</div>
            </div>
        </div>
        <!-- <div class="or">没搜到？试试看输入更全的客户名称or<span>点此进行深度搜索</span></div> -->
    </div>
</template>

<script>
export default {
  name: 'srceach',
  data () {
    return {
      show: false,
      inpText: null,
      DataList: [],
      youme: false
    }
  },
  methods: {
    getParams: function () {
      let routerParams = this.$route.params.dataobj
      console.log(routerParams)
    },
    close: function () {
      this.show = false
    },
    on_display: function () {
      this.show = true
    },
    btn: function (data) {
      this.close()
      this.$emit('ok', data)
    },
    sear: function () {
      let _this = this
      let str = 'p=1&page_size=1000&search=' + _this.inpText
      _this.api.getSearchCompany(str, function (res) {
        _this.DataList = res.data.results
        if (res.data.count === 0) {
          _this.youme = true
        } else {
          _this.youme = false
        }
      }, function (err) {
        console.log(err)
      })
    }
  },
  mounted (options) {
  },
  watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    '$route': 'getParams'
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
    z-index: 11;
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
.cont_box{
    position: fixed;
    width:100%;
    height:calc(100% - 2.25rem);
    top:2.25rem;
    left:0rem;
    overflow: auto;
}
.Result{
    width: calc(92% - 1rem);
    height:2.5rem;
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
.cikename{
    float: left;
    line-height: 2.5rem;
    margin-left:.5rem;
    font-size: .7rem;
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
