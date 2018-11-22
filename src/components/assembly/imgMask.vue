<template>
  <div class="imgMask" :class="show? 'dis': 'close'" @click="close">
      <img :src="url" alt="">
  </div>
</template>

<script>

export default {
  name: 'imgMask',
  data () {
    return {
      show: false,
      url: null
    }
  },
  methods: {
    close () {
      this.show = false
    },
    on_display (url) {
      this.url = url
      this.show = true
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imgMask{
    position: fixed;
    top:50%;
    left:50%;
    transition: .1s ease;
    overflow: auto;
    background:rgba(0,0,0,.2);
    display: flex;
}
.close{
    width:0;
    height:0;
    top:50%;
    left:50%;
    opacity: 0;
}
.dis{
    top:0;
    left:0;
    width:100%;
    height:100%;
    opacity: 1;
}
.imgMask>img{
    width:100%;
    align-self: center;
}
</style>
