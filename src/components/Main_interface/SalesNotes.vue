<template>
    <div class="SalesNotes">
        <Toast ref="Toast"/>
        <div class="title">
            <div class="cikename">
                <img src="@/assets/membershipApp_shu.png" alt="">
                <span v-text="msgData.name">北京聚牛天下网络科技有限公司</span>
            </div>
            <div class="number">
                <span>内部跟进 <span v-text="msgData.club_mark_count"></span></span>
                <span>外部跟进 <span v-text="msgData.out_mark_count"></span></span>
            </div>
            <button @click="path(0)">客户主页</button>
        </div>
        <div class="tit2">
            <p v-for="(item, index) in msgData.reviews" :key="index" v-text="item">有钱任性</p>
            <div @click="navPath(2)">
                <img src="@/assets/edit(1).png" alt="">
                <span>编辑</span>
            </div>
        </div>
        <nav>
            <button @click="navPath(0)" :class="navBtn?'navBtn':''">个人信息</button>
            <button @click="navPath(1)" :class="!navBtn?'navBtn':''">销售足迹 <span v-text="msgData.footPrint_count"></span></button>
        </nav>
        <!-- <router-view :type="'SalesNotes'"></router-view> -->
        <CuInfo ref="cuinfo" :type="'SalesNotes'" :show="navBtn"/>
        <saleFootprint ref="saleFoot" :type="'SalesNotes'" :show="!navBtn"/>
        <div style="height:2.25rem;"></div>
        <div class="footer" v-if="navBtn">
            <button @click="navPath(3)">编辑客户信息</button>
        </div>
        <div class="footer" v-else>
            <button @click="new_foot">新增足迹</button>
        </div>
    </div>
</template>

<script>
import saleFootprint from '@/components/Main_interface/saleFootprint' // 销售足迹
import CuInfo from '@/components/Main_interface/CuInfo' // 客户信息

export default {
  name: 'SalesNotes',
  data () {
    return {
      navBtn: true,
      msgData: {}
    }
  },
  components: {
    saleFootprint,
    CuInfo
  },
  methods: {
    path: function () {
      let _this = this
      this.$router.push({
        path: '/CuHome',
        query: {
          com_id: _this.que.com_id
        }
      })
    },
    navPath: function (num) {
      let _this = this
      switch (num) {
        case 0:
          _this.$refs.cuinfo.SalesNotesInit(_this.que.com_id)
          _this.navBtn = true
          break
        case 1:
          _this.$refs.saleFoot.init(_this.que.com_id)
          _this.navBtn = false
          break
        case 2:
          _this.$router.push({
            path: '/editComment',
            query: {
              com_id: _this.que.com_id
            }
          })
          break
        case 3:
          _this.$router.push({ path: '/MarkupCu', query: { type: 'edit', com_id: _this.que.com_id } })
          break
      }
    },
    new_foot: function () {
      let _this = this
      let obj = {
        Title: '新增足迹',
        Yes: '确认',
        No: '取消',
        type: 3,
        btn: 2,
        success: _this.newFootCall
      }
      this.$refs.Toast.on_display(obj)
    },
    newFootCall: function (data) {
      let _this = this
      data['company'] = _this.que.com_id
      _this.api.postFootPrint(data, function (res) {
        console.log(res)
      }, function (err) {
        console.log(err)
      })
    }
  },
  mounted () {
    document.title = '销售笔记'
    // this.new_foot()
    let _this = this
    _this.que = _this.$route.query
    let str = 'id=' + _this.que.com_id
    _this.$refs.cuinfo.SalesNotesInit(_this.que.com_id)
    _this.api.getNotesHeader(str, function (res) {
      console.log(res)
      _this.msgData = res.data[0]
      _this.msgData.reviews = _this.msgData.reviews.split('|')
    }, function (err) {
      console.log(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.SalesNotes{
    position: fixed;
    width: 100%;
    height:100%;
    background:#f9f9f9;
    overflow: auto;
}
.title{
    padding:.5rem .75rem;
    text-align: left;
    color:#2c2c2c;
    border-bottom: 1px solid #f7f7f7;
    background: #fff;
}
.cikename{
    display: inline-block;
    line-height: .7rem
}
.cikename>img{
    width:.7rem;
    height:.7rem;
    vertical-align: top;
}
.cikename>span{
    font-size: .7rem;
    vertical-align: top;
}
.number{
    font-size: .6rem;
    display: inline-block;
    padding-left:1rem;
}
.title>button{
    border:0;
}
.title>button{
    width:4rem;
    height:1.25rem;
    border-radius:1.5rem;
    font-size: .6rem;
    border:0;
    background: rgba(255, 152, 0, 0.1);
    color:rgba(255, 152, 0, 1);
    float: right;
    margin-top:-.5rem;
}
.tit2{
    padding:.5rem .75rem .75rem .75rem;
    background:#fff;
}
.tit2>p{
    display: inline-block;
    padding:.2rem .5rem;
    background: rgba(170, 170, 170, 0.1);
    color:#888;
    font-size: .6rem;
    margin:.1rem .1rem;
}
.tit2>div>img{
    width:.7rem;
    height:.7rem;
    vertical-align: text-top;
}
.tit2>div{
    font-size: .7rem;
    line-height: 1rem;
    margin-top:.75rem;
    vertical-align: top;
    color:#888;
}
.footer{
    width:100%;
    height:2.25rem;
    position: fixed;
    bottom: 0rem;
    left: 0px;
    background:#fff;
}
.footer>button{
    width:10rem;
    height:1.75rem;
    border-radius:1.75rem;
    font-size: .7rem;
    line-height: 1.75rem;
    border:0;
    margin-top:.25rem;
}
.footer>button::after{
    border:0;
}
.footer>button:last-child{
    background: rgba(255, 152, 0, 1);
    color:#fff;
}
nav{
    margin:.5rem auto .5rem;
    text-align: left;
    padding-left:.75rem;
}
nav>button{
    padding:0 .7rem;
    border-radius:1.25rem;
    font-size: .6rem;
    border:0;
    color:#888;
    background: rgba(170, 170, 170, 0.1);
    line-height: 1.25rem;
}
nav>button::after{
    border:0;
}
.navBtn{
    background: rgba(255, 152, 0, 1);
    color:#fff;
}
</style>
