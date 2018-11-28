<template>
    <div class="saleFootprint" v-if="show">
        <div class="content">
            <div class="contTexts" v-for="(item, index) in msgList" :key="index" v-if="item.type > 0">
                <div class="yuans"></div>
                <div class="time" v-text="item.time"></div>
                <div class="tag">
                    <span v-if="item.type === 1">#电话拜访#</span>
                    <span v-if="item.type === 2">#上门拜访#</span>
                    <span v-if="item.type === 3">#回复#</span>
                    <span v-if="item.type === 4">#市场活动#</span>
                    <span v-if="item.type === 5">#邮件#</span>
                </div>
                <div class="con" v-text="item.experience">首次标记</div>
            </div>
            <div class="contText">
                <div class="yuan"></div>
                <div class="time" v-text="msg1.time">yyyy/mm/dd</div>
                <div class="con">首次标记</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'saleFootprint',
  data () {
    return {
      msgList: [],
      msg1: {}
    }
  },
  methods: {
    init: function (id) {
      let _this = this
      let str = 'company=' + id
      _this.api.getFootPrint(str, function (res) {
        console.log(res)
        _this.msgList = res.data.results
        _this.msgList.map(function (p1, p2) {
          if (p1.type === 0) {
            _this.msg1 = p1
          }
        })
      }, function (err) {
        console.log(err)
      })
    }
  },
  mounted (options) {
  },
  props: ['show']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.yuan{
    width:.5rem;
    height:.5rem;
    border:.1rem solid rgba(255, 152, 0, 1);
    border-radius: 50%;
    position: absolute;
    top:0;
    left:-.325rem;
    background:#fff;
}
.yuans{
    width:.5rem;
    height:.5rem;
    border:.1rem solid rgba(255, 152, 0, 1);
    border-radius: 50%;
    position: absolute;
    top:-.2rem;
    left:-.35rem;
    background:rgba(255, 152, 0, 1);
}
.content{
    width: calc(92% - 1.25rem);
    padding:1rem .5rem .75rem .75rem;
    background: #fff;
    border-radius: .25rem;
    margin: 0 auto;
    font-size: .7rem;
    text-align: left;
}
.contTexts{
    border-left: 1px solid rgba(255, 152, 0, 1);
    position: relative;
    padding:.5rem 0 1rem .7rem;
}
.contText{
    position: relative;
    padding:.5rem 0 1rem .7rem;
}
.time{
    color:#101010;
    margin:-.75rem 0 .4rem 0;
}
.tag{
    color: rgba(255, 152, 0, 1);
    margin-bottom: .2rem;
}
</style>
