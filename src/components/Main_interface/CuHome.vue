<template>
    <div class="CuHome">
        <Toast @confirm="Unlock"></Toast>
        <ModalInfo></ModalInfo>
        <div class="companyInfo">
            <div class="comTopBox">
                <div class="textInfo">
                    <div class="shu">
                        <img src="@/assets/membershipApp_shu.png" alt="">
                    </div>
                    <span>北京聚牛天下网络科技有限公司</span>
                    <div class="genjinNum">
                        <span>内部跟进 999</span>
                        <span>外部跟进 999</span>
                    </div>
                </div>
                <button @click="path(2)">我的销售笔记</button>
            </div>
            <div class="tagBox">
                <div class="tagBoxs" :class="tapBur?'tagBoxs1':'tagBoxs2'">
                    <div>有钱任性</div>
                    <div>有钱 999</div>
                    <div>有 9</div>
                    <div>有钱性 999</div>
                    <div>有钱aa任性 999</div>
                    <div>有钱任s性 999</div>
                    <div>有钱任s性 999</div>
                    <div>有钱任s性 999</div>
                    <div>有钱任s性 999</div>
                    <div>有钱任s性 999</div>
                </div>
                <div class="pullDown" @click="pullDown" :class="tapBur?'pullDown2':'pullDown1'">
                    <img src="@/assets/pull_down.png" alt="">
                </div>
            </div>
        </div>
        <div class="navList">
            <button @click="path(0)" :class="aftBtn?'aftBtn':''">客户信息</button>
            <button @click="path(1)" :class="!aftBtn?'aftBtn':''">跟进会员999</button>
        </div>
        <!-- <router-view :type="'CuHome'" @alert="alert" @mol="mol_2"/> -->
        <CuInfo :show="aftBtn" :type="'CuHome'" @alert="alert" @mol="mol_2"/>
        <FollowNumber :show="!aftBtn" :type="'CuHome'" @alert="alert" @mol="mol_2"/>
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
      aftBtn: true
    }
  },
  components: {
    FollowNumber,
    CuInfo
  },
  methods: {
    Unlock: function () {
      console.log('解锁')
      this.$children[0].close()
    },
    // 标签下拉
    pullDown: function () {
      this.tapBur = !this.tapBur
    },
    // 弹出
    alert: function (niubi) {
      let obj = {
        Title: '提示',
        Content: '是否确认花费' + niubi + '牛币解锁？',
        Yes: '立即解锁',
        No: '放弃解锁',
        type: 1,
        btn: 2
      }
      this.$children[0].on_display(obj)
    },
    mol_2: function () {
      this.$children[1].on_display('obj')
    },
    // 路由
    path: function (bum) {
      let _this = this
      switch (bum) {
        case 0:
        //   _this.$router.push({name: 'CuInfo'})
          _this.aftBtn = true
          break
        case 1:
        //   _this.$router.push({name: 'FollowNumber'})
          _this.aftBtn = false
          break
        case 2:
          _this.$router.push('/SalesNotes')
          break
        default:
          console.log('bum:' + bum)
      }
    }
  },
  mounted () {
    document.title = '客户主页'
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
    height:1.7rem;
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
    height:1.7rem;
}
.textInfo>span{
    font-size: .7rem;
    vertical-align: top;
    line-height: .7rem;
}
.genjinNum{
    font-size: .6rem;
    margin:-.1rem 0 0 1rem;
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
    height:2.9rem;
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
