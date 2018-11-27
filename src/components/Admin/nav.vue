<template>
  <div class="adminNav">
    <homePage v-if="navList[0]"/>
    <Member v-if="navList[1]"/>
    <examine v-if="navList[2]"/>
    <div class="newClub">
      <img src="@/assets/home_navImg.png" @click="navPath(5)" alt="">
    </div>
    <nav>
        <div @click="navPath(0)" :class="navList[0]?'navclik':''">俱乐部</div>
        <div @click="navPath(1)" :class="navList[1]?'navclik':''">会员</div>
        <div @click="navPath(2)" :class="navList[2]?'navclik':''">审核</div>
        <div @click="navPath(3)" :class="navList[3]?'navclik':''">管理员</div>
        <div @click="navPath(4)" :class="navList[4]?'navclik':''">我</div>
    </nav>
  </div>
</template>

<script>
import homePage from '@/components/Admin/homePage' // 俱乐部
import examine from '@/components/Admin/examine' // 审核
import Member from '@/components/Admin/Member' // 会员

export default {
  name: 'adminNav',
  components: {
    homePage,
    examine,
    Member
  },
  data () {
    return {
      navList: [true, false, false, false, false, false]
    }
  },
  methods: {
    navPath: function (num) {
      let _this = this
      let arr = [false, false, false, false, false, false]
      arr[num] = true
      switch (num) {
        case 0:
          // _this.$router.push()
          break
        case 1:
          // _this.$router.push()
          break
        case 2:
          // _this.$router.push()
          break
        case 3:
          // _this.$router.push()
          break
        case 4:
          // _this.$router.push()
          break
        case 5:
          _this.$router.push('/newClub')
          break
      }
      _this.navList = arr
    }
  },
  mounted () {
    document.title = '俱乐部'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.adminNav{
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
.newClub{
  width:2.25rem;
  height:2.25rem;
  background:rgba(255, 152, 0, 1);
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  position: fixed;
  bottom:3rem;
  right:1.5rem;
}
.newClub>img{
  width:1.5rem;
  height:1.5rem;
  margin:0 auto;
  align-self: center;
}
</style>
