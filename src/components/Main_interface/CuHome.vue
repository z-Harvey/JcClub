<template>
    <div class="CuHome" @scroll="onScroll($event)">
        <Toast ref="Toast" @confirm="Unlock"></Toast>
        <ModalInfo ref="modal"></ModalInfo>
        <div class="companyInfo">
            <div class="comTopBox">
                <div class="textInfo">
                    <div class="shu">
                        <img src="@/assets/membershipApp_shu.png" alt="">
                    </div>
                    <div class="name" v-text="msg.name">北京聚牛天下网络科技有限公司</div>
                    <div class="genjinNum">
                        <span>内部跟进 <span v-text="msg.club_mark_count"></span></span>
                        <span>外部跟进 <span v-text="msg.out_mark_count"></span></span>
                    </div>
                </div>
                <button v-if="msg.is_mark !== 0" @click="path(2, msg.id)">我的客户笔记</button>
            </div>
            <div class="tagBox" v-if="msg.reviews_list.length > 0">
                <div class="tagBoxs" :class="tapBur?'tagBoxs1':'tagBoxs2'">
                    <div v-for="(item, index) in msg.reviews_list" :key="index" v-text="item[0] + ' ' + item[1]">有钱任性</div>
                </div>
                <div class="pullDown" @click="pullDown" v-if="msg.reviews_list.length > 0" :class="tapBur?'pullDown2':'pullDown1'">
                    <img src="@/assets/pull_down.png">
                </div>
            </div>
        </div>
        <div class="navList">
            <button @click="path(0)" :class="aftBtn?'aftBtn':''">客户信息</button>
            <button @click="path(1)" :class="!aftBtn?'aftBtn':''">跟进会员 <span v-text="msg.mark_count"></span></button>
        </div>
        <!-- <router-view :type="'CuHome'" @alert="alert" @mol="mol_2"/> -->
        <CuInfo ref="cuinfo" v-show="aftBtn" :type="'CuHome'" @alert="alert" @mol="mol_2"/>
        <FollowNumber ref="follo" v-show="!aftBtn" :type="'CuHome'" @alert="alert" @mol="mol_2"/>
    </div>
</template>

<script>
import FollowNumber from '@/components/Main_interface/FollowNumber' // 跟进会员数量
import CuInfo from '@/components/Main_interface/CuInfo' // 客户信息

