<template>
  <div class="home_content"
    v-if="show"
    @scroll="onScroll($event)">
    <div class="srceach">
        <div class="inpBox">
            <img src="@/assets/srceach.png" alt="">
            <input type="text" v-model="src" placeholder="输入会员名称进行搜索">
        </div>
        <button class="srceBtn" @click="srceach">搜索</button>
    </div>
    <div class="sort">
        <div @click="sorts(0)">
            <span>行业</span>
            <img v-if="sort[0]" src="@/assets/bot1.png" alt="">
            <img v-else src="@/assets/bot2.png" alt="">
        </div>
        <div @click="sorts(1)">
            <span>目标客户行业</span>
            <img v-if="sort[1]" src="@/assets/bot1.png" alt="">
            <img v-else src="@/assets/bot2.png" alt="">
        </div>
        <div @click="sorts(2)">
            <span>默认排序</span>
            <img v-if="sort[2]" class="pai" src="@/assets/pai1.png" alt="">
            <img v-else class="pai" src="@/assets/pai2.png" alt="">
        </div>
    </div>
    <div style="height:5rem;"></div>
    <div class="scll">
        <div class="content" v-for="(item, index) in dataList" :key="index">
            <div class="contImg" @click="path('info', item)">
                <img :src="item.avatarurl" alt="">
            </div>
            <div class="cardInfo" @click="path('info', item)">
                <p class="name" v-text="item.nickname">昵称</p>
                <p class="comName" v-text="(item.position || '职位') + '/' + (item.comname || '公司')">职位/公司</p>
                <div class="tagBox">
                    <div v-text="'工作' + item.workyears + '年'">工作N年</div>
                    <div v-text="'客户' + item.mate_num">客户999</div>
                </div>
                <div class="regular">销售产品： <span v-text="item.product">此处显示部门名称</span></div>
                <div class="regular">目标客户所在行业： <span v-text="item.mbkh_industry">此处显示部门名称</span></div>
                <div class="regular">标杆客户： <span v-text="item.bg_customer">此处显示部门名称</span></div>
            </div>
            <div class="footer">
                <div class="fooLeft">
                    <img src="@/assets/membershipApp_shu.png" alt="">
                    <span v-text="item.club_name">北京酷牛仔俱乐部</span>
                </div>
                <div class="fooRight" v-if="!(myId === item.user)">
                    <button class="guanzhu" v-if="item.is_collect === 0" @click="MyCollect(0, item)">关注Ta</button>
                    <button class="yiguanzhu" v-else-if="item.is_collect === 1" @click="MyCollect(1, item)">已关注</button>
                </div>
            </div>
        </div>
    </div>
    <div style="height:3rem;"></div>
    <sort ref="sort" :styles="'top:4.75rem;'"/>
  </div>
</template>

