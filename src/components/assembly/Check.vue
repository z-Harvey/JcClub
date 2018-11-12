<template>
  <div class="Check" v-if="show">
        <div class="contBox">
            <div class="checkBox">
                <div v-for="(item,index) in arr" :key="index">
                    <p v-text="item.keys">选择1</p>
                    <div><img src="@/assets/yes.png" alt=""></div>
                </div>
                <p style="height:2rem;"></p>
            </div>
            <button @click="OK" class="OK">确认</button>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Check',
  data () {
    return {
      arr: [{'keys': '1'}, {'keys': '2'}, {'keys': '3'}, {'keys': '4'}],
      show: false
    }
  },
  methods: {
    on_display: function () {
      this.show = true
    },
    close: function () {
      this.show = false
    },
    OK: function () {
      this.close()
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Check{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index: 10;
    background: rgba(0,0,0,.2);
    display: flex;
}
.contBox{
    width:calc(92% - 1rem);
    max-height:19rem;
    background:#fff;
    margin:0 auto;
    align-self: center;
    border-radius: .2rem;
    padding:.5rem;
    position: relative;
}
.checkBox{
    max-height:17rem;
    margin:0 auto;
    align-self: center;
    border-radius: .2rem;
    padding:.5rem;
    overflow: auto;
    position: relative;
}
.checkBox>div{
    font-size: .7rem;
    line-height: 2rem;
    border-bottom: 1px solid rgba(170, 170, 170, .1);
    position: relative;
}
.checkBox>div>div{
    position: absolute;
    width:.7rem;
    height:2rem;
    display: flex;
    right:1rem;
    top:0;
}
.checkBox>div>div>img{
    width:.7rem;
    height:.7rem;
    align-self: center;
}
.OK{
    width:calc(100% - 1rem);
    margin-left:.5rem;
    height:2rem;
    background:#fff;
    color:rgba(2, 187, 0, 1);
    position: absolute;
    bottom: .5rem;
    left: 0;
    border:0;
}
.OK::after{
    border:0;
}
</style>
