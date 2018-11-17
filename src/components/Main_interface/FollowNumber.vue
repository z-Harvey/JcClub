<template>
    <div class="FollowNumber" v-if="show">
        <nav>
            <div>
                <span>客户关系</span>
                <img src="@/assets/bot2.png" alt="">
            </div>
            <div>
                <span>线索</span>
                <img src="@/assets/bot2.png" alt="">
            </div>
            <div>
                <span>默认排序</span>
                <img src="@/assets/pai2.png" alt="">
            </div>
        </nav>
        <div class="card" v-for="(item, index) in dataList" :key="index">
            <div class="cardImg" @click="path(0)">
                <img :src="item.avatarurl" alt="">
            </div>
            <div class="cardNameBtn" @click="path(0)">
                <div class="name" v-text="item.nickname">云端飞扬</div>
                <div class="nameNumber">
                    <span><span v-text="item.mark_num"></span> 跟进客户</span>
                    <span><span v-text="item.collect_num"></span> 关注</span>
                </div>
            </div>
            <button @click="isGuan(0, item)" class="cardBtn" v-if="item.is_collect === 0">关注</button>
            <button @click="isGuan(1, item)" class="cardBtns" v-if="item.is_collect === 1">已关注</button>
            <div class="cellInfo">
                <div class="yesNo">
                    <span v-if="item.relation === 0">#有过合作#</span>
                    <span v-if="item.relation === 1">#正在合作#</span>
                    <span v-if="item.relation === 2">#有过跟进#</span>
                    <span v-if="item.relation === 3">#正在跟进#</span>
                    <span v-if="item.has_decision === 0">#有决策链线索#</span>
                    <span v-if="item.has_decision === 1">#无决策链线索#</span>
                </div>
                <div class="department">线索部门 <span v-text="item.department || '暂无'"></span></div>
                <span class="days" v-text="item.add_time + '天前标记'"></span>
            </div>
        </div>
        <div class="footer" v-if="is_deepunlock !== 3">
            <button @click="unlock" v-if="is_deepunlock === 1">15牛钻解锁俱乐部外部会员标记的数据</button>
            <button @click="unlock" v-if="is_deepunlock === 2">15牛钻解锁俱乐部内部会员标记的数据</button>
        </div>
        <Toast ref="toast"></Toast>
    </div>
</template>

