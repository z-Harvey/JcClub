<template>
    <div class="SalesNotes">
        <Toast ref="Toast"/>
        <div class="title">
            <div class="cikename">
                <img src="@/assets/membershipApp_shu.png" alt="">
                <div class="name" v-text="msgData.name">北京聚牛天下网络科技有限公司</div>
            </div>
            <div class="number">
                <span>内部跟进 <span v-text="msgData.club_mark_count"></span></span>
                <span>外部跟进 <span v-text="msgData.out_mark_count"></span></span>
            </div>
            <button @click="path(0)" v-if="msgData.is_unlock === 1">客户主页</button>
            <button @click="path(1, msgData)" v-if="msgData.is_unlock === 0">解锁查看</button>
        </div>
        <div class="tit2">
            <p v-for="(item, index) in msgData.reviews" :key="index" v-text="item">有钱任性</p>
            <div @click="paths(2)">
                <img src="@/assets/edit(1).png" alt="">
                <span>编辑</span>
            </div>
        </div>
        <nav>
            <button @click="navPath(0)" :class="navBtn?'navBtn':''">企业信息</button>
            <button @click="navPath(1)" :class="!navBtn?'navBtn':''">销售足迹 <span v-text="msgData.footPrint_count"></span></button>
        </nav>
        <!-- <router-view :type="'SalesNotes'"></router-view> -->
        <CuInfo ref="cuinfo" :type="'SalesNotes'" v-show="navBtn"/>
        <saleFootprint ref="saleFoot" :type="'SalesNotes'" v-show="!navBtn"/>
        <div style="height:2.25rem;"></div>
        <div class="footer" v-if="navBtn">
            <button @click="paths(3)">编辑客户信息</button>
        </div>
        <div class="footer" v-else>
            <button @click="new_foot">新增足迹</button>
        </div>
        <Toast ref="Toast"/>
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
    path: function (num, item) {
      let _this = this
      if (num === 0) {
        this.$router.push({
          path: '/CuHome',
          query: {
            com_id: _this.que.com_id
          }
        })
      } else if (num === 1) {
        console.log(item)
        // this.$router.push('/CuHome')
        let obj = {
          Title: '解锁客户数据',
          type: 2,
          btn: 3,
          No: '放弃解锁',
          Yes: '立即解锁',
          success: _this.clltoa
        }
        _this.$refs.Toast.isUnlock(obj, item)
      }
    },
    clltoa (data) {
      console.log(data)
      let _this = this
      let x = 0
      if (data.is_deepunlock) {
        switch (data.is_deepunlock) {
          case 1:
            x = data.club_unlock_niuz
            break
          case 2:
            x = data.out_unlock_niuz
            break
          case 3:
            x = data.club_unlock_niuz + data.out_unlock_niuz
            break
        }
        if (data.user_niuz - x >= 0) {
          let obj = {
            is_deepunlock: data.is_deepunlock,
            company: data.id
          }
          _this.api.postCompanyUnlock(obj, function (res) {
            if (res.status === 201) {
              _this.path(0, data)
            }
          }, function (err) {
            console.log(err)
          })
        } else {
          let obj = {
            Title: '提示',
            Content: '牛钻不足',
            type: 1,
            btn: 0,
            No: '确定',
            Yes: '立即解锁'
          }
          setTimeout(() => {
            _this.$refs.Toast.on_display(obj)
          }, 200)
        }
      }
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
      }
    },
    paths (num) {
      switch (num) {
        case 2:
          this.$router.push({
            path: '/editComment',
            query: {
              com_id: this.que.com_id
            }
          })
          break
        case 3:
          this.$router.push({ path: '/MarkupCu', query: { type: 'edit', com_id: this.que.com_id } })
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
    try {
      document.title = '销售笔记'
      let _this = this
      _this.que = _this.$route.query
      let str = 'id=' + _this.que.com_id
      _this.$refs.cuinfo.SalesNotesInit(_this.que.com_id)
      _this.api.getNotesHeader(str, function (res) {
        _this.msgData = res.data[0]
        _this.msgData.reviews = _this.msgData.reviews.split('|')
      }, function (err) {
        console.log(err)
      })
    } catch (err) {
      console.log(err)
    }
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
    position: relative;
}
.cikename{
    line-height: .7rem
}
.cikename>img{
    width:.7rem;
    height:.7rem;
    vertical-align: top;
    float: left;
}
.cikename>.name{
    font-size: .7rem;
    width:9rem;
    vertical-align: top;
    padding-left:1rem;
    line-height: .8rem
}
.number{
    font-size: .6rem;
    display: inline-block;
    padding-left:1rem;
}
.title>button::after{
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
    position: absolute;
    top:.5rem;
    right:.75rem;
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
