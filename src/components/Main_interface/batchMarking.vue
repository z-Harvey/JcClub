<template>
    <div class="batchMarking">
        <div class="content">
            <div>
                <div class="nav nav1">
                    <div @click="path(0)">
                        <img src="@/assets/Alone_a.png" alt="">
                    </div>
                    <p>新增客户</p>
                </div>
                <div class="nav nav2">
                    <div @click="path(1)">
                        <img src="@/assets/Alone.png" alt="">
                    </div>
                    <p>批量新增客户</p>
                </div>
            </div>
            <div>
                <div class="nav nav1">
                    <div @click="path(2)">
                        <img src="@/assets/newXuqiu.png" alt="">
                    </div>
                    <p>新增需求</p>
                </div>
                <div class="nav nav2">
                    <div @click="path(3)">
                        <img src="@/assets/creative_a.png" alt="">
                    </div>
                    <p>新增商机</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'batchMarking',
  data () {
    return {
    }
  },
  methods: {
    path (num) {
      switch (num) {
        case 0:
          this.$router.push('/MarkupCu')
          break
        case 1:
          this.$router.push('/batchNew')
          break
        case 2:
          this.$router.push('/demandNew')
          break
        case 3:
          this.$router.push('/buOppoNew')
          break
      }
    }
  },
  mounted (options) {
    document.title = '新增'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.batchMarking{
    position: fixed;
    top:0;
    left: 0;
    width:100%;
    height:100%;
    background:rgba(249, 249, 249, 1);
}
.content{
    width:92%;
    min-height:5.2rem;
    background:#fff;
    border-radius: .25rem;
    margin: .5rem auto;
}
.content>div{
    display: flex;
    justify-content: space-around;
}
.content>div>div{
    width: 50%;
    height:5.2rem;
}
.nav>div{
    width:2.5rem;
    height:2.5rem;
    border-radius: .25rem;
    background:rgba(255, 152, 0, 0.1);
    display: flex;
    margin:.75rem auto .5rem;
}
.nav>div>img{
    width:1.5rem;
    height:1.5rem;
    align-self: center;
    margin:0 auto;
}
.nav>p{
    font-size: .7rem;
    color:#101010;
}
</style>
