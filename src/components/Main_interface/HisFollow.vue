<template>
    <div class="HisFollow">
      <div class="For" @click="path">
        <div class="forImg">
          <img src="@/assets/touxiang.jpg" alt="">
        </div>
        <div class="forText">
          <div class="ff1">韩鹏翔</div>
          <div class="ff2">CEO/北京聚牛天下网络科技有限公司北京聚牛天下网络科技有限公司北京聚牛天下网络科技有限公司北京聚牛天下网络科技有限公司</div>
          <div class="ff3">188 8888 8888</div>
          <div class="ff4">北京酷牛仔俱乐部</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HisFollow',
  data () {
    return {
      tapBur: true
    }
  },
  methods: {
    path: function () {
      let _this = this
      _this.$router.push('/cardInfo')
    }
  },
  mounted (options) {
    if (this.$route.query.source === 'my') {
      document.title = '我的关注'
    } else {
      document.title = 'Ta的关注'
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
