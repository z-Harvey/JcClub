<template>
    <div class="editComment">
        <div class="titleBox">
            <img src="@/assets/membershipApp_shu.png" alt="">
            <span>北京聚牛天下网络科技有限公司</span>
        </div>
        <div class="miaoshu">
            选择你对客户的印象或新增一个标签
        </div>
        <div class="tagBox">
            <span class="navTag">有钱任性</span>
            <span>有钱任性</span>
            <span>有钱任性</span>
            <span>有钱任性</span>
            <span>有钱任性</span>
            <span>有钱任性</span>
            <span>有钱任性</span>
            <span>有钱任性</span>
            <span>有钱任性</span>
        </div>
        <div class="jia">+</div>
    </div>
</template>

<script>
export default {
  name: 'editComment',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted (options) {
    document.title = '编辑点评标记'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.editComment{
    position: fixed;
    width:100%;
    height:100%;
    background:#f9f9f9;
}
.titleBox{
    background:#fff;
    height:2rem;
    line-height: 2rem;
    padding:0 .75rem;
    color:rgba(255, 152, 0, 1);
    font-size: .7rem;
    text-align: left;
}
.titleBox>img{
    width:.7rem;
    height:.7rem;
}
.miaoshu{
    font-size: .7rem;
    padding-left:.75rem;
    line-height: 2rem;
    color:#888;
    text-align: left;
}
.tagBox{
    padding-left:.75rem;
    font-size: .7rem;
    color:#888;
    line-height: 1.5rem;
    text-align: left;
}
.tagBox>span{
    display: inline-block;
    padding: 0 .5rem;
    background: #fff;
    margin:0 .4rem .4rem 0;
}
.tagBox>.navTag{
    background: rgba(255, 152, 0, 1);
    color:#fff;
}
.jia{
    width:2.25rem;
    height:1.5rem;
    background:#fff;
    border:1px solid rgba(255, 152, 0, 1);
    color:rgba(255, 152, 0, 1);
    line-height: 1.5rem;
    margin-left:.75rem;
}
</style>
