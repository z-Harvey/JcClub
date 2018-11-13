<template>
  <div class="nav">
    <homePage/>
    <nav>
        <div class="navclik">俱乐部</div>
        <div>会员</div>
        <div>审核</div>
        <div>管理员</div>
        <div>我</div>
    </nav>
  </div>
</template>

<script>
import homePage from '@/components/Admin/homePage'

export default {
  name: 'nav',
  components: {
    homePage
  },
  data () {
    return {
    }
  },
  methods: {

  },
  mounted () {
    document.title = '俱乐部'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
    position: fixed;
    width:100%;
    height:100%;
    top:0;
    left: 0;
    background: #f9f9f9;
}
nav{
    position: fixed;
    bottom: 0rem;
    left:0rem;
    height:2.25rem;
    width: calc(100% - 1.5rem);
    padding:0 .75rem;
    background: #fff;
    display: flex;
    justify-content: space-around;
}
nav>div{
    width:20%;
    align-self: center;
    font-size: .7rem;
    line-height: 1.5rem;
    border-radius: .75rem;
}
.navclik{
    background:rgba(255, 152, 0, 1);
    color:#fff;
}
</style>
