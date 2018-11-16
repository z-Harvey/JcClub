<template>
  <div class="international" v-if="show">
    <Toast ref="Toast"/>
    <div class="srceach">
        <div class="inpBox">
            <img src="@/assets/srceach.png" alt="">
            <input type="text" name="" id="" placeholder="输入客户名称关键字，例：聚牛天下">
        </div>
        <button class="srceBtn">搜索</button>
    </div>
    <div class="sort">
        <div @click="sorts(0)">
            <span>客户关系/线索</span>
            <img v-if="sort[0]" src="@/assets/bot1.png" alt="">
            <img v-else src="@/assets/bot2.png" alt="">
        </div>
        <div @click="sorts(1)">
            <span>默认排序</span>
            <img v-if="sort[1]" class="pai" src="@/assets/pai1.png" alt="">
            <img v-else class="pai" src="@/assets/pai2.png" alt="">
        </div>
    </div>
        <div class="Screening" v-if="sort[0]||sort[1]">
        <div class="s1" v-if="sort[0]">
            <div class="s1-tit">客户关系</div>
            <div class="s1-btnbox">
                <div>有过合作</div>
                <div>正在合作</div>
                <div>有过跟进</div>
                <div>正在跟进</div>
            </div>
            <div class="s1-tit">决策链线索</div>
            <div class="s1-btnbox">
                <div>有</div>
                <div>无</div>
            </div>
            <div class="s1-btnlist">
                <button class="cz">重置</button>
                <button class="qd">确定</button>
            </div>
        </div>
        <div class="s2" v-if="sort[1]">
            <div>
                <p>默认排序</p>
                <img src="@/assets/yes.png" alt="">
            </div>
            <div>
                <p>按跟进人数由高到低排序</p>
                <img src="@/assets/yes.png" alt="">
            </div>
            <div>
                <p>按跟进人数由低到高排序</p>
                <img src="@/assets/yes.png" alt="">
            </div>
            <div>
                <p>按牛币价格由高到低排序</p>
                <img src="@/assets/yes.png" alt="">
            </div>
            <div>
                <p>按牛币价格由低到高排序</p>
                <img src="@/assets/yes.png" alt="">
            </div>
        </div>
    </div>
    <div class="content">
        <div class="contFor" v-for="(item, index) in dataList" :key="index">
            <div class="tapBox">
                <img src="@/assets/qi.png" alt="">
            </div>
            <div class="forRight">
                <div class="riCikename">
                    <div class="cikeName" v-text="item.name">北京聚牛天下网络科技有限公司</div>
                    <div class="cikeposition">
                        <img src="@/assets/location.png" alt="">
                        <span>地址</span>
                    </div>
                </div>
                <div class="ricTag">
                    <div>有钱任性</div>
                    <div>有钱任性</div>
                    <div>有钱任性</div>
                </div>
                <div class="forFuterr">
                    <div>内部跟进 <span v-text="item.club_mark_count"></span></div>
                    <div>外部跟进 <span v-text="item.out_mark_count"></span></div>
                    <button @click="path(0, item)" v-if="item.is_unlock === 0">客户主页</button>
                    <button @click="path(1)" v-else>解锁查看</button>
                </div>
            </div>
        </div>
    </div>
    <div style="height:2.75rem;"></div>
  </div>
</template>

<script>
export default {
  name: 'international',
  data () {
    return {
      sort: [false, false],
      dataList: []
    }
  },
  methods: {
    /**
     * 跳转到标记客户
     */
    callMoldOk: function (data) {
      this.$router.push({
        name: 'ApplyOpen'
      })
    },
    sorts: function (num) {
      let arr = [false, false]
      if (this.sort[num]) {
        this.sort = arr
        return
      }
      arr[num] = true
      this.sort = arr
    },
    path: function (typ, item) {
      let _this = this
      if (typ === 0) {
        this.$router.push({
          path: '/CuHome',
          query: {
            com_id: item.id
          }
        })
      } else if (typ === 1) {
        // this.$router.push('/CuHome')
        let obj = {
          Title: '解锁客户数据',
          type: 2,
          btn: 3,
          No: '放弃解锁',
          Yes: '立即解锁'
        }
        _this.$refs.Toast.on_display(obj)
      }
    },
    /**
     * 审核失败情况下跳转到我的客户
     */
    fail: function () {
    },
    init: function () {
      let _this = this
      let str = ''
      _this.api.getCompanySeaList(str, function (res) {
        console.log(res)
        _this.dataList = res.data.results
      }, function (err) {
        console.log(err)
      })
      _this.api.CompanySeaStatus(str, function (res) {
        console.log(res)
        let obj = {}
        switch (res.data.status) {
          case 0:
            obj = {
              Title: '提示',
              Content: '您尚未开通查客户权限，是否立即申请开通？',
              type: 1,
              btn: 3,
              No: '放弃申请',
              Yes: '立即申请',
              success: _this.callMoldOk
            }
            _this.$refs.Toast.on_display(obj)
            break
          case 2:
            obj = {
              Title: '提示',
              Content: '审核中',
              type: 1,
              btn: 0,
              No: '确认'
            }
            _this.$refs.Toast.on_display(obj)
            break
          case 3:
            obj = {
              Title: '提示',
              Content: '原因：此处显示未通过原因',
              type: 1,
              btn: 3,
              No: '我的客户',
              Yes: '申请开通',
              success: _this.callMoldOk,
              fail: _this.fail
            }
            _this.$refs.Toast.on_display(obj)
            break
        }
      }, function (err) {
        console.log(err)
      })
    }
  },
  mounted () {
    document.title = '公海'
  },
  props: ['show']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    margin-top:4.75rem;
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
    padding:.5rem 0;
    border-bottom: 1px solid #f7f7f7
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
    padding-left:.9rem;
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
    font-size: .5rem;
    margin:.4rem .25rem .4rem 0;
    color:#888;
}
.ricTag>div{
    padding:.1rem .5rem;
    background:rgba(236, 236, 237, 1);
    line-height: .8rem;
    display: inline-block;
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
.forFuterr>button{
    width:4rem;
    height:1.5rem;
    border-radius:.75rem;
    border:0;
    line-height: 1.5rem;
    font-size: .6rem;
    color:rgba(255, 152, 0, 1);
    background:rgba(255, 152, 0, 0.1);
    float: right;
}
.forFuterr>button::after{
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
