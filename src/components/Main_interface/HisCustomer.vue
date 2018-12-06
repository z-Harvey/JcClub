<template>
    <div class="HisCustomer" @scroll="onScroll($event)">
        <div class="screen">
            <div @click="sorts(0)">
                <div>客户关系/线索</div>
                <img v-if="sort[0]" src="@/assets/bot1.png">
                <img v-else src="@/assets/bot2.png">
            </div>
            <div @click="sorts(1)">
                <div>默认排序</div>
                <img v-if="sort[1]" src="@/assets/pai1.png">
                <img v-else src="@/assets/pai2.png">
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
        <div class="blank" v-if="dataList.length === 0">
            <img src="@/assets/blank.png" alt="">
        </div>
        <Toast ref="Toast"/>
        <sort ref="sort" :styles="'top:2.25rem;'"/>
    </div>
</template>

<script>
export default {
  name: 'HisCustomer',
  data () {
    return {
      tapBur: true,
      dataList: [],
      page_size: 12,
      p: 1,
      ps: true,
      sort: [false, false],
      relation: '',
      has_decision: '',
      ordering: '-add_time'
    }
  },
  methods: {
    sorts (num) {
      let arr = [false, false]
      let _this = this
      if (this.sort[num]) {
        this.sort = arr
        this.$refs.sort.close()
        return
      }
      let obj = null
      switch (num) {
        case 0:
          obj = {
            type: 100,
            success (data, data2) {
              _this.p = 1
              _this.relation = data
              _this.has_decision = data2
              _this.init()
            },
            fail () {
              _this.sort = [false, false]
            }
          }
          this.$refs.sort.on_display(obj)
          break
        case 1:
          obj = {
            type: 23,
            success (data) {
              _this.p = 1
              let arrs = ['add_time', '-add_time']
              _this.ordering = arrs[data]
              _this.init()
            },
            fail () {
              _this.sort = [false, false]
            }
          }
          this.$refs.sort.on_display(obj)
          break
      }
      arr[num] = true
      this.sort = arr
    },
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
            Title: '解锁客户主页',
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
            _this.errMotl(err)
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
    init () {
      let str = 'user=' + this.user_id + '&p=' + this.p + '&page_size=' + this.page_size + '&relation=' + this.relation + '&has_decision=' + this.has_decision + '&ordering=' + this.ordering
      this.api.getUserCustomer(str, (res) => {
        res.data.results.map((p1, p2) => {
          p1.add_time = Math.floor(Math.abs(Date.now() - new Date(p1.add_time).getTime()) / (3600 * 24 * 1e3))
        })
        this.dataList = res.data.results
        if (this.dataList.length === res.data.count) {
          this.ps = false
        } else {
          this.ps = true
        }
      }, (err) => {
        this.errMotl(err)
      })
    },
    initScroll () {
      let str = 'user=' + this.user_id + '&p=' + this.p + '&page_size=' + this.page_size + '&relation=' + this.relation + '&has_decision=' + this.has_decision + '&ordering=' + this.ordering
      this.api.getUserCustomer(str, (res) => {
        res.data.results.map(function (p1, p2) {
          p1.add_time = Math.floor(Math.abs(Date.now() - new Date(p1.add_time).getTime()) / (3600 * 24 * 1e3))
        })
        this.dataList = this.dataList.concat(res.data.results)
        if (this.dataList.length === res.data.count) {
          this.ps = false
        } else {
          this.ps = true
        }
      }, (err) => {
        console.log(err)
      })
    },
    onScroll (e) {
      if (this.ps === false) {
        return
      }
      let total = e.srcElement.scrollHeight - e.srcElement.clientHeight - 1 // 总高度减视口高度 - 1
      if (e.srcElement.scrollTop > total) {
        this.p++
        this.initScroll()
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
  mounted (options) {
    document.title = 'Ta的客户'
    this.user_id = this.$route.query.user_id
    this.init()
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
    border-radius: .75rem;
    background: rgba(255, 152, 0, 0.1);
    color:rgba(255, 152, 0, 1);
    border:0;
    float: right;
    font-size: .6rem;
    padding:.3rem .6rem;
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
</style>
