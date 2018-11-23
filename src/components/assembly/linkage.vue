
<template>
   <div class="linkage" v-if="show">
        <div class="cont-box">
            <!-- <div class="tit">一级联动/二级联动/三级联动</div> -->
            <div class="cont-content">
                <div>
                    <div v-for="(item,index) in listData" :key="index" @click="onlin(item)">
                        <p v-text="item.name"></p>
                        <div class="imgBox" v-if="item.show">
                            <img src="@/assets/yes.png" alt="">
                        </div>
                    </div>
                </div>
                <div>
                    <div v-for="(item,index) in listDatas" :key="index" @click="Choices(item)">
                        <p v-text="item.name"></p>
                        <div class="imgBox" v-if="item.show">
                            <img src="@/assets/yes.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <dir style="height:2rem;"></dir>
            <div class="btnbox">
                <button @click="qx" class="btn">取消</button>
                <button @click="ok1" v-if="Choice === 1" class="btn qr">确认</button>
                <button @click="ok2" v-if="Choice === 2" class="btn qr">确认</button>
                <button @click="ok3" v-if="Choice === 3" class="btn qr">确认</button>
            </div>
        </div>
   </div>
</template>

<script>
export default {
  name: 'linkage',
  data () {
    return {
      show: false,
      retuStr: [],
      currList: null,
      dataList: [],
      listData: [],
      listDatas: [],
      msg: {},
      Choice: 0 // 选择类型  单选 多选
    }
  },
  methods: {
    Choices: function (item) {
      let _this = this
      if (this.Choice === 1) {
        _this.check(item)
      } else if (this.Choice === 2) {
        _this.linges(item)
      } else if (this.Choice === 3) {
        _this.linges(item)
      }
    },
    onlin: function (ite) {
      let _this = this
      let arr = []
      _this.listData.map(function (p1, p2) {
        p1.show = false
        if (ite.id === p1.id) {
          p1.show = true
        }
        arr.push(p1)
      })
      _this.api.getSearchIndustry('pid=' + ite.id, function (res) {
        _this.listDatas = res.data
        _this.listDatas.map(function (p1, p2) {
          p1['show'] = false
        })
      }, function (err) {
        console.log(err)
      })
      _this.listData = arr
      _this.currList = ite.id
    },
    check: function (str) {
      let _this = this
      let arr = []
      _this.listDatas.map(function (p1, p2) {
        p1.show = false
        if (p1.id === str.id) {
          p1.show = !str.show
        }
        arr.push(p1)
      })
      _this.listDatas = arr
    },
    linges: function (str) {
      let _this = this
      let arr = []
      let jishu = 0
      console.log(str)
      console.log(_this.dataList)
      if (!str.show) {
        _this.dataList.map(function (p1, p2) {
          p1.cont.map(function (n1, n2) {
            if (n1.show) {
              jishu += 1
            }
          })
        })
        if (jishu === 3) {
          return
        }
      }
      _this.listDatas.map(function (p1, p2) {
        if (p1.id === str.id) {
          p1.show = !str.show
        }
        arr.push(p1)
      })
      _this.listDatas = arr
      let bur = false
      if (_this.dataList.length === 0) {
        let obj = {
          key: _this.currList,
          cont: _this.listDatas
        }
        _this.dataList.push(obj)
      } else {
        _this.dataList.map(function (p1, p2) {
          if (p1.key !== _this.currList) {
            bur = true
          } else {
            bur = false
          }
        })
        if (bur) {
          let obj = {
            key: _this.currList,
            cont: _this.listDatas
          }
          _this.dataList.push(obj)
        } else {
          _this.dataList.map(function (p1, p2) {
            if (p1.key === _this.currList) {
              p1.cont = _this.listDatas
            }
          })
        }
      }
    },
    close: function () {
      this.show = false
    },
    on_display: function (data) {
      this.show = true
      this.msg = data
      this.Choice = data.Choice
      this.httpQuery(data.type)
    },
    qx: function () {
      this.close()
    },
    httpQuery: function (typ) {
      let _this = this
      if (typ === 'industry') {
        let str = 'pid=0'
        _this.api.getSearchIndustry(str, function (res) {
          _this.listData = res.data
          _this.listData.map(function (p1, p2) {
            p1['show'] = false
          })
        }, function (err) {
          console.log(err)
        })
      }
    },
    ok1: function () {
      let _this = this
      let cllData = null
      _this.listDatas.map(function (p1, p2) {
        if (p1.show === true) {
          cllData = p1
        }
      })
      _this.$emit('ok', cllData)
      this.close()
      _this.listDatas = []
    },
    ok2: function () {
      let _this = this
      let arr = []
      _this.dataList.map(function (p1, p2) {
        p1.cont.map(function (f1, f2) {
          if (f1.show) {
            arr.push(f1.name)
          }
        })
      })
      let obj = {
        name: arr.join('、'),
        type: 'duo'
      }
      this.msg.success(obj)
      _this.close()
      _this.listDatas = []
      _this.dataList = []
    },
    ok3: function () {
      let _this = this
      let arr = []
      _this.dataList.map(function (p1, p2) {
        p1.cont.map(function (f1, f2) {
          if (f1.show) {
            arr.push(f1.name)
          }
        })
      })
      let obj = {
        name: arr.join('、'),
        type: 'duo'
      }
      _this.$emit('ok1', obj)
      _this.close()
      _this.listDatas = []
      _this.dataList = []
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.linkage{
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height:100%;
    z-index: 10;
    background: rgba(0,0,0,.2);
    display: flex;
}
.cont-box{
    width:calc(92% - 1rem);
    max-height:20.5rem;
    min-height: 4rem;
    background:#fff;
    margin:0 auto;
    align-self: center;
    border-radius: .2rem;
    padding:.5rem;
    font-size: .7rem;
    position: relative;
}
.tit{
    color:rgba(255, 152, 0, 1);
    height:1rem;
    line-height: 1rem;
    margin-bottom: .5rem;
}
.cont-content{
    display: flex;
    justify-content: space-between
}
.cont-content>div{
    max-height:16rem;
    overflow: auto;
    text-align: left;
    width: 50%;
}
.cont-content>div>div{
    line-height: 1.3rem;
    padding:.25rem;
    position: relative;
}
.imgBox{
    height:1.3rem;
    position: absolute;
    padding:.25rem;
    top:0;
    right:0;
    display: flex;
}
.imgBox>img{
    width:.7rem;
    height:.7rem;
    align-self: center
}
.btnbox{
    position: absolute;
    bottom: .25rem;
    left:.5rem;
    width:calc(100% - 1rem);
    height:2rem;
    border:0;
    background:#fff;
}
.btnbox>button{
    font-size: .7rem;
}
.btn{
    height:2rem;
    float: left;
    width:50%;
    border:0;
    background:#fff;
}
.btn::after{
    border:0;
}
.qr{
    color:rgba(2, 187, 0, 1);
}
</style>
