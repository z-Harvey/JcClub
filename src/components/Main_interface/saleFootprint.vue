<template>
    <div class="saleFootprint" v-if="show">
        <div class="content">
            <div class="contTexts">
                <div class="yuans"></div>
                <div class="time">yyyy/mm/dd</div>
                <div class="tag">
                    <span>#电话拜访#</span>
                </div>
                <div class="con">首次标记</div>
            </div>
            <div class="contText">
                <div class="yuan"></div>
                <div class="time">yyyy/mm/dd</div>
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
    }
  },
  methods: {
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
    top:0;
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
