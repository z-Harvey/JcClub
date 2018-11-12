
<template>
   <div class="linkage" v-if="show">
        <div class="cont-box">
            <!-- <div class="tit">一级联动/二级联动/三级联动</div> -->
            <div class="cont-content">
                <div>
                    <div v-for="(item,index) in listData" :key="index" @click="onlin(item)">
                        <p v-text="item.key"></p>
                        <div class="imgBox" v-if="item.show">
                            <img src="@/assets/yes.png" alt="">
                        </div>
                    </div>
                </div>
                <div>
                    <div v-for="(item,index) in listDatas" :key="index" @click="linges(item)">
                        <p v-text="item.key"></p>
                        <div class="imgBox" v-if="item.show">
                            <img src="@/assets/yes.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <dir style="height:2rem;"></dir>
            <div class="btnbox">
                <button @click="qx" class="btn">取消</button>
                <button @click="qx" class="btn qr">确认</button>
            </div>
        </div>
   </div>
</template>

<script>
export default {
  name: 'linkage',
  data () {
    return {
      show: true,
      retuStr: [],
      currList: null,
      dataList: [],
      listData: [
        {
          key: '啊啊啊',
          show: false
        },
        {
          key: 'ooo',
          show: true
        }
      ],
      listDatas: [
        {
          key: '啊啊啊',
          show: false
        },
        {
          key: 'ooo',
          show: false
        },
        {
          key: 'ooo',
          show: false
        },
        {
          key: 'ooo',
          show: false
        },
        {
          key: 'ooo',
          show: false
        }
      ]
    }
  },
  methods: {
    onlin: function (ite) {
      let _this = this
      _this.listData.map(function (p1, p2) {
        p1.show = false
      })
      ite.show = !ite.show
      _this.currList = ite.key
    },
    linges: function (str) {
      str.show = !str.show
      let _this = this
      let bur = false
      if (_this.dataList.length === 0) {
        let obj = {
          key: _this.currList,
          cont: _this.listDatas
        }
        _this.dataList.push(obj)
      } else {
        _this.dataList.map(function (p1, p2) {
          if (!(p1.key === _this.currList)) {
            bur = true
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
      console.log(_this.dataList)
    },
    close: function () {
      this.show = false
    },
    on_display: function () {
      this.show = true
    },
    qx: function () {
      this.close()
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
.cont-content>div:nth-child(odd)>div:nth-child(odd){
    background:rgba(170,170,179,.2);
}
.cont-content>div:nth-child(even)>div:nth-child(even){
    background:rgba(170,170,179,.2);
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
