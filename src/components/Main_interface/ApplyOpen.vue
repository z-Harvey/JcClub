<template>
  <div class="ApplyOpen">
    <div class="title">
      <p>开通条件</p>
      <p>标记<span v-text="dataList.need_count"></span>家有决策链线索的客户</p>
    </div>
    <div class="cont">
      <div>
        <span>当前已完善</span>
        <span v-text="dataList.mark_count + '家'"></span>
      </div>
      <div>
        <span>还需要完善</span>
        <span v-text="dataList.also_need_count + '家'"></span>
      </div>
    </div>
    <button class="btn" @click="path(0)">去标记</button>
    <div class="flxBom">
      <button :class="dataList.mark_count < dataList.also_need_count? 'noYes': ''" @click="path(1)">申请开通</button>
    </div>
    <div class="btnMot" v-show="newList">
      <div class="motCont">
        <div>
          <div @click="path(2)">
            <div>
              <img src="@/assets/Alone_a.png" alt="">
            </div>
            <div>新增客户</div>
          </div>
          <div @click="path(3)">
            <div>
              <img src="@/assets/Alone.png" alt="">
            </div>
            <div>批量新增客户</div>
          </div>
        </div>
        <div class="btnQx" @click="path(0)">取消</div>
      </div>
    </div>
    <srceachMol ref="srcea"/>
    <Toast ref="Toast" />
  </div>
</template>

<script>
import srceachMol from '@/components/assembly/srceachKehu'

export default {
  name: 'ApplyOpen',
  data () {
    return {
      dataList: {},
      newList: false
    }
  },
  components: {
    srceachMol
  },
  methods: {
    path: function (num) {
      let _this = this
      if (num === 0) {
        _this.newList = !_this.newList
      } else if (num === 1) {
        _this.api.PostCompanyPerm(function (res) {
          if (res.status === 201) {
            let obj = {
              Title: '提示',
              Content: '已提交审核，等待确认',
              type: 1,
              btn: 0,
              No: '确认',
              fail: (res) => {
                _this.$router.push({
                  path: '/home'
                })
              }
            }
            _this.$refs.Toast.on_display(obj)
          }
        }, (err) => {
          this.errMotl(err)
          return
          if (err.status === 400) {
            _this.$router.push({
              path: '/home'
            })
          }
        })
      } else if (num === 2) {
        _this.$router.push('/MarkupCu')
      } else if (num === 3) {
        _this.$router.push('/batchNew')
      }
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
    document.title = '酷牛仔'
    let _this = this
    _this.api.CompanyPerm(function (res) {
      _this.dataList = res.data
      console.log(res)
    }, function (err) {
      console.log(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ApplyOpen{
    position: fixed;
    width:100%;
    height:100%;
    background:#f9f9f9;
}
.btnMot{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(15, 15, 15, .55);
}
.motCont{
    width:14rem;
    background:#fff;
    border-radius: .2rem;
    margin: 10rem auto 0;
    font-size: .7rem;
}
.motCont>div{
    display: flex;
    justify-content: space-around;
}
.motCont>div>div{
    width:50%;
    padding:.75rem 0;
}
.motCont>div>div>div>img{
    width: 1.5rem;
    height: 1.5rem;
}
.btnQx{
    color:#888;
    font-size: .7rem;
    height:2rem;
    line-height: 2rem;
}
.title{
    height:2.25rem;
    padding:.5rem .75rem;
    font-size: .7rem;
    background:rgba(255, 152, 0, 1);
    color:#fff;
    line-height: 1.125rem
}
.cont{
    width:calc(92% - 1.5rem);
    border-radius: .25rem;
    background:#fff;
    padding:.75rem;
    font-size: .7rem;
    margin:.75rem auto 0;
}
.cont>div{
    height:1rem;
    line-height: 1rem;
}
.cont>div:first-child{
    margin-bottom: .5rem;
}
.cont>div>span:first-child{
    float: left;
    color:#101010;
}
.cont>div>span:last-child{
    float: right;
    color:rgba(255, 152, 0, 1);
}
.btn{
    font-size: .8rem;
    width:10rem;
    height:1.75rem;
    margin-top:.5rem;
    border-radius: 1rem;
    line-height: 1.75rem;
    color:rgba(255, 152, 0, 1);
    border:1px solid rgba(255, 152, 0, 1);
    background:#fff;
}
.btn::after{
    border:0;
}
.flxBom{
    position: fixed;
    bottom: 0rem;
    width:100%;
    height:2.25rem;
    background: #fff;
    left:0rem;
}
.flxBom>button{
    font-size: .8rem;
    width:10rem;
    height:1.75rem;
    margin-top:.25rem;
    border-radius: 1rem;
    line-height: 1.75rem;
    color:#fff;
    background:rgba(255, 152, 0, 1);
    border:0;
}
.flxBom>button::after{
    border:0;
}
.flxBom>.noYes{
    background:#ccc;
    color:#fff;
}
</style>
