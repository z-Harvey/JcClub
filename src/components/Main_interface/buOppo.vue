<template>
  <div class="buOppo">
    <div class="srceach">
        <div class="inpBox">
            <img src="@/assets/srceach.png">
            <input type="text" v-model="src" @blur="blurs()" placeholder="输入关键字进行搜索">
        </div>
        <button class="srceBtn" @click="srceach">搜索</button>
    </div>
    <div class="sort" style="display:none;">
        <div @click="sorts(0)">
            <span>客户行业</span>
            <img v-if="sort[0]" src="@/assets/bot1.png">
            <img v-else src="@/assets/bot2.png">
        </div>
        <div @click="sorts(1)">
            <span>范围</span>
            <img v-if="sort[1]" src="@/assets/bot1.png">
            <img v-else src="@/assets/bot2.png">
        </div>
        <div @click="sorts(2)">
            <span>默认排序</span>
            <img v-if="sort[2]" src="@/assets/bot1.png">
            <img v-else src="@/assets/bot2.png">
        </div>
    </div>
    <div class="content">
        <div class="contFor" v-for="(item, index) in dataList" :key="index">
            <div class="forIner">
                <div class="userImg" @click="pathCard(item)">
                    <img :src="item.avatarurl" alt="">
                </div>
                <div class="userInfo" @click="pathCard(item)">
                    <div class="info">
                        <div class="name" v-text="item.nickname || '--'"></div>
                        <div class="nickName" v-text="item.position || '--' + '/' +item.company_name || '--'">CEO/北京聚牛天下网络科技有限公司</div>
                    </div>
                </div>
                <div class="tap" @click="path(item)">
                    <div v-if="item.simple_name" v-text="'#' + item.simple_name + '#'"></div>
                    <div v-for="(items, index) in item.product" :key="index" v-if="index < 3 && items.key" v-text="'#' + items.key + '#'"></div>
                </div>
                <div class="innerText" v-text="item.desc" @click="path(item)"></div>
                <div class="tag" @click="path(item)">
                    <div v-if="item.industry[0]" v-text="item.industry[0]">IT互联网</div>
                    <div v-if="item.type" v-text="item.type">中小企业</div>
                    <div v-if="item.department" v-text="item.department">技术部门</div>
                </div>
            </div>
            <div class="forFoot">
                <div class="footLef">
                    <img src="@/assets/timeg.png" alt="">
                    <span v-text="'剩余' + item.residue_time + '天'"></span>
                </div>
                <div class="footRig">
                    <img src="@/assets/eyeg.png" alt="">
                    <div v-text="item.see_num"></div>
                </div>
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
  name: 'buOppo',
  data () {
    return {
      sort: [false, false, false],
      src: null,
      dataList: []
    }
  },
  methods: {
    blurs (e) {
      document.documentElement.scrollTop = document.documentElement.scrollTop
      document.body.scrollTop = document.body.scrollTop
    },
    /**
     * 搜索
     */
    srceach () {
      console.log(1)
    },
    pathCard (item) {
      this.$router.push({name: 'cardInfo', query: {user_id: item.user}})
    },
    sorts (num) {
      let arr = [false, false, false]
      if (this.sort[num]) {
        this.sort = arr
        this.$refs.sort.close()
        return
      }
      switch (num) {
        case 0:
          console.log(num)
          break
      }
      arr[num] = true
      this.sort = arr
    },
    path (item) {
      this.$router.push({
        path: '/buOppoInfo',
        query: {
          id: item.id
        }
      })
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
    document.title = '商机'
    let str = ''
    this.api.getBusinessSea(str, (res) => {
      res.data.results.map((p1) => {
        p1.product = JSON.parse(p1.product)
        p1.industry = p1.industry.split('、')
      })
      this.dataList = res.data.results
    }, (err) => {
      this.errMotl(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buOppo{
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: auto;
    top:0;
    left:0;
    background:#f9f9f9;
}
.srceach{
    width:100%;
    height:2rem;
    background: #fff;
    padding-top:.25rem;
    position: fixed;
    top:0rem;
    left:0rem;
    z-index: 9;
}
.inpBox{
    width:74%;
    height:1.75rem;
    background:#f1f1f1;
    border-radius: .25rem;
    margin-left:.8rem;
    display: flex;
    float: left;
}
.inpBox>img{
    width:.8rem;
    height:.8rem;
    float: left;
    margin:0 0 0 .35rem;
    align-self: center;
}
.inpBox>input{
    width:85%;
    height:1.5rem;
    align-self: center;
    margin-left:.5rem;
    border:0;
    background: rgba(0,0,0,0);
    line-height: 1.5rem;
    font-size: .7rem;
}
.srceBtn{
    width:2.75rem;
    height:1.75rem;
    float: right;
    margin-right:.75rem;
    border-radius: .15rem;
    background:rgba(255, 152, 0, 1);
    color:#fff;
    border:0;
    font-size: .7rem;
}
.srceBtn::after{
    border:0;
}
.sort{
    position: fixed;
    top:2rem;
    left:0;
    display: flex;
    justify-content:space-around;
    height:2.25rem;
    width:100%;
    font-size: .6rem;
    color:#101010;
    background: #fff;
    border-bottom: 1px solid #f7f7f7;
    z-index: 9;
}
.sortRig{
    position: fixed;
    top:2rem;
    width:2.25rem;
    right:0;
    height:2.25rem;
    font-size: .6rem;
    color:#101010;
    background: #fff;
    border-bottom:1px solid #f7f7f7;
    border-left:1px solid #f7f7f7;
    display: flex;
}
.sortRig>img{
  width:.75rem;
  height:.75rem;
  margin:0 auto;
  align-self: center;
}
.sort>div{
    height:2.75rem;
    line-height: 2.75rem;
}
.sort>div>img{
    width:.65rem;
    height:.65rem;
}
.sort>div>.pai{
    width:.75rem;
    height:.75rem;
    vertical-align: text-top;
}
.content{
    /* margin-top:4.5rem; */
    margin-top:2.5rem;
}
.contFor{
    margin-bottom: .5rem;
}
.forIner{
    padding:.75rem .5rem .5rem;
    background:#fff;
    width:calc(92% - 1rem);
    border-radius: .25rem .25rem 0 0;
    margin:0 auto;
}
.userImg{
    width:2.5rem;
    height:2.5rem;
    display: flex;
    overflow: hidden;
    border-radius: 50%;
    float: left;
}
.userImg>img{
    width: 2.5rem;
    align-self: center;
}
.userInfo{
    height:2.5rem;
    text-align: left;
    display: flex;
    padding-left:.4rem;
}
.info{
    align-self: center
}
.info>.name{
    font-size: .7rem;
    color:#101010;
}
.info>.nickName{
    color:#888;
    font-size: .6rem;
}
.innerText{
    padding-left:2.9rem;
    font-size: .7rem;
    color:#101010;
    text-align: left;
    margin-top:.4rem;
    line-height: 1rem;
    max-height: 2rem;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.tap{
    color:rgba(255, 152, 0, 1);
    font-size: .7rem;
    margin-top:.4rem;
    padding-left:2.9rem;
    text-align: left;
}
.tag{
    padding-left: 2.9rem;
    text-align: left;
    margin-top:.4rem;
}
.tag>div{
    padding:.2rem .4rem;
    background:rgba(236, 236, 236, 1);
    color:#888;
    display: inline-block;
    font-size: .5rem;
}
.forFoot{
    padding:.75rem 1.3rem .75rem 2.9rem;
    width:calc(92% - 4.2rem);
    margin:0 auto;
    border-radius: 0 0 .25rem .25rem;
    border-top:1px solid rgba(240, 239, 245, 1);
    text-align: left;
    height:1rem;
    background: #fff;
}
.footLef{
    font-size: .6rem;
    float: left;
}
.footLef>img{
    width:.7rem;
    height:.7rem;
    vertical-align: text-top;
}
.footRig{
    float: right;
    position: relative;
    height:1rem;
}
.footRig>img{
    width:1rem;
    height:1rem;
}
.footRig>div{
    max-width:1rem;
    min-width: .7rem;
    font-size: .5rem;
    color:rgba(255, 152, 0, 1);
    position: absolute;
    top:0rem;
    left:.8rem;
    border-radius: 2rem;
    background:#fff;
    text-align: center;
}
.blank{
    position: fixed;
    width:100%;
    height:calc(100% - 6.66rem);
    top:6.66rem;
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
