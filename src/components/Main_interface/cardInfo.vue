<template>
  <div class="cardInfo">
    <div class="titleImg">
        <div class="title">
            <div class="imgBox">
                <img :src="listData.avatarurl" alt="">
            </div>
            <div class="nameBox">
                <div class="name">
                    <img v-if="listData.gender === 1" src="@/assets/man.png" alt="">
                    <img v-else src="@/assets/woman.png" alt="">
                    <div v-text="listData.nickname||'- -'">云端飞扬</div>
                </div>
                <div class="cheName" v-text="listData.position + '/' + listData.company_name">北京酷牛仔俱乐部</div>
                <div class="cikeName" v-text="listData.club_name||'- -'">北京酷牛仔俱乐部</div>
            </div>
            <div class="listNav">
                <div @click="navPath(2)">
                    <div v-text="listData.collect_count||0">99</div>
                    <div>关注</div>
                </div>
                <div @click="navPath(3)">
                    <div v-text="listData.fans_count||0">99</div>
                    <div>粉丝</div>
                </div>
                <div @click="navPath(4)">
                    <div v-text="listData.mate_num||0">99</div>
                    <div>客户</div>
                </div>
            </div>
        </div>
        <nav>
            <button @click="navPath(0)" :class="navBtn[0]?'navBtn':''">会员信息</button>
            <button @click="navPath(7)" :class="navBtn[1]?'navBtn':''" v-text="source === 'my'? '我的商机 ' + listData.business_count: 'Ta的商机 ' + listData.business_count"></button>
            <button @click="navPath(8)" :class="navBtn[2]?'navBtn':''" v-text="source === 'my'? '我的需求 ' + listData.demand_count: 'Ta的需求 ' + listData.demand_count"></button>
        </nav>
        <CuInfo ref="CuInfo" v-show="navBtn[0]" :type="'cardInfo'"/>
        <workEx ref="workEx" v-show="navBtn[0]" :type="'cardInfo'"/>
        <buOppoList ref="buOppoList" v-show="navBtn[1]" />
        <demandList ref="demandList" v-show="navBtn[2]" />
        <div style="height:2.25rem;"></div>
        <div v-if="source === 'my'" class="footer">
            <button v-if="navBtn[0]" class="myCards" @click="navPath(5)">编辑个人信息</button>
            <button v-if="navBtn[0]" class="myCards" @click="navPath(6)">编辑工作信息</button>
            <button v-if="navBtn[1]" class="myCards" @click="navPath(9)">新增商机</button>
            <button v-if="navBtn[2]" class="myCards" @click="navPath(10)">新增需求</button>
        </div>
        <div v-else class="footer">
            <button class="mybutton" @click="myCard">查看我的名片</button>
            <button class="myCards" v-if="listData.is_collect === 0" @click="MyCollect(0)">关注Ta</button>
            <button v-else @click="MyCollect(1)">取消关注</button>
        </div>
    </div>
    <Toast ref="Toast"/>
  </div>
</template>

<script>
import CuInfo from '@/components/Main_interface/CuInfo' // 个人信息
import workEx from '@/components/Main_interface/workEx' // 工作经验
import buOppoList from '@/components/Main_interface/buOppoList' // 商机
import demandList from '@/components/Main_interface/demandList' // 商机

