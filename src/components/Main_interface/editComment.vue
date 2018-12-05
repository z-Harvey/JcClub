<template>
    <div class="editComment">
        <Toast ref="toast"/>
        <div class="titleBox">
            <img src="@/assets/membershipApp_shu.png" alt="">
            <span v-text="comName"></span>
        </div>
        <div class="miaoshu">
            选择你对客户的印象或新增一个标签
        </div>
        <div class="tagBox">
            <span v-for="(item, index) in msg" :key="index" v-text="item.name" :class="item.show?'navTag':''" @click="tap(item)"></span>
        </div>
        <div class="jia" @click="jia">+</div>
        <div class="subBox">
            <button class="submit" @click="submit">提交</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'editComment',
  data () {
    return {
      msg: [],
      que: {},
      comName: null
    }
  },
  methods: {
    tap: function (tap) {
      tap.show = !tap.show
    },
    jia: function () {
      let _this = this
      let obj = {
        Title: '添加标签',
        type: 5,
        btn: 1,
        success: _this.jisCallback
      }
      this.$refs.toast.on_display(obj)
    },
    jisCallback: function (data) {
      let obj = {
        name: data,
        show: true
      }
      this.msg.push(obj)
    },
    submit: function () {
      let _this = this
      let arr = []
      _this.msg.map(function (p1, p2) {
        if (p1.show) {
          arr.push(p1.name)
        }
      })
      let data = {
        reviews: arr.join('|')
      }
      this.api.patchMyCustomers(_this.que.com_id, data, (res) => {
        if (res.status === 200) {
          _this.$router.go(-1)
        }
      }, (err) => {
        this.errMotl(err)
      })
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
  mounted (options) {
    document.title = '编辑点评标记'
    let _this = this
    _this.que = _this.$route.query
    this.api.getCompany(this.que.com_id, (res) => {
      this.comName = res.data.name
    }, (err) => {
      this.errMotl(err)
    })
    _this.api.getReviews((res) => {
      for (let i = 0; i < res.data.length; i++) {
        let obj = {
          name: res.data[i],
          show: false
        }
        _this.msg.push(obj)
      }
    }, (err) => {
      this.errMotl(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.editComment{
    position: fixed;
    width:100%;
    height:100%;
    background:#f9f9f9;
}
.titleBox{
    background:#fff;
    height:2rem;
    line-height: 2rem;
    padding:0 .75rem;
    color:rgba(255, 152, 0, 1);
    font-size: .7rem;
    text-align: left;
}
.titleBox>img{
    width:.7rem;
    height:.7rem;
}
.subBox{
    width:100%;
    height:2.25rem;
    background:#fff;
    position: fixed;
    bottom: 0;
    left: 0;
}
.submit{
    width:10rem;
    height: 1.75rem;
    background:rgba(255, 152, 0, 1);
    color:#fff;
    border-radius: 1rem;
    margin-top:.25rem;
    border:none;
}
.submit::after{
    border:none;
}
.miaoshu{
    font-size: .7rem;
    padding-left:.75rem;
    line-height: 2rem;
    color:#888;
    text-align: left;
}
.tagBox{
    padding-left:.75rem;
    font-size: .7rem;
    color:#888;
    line-height: 1.5rem;
    text-align: left;
}
.tagBox>span{
    display: inline-block;
    padding: 0 .5rem;
    background: #fff;
    margin:0 .4rem .4rem 0;
}
.tagBox>.navTag{
    background: rgba(255, 152, 0, 1);
    color:#fff;
}
.jia{
    width:2.25rem;
    height:1.5rem;
    background:#fff;
    border:1px solid rgba(255, 152, 0, 1);
    color:rgba(255, 152, 0, 1);
    line-height: 1.5rem;
    margin-left:.75rem;
}
</style>
