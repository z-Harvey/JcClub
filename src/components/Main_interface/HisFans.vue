<template>
    <div class="HisFans" @scroll="onScroll($event)">
      <div class="For" v-for="(item, index) in dataList" :key="index" @click="path(item)">
        <div class="forImg">
          <img :src="item.avatarurl" alt="">
        </div>
        <div class="forText">
          <div class="ff1" v-text="item.nickname"></div>
          <div class="ff2" v-text="item.position + '/' + item.comname"></div>
          <div class="ff3" v-text="item.mobile"></div>
          <div class="ff4" v-text="item.club_name"></div>
        </div>
      </div>
      <img class="blank" v-if="dataList.length <= 0" src="@/assets/blank.png" alt="">
      <Toast ref="Toast"/>
    </div>
</template>

<script>
export default {
  name: 'HisFans',
  data () {
    return {
      tapBur: true,
      dataList: [],
      p: 1,
      page_size: 12,
      ps: true,
      isMy: null
    }
  },
  methods: {
    path: function (data) {
      let _this = this
      _this.$router.push({
        name: 'cardInfo',
        query: {
          user_id: data.puser
        }
      })
    },
    myInit () {
      let str = 'p=' + this.p + '&page_size=' + this.page_size
      this.api.getMyFans(str, (res) => {
        this.dataList = res.data.results
      }, (err) => {
        this.errMotl(err)
      })
    },
    myScroll () {
      let str = 'p=' + this.p + '&page_size=' + this.page_size
      this.api.getMyFans(str, (res) => {
        this.dataList = this.dataList.concat(res.data.results)
        if (this.dataList.length === res.data.count) {
          this.ps = false
        }
      }, (err) => {
        this.errMotl(err)
      })
    },
    youInit () {
      let str = 'puser=' + this.user_id + '&p=' + this.p + '&page_size=' + this.page_size
      this.api.getUserFans(str, (res) => {
        this.dataList = res.data.results
      }, (err) => {
        this.errMotl(err)
      })
    },
    youScroll () {
      let str = 'puser=' + this.user_id + '&p=' + this.p + '&page_size=' + this.page_size
      this.api.getUserFans(str, (res) => {
        this.dataList = this.dataList.concat(res.data.results)
        if (this.dataList.length === res.data.count) {
          this.ps = false
        }
      }, (err) => {
        this.errMotl(err)
      })
    },
    onScroll (e) {
      if (this.ps === false) {
        return
      }
      let total = e.srcElement.scrollHeight - e.srcElement.clientHeight - 1 // 总高度减视口高度 - 1
      if (e.srcElement.scrollTop > total) {
        this.p++
        if (this.isMy === 'my') {
          this.myScroll()
        } else {
          this.youscll()
        }
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
  mounted (options) {
    let _this = this
    this.isMy = this.$route.query.source
    if (this.$route.query.source === 'my') {
      document.title = '我的粉丝'
      // let str = 'p=' + _this.Global.userInfo.myId
      _this.myInit()
    } else {
      document.title = 'Ta的粉丝'
      _this.user_id = _this.$route.query.user_id
      _this.youInit()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.HisFans{
  position:fixed;
  top:0;
  left:0;
  overflow: auto;
  background:#f9f9f9;
  width:100%;
  height:100%;
}
.blank{
  margin-top:6.66rem;
  width:6.66rem;
  height:6.66rem;
}
.For{
  padding:.75rem .5rem;
  text-align: left;
  width: calc(92% - 1rem);
  margin:.5rem auto 0;
  border-radius: .25rem;
  background:#fff;
}
.forImg{
  width:2.5rem;
  height:2.5rem;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  float: left;
}
.forImg>img{
  align-self: center;
  width:2.5rem;
}
.forText{
  padding-left:3.15rem;
}
.ff1{
  font-size: .7rem;
  color:#101010;
  font-weight: 600;
  line-height: .7rem;
}
.ff2{
  font-size: .6rem;
  line-height: .8rem;
  color:#2c2c2c;
  margin:.1rem 0;
}
.ff3{
  margin-bottom: .4rem;
  font-size: .6rem;
  line-height: .6rem;
  color:rgba(255, 152, 0, 1);
}
.ff4{
  font-size: .7rem;
  color:#2c2c2c;
  line-height: .7rem;
}
</style>