export default {
  name: 'cardInfo',
  components: {
    CuInfo,
    workEx,
    msg: null,
    buOppoList,
    demandList
  },
  data () {
    return {
      navBtn: [true, false, false],
      source: null,
      dataList: null,
      listData: {},
      user_id: null,
      que: null,
      gl: null
    }
  },
  methods: {
    MyCollect: function (num) {
      let _this = this
      if (num === 0) {
        let obj = {
          puser: _this.listData.id
        }
        _this.api.MyCollect(obj, function (res) {
          if (res.status === 201) {
            _this.listData.collect_id = res.data.collect_id
            _this.listData.is_collect = 1
          }
        }, function (err) {
          _this.errMotl(err)
        })
      } else if (num === 1) {
        _this.api.delMyCollect(_this.listData.collect_id, function (res) {
          if (res.status === 204) {
            _this.listData.is_collect = 0
          } else {
            _this.errMotl(res)
          }
        }, function (err) {
          _this.errMotl(err)
        })
      }
    },
    navPath: function (num) {
      let _this = this
      let arr = [false, false, false]
      switch (num) {
        case 0:
          _this.$refs.CuInfo.cardInfoInit(_this.user_id)
          _this.$refs.workEx.workInfoInit(_this.user_id)
          _this.navBtn = arr
          _this.navBtn[0] = true
          break
        case 1:
          _this.navBtn = false
          break
        case 2:
          // 关注
          _this.$router.push({
            name: 'HisFollow',
            query: {
              user_id: _this.user_id
            }
          })
          break
        case 3:
          // 粉丝
          let obj = null
          if (parseInt(_this.que.user_id) === parseInt(_this.gl.myId)) {
            obj = {
              source: 'my'
            }
          } else {
            obj = {
              user_id: _this.user_id
            }
          }
          _this.$router.push({
            name: 'HisFans',
            query: obj
          })
          break
        case 4:
          // 客户
          _this.$router.push({
            name: 'HisCustomer',
            query: {
              user_id: _this.user_id
            }
          })
          break
        case 5:
          _this.$router.push({name: 'editInfo', query: {type: 'personal'}})
          break
        case 6:
          _this.$router.push({name: 'editInfo', query: {type: 'exper'}})
          break
        case 7:
          _this.$refs.buOppoList.on_display()
          _this.navBtn = arr
          _this.navBtn[1] = true
          break
        case 8:
          // _this.$router.push({name: 'editInfo', query: {type: 'exper'}})
          _this.$refs.demandList.on_display()
          _this.navBtn = arr
          _this.navBtn[2] = true
          break
        case 9:
          _this.$router.push('/buOppoNew')
          break
        case 10:
          _this.$router.push('/demandNew')
          break
      }
    },
    /**
     * 从他人名片切换到我的名片
     */
    myCard () {
      let _this = this
      _this.source = 'my'
      _this.$router.push({
        path: '/cardInfo',
        query: {
          user_id: _this.Global.userInfo.myId
        }
      })
      _this.user_id = _this.Global.userInfo.myId
      _this.$refs.workEx.workInfoInit(_this.user_id)
      _this.$refs.CuInfo.cardInfoInit(_this.user_id)
      _this.api.getUserHeader(_this.user_id, (res) => {
        _this.listData = res.data
      }, (err) => {
        _this.errMotl(err)
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
  mounted () {
    document.title = '名片信息'
    let _this = this
    _this.gl = _this.Global.userInfo
    _this.que = _this.$route.query
    if (parseInt(_this.que.user_id) === parseInt(_this.gl.myId)) {
      _this.source = 'my'
    }
    switch (_this.que.typ) {
      case 1:
        this.navPath(7)
        break
      case 2:
        this.navPath(8)
        break
    }
    _this.user_id = _this.que.user_id
    _this.$refs.CuInfo.cardInfoInit(_this.user_id)
    _this.$refs.workEx.workInfoInit(_this.user_id)
    _this.api.getUserHeader(_this.user_id, function (res) {
      _this.listData = res.data
    }, function (err) {
      _this.errMotl(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cardInfo{
    position: fixed;
    width: 100%;
    height:100%;
    background:#f9f9f9;
    overflow: auto;
}
.titleImg{
    height:8.35rem;
    width:100%;
    background-image:url(../../assets/login_bg.png);
    background-size: 100% 100%;
}
.title{
    width:calc(92% - 1.25rem);
    padding:.5rem .5rem .75rem;
    border-radius: .25rem;
    background: #fff;
    box-shadow: .05rem .05rem .5rem 0 rgba(203,202,207,1);
    position: relative;
    top:1.75rem;
    left:.75rem;
}
.imgBox{
    width:2.5rem;
    height:2.5rem;
    border-radius: 50%;
    overflow: hidden;
    margin:-1.75rem auto 0;
    display: flex;
}
.imgBox>img{
    width:2.5rem;
    align-self: center;
}
.tag{
    height:.9rem;
    border-radius: 2rem;
    font-size: .5rem;
    line-height: .9rem;
    background: rgba(255, 152, 0, 1);
    color: #fff;
    position: absolute;
    padding:0 .3rem;
    right:.5rem;
    top:.5rem;
}
.name{
    font-size: .7rem;
    color:#101010;
}
.name>img{
    width:.7rem;
    height:.7rem;
    align-self: center;
    margin-top:.1rem;
}
.name>div{
    vertical-align: top;
    display: inline-block;
}
.cikeName{
    color:#101010;
    font-size: .6rem;
    margin-top:.2rem;
}
.cheName{
    color:#888;
    font-size: .6rem;
    margin-top:.2rem;
}
.listNav{
    margin-top:.5rem;
    display: flex;
    justify-content: space-around;
}
.listNav>div{
    width:33.33%;
    font-size: .7rem;
    line-height: 1rem
}
.listNav>div>div:first-child{
    color:rgba(255, 152, 0, 1);
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
    width:45%;
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
.footer>.mybutton{
    background: #fff;
    color:rgba(255, 152, 0, 1);
    border:1px solid rgba(255, 152, 0, 1);
}
nav{
    margin:2.25rem auto .5rem;
    text-align: left;
    padding-left:.75rem;
}
nav>button{
    width:4rem;
    height:1.25rem;
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
.footer>.myCard{
    background: rgba(255, 152, 0, 1);
    color:#fff;
}
.footer>button{
  background:#f1f1f1;
  color:#888;
  font-size: .7rem;
}
.footer>.myCards{
    background: rgba(255, 152, 0, 1);
    color:#fff;
}
</style>
