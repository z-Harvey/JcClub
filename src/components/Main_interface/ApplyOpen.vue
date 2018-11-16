<template>
  <div class="ApplyOpen">
    <div class="title">
        <p>开通条件</p>
        <p>标记<span v-text="dataList.need_count"></span>家有决策链线索的客户</p>
    </div>
    <div class="cont">
        <div>
            <span>当前已标记</span>
            <span v-text="dataList.mark_count + '家'"></span>
        </div>
        <div>
            <span>还需要标记</span>
            <span v-text="dataList.also_need_count + '家'"></span>
        </div>
    </div>
    <button class="btn" @click="path(0)">去标记</button>
    <div class="flxBom">
        <button @click="path(1)">申请开通</button>
    </div>
    <srceachMol ref="srcea"/>
  </div>
</template>

<script>
import srceachMol from '@/components/assembly/srceachKehu'

export default {
  name: 'ApplyOpen',
  data () {
    return {
      dataList: {}
    }
  },
  components: {
    srceachMol
  },
  methods: {
    path: function (num) {
      let _this = this
      if (num === 0) {
        // _this.$refs.srcea.on_display()
        _this.$router.push('/srceach')
      } else if (num === 1) {
        _this.api.PostCompanyPerm(function (res) {
          if (res.status === 201) {
            console.log('申请成功')
          }
        }, function (err) {
          if (err.status === 400) {
            console.log('正在申请，请勿重复提交')
          }
        })
      }
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
</style>
