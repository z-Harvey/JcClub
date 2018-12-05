<template>
  <div class="home">
    <Toast ref="Toast" @confirm="alert_ok"></Toast>
    <my ref="my" :show="nav_list[1]"/>
    <div class="navBox" v-show="nav_list[0]">
      <div class="navRow">
        <div @click="navClick(3)">
          <img class="imgTit" src="@/assets/group.png" alt="">
          <p>会员</p>
          <div class="rig">
            <img src="@/assets/right_bai.png" alt="">
          </div>
        </div>
        <div @click="navClick(4)">
          <img class="imgTit" src="@/assets/navTar.png" alt="">
          <p>公海</p>
          <div class="rig">
            <img src="@/assets/right_bai.png" alt="">
          </div>
        </div>
      </div>
      <div class="navRow">
        <div @click="navClick(5)">
          <img class="imgTit" src="@/assets/creative.png" alt="">
          <p>商机</p>
          <div class="rig">
            <img src="@/assets/right_bai.png" alt="">
          </div>
        </div>
        <div @click="navClick(6)">
          <img class="imgTit" src="@/assets/my_demand.png" alt="">
          <p>需求</p>
          <div class="rig">
            <img src="@/assets/right_bai.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div style="height:4.25rem;"></div>
    <nav>
        <div @click="navClick(0)" class="link_tou">
            <img v-if="nav_list[0]" src="@/assets/qiu.png" alt="">
            <img v-else src="@/assets/qiu_a.png" alt="">
            <p :class="nav_list[0]?'pcole':''">牛盟</p>
        </div>
        <div class="centerBtn" @click="navClick(2)">
          <img src="@/assets/home_navImg.png" alt="">
        </div>
        <div @click="navClick(1)" class="link_tou">
            <img v-if="nav_list[1]" src="@/assets/people.png" alt="">
            <img v-else src="@/assets/people_a.png" alt="">
            <p :class="nav_list[1]?'pcole':''">我</p>
        </div>
    </nav>
  </div>
</template>

<script>
import my from '@/components/Main_interface/my' // 我的 页面

export default {
  name: 'home',
  data () {
    return {
      nav_list: [false, false]
    }
  },
  components: {
    my
  },
  methods: {
    navClick: function (num) {
      switch (num) {
        case 0:
          this.nav_list = [true, false]
          this.Global.navListType = [true, false]
          break
        case 1:
          this.$refs.my.init()
          this.nav_list = [false, true]
          this.Global.navListType = [false, true]
          break
        case 2:
          this.$router.push('/batchMarking')
          break
        case 3:
          this.$router.push('/homeContent')
          break
        case 4:
          this.$router.push('/International')
          break
        case 5:
          this.$router.push('/buOppo')
          break
        case 6:
          this.$router.push('/demand')
          break
      }
    },
    // 点击确认后响应的函数
    alert_ok: function () {
      this.$children[0].close()
      this.$router.push('/ApplyOpen')
    },
    errMotl (errData) {
      let errStr = ''
      let tit = this.Global.HTTPStatusCode[errData.status]
      for (let i in errData.data) {
        errStr += i +' : '
        errStr += errData.data[i]
      }
      let obj = {
        Title: tit,
        Content: errStr||'无错误内容提示',
        type: 1,
        btn: 0
      }
      this.$refs.Toast.on_display(obj)
    }
  },
  mounted () {
    document.title = '酷牛仔'
    this.nav_list = this.Global.navListType
    this.nav_list.map((p1, p2) => {
      if (p1) {
        this.navClick(p2)
      }
    })
    this.api.getMine((res) => {
      this.Global.userInfo.myId = res.data.id
    }, (err) => {
      this.errMotl(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
    background:#f9f9f9;
    position: fixed;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    overflow: auto;
}
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
.navRow{
  display: flex;
  justify-content: space-evenly;
  font-size: .8rem;
  line-height: .8rem;
  margin-top:.5rem;
}
.navRow>div{
    width:47%;
    height:12rem;
    background:#fff;
    border-radius: .25rem;
}
.navRow>div>p{
    margin-top:.75rem;
}
.imgTit{
    width:1.5rem;
    height:1.5rem;
    margin-top:2.5rem;
}
.rig{
    width:1rem;
    height:1rem;
    display: flex;
    background: rgba(255, 172, 55, 0.3);
    border-radius: 50%;
    margin:4rem auto 0;
}
.rig>img{
    width:.6rem;
    height:.6rem;
    align-self: center;
    margin:0 auto;
}
</style>
