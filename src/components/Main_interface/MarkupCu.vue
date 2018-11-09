<template>
    <div class="MarkupCu">
        <div class="title">
            <div v-if="true" class="meiyou" @click="path(0)">
                <img src="@/assets/info.png" alt="">
                <div>请选择客户</div>
                <img src="@/assets/right_bai.png" alt="">
            </div>
            <div v-else class="youle">
                <img src="@/assets/membershipApp_shu1.png" alt="">
                <span>北京聚牛天下网络科技有限公司</span>
                <span class="righ" @click="path(0)">更换</span>
            </div>
        </div>
        <div class="contBox">
            <div class="contTitle">
                <div>基本信息</div>
                <div></div>
            </div>
            <div class="contcon">
                <div>
                    <div>简称</div>
                    <input type="text" name="" id="" placeholder="输入客户简称（必填）">
                </div>
                <div>
                    <div>行业</div>
                    <input type="text" name="" id="" placeholder="选择客户行业（必填）">
                </div>
                <div>
                    <div>类型</div>
                    <input type="text" name="" id="" placeholder="选择客户企业类型（必填）">
                </div>
                <div>
                    <div>网址</div>
                    <input type="text" name="" id="" placeholder="输入客户企业网址">
                </div>
                <div>
                    <div>所在地</div>
                    <input type="text" name="" id="" placeholder="省/市/区（必填）">
                </div>
                <div>
                    <div>详细地址</div>
                    <input type="text" name="" id="" placeholder="填写详细地址">
                </div>
            </div>
        </div>
        <div class="contBox">
            <div class="contTitle">
                <div>企业规模</div>
                <div>以下至少填写一项</div>
            </div>
            <div class="contcon">
                <div>
                    <div>人数</div>
                    <input type="text" name="" id="" placeholder="输入客户企业人数">
                </div>
                <div>
                    <div>分支机构数</div>
                    <input type="text" name="" id="" placeholder="输入客户">
                </div>
                <div>
                    <div>营业额</div>
                    <input type="text" name="" id="" placeholder="输入客户营业额">
                </div>
            </div>
        </div>
        <div class="contBox">
            <div class="contTitle">
                <div>客户关系</div>
                <div>必填</div>
            </div>
            <div class="contcon">
                <div>
                    <div>合作关系</div>
                    <div class="btnList">
                        <span :class="navList1[0]?'atrCli':''">有过合作</span>
                        <span :class="navList1[1]?'atrCli':''">正在合作</span>
                        <span :class="navList1[2]?'atrCli':''">有过跟进</span>
                        <span :class="navList1[3]?'atrCli':''">正在跟进</span>
                    </div>
                </div>
                <div>
                    <div>决策链线索</div>
                    <div class="btnLists">
                        <span :class="navList2[0]?'atrCli':''">是</span>
                        <span :class="navList2[1]?'atrCli':''">否</span>
                    </div>
                </div>
                <div>
                    <div>线索部门</div>
                    <input type="text" name="" id="" placeholder="选择线索部门（最多三个）">
                </div>
            </div>
        </div>
        <div class="contBox">
            <div class="contTitle">
                <div>联系人</div>
                <div>仅自己可见，至少填写一个</div>
            </div>
            <div class="contcon">
                <div>
                    <div>姓名</div>
                    <input type="text" name="" id="" placeholder="输入联系人姓名（必填）">
                </div>
                <div>
                    <div>职务</div>
                    <input type="text" name="" id="" placeholder="输入联系人当前职务（必填）">
                </div>
                <div>
                    <div>电话</div>
                    <input type="text" name="" id="" placeholder="输入联系人联系电话（必填）">
                </div>
                <div>
                    <div>邮件</div>
                    <input type="text" name="" id="" placeholder="点此输入联系人邮件">
                </div>
                <div class="plus">
                    <img src="@/assets/plus.png" alt="">
                </div>
            </div>
        </div>
        <div style="height:2.5rem;"></div>
        <div class="markFooter">
            <button>提交</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MarkupCu',
  data () {
    return {
      tapBur: true,
      navList1: [true, false, false, false],
      navList2: [true, false]
    }
  },
  methods: {
    path: function (num) {
      let _this = this
      switch (num) {
        case 0:
          _this.$router.push('/srceach')
          break
      }
    }
  },
  mounted (options) {
    if (this.$route.query.type) {
      document.title = this.$route.query.type
    } else {
      document.title = '新增客户'
    }
  },
  props: ['type']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
    font-size: .7rem;
    line-height: 2rem;
    height:2rem;
    background:rgba(255, 152, 0, 1);
    margin-bottom: .5rem;
}
.title>.meiyou>div{
   color:#fff;
   display: inline-block;
}
.title>.meiyou>img{
    display: inline-block;
    align-self: center;
    width:.7rem;
    height:.7rem;
    vertical-align: text-top;
}
.title>.youle{
    width:92%;
    text-align: left;
    color:#fff;
    margin:0 auto;
}
.title>.youle>span{
    font-size: .7rem
}
.title>.youle>span:last-child{
    float: right;
}
.title>.youle>img{
    width:.7rem;
    height:.7rem;
}
.MarkupCu{
    position: fixed;
    width:100%;
    height:100%;
    top:0rem;
    left:0rem;
    background:rgba(242, 242, 243, 1);
    overflow: auto;
}
.contBox{
    width:92%;
    border-radius: .25rem;
    background:#fff;
    margin: 0 auto .5rem;
}
.contTitle{
    padding:.65rem .5rem;
    height:.7rem;
    font-size: .7rem;
    line-height: .7rem;
}
.contTitle>div:first-child{
    color:#101010;
    float: left;
    font-weight: 600;
}
.contTitle>div:last-child{
    color:#888;
    float: right;
}
.contcon{
    border-radius: .25rem;
    border-top: 1px solid #f7f7f7;
    font-size: .7rem;
    padding:.25rem .5rem;
}
.contcon>div>div:first-child{
    color:#101010;
    float: left;
}
.contcon>div{
    min-height:2.25rem;
    line-height: 2.25rem;
}
.contcon>div>input{
    width:10rem;
    height:1.5rem;
    float: right;
    margin-top:.325rem;
    border:0;
    text-align: right;
    color:#ccc;
}
.btnList{
    width: 100%;
    display: inline-block;
    text-align: right;
    line-height: 1.5rem
}
.btnList>span{
    padding:.2rem .4rem;
    border-radius: .15rem;
    background:#f1f1f1;
    color:#2c2c2c;
    display: inline-block;
    font-size: .7rem;
    height:.7rem;
    line-height: .7rem
}
.btnLists{
    width: 100%;
    text-align: right;
}
.btnLists>span{
    padding:.2rem .4rem;
    border-radius: .15rem;
    background:#f1f1f1;
    color:#2c2c2c;
}
.contcon>div>div>.atrCli{
    background:rgba(255, 152, 0, 1);
    color:#fff;
}

input::placeholder{
    color:#ccc !important;
}
.plus{
    text-align: left;
}
.plus>img{
    width:1.2rem;
    height:1.2rem;
}
.markFooter{
    position: fixed;
    bottom: 0rem;
    left:0rem;
    width:100%;
    height:2.25rem;
    background:#fff;
}
.markFooter>button{
    width:10rem;
    height:1.75rem;
    margin-top:.25rem;
    background: rgba(255, 152, 0, 1);
    color:#fff;
    border-radius: 1rem;
    border:0;
}
.markFooter>button{
    border:0;
}
</style>
