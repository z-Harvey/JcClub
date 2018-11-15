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
    this.$router.push('/memberJournal')
    return
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
          case 3:
            _this.getApplyStatus()
            break
        }
      } else {
        _this.$router.push({
          name: 'login',
          params: {token: res.data.token}
        })
      }
    }, function (err) {
      console.log(err)
    })
  },
  methods: {
    getApplyStatus: function () {
      let _this = this
      _this.api.getApplyStatus(function (res) {
        if (res.data[0].status === 1) {
          _this.$router.push({ path: '/home' })
        } else if (res.data[0].status === 4 || res.data[0].status === 5) {
          _this.$router.push({
            name: 'applySuccess',
            params: res.data[0]
          })
        } else if (res.data[0].status === 6 || res.data[0].status === 2) {
          _this.$router.push({
            name: 'examineType',
            params: res.data[0]
          })
        } else if (res.data[0].status === 3) {
          _this.$router.push({
            name: 'NoMember',
            params: res.data[0]
          })
        }
      }, function (err) {
        console.log(err)
      })
    }
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
