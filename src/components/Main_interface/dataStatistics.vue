<template>
    <div class="dataStatistics" v-if="show">
        <div class="for" v-for="(item, index) in msg" :key="index" @click="edit(item.id)">
            <img class="shu" src="@/assets/membershipApp_shu.png" alt="">
            <div class="fortext" v-text="item.company_name">北京聚牛天下网络科技有限公司北京聚牛天下网络科技有限公司北京聚牛天下网络科技有限公司</div>
            <div class="forNum">
                <span>未填写字段 <span v-text="item.non_fields_count">10</span></span>
                <span>有误数据 <span v-text="item.error_fields_count">10</span></span>
            </div>
            <img class="righ" src="@/assets/right.png" alt="">
        </div>
        <div class="blank" v-if="msg.length <= 0">
          <img src="@/assets/blank.png" alt="">
          <div>您上传的模板内容为空，请重新上传</div>
        </div>
        <div class="btnBox" v-if="msg.length <= 0">
            <button class="qx" @click="qx(1)">重新上传</button>
        </div>
        <div class="btnBox" v-else>
            <button class="qx" @click="qx">重新上传</button>
            <button class="qr" v-if="btnfal" @click="qr">提交</button>
            <button class="qrs" v-else @click="qr">提交</button>
        </div>
        <editNewCustomer ref="edit"/>
        <Toast ref="Toast"/>
    </div>
</template>

<script>
import editNewCustomer from '@/components/Main_interface/editNewCustomer'

export default {
  name: 'dataStatistics',
  data () {
    return {
      show: false,
      msg: [],
      btnfal: true
    }
  },
  components: {
    editNewCustomer
  },
  methods: {
    qx (num) {
      if (num === 1) {
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
        Content: '是否确认提交数据',
        type: 1,
        btn: 2,
        success: () => {
          this.api.postDataOk((res) => {
            this.$router.push('/home')
            this.Global.navListType = [false, false, true, false]
          }, () => {
            this.$router.push('/home')
            this.Global.navListType = [false, false, true, false]
          })
        },
        fail: (err) => {
          console.log(err)
        }
      }
      this.$refs.Toast.on_display(obj)
    },
    edit (id) {
      this.$refs.edit.init(id)
    },
    close () {
      this.show = false
    },
    on_display () {
      this.btnfal = true
      this.show = true
      this.api.SubFile((res) => {
        this.msg = res.data.results
        this.msg.map((p1, p2) => {
          if (p1.error_fields_count !== 0) {
            this.btnfal = false
          } else if (p1.non_fields_count !== 0) {
            this.btnfal = false
          }
        })
      }, (err) => {
        console.log(err)
      })
    }
  },
  mounted (options) {
    document.title = '数据确认'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dataStatistics{
    position: fixed;
    top:0;
    left: 0;
    width:100%;
    height:100%;
    overflow: auto;
    background:#fafafa;
}
.for{
    padding:.5rem 1.2rem;
    border-radius: .25rem;
    background:#fff;
    width:calc(92% - 2.4rem);
    text-align: left;
    position: relative;
    margin:.5rem auto;
}
.for>.fortext{
    font-size: .7rem;
}
.for>img{
    width:.7rem;
    height:.7rem;
}
.shu{
    position: absolute;
    left:.5rem;
    top:.6rem;
}
.righ{
    position: absolute;
    right:.5rem;
    top:calc(50% - .35rem);
}
.forNum{
    font-size: .6rem;
    color:#101010;
    margin-top:.5rem;
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
.qrs{
    background:#f1f1f1;
    color:#888;
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