export default {
  name: 'CuHome',
  data () {
    return {
      tapBur: true,
      aftBtn: true,
      que: {},
      msg: {
        reviews_list: [],
        page_size: 12,
        p: 1,
        ps: true
      }
    }
  },
  components: {
    FollowNumber,
    CuInfo
  },
  methods: {
    Unlock: function () {
      this.$refs.toast.close()
    },
    onScroll (e) {
      if (this.$refs.follo.ps === false) {
        return
      }
      let total = e.srcElement.scrollHeight - e.srcElement.clientHeight - 1 // 总高度减视口高度 - 1
      if (e.srcElement.scrollTop > total) {
        this.$refs.follo.p++
        this.$refs.follo.ScrollInit()
      }
    },
    // 标签下拉
    pullDown: function () {
      this.tapBur = !this.tapBur
    },
    // 弹出
    alert: function (data) {

    },
    mol_2: function (num) {
      let _this = this
      let str = 'company=' + _this.que.com_id
      if (num === 0) {
        _this.api.getCompanyBasic(str, function (res) {
          res.data['type_num'] = num
          if (res.data.results.length <= 0) {
            let obj = {
              Title: '提示',
              Content: '没有更多',
              type: 1,
              btn: 0
            }
            _this.$refs.Toast.on_display(obj)
            return
          }
          _this.$refs.modal.on_display(res.data, _this.que.com_id)
        }, function (err) {
          _this.errMotl(err)
        })
      } else if (num === 1) {
        _this.api.getCompanyScale(str, function (res) {
          res.data['type_num'] = num
          if (res.data.results.length <= 0) {
            let obj = {
              Title: '提示',
              Content: '没有更多',
              type: 1,
              btn: 0
            }
            _this.$refs.Toast.on_display(obj)
            return
          }
          _this.$refs.modal.on_display(res.data, _this.que.com_id)
        }, function (err) {
          _this.errMotl(err)
        })
      } else if (num === 2) {
        _this.api.getCompanyContact(str, function (res) {
          res.data['type_num'] = num
          if (res.data.results.length <= 0) {
            let obj = {
              Title: '提示',
              Content: '没有更多',
              type: 1,
              btn: 0
            }
            _this.$refs.Toast.on_display(obj)
            return
          }
          _this.$refs.modal.on_display(res.data, _this.que.com_id)
        }, function (err) {
          _this.errMotl(err)
        })
      }
    },
    // 路由
    path: function (bum, id) {
      let _this = this
      switch (bum) {
        case 0:
          _this.$refs.cuinfo.cuHomeInit(_this.que.com_id)
          _this.aftBtn = true
          break
        case 1:
          _this.$refs.follo.cuHomeInit(_this.que.com_id)
          _this.aftBtn = false
          break
        case 2:
          _this.$router.push({
            path: '/SalesNotes',
            query: {
              com_id: id
            }
          })
          break
      }
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
    document.title = '客户主页'
    let _this = this
    _this.que = _this.$route.query
    let str = 'id=' + _this.que.com_id
    _this.$refs.cuinfo.cuHomeInit(_this.que.com_id)
    _this.api.getCompanyHeader(str, function (res) {
      _this.msg = res.data[0]
      _this.Global.temporary = res.data[0].is_deepunlock
    }, function (err) {
      _this.errMotl(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.CuHome{
    position: fixed;
    width:100%;
    height:100%;
    overflow: auto;
    background: #f9f9f9
}
.companyInfo{
    background:#fff;
}
.comTopBox{
    min-height:1.7rem;
    padding:.5rem .75rem;
    text-align:left;
    color:#2c2c2c;
    border-bottom: 1px solid #f7f7f7;
}
.shu{
    width:.7rem;
    height:.7rem;
    display: inline-block;
}
.shu>img{
    width:.7rem;
    height:.7rem;
    vertical-align: top;
}
.textInfo{
    display: inline-block;
    min-height:1.7rem;
}
.textInfo>.name{
    font-size: .7rem;
    vertical-align: top;
    line-height: .8rem;
    display: inline-block;
    width:9rem;
}
.genjinNum{
    font-size: .6rem;
    margin:.25rem 0 0 1rem;
}
.comTopBox>button{
    width:4.6rem;
    height:1.25rem;
    color:rgba(255, 152, 0, 1);
    background: rgba(255, 244, 229, 1);
    border:0;
    border-radius: 1.5rem;
    font-size: .6rem;
    line-height: 1.25rem;
    float: right;
    margin-top:.25rem;
}
.comTopBox>button::after{
    border:0;
}

.pullDown{
    text-align: center;
}
.pullDown>img{
    width:.7rem;
    height:.7rem;
    transition: ease .1s;
}
.tagBox{
    padding:.5rem 0 .5rem 0;
    text-align: left;
}
.tagBoxs{
    padding:0 .75rem 0 1.7rem ;
    overflow: hidden;
}
.tagBoxs1{
    max-height:2.9rem;
}
.tagBoxs2{
    height:auto;
}
.tagBoxs>div{
    background:rgba(170, 170, 170, 0.1);
    padding:.2rem;
    color:#888;
    display: inline-block;
    font-size: .6rem;
    text-align: center;
    margin:0 .4rem .4rem 0;
}
.pullDown1{
    transform:rotate(180deg);
}
.pullDown2{
    transform:rotate(0deg);
}

.navList{
    padding:.5rem .75rem;
    text-align: left;
}
.navList>button{
    padding: .25rem .5rem;
    background:rgba(170, 170, 170, 0.1);
    border-radius: 1.5rem;
    color: #888;
    border:0;
    font-size: .6rem;
    margin-right: .75rem;
}
.navList>button::after{
    border:0;
    border-radius: 1.5rem;
}
.navList>.aftBtn{
    background:rgba(255, 152, 0, 1);
    color: #fff;
    box-shadow: 0 0 .5rem 0 rgba(255, 152, 0, .25);
}
</style>
