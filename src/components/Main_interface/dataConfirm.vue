<template>
    <div class="dataConfirm">
        <div v-if="htSt">
            <div class="title" v-if="!stat">
                <img src="@/assets/info.png" alt="">
                <div>以下 <span v-text="msg.error_count"></span> 条数据数据匹配公司失败，请确认公司名称是否填写正确</div>
            </div>
            <div v-if="!stat">
                <div class="for" v-for="(item, index) in msg.error_data" :key="index">
                    <img src="@/assets/membershipApp_shu.png" alt="">
                    <div v-text="item.company_name"></div>
                </div>
            </div>
            <div class="blank" v-if="stat">
                <img src="@/assets/blank.png" alt="">
                <div>您上传的模板内容为空，请重新上传</div>
            </div>
            <div style="height:3rem;"></div>
            <div class="btnBox">
                <button class="qx" @click="qx">重新上传</button>
                <button class="qr" @click="qrs" v-if="!stat">忽略</button>
            </div>
        </div>
        <div v-else>
            <div class="title" v-if="!stat">
                <img src="@/assets/info.png" alt="">
                <div>以下 <span v-text="msg2.length"></span> 个客户是您新增过的客户，可以选择忽略或覆盖原有数据</div>
            </div>
            <div v-if="!stat">
                <div class="for" v-for="(item, index) in msg2" :key="index">
                    <img src="@/assets/membershipApp_shu.png" alt="">
                    <div v-text="item.company_name"></div>
                    <div class="baif" v-text="'完善度' + item.completion + '%'"></div>
                </div>
            </div>
            <div class="blank" v-if="stat">
                <img src="@/assets/blank.png" alt="">
                <div>您上传的模板内容为空，请重新上传</div>
            </div>
            <div class="footTaps">完善度指当前系统中的客户数据完善程度</div>
            <div style="height:3rem;"></div>
            <div class="btnBox">
                <button class="qx" @click="qxs">覆盖数据</button>
                <button class="qr" @click="qr" v-if="!stat">忽略</button>
            </div>
        </div>
        <Toast ref="Toast"/>
        <dataStatistics ref="dataStatis"/>
    </div>
</template>

<script>
import dataStatistics from '@/components/Main_interface/dataStatistics'

export default {
  name: 'dataConfirm',
  data () {
    return {
      msg: {},
      stat: false,
      msg2: [],
      htSt: true
    }
  },
  components: {
    dataStatistics
  },
  methods: {
    qrs () {
      if (this.msg2.length === 0) {
        this.qr()
        return
      }
      let obj = {
        Title: '提示',
        Content: '忽略后匹配失败的数据将不进行上传，是否继续？',
        type: 1,
        btn: 2,
        success: () => {
          this.htSt = false
        }
      }
      this.$refs.Toast.on_display(obj)
    },
    qxs () {
      let _this = this
      let obj = {
        Title: '提示',
        Content: '注意，确认后之前标记的数据将被当前上传的数据覆盖，是否确认？',
        type: 1,
        btn: 2,
        success: () => {
          this.api.postFileRepeat((res) => {
            if (res.status === 201) {
              this.$refs.dataStatis.on_display()
            }
          }, (err) => {
            _this.errMotl(err)
          })
        }
      }
      this.$refs.Toast.on_display(obj)
    },
    qx () {
      if (this.stat) {
        this.$router.go(-1)
        return
      }
      let obj = {
        Title: '提示',
        Content: '注意，重新上传当前数据不做保留，是否继续？',
        type: 1,
        btn: 2,
        success: () => {
          this.$router.go(-1)
        }
      }
      this.$refs.Toast.on_display(obj)
    },
    qr () {
      let obj = {
        Title: '提示',
        Content: '忽略后匹配失败的数据将不进行上传，是否继续？',
        type: 1,
        btn: 2,
        success: () => {
          this.$refs.dataStatis.on_display()
        }
      }
      this.$refs.Toast.on_display(obj)
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
    document.title = '数据确认'
    this.api.markFileCheck((res) => {
      this.msg = res.data
      if (res.data.error_count === 0 && res.data.error_data.length > 0) {
        this.$refs.dataStatis.on_display()
      } else if (res.data.error_count === 0) {
        this.stat = true
      }
      this.api.getFileRepeat((res) => {
        console.log('重复数据')
        this.msg2 = res.data
      }, (err) => {
        this.errMotl(err)
      })
    }, (err) => {
      this.errMotl(err)
      this.stat = true
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dataConfirm{
    position: fixed;
    top:0;
    left: 0;
    width:100%;
    height:100%;
    overflow: auto;
    background:#fafafa;
}
.footTaps{
    color:#ccc;
    font-size: .6rem
}
.title{
    background:rgba(255, 152, 0, 1);
    padding:.5rem .75rem;
    font-size: .7rem;
    color:#fff;
    text-align: left;
}
.title>img{
    width:.7rem;
    height:.7rem;
    float: left;
}
.title>div{
    padding-left:1rem;
    line-height: .8rem
}
.for{
    width:calc(92% - 1rem);
    padding:.65rem .5rem;
    text-align: left;
    margin:.5rem auto;
    background:#fff;
    border-radius: .25rem;
    position: relative;
}
.for>.baif{
    position: absolute;
    right:0;
    padding:.65rem .5rem;
    top:0;
    color:#888;
    font-size: .6rem;
}
.for>img{
    width:.7rem;
    height:.7rem;
    float: left;
}
.for>div{
    font-size: .7rem;
    line-height: .8rem;
    padding-left: .8rem
}
.btnBox{
    width:100%;
    height:2.25rem;
    background:#fff;
    position: fixed;
    bottom: 0rem;
    left: 0;
}
.btnBox>button{
    width:8.25rem;
    height:1.75rem;
    border-radius: 1.5rem;
    font-size: .7rem;
}
.btnBox>button::after{
    border:none;
}
.qx{
    border:1px solid rgba(255, 152, 0, 1);
    background: #fff;
    color:rgba(255, 152, 0, 1);
}
.qr{
    background: rgba(255, 152, 0, 1);
    color: #fff;
    border:none;
}
.blank{
    position: fixed;
    width:100%;
    height:100%;
    top:0;
    left:0;
    font-size: .7rem;
    line-height: 1.5rem;
}
.blank>img{
    margin-top:6.66rem;
    width: 6.66rem;
    height:6.66rem;
}
</style>
