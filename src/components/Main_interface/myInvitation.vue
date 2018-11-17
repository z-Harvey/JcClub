<template>
  <div class="myInvitation">
      <div class="content" v-for="(item, index) in dataList" :key="index">
          <div class="yhimg">
              <img :src="item.avatarurl" alt="">
          </div>
          <div class="contat">
              <div class="userName" v-text="item.nickname">韩鹏翔</div>
              <div class="cikeName" v-text="item.club_name">北京酷牛仔俱乐部</div>
              <div class="time">于yyyy/mm/dd hh:mm申请入会</div>
          </div>
          <div class="zhuangtai">
              <span v-if="item.status === 5" class="z1">待审核</span>
              <span v-if="item.status === 4" class="z1">待确认</span>
              <span v-if="item.status === 1 || item.status === 6" class="z1">已通过</span>
              <span v-if="item.status === 2">未通过</span>
              <span v-if="item.status === 3">已退会</span>
          </div>
          <div class="btnList" v-if="item.status === 4||item.status === 0">
              <button class="b1" @click="btn(0, item)">拒绝</button>
              <button class="b2" @click="btn(1, item)">同意</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'myInvitation',
  data () {
    return {
      dataList: []
    }
  },
  methods: {
    btn: function (num, item) {
      console.log(item)
      let obj = {
        user: item.puser,
        is_agree: num
      }
      this.api.postMyInvited(obj, (res) => {
        console.log(res)
        if (res.status === 201) {
          item.status = res.data.status
        }
      }, (err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    document.title = '我邀请的会员'
    this.api.getMyInvited((res) => {
      console.log(res)
      this.dataList = res.data
    }, (err) => {
      console.log(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myInvitation{
    position: fixed;
    width:100%;
    height:100%;
    background:#f9f9f9;
    overflow: auto;
}
.content{
    width:calc(92% - 1rem);
    padding:.75rem .5rem;
    margin:.5rem auto 0;
    border-radius: .25rem;
    background: #fff;
    text-align: left;
    position: relative;
}
.yhimg{
    width:2.5rem;
    height:2.5rem;
    border-radius:50%;
    overflow: hidden;
    display: inline-block;
}
.yhimg>img{
    width:2.5rem;
    align-self: center;
}
.contat{
    display: inline-block;
}
.userName{
    font-size: .7rem;
    color:#101010;
}
.cikeName{
    font-size: .7rem;
    color:#888;
}
.time{
    font-size: .6rem;
    color:#888;
}
.zhuangtai{
    font-size: .7rem;
    position: absolute;
    right:.75rem;
    top:.75rem;
}
.z1{
    color:rgba(255, 152, 0, 1);
}
.btnList{
    text-align: right;
    padding-top:.5rem;
    border:1px solid rgba(247, 247, 247, 1);
    margin-top:.5rem;
}
.btnList>button::after{
    border:0;
}
.btnList>button{
    width:4rem;
    height:1.5rem;
    border-radius: .75rem;
    border: 0;
    line-height: 1.5rem;
}
.b1{
    background: rgba(241, 241, 241, 1);
    color:#888;
}
.b2{
    background: rgba(255, 152, 0, 0.1);
    color:rgba(255, 152, 0, 1);
}
</style>
