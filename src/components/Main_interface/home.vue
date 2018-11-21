<template>
  <div class="home">
    <Toast ref="Toast" @confirm="alert_ok"></Toast>
    <!-- <router-view ref="homeContent" @navClick="navClick"/> -->
    <homeContent ref="c0" :show="nav_list[0]"/>
    <International ref="c1" :show="nav_list[1]"/>
    <myCustomer ref="c2" :show="nav_list[2]"/>
    <my ref="c3" :show="nav_list[3]"/>
    <nav>
        <div @click="navClick(0)" class="link_tou">
            <img v-if="nav_list[0]" src="@/assets/friend.png" alt="">
            <img v-else src="@/assets/friend_a.png" alt="">
            <p :class="nav_list[0]?'pcole':''">会员</p>
        </div>
        <div @click="navClick(1)" class="link_tou">
            <img v-if="nav_list[1]" src="@/assets/navTar.png" alt="">
            <img v-else src="@/assets/navTar_a.png" alt="">
            <p :class="nav_list[1]?'pcole':''">公海</p>
        </div>
        <div class="centerBtn" @click="navClick(4)">
          <img src="@/assets/home_navImg.png" alt="">
        </div>
        <div @click="navClick(2)" class="link_tou">
            <img v-if="nav_list[2]" src="@/assets/medal.png" alt="">
            <img v-else src="@/assets/medal_a.png" alt="">
            <p :class="nav_list[2]?'pcole':''">我的客户</p>
        </div>
        <div @click="navClick(3)" class="link_tou">
            <img v-if="nav_list[3]" src="@/assets/people.png" alt="">
            <img v-else src="@/assets/people_a.png" alt="">
            <p :class="nav_list[3]?'pcole':''">我</p>
        </div>
    </nav>
  </div>
</template>

<script>
import homeContent from '@/components/Main_interface/home_content'
import International from '@/components/Main_interface/International'
import myCustomer from '@/components/Main_interface/myCustomer' // 我的客户 页面
import my from '@/components/Main_interface/my' // 我的 页面

export default {
  name: 'home',
  components: {
    homeContent,
    International,
    myCustomer,
    my
  },
  data () {
    return {
      nav_list: [true, false, false, false]
    }
  },
  methods: {
    navClick: function (num) {
      let arr = [false, false, false, false]
      let _this = this
      switch (num) {
        case 0:
          _this.$refs.c0.init()
          break
        case 1:
          _this.$refs.c1.init()
          break
        case 2:
          _this.$refs.c2.init()
          break
        case 3:
          _this.$refs.c3.init()
          break
        case 4:
          this.$router.push('/MarkupCu')
          arr[0] = true
          this.nav_list = arr
          return
      }
      arr[parseInt(num)] = true
      this.nav_list = arr
      this.Global.navListType = arr
    },
    // 点击确认后响应的函数
    alert_ok: function () {
      this.$children[0].close()
      this.$router.push('/ApplyOpen')
    }
  },
  mounted () {
    document.title = '酷牛仔'
    let _this = this
    _this.nav_list = _this.Global.navListType
    _this.nav_list.map(function (p1, p2) {
      if (p1) {
        _this.navClick(p2)
      }
    })
    _this.api.getMine(function (res) {
      _this.Global.userInfo.myId = res.data.id
    }, function (err) {
      console.log(err)
    })
    // let obj = {
    //   Title: '提示',
    //   Content: '您尚未开通查客户权限，是否立即申请开通？',
    //   Yes: '立即申请',
    //   No: '放弃申请',
    //   type: 1,
    //   btn: 2
    // }
    // this.$refs.Toast.on_display(obj)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
    text-decoration:none;
    color:#101010;
}
nav{
    width:100%;
    height: 2.25rem;
    font-size: .5rem;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0rem;
    left:0rem;
    background:#fff;
}
nav>div{
    width:3rem;
}
.centerBtn{
    width:2.25rem;
    height:2.25rem;
    border-radius:50%;
    background:rgba(255, 152, 0, 1);
    display: flex;
}
.link_tou>img{
    width:1.2rem;
    height:1.2rem;
    margin-top:.25rem;
}
.centerBtn>img{
    width:1.5rem;
    height:1.5rem;
    align-self: center;
    margin: 0 auto;
}
.pcole{
    color:rgba(255, 152, 0, 1);
}
</style>
