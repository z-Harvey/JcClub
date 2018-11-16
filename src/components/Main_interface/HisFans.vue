<template>
    <div class="HisFans">
      <div class="For" v-for="(item, index) in dataList" :key="index" @click="path(item)">
        <div class="forImg">
          <img :src="item.avatarurl" alt="">
        </div>
        <div class="forText">
          <div class="ff1" v-text="item.nickname">韩鹏翔</div>
          <div class="ff2" v-text="item.position + '/' + item.comname">CEO/北京聚牛天下网络科技有限公司北京聚牛天下网络科技有限公司北京聚牛天下网络科技有限公司北京聚牛天下网络科技有限公司</div>
          <div class="ff3" v-text="item.mobile">188 8888 8888</div>
          <div class="ff4" v-text="item.club_name">北京酷牛仔俱乐部</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HisFans',
  data () {
    return {
      tapBur: true,
      dataList: []
    }
  },
  methods: {
    path: function (data) {
      let _this = this
      _this.$router.push({
        path: 'cardInfo',
        query: {
          user_id: data.puser
        }
      })
    }
  },
  mounted (options) {
    let _this = this
    if (this.$route.query.source === 'my') {
      document.title = '我的粉丝'
    } else {
      document.title = 'Ta的粉丝'
      _this.user_id = _this.$route.query.user_id
      let str = 'puser=' + _this.user_id
      _this.api.getUserFans(str, function (res) {
        _this.dataList = res.data.results
        console.log(res)
      }, function (err) {
        console.log(err)
      })
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
