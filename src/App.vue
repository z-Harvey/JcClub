<template>
  <div id="app">
    <router-view/>
    <!-- <button v-on:click="clicks">click</button> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      path: 1
    }
  },
  mounted () {
    // this.$router.push('/editInfo')
    // this.$axios.get('https://open.weixin.qq.com/connect/qrconnect?appid=wx96f67a9a1e73712d&redirect_uri=REDIRECT_URI&response_type=code&scope=["http://localhost:8080"]&state=STATE#wechat_redirect').then(function (res) {
    //   console.log(res)
    // })
    // wx.config({
    //   debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //   appId: 'wx96f67a9a1e73712d', // 必填，公众号的唯一标识
    //   timestamp: new Date().getTime(), // 必填，生成签名的时间戳
    //   nonceStr: 'adfasdf32avsdfc23', // 必填，生成签名的随机串
    //   signature: 'bxLdikRXVbTPdHSM05e5u5sUoXNKd8-41ZO3MhKoyN5OfkWITDGgnr2fwJ0m9E8NYzWKVZvdVtaUgWvsdshFKA', // 必填，签名
    //   jsApiList: ['onMenuShareTimeline'], // 必填，需要使用的JS接口列表
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })
    // console.log(wx)
  },
  methods: {
    clicks: function () {}
  }
}
</script>

<style>
*{margin:0;padding:0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