<script>
export default {
  name: 'FollowNumber',
  data () {
    return {
      niubi: 20,
      dataList: {},
      is_deepunlock: null,
      comId: null,
      jsxy: null
    }
  },
  methods: {
    // 调用父级 模板 的 弹出层
    isGuan: function (num, data) {
      let _this = this
      switch (num) {
        case 0:
          let str = 'puser=' + data.user
          _this.api.MyCollect(str, function (res) {
            if (res.status === 201) {
              data.is_collect = 1
              data.collect_id = res.data.collect_id
            }
          }, function (err) {
            console.log(err)
          })
          break
        case 1:
          _this.api.delMyCollect(data.collect_id, function (res) {
            if (res.status === 204) {
              data.is_collect = 0
            }
          }, function (err) {
            console.log(err)
          })
          break
      }
    },
    unlock: function () {
      let _this = this
      let datas = {
        comId: _this.comId,
        is_deepunlock: _this.is_deepunlock,
        niuz: _this.jsxy,
        wode: _this.ransi.user_niuz
      }
      if (_this.ransi.user_niuz > _this.jsxy) {
        let obj = {
          Title: '提示',
          Content: '是否确认花费' + _this.jsxy + '牛币解锁？',
          Yes: '立即解锁',
          No: '放弃解锁',
          type: 4,
          btn: 2,
          success: _this.qrJieSuo
        }
        this.$refs.toast.on_display(obj, datas)
      } else {
        let obj = {
          Title: '提示',
          Content: '牛钻不足',
          Yes: '立即解锁',
          No: '确认',
          type: 1,
          btn: 0
        }
        this.$refs.toast.on_display(obj, datas)
      }
    //   this.$emit('alert', obj)
    },
    qrJieSuo: function (data) {
      console.log(data)
      let _this = this
      let obj = {
        company: data.comId,
        is_deepunlock: data.is_deepunlock === 1 ? 2 : 1
      }
      _this.api.postCompanyUnlock(obj, function (res) {
        if (res.status === 201) {
          _this.Global.temporary = res.data.is_deepunlock
          _this.is_deepunlock = res.data.is_deepunlock
        }
      }, function (err) {
        console.log(err)
      })
    },
    path: function (num) {
      let _this = this
      switch (num) {
        case 0:
          _this.$router.push('/cardInfo')
          break
      }
    },
    cuHomeInit: function (id) {
      let _this = this
      let str = 'company=' + id
      _this.comId = id
      _this.is_deepunlock = _this.Global.temporary
      if (_this.is_deepunlock === 1 || _this.is_deepunlock === 2) {
        // 获取当前解锁需要的牛钻书
        _this.api.getCompanyUnlock(str, function (res) {
          _this.ransi = res.data
          if (_this.is_deepunlock === 1) {
            _this.jsxy = res.data.out_unlock_niuz
          } else if (_this.is_deepunlock === 2) {
            _this.jsxy = res.data.club_unlock_niuz
          }
        }, function (err) {
          console.log(err)
        })
      }
      _this.api.getCompanyMark(str, function (res) {
        _this.dataList = res.data.results
        _this.dataList.map(function (p1, p2) {
          if (p1.user === _this.Global.userInfo.myId) {
            p1.is_collect = 3
          }
          console.log(p1)
          p1.add_time = Math.floor(Math.abs(Date.now() - new Date(p1.add_time).getTime()) / (3600 * 24 * 1e3))
        })
      }, function (err) {
        console.log(err)
      })
    }
  },
  mounted () {
    // document.title = '酷牛仔'

  },
  props: ['show']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
    display: flex;
    justify-content: space-around;
    height:2.25rem;
    background:#fff;
}
nav>div{
    width:33%;
    font-size: .6rem;
    height:2.25rem;
    line-height: 2.25rem;
}
nav>div>img{
    width:.6rem;
    height:.6rem;
    vertical-align: text-top;
}
nav>div:last-child>img{
    width:.75rem;
    height:.75rem;
}
.card{
    width:calc(92% - 1rem);
    padding:.75rem .5rem;
    border-radius: .25rem;
    background:#fff;
    margin:.5rem auto 0;
    text-align: left;
}
.cardImg{
    width:2rem;
    height:2rem;
    display: flex;
    border-radius:50%;
    overflow: hidden;
    vertical-align: top;
    display: inline-block;
}
.cardImg>img{
    width:2rem;
    align-self: center;
}
.cardNameBtn{
    display: inline-block;
}
.name{
    font-size: .7rem;
    line-height: 1rem;
}
.nameNumber{
    font-size: .6rem;
    color:#888;
}
.cardNameBtn{
    display: inline-block;
}
.cardBtn{
    float: right;
    background:rgba(255, 152, 0, 0.1);
    border:0;
    vertical-align: top;
    border-radius: .75rem;
    width:3rem;
    height:1.25rem;
    line-height: 1.25rem;
    color:rgba(255, 152, 0, 1);
    margin-top:.4rem;
}
.cardBtn::after{
    border:0;
}
.cardBtns{
    float: right;
    background:rgba(241, 241, 241, 1);
    border:0;
    vertical-align: top;
    border-radius: .75rem;
    width:3rem;
    height:1.25rem;
    line-height: 1.25rem;
    color:#888;
    margin-top:.4rem;
}
.cardBtns::after{
    border:0;
}
.cellInfo{
    margin-top:.5rem;
    padding-left:2.4rem;
}
.yesNo{
    font-size: .7rem;
    color: rgba(255, 152, 0, 1);
}
.yesNo>span{
    margin-right: .4rem;
}
.department{
    font-size: .7rem;
    line-height: 1rem;
    margin-top:.4rem;
    font-weight: 600;
    color: #101010;
}
.department>span{
    font-weight: 100;
    color:#888;
}
.days{
    font-size: .6rem;
    color:#888;
}
.footer{
    width:100%;
    height:2.25rem;
    position: fixed;
    bottom: 0rem;
    left: 0rem;
    background: #fff;
}
.footer>button{
    width:13.7rem;
    height:1.75rem;
    line-height: 1.75rem;
    font-size: .7rem;
    color:#fff;
    background: rgba(255, 152, 0, 1);
    border-radius: 1.5rem;
    border:0;
    margin-top:.25rem;
}
.footer>button::after{
    border:0;
}
</style>
