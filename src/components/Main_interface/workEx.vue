<template>
    <div class="CuInfo" v-if="show">
        <h1 v-if="type == 'undefind'||type == ''" v-text="type"></h1>
        <div v-if="type === 'cardInfo'" class="contBox">
            <div class="contTitle">
                <div>当前工作情况</div>
                <div></div>
            </div>
            <div class="contcon">
                <div>
                    <div>公司</div>
                    <div v-text="dataList.comname">北京聚牛天下网络科技有限公司</div>
                </div>
                <div>
                    <div>职位</div>
                    <div v-text="dataList.position">CEO</div>
                </div>
                <div>
                    <div>行业</div>
                    <div v-text="dataList.industry">CEO</div>
                </div>
                <div>
                    <div>对接部门</div>
                    <div v-text="dataList.department"></div>
                </div>
                <div>
                    <div>工作年限</div>
                    <div v-text="dataList.workyears">17年</div>
                </div>
                <div>
                    <div>销售年限</div>
                    <div v-text="dataList.salesyears">10年</div>
                </div>
                <div>
                    <div>行业年限</div>
                    <div v-text="dataList.industryyears">5年</div>
                </div>
                <div>
                    <div>目标客户行业</div>
                    <div v-text="dataList.mbkh_industry">CEO</div>
                </div>
                <div>
                    <div>擅长领域</div>
                    <div v-text="dataList.scArea">CEO</div>
                </div>
                <div>
                    <div>标杆客户</div>
                    <div v-text="bg_customer">CEO</div>
                </div>
            </div>
        </div>
        <div v-if="type === 'cardInfo'" class="contBox">
            <div class="contTitle">
                <div>销售产品</div>
                <div></div>
            </div>
            <div class="contcons">
                <div v-for="(item, index) in dataList.product" :key="index">
                    <div v-text="item.key"></div>
                    <div></div>
                </div>
            </div>
        </div>
        <div v-if="type === 'cardInfo'" class="contBox">
            <div class="contTitle">
                <div>销售荣誉</div>
                <div></div>
            </div>
            <div class="contcons">
                <div v-for="(item, index) in dataList.honors" :key="index">
                    <div v-text="item.key">此处显示荣誉名称</div>
                    <div>
                      <img @click="imgMas(item.img)" :src="item.img" alt="">
                    </div>
                </div>
            </div>
        </div>
        <imgMask ref="imgMask"/>
    </div>
</template>

<script>
export default {
  name: 'CuInfo',
  data () {
    return {
      tapBur: true,
      dataList: {
        honors: []
      },
      bg_customer: null
    }
  },
  methods: {
    imgMas (url) {
      this.$refs.imgMask.on_display(url)
    },
    workInfoInit: function (data) {
      let _this = this
      _this.api.getUserCardWork(data, function (res) {
        console.log(res)
        _this.dataList = res.data
        _this.dataList.honors = JSON.parse(res.data.honors)
        _this.dataList.product = JSON.parse(res.data.product)
        console.log(_this.dataList.product)
        _this.dataList.bg_customer = JSON.parse(res.data.bg_customer)
        let arr = []
        _this.dataList.bg_customer.map((p1) => {
          arr.push(p1.key)
        })
        _this.bg_customer = arr.join('、')
      }, function (err) {
        console.log(err)
      })
    }
  },
  mounted (options) {
    console.log(this.type)
    document.title = '酷牛仔'
  },
  props: ['type', 'show']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contBox{
    width:92%;
    border-radius: .25rem;
    background:#fff;
    margin: 0 auto .5rem;
}
.contTitle{
    padding:.65rem .5rem;
    height:.7rem;
    font-size: .7rem;
    line-height: .7rem;
}
.contTitle>div:first-child{
    color:#101010;
    float: left;
    font-weight: 600;
}
.contTitle>div:last-child{
    color:#888;
    float: right;
}
.contcon{
    border-radius: .25rem;
    border-top: 1px solid #f7f7f7;
    font-size: .7rem;
    padding:.25rem 0;
}
.contcon>div{
    padding:.25rem .5rem;
    min-height:.7rem;
    font-size: .7rem;
    line-height: .7rem;
}
.contcon>div>div:first-child{
    color:#101010;
    float: left;
}
.contcon>div>div:last-child{
    color:rgba(255, 152, 0, 1);
    min-height: .7rem;
    text-align: right;
}
.contFooter{
    border-radius: .25rem;
    border-top: 1px solid #f7f7f7;
    font-size: .6rem;
    padding:.75rem .5rem .9rem;
    text-align: left;
}
.contFooter>span{
    color:rgba(255, 152, 0, 1);
}
.contcons{
    border-radius: .25rem;
    border-top: 1px solid #f7f7f7;
    font-size: .7rem;
    padding:.25rem 0;
}
.contcons>div{
    padding:.25rem .5rem;
    height:.7rem;
    font-size: .7rem;
    line-height: .7rem;
}
.contcons>div>div:first-child{
    color:rgba(255, 152, 0, 1);
    float: left;
}
.contcons>div>div:last-child{
    float: right;
}
.contcons>div>div{
  display: flex;
}
.contcons>div>div>img{
    width:.7rem;
    height:.7rem;
    align-self: center;
}
</style>
