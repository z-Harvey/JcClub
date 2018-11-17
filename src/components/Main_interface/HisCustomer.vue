<template>
    <div class="HisCustomer">
        <div class="screen">
            <div>
                <div>客户关系/线索</div>
                <img src="@/assets/bot2.png" alt="">
            </div>
            <div>
                <div>默认排序</div>
                <img src="@/assets/pai2.png" alt="">
            </div>
        </div>
        <div class="contBox" v-for="(item, index) in dataList" :key="index">
            <div class="contTitle">
                <div class="titImg">
                    <img src="@/assets/qi.png" alt="">
                </div>
                <div class="titName" v-text="item.comname">北京聚牛天下网络科技有限公司</div>
                <div class="location">
                    <img src="@/assets/location.png" alt="">
                    <div v-text="item.area">北京</div>
                </div>
            </div>
            <div class="contcont">
                <div class="cc1">
                    <span v-if="item.relation === 0">#有过合作#</span>
                    <span v-if="item.relation === 1">#正在合作#</span>
                    <span v-if="item.relation === 2">#有过跟进#</span>
                    <span v-if="item.relation === 3">#正在跟进#</span>
                    <span v-if="item.has_decision === 0">#有决策链线索#</span>
                    <span v-if="item.has_decision === 1">#无决策链线索#</span>
                </div>
                <div class="cc2">
                    线索部门 <span v-text="item.department||'暂无'">此处显示部门名称、此处显示部门名称、此处显示部门名称</span>
                </div>
            </div>
            <div class="footer">
                <span  v-text="item.add_time + '天前标记'"></span>
                <button v-if="item.is_unlock === 1" @click="path(0, item)">客户主页</button>
                <button v-else @click="path(1, item)">解锁查看</button>
            </div>
        </div>
        <Toast ref="Toast"/>
    </div>
</template>

<script>
export default {
  name: 'HisCustomer',
  data () {
    return {
      tapBur: true,
      dataList: []
    }
  },
  methods: {
    path: function (num, data) {
      let _this = this
      switch (num) {
        case 0:
          _this.$router.push({
            path: '/CuHome',
            query: {
              com_id: data.company
            }
          })
          break
        case 1:
          let obj = {
            Title: '解锁客户数据',
            type: 2,
            btn: 3,
            No: '放弃解锁',
            Yes: '立即解锁',
            success: _this.clltoa
          }
          let it = {
            id: data.company
          }
          _this.$refs.Toast.isUnlock(obj, it)
          break
      }
    },
    clltoa: function (data) {
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
              _this.path(0, obj)
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
    }
  },
  mounted (options) {
    let _this = this
    document.title = 'Ta的客户'
    _this.user_id = _this.$route.query.user_id
    let str = 'user=' + _this.user_id
    _this.api.getUserCustomer(str, function (res) {
      res.data.map(function (p1, p2) {
        p1.add_time = Math.floor(Math.abs(Date.now() - new Date(p1.add_time).getTime()) / (3600 * 24 * 1e3))
      })
      _this.dataList = res.data
      console.log(res.data)
    }, function (err) {
      console.log(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.HisCustomer{
    position: fixed;
    top:0rem;
    left: 0rem;
    width:100%;
    height:100%;
    overflow: auto;
    background: #fafafa;
}
.screen{
    font-size: .6rem;
    height:2.25rem;
    display: flex;
    justify-content: space-around;
    line-height: 2.25rem;
    border-bottom: 1px solid #f7f7f7;
    background:#fff;
}
.screen>div{
    width:50%;
}
.screen>div>div{
    display: inline-block;
}
.screen>div>img{
    display: inline-block
}
.screen>div:first-child>img{
    width:.6rem;
    height:.6rem;
    vertical-align: text-top;
}
.screen>div:last-child>img{
    width:.75rem;
    height:.75rem;
    vertical-align: text-top;
}
.contBox{
    width:92%;
    background: #fff;
    margin:.5rem auto 0;
}
.contTitle{
    height:2.3rem;
    display: flex;
    padding:0 .75rem;
    position: relative;
    border-bottom: 1px solid #f7f7f7;
}
.titImg{
    align-self: center;
    width:.8rem;
    height:.8rem;
    border-radius: .15rem;
    background:rgba(255, 152, 0, 1);
    display: flex;
    margin-right:.2rem;
}
.titImg>img{
    width:.6rem;
    height:.6rem;
    align-self: center;
    margin:0 auto;
}
.titName{
    font-size: .7rem;
    line-height: 2.3rem;
}
.location{
    line-height: 2.3rem;
    position: absolute;
    right:.75rem;
}
.location>div{
    display: inline-block;
    font-size: .7rem;
    vertical-align: top;
}
.location>img{
    display: inline-block;
    width:.7rem;
    height: .7rem;
}
.contcont{
    padding:.5rem 1.65rem .5rem 1.75rem;
    text-align: left;
    border-bottom: 1px solid #f7f7f7;
}
.cc1>span{
    color:rgba(255, 152, 0, 1);
    font-size: .7rem;
}
.cc2{
    font-size: .7rem;
    color:#101010;
    font-weight: 600;
    margin-top:.4rem;
}
.cc2>span{
    color:#888;
    font-weight: 100;
    line-height: 1rem;
}
.footer{
    padding:.5rem 1.65rem .5rem 1.75rem;
    font-size: .6rem;
    color:#888;
    line-height: 1.5rem;
    text-align: left;
    height:1.5rem;
}
.footer>button{
    border:0;
}
.footer>button{
    width: 4rem;
    height:1.5rem;
    border-radius: .75rem;
    background: rgba(255, 152, 0, 0.1);
    color:rgba(255, 152, 0, 1);
    line-height: 1.5rem;
    border:0;
    float: right;
}
</style>
