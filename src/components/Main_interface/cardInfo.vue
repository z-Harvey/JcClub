<template>
  <div class="cardInfo">
    <div class="titleImg">
        <div class="title">
            <div class="imgBox">
                <img :src="listData.avatarurl" alt="">
            </div>
            <div class="tag" v-text="listData.industry">互联网</div>
            <div class="nameBox">
                <div class="name">
                    <img v-if="listData.gender === 1" src="@/assets/man.png" alt="">
                    <img v-else src="@/assets/woman.png" alt="">
                    <div v-text="listData.nickname">云端飞扬</div>
                </div>
                <div class="cikeName" v-text="listData.club_name">北京酷牛仔俱乐部</div>
            </div>
            <div class="listNav">
                <div @click="navPath(2)">
                    <div v-text="listData.collect_count">99</div>
                    <div>关注</div>
                </div>
                <div @click="navPath(3)">
                    <div v-text="listData.fans_count">99</div>
                    <div>粉丝</div>
                </div>
                <div @click="navPath(4)">
                    <div v-text="listData.mate_num">99</div>
                    <div>客户</div>
                </div>
            </div>
        </div>
        <nav>
            <button @click="navPath(0)" :class="navBtn?'navBtn':''">个人信息</button>
            <button @click="navPath(1)" :class="!navBtn?'navBtn':''">工作经验</button>
        </nav>
        <!-- <router-view :type="'cardInfo'"></router-view> -->
        <CuInfo ref="CuInfo" :show='navBtn' :type="'cardInfo'"/>
        <workEx ref="workEx" :show='!navBtn' :type="'cardInfo'"/>
        <div style="height:2.25rem;"></div>
        <div v-if="source === 'my'" class="footer">
            <button v-if="navBtn" class="myCard" @click="navPath(5)">编辑个人信息</button>
            <button v-else class="myCard" @click="navPath(6)">编辑工作经验</button>
        </div>
        <div v-else class="footer">
            <button @click="myCard">查看我的名片</button>
            <button v-if="listData.is_collect === 0" @click="MyCollect(0)">关注Ta</button>
            <button v-else @click="MyCollect(1)">取消关注</button>
        </div>
    </div>
  </div>
</template>

<script>
import CuInfo from '@/components/Main_interface/CuInfo' // 个人信息
import workEx from '@/components/Main_interface/workEx' // 工作经验

export default {
  name: 'cardInfo',
  components: {
    CuInfo,
    workEx,
    msg: null
  },
  data () {
    return {
      navBtn: true,
      source: null,
      dataList: null,
      listData: {},
      user_id: null
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
            _this.listData.fans_count += 1
            _this.listData.is_collect = 1
          }
        }, function (err) {
          console.log(err)
        })
      } else if (num === 1) {
        _this.api.delMyCollect(_this.listData.collect_id, function (res) {
          if (res.status === 204) {
            _this.listData.fans_count -= 1
            _this.listData.is_collect = 0
          }
        }, function (err) {
          console.log(err)
        })
      }
    },
    navPath: function (num) {
      let _this = this
      switch (num) {
        case 0:
          _this.$refs.CuInfo.cardInfoInit(_this.user_id)
          _this.navBtn = true
          break
        case 1:
          _this.$refs.workEx.workInfoInit(_this.user_id)
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
          _this.$router.push({
            name: 'HisFans',
            query: {
              user_id: _this.user_id
            }
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
      }
    },
    /**
     * 从他人名片切换到我的名片
     */
    myCard: function () {
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
      _this.api.getUserHeader(_this.user_id, function (res) {
        _this.listData = res.data
      }, function (err) {
        console.log(err)
      })
    }
  },
  mounted () {
    document.title = '名片信息'
    let _this = this
    let gl = _this.Global.userInfo
    let que = _this.$route.query
    if (parseInt(que.user_id) === parseInt(gl.myId)) {
      _this.source = 'my'
    }
    _this.user_id = que.user_id
    _this.$refs.CuInfo.cardInfoInit(_this.user_id)
    _this.api.getUserHeader(_this.user_id, function (res) {
      _this.listData = res.data
    }, function (err) {
      console.log(err)
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
    font-size: .7rem;
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
    width:8.25rem;
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
.footer>button:first-child{
    background: #fff;
    color:rgba(255, 152, 0, 1);
    border:1px solid rgba(255, 152, 0, 1);
}
.footer>button:last-child{
    background: rgba(255, 152, 0, 1);
    color:#fff;
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
    width:10rem;
    height:1.75rem;
    background: rgba(255, 152, 0, 1);
    color:#fff;
}
</style>
