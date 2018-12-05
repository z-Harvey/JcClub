<template>
  <div class="membershipApp">
      <div class="memTitle">
          请选择您想要加入的俱乐部
      </div>
      <div style="height:2rem;margin-bottom: .5rem;"></div>
      <div class="listFor" v-for="(item,index) in listData" :key="index">
          <img class="shu" src="@/assets/membershipApp_shu.png" alt="">
          <div class="memName" v-text="item.name">北京酷牛仔俱乐部</div>
          <div class="address">
              <img src="@/assets/location.png" alt="">
              <div v-text="item.area">北京</div>
          </div>
          <div class="introduce" v-text="item.desc">北京第一家俱乐部</div>
          <div class="btnBox">
              <div class="btnBox_left">
                  <img src="@/assets/friend(3).png" alt="">
                  <div v-text="item.now_people + '/' + item.max_people">60/500</div>
              </div>
              <button @click="mberApp(item)">加入</button>
          </div>
      </div>
      <Toast ref="Toast"/>
  </div>
</template>

<script>
export default {
  name: 'membershipApp',
  data () {
    return {
      listData: null
    }
  },
  methods: {
    mberApp (data) {
      let _this = this
      let obj = {
        club: data.id
      }
      _this.api.getClubChoice(obj, (res) => {
        _this.$router.push({
          path: '/submitAdd'
        })
      }, (err) => {
        this.errMotl(err)
      })
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
    document.title = '入会申请'
    let _this = this
    _this.api.getClubList(function (res) {
      _this.listData = res.data
    }, function (err) {
      console.log(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.memTitle{
    width:100%;
    height:2rem;
    background:rgba(255, 152, 0, 1);
    color:#fff;
    font-size: .7rem;
    line-height: 2rem;
    position: fixed;
    top:0;
    left:0;
}
.listFor{
    width:92%;
    min-height:4rem;
    border-radius: .25rem;
    margin: 0 auto .5rem;
    box-shadow: 0 0 .5rem 0 rgba(170,170,170,.2);
    padding:.75rem 0;
    text-align: left;
}
.listFor>.shu{
    width:.8rem;
    height:.8rem;
    display: inline-block;
    border:none;
    margin-left:.5rem;
    vertical-align:top;
}
.listFor>.memName{
    display: inline-block;
    font-size: .8rem;
    line-height: .8rem;
    margin-left:-.3rem;
    vertical-align:top;
}
.address{
    float: right;
    margin-right:.5rem;
}
.address>img{
    width: .7rem;
    height:.7rem;
    margin-top:.05rem;
    display: inline-block;
    vertical-align:top;

}
.address>div{
    height:.7rem;
    font-size: .7rem;
    line-height: .8rem;
    display: inline-block;
    vertical-align:top;
}
.introduce{
    color:#888;
    font-size: .7rem;
    margin-left:1.3rem;
}
.btnBox{
    padding:.1rem .5rem 0rem;
    height:1.5rem;
}
.btnBox_left{
    vertical-align: bottom;
    display: inline-block;
    height:1.5rem;
    line-height: 2rem;
    margin-left:1rem;
}
.btnBox_left>img{
    width: .6rem;
    height:.6rem;
    display: inline-block;
}
.btnBox_left>div{
    font-size: .6rem;
    color:#101010;
    display: inline-block;
}
.btnBox>button{
    border:none;
    width:4rem;
    height:1.5rem;
    border-radius: .75rem;
    background: rgba(255, 152, 0, 0.1);
    color:rgba(255, 152, 0, 1);
    font-size: .6rem;
    line-height: 1.5rem;
    float: right;
}
.btnBox>button::after{
    border:none;
}
</style>
