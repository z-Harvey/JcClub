<template>
  <div id="app">
    <router-view/>
    <span class="ers" v-text="urlCode"></span>
    <span class="ers" v-text="error"></span>
    <!-- <button v-on:click="clicks">click</button> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      path: 1,
      urlCode: '',
      error: ''
    }
  },
  mounted () {
    // this.$router.push('adminNav')
    // return
    let r = decodeURI(window.location.search.substr(1))
    let arr = r.split('&')
    let urlCode = null
    let pages = null
    for (let i = 0; i < arr.length; i++) {
      let arr1 = arr[i].split('=')
      if (arr1[0] === 'code') {
        urlCode = arr1[1]
      }
    }
    for (let i = 0; i < arr.length; i++) {
      var arr1 = arr[i].split('=')
      if (arr1[0] === 'pages') {
        pages = arr1[1]
      }
    }
    let _this = this
    let obj = {
      code: urlCode
    }
    _this.api.getToken(obj, (res) => {
      _this.api.headerToken(res.data.token)
      _this.Global.userInfo['token'] = res.data.token
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
            _this.getApplyStatus(pages)
            break
        }
      } else {
        _this.$router.push({
          name: 'login',
          params: {token: res.data.token}
        })
      }
    }, (err) => {
      this.urlCode = 'postData : ' + err.config.data
      this.error = '  : ' + JSON.stringify(err)
    })
  },
  methods: {
    getApplyStatus (pages) {
      let _this = this
      this.api.getMine((res) => {
        this.Global.userInfo.myId = res.data.id
        _this.api.getApplyStatus((res) => {
          if (res.data[0].status === 1) {
            switch (pages) {
              case '0':
                _this.$router.push({ path: '/applySuccess' })
                break
              case '1': // 公海
                _this.$router.push({ path: '/International' })
                break
              case '2': // 我的客户
                _this.$router.push({ path: '/myCustomer' })
                break
              case '3': // 我
                _this.Global.navListType = [false, true]
                _this.$router.push({ path: '/home' })
                break
              case '4': // 我的关注
                _this.$router.push({ path: '/HisFollow', query: {source: 'my'} })
                break
              case '5': // 新增客户
                _this.$router.push({ path: '/MarkupCu' })
                break
              case '6': // 会员
                _this.$router.push({ path: '/homeContent' })
                break
              case '7': // 商机池
                _this.$router.push({ path: '/buOppo' })
                break
              case '8': // 需求池
                _this.$router.push({ path: '/demand' })
                break
              case '9': // 我邀请的会员
                _this.$router.push({ path: '/myInvitation' })
                break
              default:
                _this.$router.push({ path: '/home' })
                break
            }
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
        }, (err) => {
          console.log(err)
        })
      }, (err) => {
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
.ers{
  font-size: .6rem;
}
</style>
