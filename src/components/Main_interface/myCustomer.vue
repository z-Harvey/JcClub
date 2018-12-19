<template>
  <div class="home_content" @scroll="onScroll($event)">
    <div class="srceach">
        <div class="inpBox">
            <img src="@/assets/srceach.png" alt="">
            <input type="text" v-model="src" @blur="blurs($event)" placeholder="输入客户名称关键字">
        </div>
        <button class="srceBtn" @click="srceach">搜索</button>
    </div>
    <div class="sort" style="display:none;">
        <div>
            <span>客户关系/线索</span>
            <img v-if="false" src="@/assets/bot1.png" alt="">
            <img v-else src="@/assets/bot2.png" alt="">
        </div>
        <div>
            <span>默认排序</span>
            <img v-if="false" src="@/assets/bot1.png" alt="">
            <img v-else src="@/assets/bot2.png" alt="">
        </div>
        <div>
            <span>全部状态</span>
            <img v-if="false" src="@/assets/bot1.png" alt="">
            <img v-else src="@/assets/bot2.png" alt="">
        </div>
    </div>
    <div class="sotrp" style="display:none;">
            <img v-if="true" class="pai" src="@/assets/pai1.png" alt="">
            <img v-else class="pai" src="@/assets/pai2.png" alt="">
        </div>
    <div class="content">
        <div class="contFor" v-for="(item, index) in dataList" :key="index">
            <div class="tapBox">
                <img src="@/assets/qi.png" alt="">
            </div>
            <div class="forRight">
                <div class="riCikename" @click="path(1, item)">
                    <div class="cikeName" v-text="item.company_name">北京聚牛天下网络科技有限公司</div>
                    <div class="cikeposition">
                        <img v-if="item.is_unlock === 0" src="@/assets/lock.png" alt="">
                    </div>
                </div>
                <div class="ricTag">
                    <span v-if="item.has_decision === 0">#有决策链线索#</span>
                    <span v-if="item.has_decision === 1">#无决策链线索#</span>
                    <span v-if="item.relation === 0">#有过合作#</span>
                    <span v-if="item.relation === 1">#正在合作#</span>
                    <span v-if="item.relation === 2">#有过跟进#</span>
                    <span v-if="item.relation === 3">#正在跟进#</span>
                </div>
                <div class="forFuterr">
                    <div>
                        <img src="@/assets/foter.png" alt="">
                        <span>足迹 <span v-text="item.footPrint_count"></span></span>
                    </div>
                    <div>
                        <img src="@/assets/ceaseImg.png" alt="">
                        <span>完善度 <span v-text="item.completion"></span>%</span>
                    </div>
                    <button @click="path(0, item)">我的客户笔记</button>
                </div>
            </div>
        </div>
    </div>
    <div class="btnMot" v-show="newList">
      <div class="motCont">
        <div>
          <div @click="path(4)">
            <div>
              <img src="@/assets/Alone_a.png" alt="">
            </div>
            <div>新增客户</div>
          </div>
          <div @click="path(5)">
            <div>
              <img src="@/assets/Alone.png" alt="">
            </div>
            <div>批量新增客户</div>
          </div>
        </div>
        <div class="btnQx" @click="path(3)">取消</div>
      </div>
    </div>
    <div class="blank" v-if="dataList.length === 0">
        <img src="@/assets/blank.png" alt="">
    </div>
    <div class="footBtn">
        <button @click="path(3)">新增客户</button>
    </div>
    <div style="height:2.75rem;"></div>
    <Toast ref="Toast"/>
  </div>
</template>