<script>
export default {
  name: 'home_content',
  data () {
    return {
      sort: [false, false, false],
      myId: '',
      dataList: [],
      src: null,
      page_size: 12,
      p: 1,
      ps: true,
      srceachText: ''
    }
  },
  methods: {
    srceach () {
      let str = 'search=' + this.src
      this.srceachText = this.src
      this.api.getClubUser(str, (res) => {
        console.log(res)
        this.dataList = res.data.results
      }, (err) => {
        console.log(err)
      })
    },
    MyCollect: function (num, data) {
      let _this = this
      if (num === 0) {
        let obj = {
          puser: data.user
        }
        _this.api.MyCollect(obj, function (res) {
          data.collect_id = res.data.collect_id
          if (res.status === 201) {
            data.is_collect = 1
          }
        }, function (err) {
          console.log(err)
        })
      } else if (num === 1) {
        _this.api.delMyCollect(data.collect_id, function (res) {
          if (res.status === 204) {
            data.is_collect = 0
          }
        }, function (err) {
          console.log(err)
        })
      }
    },
    sorts: function (num) {
      let _this = this
      let arr = [false, false, false]
      let sortDom = this.$refs.sort
      let obj
      if (this.sort[num]) {
        this.sort = arr
        sortDom.close()
        return
      }
      this.p = 1
      switch (num) {
        case 0:
          obj = {
            type: 3,
            success (data) {
              _this.srceachText = data
              let str = 'search=' + data + '&p=' + _this.p + '&page_size=' + _this.page_size
              _this.api.getClubUser(str, (res) => {
                console.log(res)
                _this.sort = [false, false, false]
                _this.dataList = res.data.results
              }, (err) => {
                console.log(err)
              })
            }
          }
          sortDom.on_display(obj)
          break
        case 1:
          obj = {
            type: 3,
            success (data) {
              _this.srceachText = data
              let str = 'search=' + data + '&p=' + _this.p + '&page_size=' + _this.page_size
              _this.api.getClubUser(str, (res) => {
                console.log(res)
                _this.sort = [false, false, false]
                _this.dataList = res.data.results
              }, (err) => {
                console.log(err)
              })
            }
          }
          sortDom.on_display(obj)
          break
        case 2:
          obj = {
            type: 2,
            success (data) {
              let retArr = ['-add_time', 'user__user_work__workyears', 'user__user_work__salesyears', 'user__user_work__industryyears', '-user__mark_count']
              _this.ordering = retArr[data]
              let str = 'search=' + _this.srceachText + '&p=' + _this.p + '&page_size=' + _this.page_size + '&ordering=' + _this.ordering
              _this.api.getClubUser(str, (res) => {
                console.log(res)
                _this.sort = [false, false, false]
                _this.dataList = res.data.results
              }, (err) => {
                console.log(err)
              })
              sortDom.on_display(obj)
            }
          }
          sortDom.on_display(obj)
          break
      }
      arr[num] = true
      this.sort = arr
    },
    path: function (str, data) {
      let _this = this
      switch (str) {
        case 'info':
          _this.$router.push({
            path: 'cardInfo',
            query: {
              user_id: data.user
            }
          })
          break
      }
    //   this.$router.push('/cardInfo')
    },
    init () {
      let _this = this
      let str = 'p=' + this.p + '&page_size=' + this.page_size
      _this.api.getClubUser(str, function (res) {
        _this.myId = _this.Global.userInfo.myId
        _this.dataList = res.data.results
      }, function (err) {
        console.log(err)
      })
    },
    scll () {
      if (this.ps === false) {
        return
      }
      let _this = this
      let str = 'p=' + this.p + '&page_size=' + this.page_size + '&search=' + this.srceachText + '&ordering=' + _this.ordering
      _this.api.getClubUser(str, (res) => {
        _this.dataList = _this.dataList.concat(res.data.results)
        if (res.data.count === this.dataList.length) {
          this.ps = false
        }
      }, function (err) {
        console.log(err)
      })
    },
    touchStart (e) {
    },
    touchMove (e) {
    },
    onScroll (e) {
      let total = e.srcElement.scrollHeight - e.srcElement.clientHeight - 1 // 总高度减视口高度 - 1
      if (e.srcElement.scrollTop > total) {
        this.p++
        this.scll()
      }
    }
  },
  mounted () {
    document.title = '会员'
  },
  props: ['show']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home_content{
    position: fixed;
    top:0rem;
    left:0rem;
    width:100%;
    height:100%;
    background: #f9f9f9;
    overflow: auto;
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
    height:2.75rem;
    width:100%;
    font-size: .6rem;
    color:#101010;
    background: #fff;
    border-bottom: 1px solid #f7f7f7;
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
    width:calc(92% - 1rem);
    margin:0 auto;
    padding:.75rem .5rem .5rem .5rem;
    border-radius: .25rem;
    text-align: left;
    background: #fff;
    margin-bottom: .5rem;
}
.contImg{
    width:2.5rem;
    height:2.5rem;
    border-radius:50%;
    overflow: hidden;
    display: flex;
    float: left;
}
.contImg>img{
    width:2.5rem;
    align-self: center;
}
.cardInfo{
    padding-left:.65rem;
    width:75%;
    display: inline-block;
}
.name{
    font-size: .7rem;
    color:#101010;
    line-height: .7rem;
}
.comName{
    font-size: .6rem;
    color:#888;
    line-height: .6rem;
    margin:.2rem 0;
}
.tagBox{
    margin-bottom: .5rem;
}
.tagBox>div{
    padding: .1rem .4rem;
    background: rgba(255, 152, 0, 1);
    color:#fff;
    font-size: .5rem;
    display: inline-block;
    border-radius: .1rem;
}
.regular{
    font-size: .6rem;
    line-height: .8rem;
    color:#606060;
    margin-bottom:.3rem;
}
.footer{
    height:1.5rem;
    padding:.5rem .5rem 0;
    font-size: .6rem;
    vertical-align: top;
    border-top: 1px solid #f7f7f7;
}
.fooLeft{
    float: left;
    line-height: 1.5rem;
    margin-left: 2.5rem;
}
.fooLeft>img{
    width:.6rem;
    height:.6rem;
}
.fooRight{
    float: right;
}
.fooRight>button{
    width:4rem;
    height: 1.5rem;
    border-radius:.75rem;
    font-size: .6rem;
}
.fooRight>button::after{
    border:0;
}
.fooRight>.guanzhu{
    background: rgba(255, 152, 0, 0.1);
    color:rgba(255, 152, 0, 1);
    border:0;
}
.fooRight>.yiguanzhu{
    background: rgba(241, 241, 241, 1);
    color:#888;
    border:0;
}

.Screening{
    position: fixed;
    top:4.75rem;
    left:0;
    height:100%;
    width:100%;
    background:rgba(0,0,0,.2);
}
.s1{
    background:#fff;
    padding:.5rem .75rem;
}
.s1-tit{
    font-size: .7rem;
    line-height: 2rem;
}
.s1-btnbox>div{
    padding:.25rem .4rem;
    font-size: .7rem;
    display: inline-block;
    background:rgba(241, 241, 241, 1);
    color:#101010;
    border-radius: .15rem;
    line-height: .7rem;
}
.s1-btnlist{
    padding:.5rem 0 0 0;
    border-top: 1px solid #ececed;
    margin-top:.5rem;
}
.s1-btnlist>button{
    border:0;
    border-radius: .2rem;
}
.s1-btnlist>button::after{
    border:0;
}
.cz{
    width:4rem;
    height:2rem;
    background:#bbb;
    color:#fff;
}
.qd{
    width:12.75rem;
    height:2rem;
    background:rgba(255, 152, 0, 1);
    color:#fff;
}
.s2{
    background:#fff;
    padding:.5rem .75rem;
    font-size: .7rem;
    text-align: left;
    line-height: 2rem;
}
.s2>div{
    position: relative;
}
.s2>div>img{
    width:.7rem;
    height:.7rem;
    position: absolute;
    top:.65rem;
    right:1rem;
}
</style>
