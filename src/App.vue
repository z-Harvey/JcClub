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
    let _this = this
    let obj = {
      code: '1'
    }
    _this.api.getToken(obj, function (res) {
      if (res.data.is_user === 1) {
        switch (res.data.step) {
          case 0:
            _this.$router.push('/NoMember')
            break
          case 1:
            _this.$router.push('/membershipApp')
            break
          case 2:
            _this.$router.push({
              path: '/submitAdd',
              query: {step: 2}
            })
            break
        }
      } else {
      }
    }, function (err) {
      console.log(err)
    })
    // return
    //   _this.Global.userInfo = res.data
    //   _this.$axios.defaults.headers.Authorization = 'JWT ' + _this.Global.userInfo.token
    //   console.log(_this.$axios.defaults)
    //   if (res.data.is_user === 1) {
    //     switch (res.data.step) {
    //       case 0:
    //         _this.$router.push('/NoMember')
    //         break
    //       case 1:
    //         _this.$router.push('/membershipApp')
    //         break
    //     }
    //   } else {

    //   }
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