<script>
export default {
  name: 'home_content',
  data () {
    return {
      dataList: [],
      src: null,
      p: 1,
      page_size: 12,
      ps: true,
      newList: false
    }
  },
  methods: {
    blurs (e) {
      document.documentElement.scrollTop = document.documentElement.scrollTop
      document.body.scrollTop = document.body.scrollTop
    },
    srceach () {
      let str = 'search=' + this.src
      this.api.srchMyCompany(str, (res) => {
        this.dataList = res.data.results
      }, (err) => {
        this.errMotl(err)
      })
    },
    onScroll (e) {
      if (this.ps === false) {
        return
      }
      let total = e.srcElement.scrollHeight - e.srcElement.clientHeight - 1 // 总高度减视口高度 - 1
      if (e.srcElement.scrollTop > total) {
        this.p++
        this.scll()
      }
    },
    scll: function () {
      let _this = this
      let str = 'p=' + this.p + '&page_size=' + this.page_size
      _this.api.getMyCustomer(str, function (res) {
        _this.dataList = _this.dataList.concat(res.data.results)
        if (res.data.count === _this.dataList.length) {
          _this.ps = false
        }
      }, function (err) {
        _this.errMotl(err)
      })
    },
    init: function () {
      let _this = this
      let str = 'p=' + this.p + '&page_size=' + this.page_size
      _this.api.getMyCustomer(str, function (res) {
        _this.dataList = res.data.results
      }, function (err) {
        _this.errMotl(err)
      })
    },
    path: function (num, item) {
      let _this = this
      switch (num) {
        case 0:
          _this.$router.push({
            path: '/SalesNotes',
            query: {
              com_id: item.company
            }
          })
          break
        case 1:
          if (item.is_unlock === 0) {
            let obj = {
              Title: '解锁客户主页',
              type: 2,
              btn: 3,
              No: '放弃解锁',
              Yes: '立即解锁',
              success: _this.clltoa
            }
            item['id'] = item.company
            _this.$refs.Toast.isUnlock(obj, item)
          } else {
            _this.$router.push({
              path: '/CuHome',
              query: {
                com_id: item.company
              }
            })
          }
          break
        case 3:
          this.newList = !this.newList
          break
        case 4:
          this.$router.push('/MarkupCu')
          break
        case 5:
          this.$router.push('/batchNew')
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
              _this.$router.push({
                path: '/CuHome',
                query: {
                  com_id: data.id
                }
              })
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
    document.title = '我的客户'
    this.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home_content{
    position: fixed;
    width: 100%;
    height:100%;
    top:0;
    left:0;
    overflow: auto;
    background: #f9f9f9;
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
    width:88%;
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

.sotrp{
    width:12%;
    position: fixed;
    right:0;
    top:2rem;
    height:2.75rem;
    display: flex;
    border-bottom: 1px solid #f7f7f7;
    background: #fff;
}
.sotrp>img{
    align-self: center;
    width:.65rem;
    height:.65rem;
    margin:0 auto;
}

.content{
    margin-top:2.5rem;
    padding-top:.5rem;
    padding-bottom: .5rem;
}
.contTit{
    padding:0 .75rem;
    height:2.25rem;
    font-size: .8rem;
    display: flex;
    position: relative;
    border-bottom: 1px solid #f7f7f7
}
.contTit>span{
    float: left;
    line-height: 2.25rem;
    color:#101010;
}
.contTit>img{
    width:2.9rem;
    height:.7rem;
    align-self: center;
    float: right;
    position: absolute;
    right: .75rem;
}
.contFor{
    margin:0 .75rem;
    padding:.75rem .5rem;
    border-radius: .25rem;
    background: #fff;
    margin-bottom: .5rem;
}
.tapBox{
    width:.8rem;
    height:.8rem;
    border-radius:.15rem;
    background: rgba(255, 152, 0, 1);
    display: flex;
    float: left;
}
.tapBox>img{
    width:.7rem;
    height:.7rem;
    align-self: center;
    margin:0 auto;
}
.forRight{
    min-height: 1rem;
    text-align: left;
    padding-left:1rem;
}
.riCikename{
    font-size: .7rem;
    line-height: .8rem;
}
.riCikename>.cikeName{
    display: inline-block;
}
.riCikename>.cikeposition{
    float: right;
    display: flex;
    color: #888;
}
.cikeposition>img{
    width:.7rem;
    height:.7rem;
    align-self: center;
}
.ricTag{
    font-size: .7rem;
    color: rgba(255, 152, 0, 1);
    margin:.45rem 0 .5rem 0;
}
.ricTag>div{
    line-height: .7rem;
    display: inline-block;
    margin-right:.5rem;
}
.forFuterr{
    color:#888;
    font-size:.6rem;
}
.forFuterr> div{
    display: inline-block;
    line-height: 1.5rem;
    margin-right: .4rem;
}
.forFuterr> div>img{
    width: .6rem;
    height:.6rem;
    vertical-align: text-top;
}
.forFuterr>button{
    border-radius:.75rem;
    border:0;
    font-size: .6rem;
    color:rgba(255, 152, 0, 1);
    background:rgba(255, 152, 0, 0.1);
    float: right;
    padding:.3rem .5rem;
}
.forFuterr>button::after{
    border:0;
}
.footBtn{
    height:2.25rem;
    width:100%;
    background:#fff;
    position: fixed;
    bottom: 0rem;
    left:0rem;
}
.footBtn>button{
    width:10rem;
    height:1.75rem;
    border-radius: 1rem;
    background:rgba(255, 152, 0, 1);
    color:#fff;
    border:none;
    font-size: .7rem;
    margin-top:.25rem;
}
.footBtn>button::active{
    border: none;
}
.btnMot{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(15, 15, 15, .55);
    z-index: 12
}
.motCont{
    width:14rem;
    background:#fff;
    border-radius: .2rem;
    margin: 10rem auto 0;
    font-size: .7rem;
}
.motCont>div{
    display: flex;
    justify-content: space-around;
}
.motCont>div>div{
    width:50%;
    padding:.75rem 0;
}
.motCont>div>div>div>img{
    width: 1.5rem;
    height: 1.5rem;
}
.btnQx{
    color:#888;
    font-size: .7rem;
    height:2rem;
    line-height: 2rem;
}
</style>
