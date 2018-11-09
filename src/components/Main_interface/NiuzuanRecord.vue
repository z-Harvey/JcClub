<template>
    <div class="NiuzuanRecord">
        <div class="content">
            <div class="box">
                <div class="tit">新增客户</div>
                <div class="time">2017-02-30 12:30:20</div>
            </div>
            <div class="num">+10</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NiuzuanRecord',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted (options) {
    document.title = '牛钻记录'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.NiuzuanRecord{
    position: fixed;
    width:100%;
    height:100%;
    background: #f8f8f8;
}
.content{
    width:calc(92% - 1rem);
    margin:.5rem auto 0;
    padding:.75rem .5rem;
    border-radius: .25rem;
    font-size: .7rem;
    background:#fff;
    text-align: left;
    position: relative;
    display: flex;
}
.tit{
    color:#101010;
    line-height: 1.15rem;
    margin-bottom: .25rem;
}
.time{
    font-size: .6rem;
    color:#999;
    line-height: 1.15rem
}
.box{
    display: inline-block;
}
.num{
    align-self: center;
    color:rgba(255, 152, 0, 1);
    position: absolute;
    right:.75rem;
}
</style>
