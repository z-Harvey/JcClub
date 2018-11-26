<template>
  <div class="NoMember">
    <div class="titleImg">
        <div class="titBox">
            <img :src="msg.avatarurl" alt="">
        </div>
        <p v-text="msg.name">李晓沫</p>
        <p class="hehe">于 <span v-text="msg.add_time"></span> 申请加入</p>
        <p v-text="msg.club_name">北京酷牛仔俱乐部</p>
    </div>
    <div class="meContent" v-if="msg.status === 6||msg.status === '6'">
        <div class="mCtit">
            <p>成功通过审核！欢迎加入酷牛仔~</p>
            <p>您的酷牛仔编号为：</p>
            <p v-text="msg.club_num">KAA001</p>
        </div>
        <input class="inviCode" v-model="nickname" type="text" placeholder="给自己取一个酷酷的江湖称号吧~">
    </div>
    <div class="meContent" v-if="msg.status === 2||msg.status === '2'">
        <div class="mCtit">
            <p class="no_con">很遗憾，您未能通过审核~</p>
            <span class="no_content">原因：<span v-text="msg.desc || '未填写拒绝原因'"></span></span>
        </div>
    </div>
    <!-- <p class="Rules" v-if="Success_or_failure">俱乐部准则</p> -->
    <div class="flxBtn" v-if="msg.status === 6||msg.status === '6'">
        <button class="sqBtn" @click="sqBtn(0)">进入酷牛仔</button>
    </div>
    <div class="flxBtn" v-if="msg.status === 2||msg.status === '2'">
        <button class="sqBtn" @click="sqBtn(1)">重新申请</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoMember',
  data () {
    return {
      Success_or_failure: true,
      nickname: null,
      msg: {
        avatarurl: '',
        name: '',
        add_time: '',
        club_name: '',
        status: ''
      }
    }
  },
  methods: {
    sqBtn: function (num) {
      let _this = this
      switch (num) {
        case 0:
          let obj = {
            nickname: _this.nickname
          }
          _this.api.postUserNickname(obj, function (res) {
            if (res.data.nickname === _this.nickname) {
              _this.$router.push({
                path: '/home'
              })
            }
          }, function (err) {
            alert(err.status)
            console.lod(err)
          })
          break
        case 1:
          _this.$router.push('/NoMember')
          break
      }
    }
  },
  mounted () {
    document.title = '酷牛仔'
    let _this = this
    _this.msg = this.$route.params
    this.api.getApplyStatus((res) => {
      console.log(res)
      this.msg['club_num'] = res.data[0].club_num
      this.msg['desc'] = res.data[0].desc
    }, (err) => {
      console.log(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titleImg{
    height:7.6rem;
    width:100%;
    background-image:url(../../assets/login_bg.png);
    background-size: 100% 100%;
    padding-top:.75rem;
}
.meContent{
    width:92%;
    line-height: 1rem;
    min-height:5rem;
    border-radius: .25rem;
    margin:0 auto;
    box-shadow: 0 0 .5rem 0 rgba(170,170,170,.2);
    margin-top:.95rem;
    padding:.75rem 0;
}
.titBox{
    width:2.5rem;
    height:2.5rem;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    margin:.75rem auto .4rem;
}
.titBox>img{
    align-self: center;
    width:2.5rem;
}
.titleImg>p{
    font-size: .7rem;
    color:#fff;
    line-height: .7rem;
}
.titleImg>p:last-child{
    text-decoration:underline ;
}
.titleImg>.hehe{
    margin:.4rem auto;
}
.mCtit{
    margin:0 .75rem;
    font-size: .7rem;
}
.mCtit>p{
    font-size: .7rem;
    line-height: 1.15rem;
}
.inviCode{
    width: 92%;
    border:0;
    border-bottom: 2px solid rgba(255, 152, 0, 1);
    height:1.5rem;
    text-align: center;
    margin-top:.75rem;
    font-size: .7rem;
    background:rgba(0,0,0,0);
}
.flxBtn{
    height:2.25rem;
    width:100%;
    position: fixed;
    bottom: 0rem;
    left:0rem;
}
.sqBtn{
    width:10rem;
    height:1.75rem;
    background: rgba(255, 152, 0, 1);
    border-radius: 1rem;
    font-size: .7rem;
    border:0;
    color:#fff;
    margin: 0 auto;
    margin-top:.25rem;
}
.sqBtn::after{
    border:0;
}
.Rules{
    font-size: .7rem;
    width:92%;
    text-align: left;
    margin:.75rem auto;
}
.no_con{
    margin-bottom: .5rem;
    color:#101010;
}
.no_content{
    font-size: .7rem;
    line-height: 1rem;
    color:#888;
}
</style>
