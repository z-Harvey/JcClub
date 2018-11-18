<template>
  <div class="Check" v-if="show">
        <div class="contBox">
            <div class="checkBox">
                <div v-for="(item,index) in arr" :key="index" @click="btn(item)">
                    <p v-text="item.name"></p>
                    <div v-if="item.show"><img src="@/assets/yes.png" alt=""></div>
                </div>
                <p style="height:2rem;"></p>
            </div>
            <button @click="OK" class="OK">确认</button>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Check',
  data () {
    return {
      arr: [],
      show: false,
      que: {}
    }
  },
  methods: {
    on_display: function (obj) {
      let _this = this
      _this.que = obj
      if (obj.type === 'submitAdd') {
        _this.httpQuery(1)
      } else {
        _this.httpQuery(2)
      }
      this.show = true
    },
    xiansuo: function (obj) {
      let _this = this
      _this.que = obj
      _this.httpQuery(1)
      this.show = true
    },
    close: function () {
      this.show = false
    },
    OK: function () {
      let _this = this
      let arr = []
      _this.arr.map(function (p1, p2) {
        if (p1.show) {
          arr.push(p1.name)
        }
      })
      if (_this.que.type === 'xiansuo') {
        _this.que.success(arr.join('、'))
        _this.close()
        return
      }
      _this.$emit('ok', arr.join('、'))
      _this.close()
    },
    httpQuery: function (num) {
      let _this = this
      if (num === 1) {
        _this.api.getDepartmentList(function (res) {
          _this.arr = res.data
          _this.arr.map(function (p1, p2) {
            p1['show'] = false
          })
        }, function (err) {
          console.log(err)
        })
      } else if (num === 2) {
        _this.api.getCompanytype(function (res) {
          console.log(res)
          _this.arr = res.data
          _this.arr.map(function (p1, p2) {
            p1['show'] = false
          })
        }, function (err) {
          console.log(err)
        })
      }
    },
    btn: function (item) {
      let _this = this
      let arrs = []
      if (_this.que.type === 'xiansuo') {
        if (item.show) {}
        let iw = 0
        _this.arr.map(function (p1, p2) {
          if (p1.show) {
            iw = iw + 1
          }
        })
        _this.arr.map(function (p1, p2) {
          if (iw < 3 || item.show) {
            if (p1.id === item.id) {
              p1.show = !p1.show
            }
          }
          arrs.push(p1)
        })
      } else {
        _this.arr.map(function (p1, p2) {
          if (p1.id === item.id) {
            p1.show = !p1.show
          } else if (_this.que.Pattern === 1) {
            p1.show = false
          }
          arrs.push(p1)
        })
      }
      _this.arr = arrs
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Check{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index: 10;
    background: rgba(0,0,0,.2);
    display: flex;
}
.contBox{
    width:calc(92% - 1rem);
    max-height:19rem;
    background:#fff;
    margin:0 auto;
    align-self: center;
    border-radius: .2rem;
    padding:.5rem;
    position: relative;
}
.checkBox{
    max-height:17rem;
    margin:0 auto;
    align-self: center;
    border-radius: .2rem;
    padding:.5rem;
    overflow: auto;
    position: relative;
}
.checkBox>div{
    font-size: .7rem;
    line-height: 2rem;
    border-bottom: 1px solid rgba(170, 170, 170, .1);
    position: relative;
}
.checkBox>div>div{
    position: absolute;
    width:.7rem;
    height:2rem;
    display: flex;
    right:1rem;
    top:0;
}
.checkBox>div>div>img{
    width:.7rem;
    height:.7rem;
    align-self: center;
}
.OK{
    width:calc(100% - 1rem);
    margin-left:.5rem;
    height:2rem;
    background:#fff;
    color:rgba(2, 187, 0, 1);
    position: absolute;
    bottom: .5rem;
    left: 0;
    border:0;
    font-size: .7rem;
}
.OK::after{
    border:0;
}
</style>
