<template>
    <div class="batchNew">
        <div class="btnBox btnBox1">
            <p>下载模板</p>
            <div @click="getFile" class="btn" download="酷牛仔批量上传模板文件.xlsx">
                <img src="@/assets/bottom_.png" alt="">
                <span>下载模板</span>
                <!-- <input type="file" accept="image/*"> -->
            </div>
        </div>
        <div class="btnBox">
            <p>上传文件</p>
            <div class="btn">
                <img src="@/assets/top_.png" alt="">
                <span>上传数据文件</span>
                <input @change="putFile($event)" type="file">
            </div>
            <div class="speed" v-if="upz">
                <div class="speedBox"><div class="speedColor" :style="'width:' + complete + '%;'"></div></div>
                <span v-text="uptext">上传中</span>
            </div>
        </div>
        <div class="footer">
            <button v-if="upz" @click="btn">下一步</button>
            <button v-else disabled class="dis">下一步</button>
        </div>
        <Toast ref="Toast"/>
    </div>
</template>

<script>
import http from 'axios'

export default {
  name: 'batchNew',
  data () {
    return {
      complete: 0,
      upz: false,
      uptext: '上传中'
    }
  },
  methods: {
    btn () {
      this.$router.push('/dataConfirm')
    },
    putFile (e) {
      let obj = new FormData()
      let _this = this
      this.uptext = '上传中'
      this.complete = 0
      obj.append('file', e.target.files[0])
      let config = {
        onUploadProgress: progressEvent => {
          var complete = (progressEvent.loaded / progressEvent.total * 100 | 0)
          _this.complete = complete
        }
      }
      http.post('/markFile/', obj, config).then((res) => {
        this.uptext = '完成'
        this.upz = true
      }, (err) => {
        this.errMotl(err)
      })
    },
    getFile () {
      window.location.href = '/static/批量新增客户模板.xlsx'
    },
    errMotl (errData) {
      let errStr = ''
      let tit = this.Global.HTTPStatusCode[errData.status]
      for (let i in errData.data) {
        errStr += i + ' : '
        errStr += errData.data[i]
      }
      let obj = {
        Title: tit,
        Content: errStr || '无错误内容提示',
        type: 1,
        btn: 0
      }
      this.$refs.Toast.on_display(obj)
    }
  },
  mounted (options) {
    document.title = '批量新增客户'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.batchNew{
    position: fixed;
    width:100%;
    height:100%;
    top:0;
    left:0;
    background:rgba(249, 249, 249, 1);
}
a{
    text-decoration:none;
}
.btnBox{
    font-size: .7rem
}
.btnBox>.btn{
    display: inline-block;
    border-radius: .2rem;
    padding:.35rem .4rem;
    border:1px solid rgba(255, 152, 0, 1);
    color:rgba(255, 152, 0, 1);
    line-height: .7rem;
    margin-top:.4rem;
    position: relative;
}
.btnBox>.btn>img{
    width:.8rem;
    height:.8rem;
    vertical-align: text-top;
}
.btn>input{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    opacity: 0;
}
.btnBox1{
    margin:4rem 0 2.75rem;
}
.speed{
    padding: 0 1.2rem;
    color:#101010;
    margin-top:.75rem;
    height:1rem;
    text-align: left;
}
.speed>span{
    vertical-align: top;
    line-height: 1rem;
    float: right;
}
.speedBox{
    width:80%;
    height:.3rem;
    background: rgba(245, 245, 245, 1);
    border-radius: .4rem;
    margin-top:.3rem;
    display: inline-block;
}
.speedColor{
    width:0;
    transition: .1s ease;
    height:.3rem;
    border-radius: .4rem;
    background:rgba(255, 152, 0, 1);
}
.footer{
    width: 100%;
    height:2.25rem;
    background:#fff;
    position: fixed;
    bottom: 0rem;
    left: 0rem;
}
.footer>button{
    width:10rem;
    height:1.75rem;
    border:none;
    background:rgba(255, 152, 0, 1);
    color:#fff;
    border-radius: 1rem;
    margin:.25rem 0;
    font-size: .7rem;
}
.footer>button::after{
    border:none;
}
.footer>.dis{
    background:#f1f1f1;
    color:#888;
}
</style>
