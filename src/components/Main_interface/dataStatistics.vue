<template>
    <div class="dataStatistics">
        <div class="for">
            <img class="shu" src="@/assets/membershipApp_shu.png" alt="">
            <div class="fortext">北京聚牛天下网络科技有限公司北京聚牛天下网络科技有限公司北京聚牛天下网络科技有限公司</div>
            <div class="forNum">
                <span>未填写字段 <span>10</span></span>
                <span>有误数据 <span>10</span></span>
            </div>
            <img class="righ" src="@/assets/right.png" alt="">
        </div>
        <div class="for">
            <img class="shu" src="@/assets/membershipApp_shu.png" alt="">
            <div class="fortext">北京聚牛天下网络科技有限</div>
            <div class="forNum">
                <span>未填写字段 <span>10</span></span>
                <span>有误数据 <span>10</span></span>
            </div>
            <img class="righ" src="@/assets/right.png" alt="">
        </div>
        <div class="for">
            <img class="shu" src="@/assets/membershipApp_shu.png" alt="">
            <div class="fortext">北京聚牛天下网络科技有限公司北京聚牛天下</div>
            <div class="forNum">
                <span>未填写字段 <span>10</span></span>
                <span>有误数据 <span>10</span></span>
            </div>
            <img class="righ" src="@/assets/right.png" alt="">
        </div>
        <div class="for">
            <img class="shu" src="@/assets/membershipApp_shu.png" alt="">
            <div class="fortext">北京网络科技有限公司</div>
            <div class="forNum">
                <span>未填写字段 <span>10</span></span>
                <span>有误数据 <span>10</span></span>
            </div>
            <img class="righ" src="@/assets/right.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
  name: 'dataStatistics',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted (options) {
    document.title = '数据确认'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dataStatistics{
    position: fixed;
    top:0;
    left: 0;
    width:100%;
    height:100%;
    overflow: auto;
    background:#fafafa;
}
.for{
    padding:.5rem 1.2rem;
    border-radius: .25rem;
    background:#fff;
    width:calc(92% - 2.4rem);
    text-align: left;
    position: relative;
    margin:.5rem auto;
}
.for>.fortext{
    font-size: .7rem;
}
.for>img{
    width:.7rem;
    height:.7rem;
}
.shu{
    position: absolute;
    left:.5rem;
    top:.6rem;
}
.righ{
    position: absolute;
    right:.5rem;
    top:calc(50% - .35rem);
}
.forNum{
    font-size: .6rem;
    color:#101010;
    margin-top:.5rem;
}
</style>
