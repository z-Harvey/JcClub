<template>
    <div class="buOppoList" v-if="show">
        <div class="fors" v-for="(item, index) in dataList" :key="index" @click.stop="path(item)">
            <div class="forList">
                <div class="ciPro">
                    <div v-if="item.customer" v-text="'#' + item.customer + '#'"></div>
                    <div v-for="(items, index) in item.product" :key="index" v-text="'#' + items.key + '#'"></div>
                </div>
                <div class="eas" v-text="item.desc"></div>
                <div class="tapList">
                    <div v-if="item.type" v-text="item.type">IT互联网</div>
                    <div v-if="item.industry.length>0" v-text="item.industry[0]">中小企业</div>
                </div>
            </div>
            <div class="forFoot">
                <div class="footLef">
                    <div class="time">
                        <img src="@/assets/timeg.png" alt="">
                        <span v-text="'剩余' + item.residue_time + '天'"></span>
                    </div>
                    <div class="loock">
                        <img src="@/assets/eyeg.png" alt="">
                        <span v-text="item.see_num">999</span>
                    </div>
                </div>
                <div class="footBtnBox">
                    <button v-if="shei === 'my'" @click="edit(item)">编辑</button>
                </div>
            </div>
        </div>
        <div class="blank" v-if="dataList.length === 0">
            <img src="@/assets/blank.png" alt="">
            <div class="blankDi">空空如也~~</div>
        </div>
        <Toast ref="Toast"/>
    </div>
</template>

<script>
export default {
  name: 'buOppoList',
  data () {
    return {
      show: false,
      dataList: [],
      shei: false
    }
  },
  methods: {
    on_display () {
      this.show = true
      let str = 'user=' + this.$route.query.user_id
      if (parseInt(this.Global.userInfo.myId) === parseInt(this.$route.query.user_id)) {
        this.shei = 'my'
      }
      this.api.myAndYouOppoList(str, (res) => {
        res.data.results.map((p1) => {
          p1.product = JSON.parse(p1.product)
          p1.industry = p1.industry.split('、')
        })
        this.dataList = res.data.results
      }, (err) => {
        this.errMotl(err)
      })
    },
    path (item) {
      this.$router.push({name: 'buOppoInfo', query: {id: item.id}})
    },
    edit (ite) {
      this.$router.push({name: 'buOppoNew', query: {id: ite.id}})
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
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.forList{
    padding:.5rem .75rem;
    width: calc(92% - 1.5rem);
    background:#fff;
    margin:0 auto;
    border-bottom:1px solid rgba(240, 239, 245, 1);
}
.fors{
    margin-bottom: .5rem;
}
.ciPro{
    font-size: .7rem;
    text-align: left;
    color:rgba(255, 152, 0, 1);
}
.eas{
    font-size: .7rem;
    color:#101010;
    text-align: left;
    line-height: 1rem;
    max-height: 2rem;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.tapList{
    font-size: .5rem;
    text-align: left;
    margin-top:.4rem;
}
.tapList>div{
    padding:.2rem .4rem;
    background:rgba(236, 236, 237, 1);
    color:#888;
    display: inline-block;
}
.forFoot{
    font-size: .6rem;
    text-align: left;
    padding:.65rem .75rem .6rem;
    width:calc(92% - 1.5rem);
    background: #fff;
    margin: 0 auto;
}
.footLef{
    float: left;
    line-height: 1.25rem;
}
.forFoot>.footLef>div>img{
    width: .7rem;
    height:.7rem;
    vertical-align: text-top;
}
.forFoot>.footLef>div{
    display: inline-block;
}
.footBtnBox{
    height:1.25rem;
}
.footBtnBox>button{
    width:3rem;
    height:1.25rem;
    border-radius: 1.5rem;
    background:rgba(255, 152, 0, 0.1);
    color:rgba(255, 152, 0, 1);
    font-size: .6rem;
    border: none;
    float: right;
}
.footBtnBox>button::after{
    border:none;
}
.blank>img{
  width:6.66rem;
  height:6.66rem;
}
.blankDi{
    font-size: .7rem;
    line-height: 1.5rem;
}
</style>
