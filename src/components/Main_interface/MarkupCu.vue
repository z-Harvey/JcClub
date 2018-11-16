<template>
    <div class="MarkupCu">
        <div class="title">
            <div v-if="!comCont.name" class="meiyou" @click="path(0)">
                <img src="@/assets/info.png" alt="">
                <div>请选择客户</div>
                <img src="@/assets/right_bai.png" alt="">
            </div>
            <div v-else class="youle">
                <img src="@/assets/membershipApp_shu1.png" alt="">
                <span v-text="comCont.name">北京聚牛天下网络科技有限公司</span>
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
                    <input type="text" v-model="upData.simple_name" placeholder="输入客户简称（必填）">
                </div>
                <div>
                    <div class="cheLeft">行业</div>
                    <div @click="linkClick('hangye')" v-text="upData.industry || '当前所在行业（必填）'" class="checkBox"></div>
                </div>
                <div>
                    <div class="cheLeft">类型</div>
                    <div @click="linkClick('type')" v-text="upData.type || '选择客户企业类型（必填）'" class="checkBox"></div>
                </div>
                <div>
                    <div>网址</div>
                    <input type="text" v-model="upData.net_url" placeholder="输入客户企业网址">
                </div>
                <div>
                    <div>所在地</div>
                    <div class="xexBox">
                        <select v-model="area[0]" @change="areaClick(0)">
                            <option value="0">--请选择--</option>
                            <option v-for="(item, index) in pid1" :key="index" :value="item.id" v-text="item.name"></option>
                        </select>
                        <select v-model="area[1]" @change="areaClick(1)">
                            <option value="0">--请选择--</option>
                            <option v-for="(item, index) in pid2" :key="index" :value="item.id" v-text="item.name">市</option>
                        </select>
                        <select v-model="area[2]" @change="areaClick(2)">
                            <option value="0">--请选择--</option>
                            <option v-for="(item, index) in pid3" :key="index" :value="item.id" v-text="item.name">区</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div>详细地址</div>
                    <input type="text" v-model="upData.address" placeholder="填写详细地址">
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
                    <input type="number" v-model="upData.people_num" placeholder="输入客户企业人数">
                </div>
                <div>
                    <div>分支机构数</div>
                    <input type="number" v-model="upData.fzjg_num" placeholder="输入客户">
                </div>
                <div>
                    <div>营业额</div>
                    <input type="number" v-model="upData.turnover" placeholder="输入客户营业额">
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
                        <span @click="nav1(0)" :class="navList1[0]?'atrCli':''">有过合作</span>
                        <span @click="nav1(1)" :class="navList1[1]?'atrCli':''">正在合作</span>
                        <span @click="nav1(2)" :class="navList1[2]?'atrCli':''">有过跟进</span>
                        <span @click="nav1(3)" :class="navList1[3]?'atrCli':''">正在跟进</span>
                    </div>
                </div>
                <div>
                    <div>决策链线索</div>
                    <div class="btnLists">
                        <span @click="nav2(0)" :class="navList2[0]?'atrCli':''">是</span>
                        <span @click="nav2(1)" :class="navList2[1]?'atrCli':''">否</span>
                    </div>
                </div>
                <div>
                    <div class="cheLeft">线索部门</div>
                    <div @click="linkClick('xiansuo')" v-text="upData.department || '选择线索部门（最多三个）'" class="checkBox"></div>
                </div>
            </div>
        </div>
        <div class="contBox">
            <div class="contTitle">
                <div>联系人</div>
                <div>仅自己可见，至少填写一个</div>
            </div>
            <div class="contcon" v-for="(item, index) in contact_list" :key="index">
                <div>
                    <div>姓名</div>
                    <input type="text" v-model="item.name" placeholder="输入联系人姓名（必填）">
                </div>
                <div>
                    <div>职务</div>
                    <input type="text" v-model="item.position" placeholder="输入联系人当前职务（必填）">
                </div>
                <div>
                    <div>电话</div>
                    <input type="number" v-model="item.phone" placeholder="输入联系人联系电话（必填）">
                </div>
                <div>
                    <div>邮件</div>
                    <input type="email" v-model="item.email" placeholder="点此输入联系人邮件">
                </div>
                <div class="plus">
                    <img src="@/assets/plus.png" alt="">
                </div>
            </div>
        </div>
        <div style="height:2.5rem;"></div>
        <div class="markFooter">
            <button @click="submit">提交</button>
        </div>
        <linkage ref="linkage" @ok="cllLink" @ok1="linkCall"/>
        <Check ref="check" @ok="checkCall"/>
    </div>
</template>

<script>
export default {
  name: 'MarkupCu',
  data () {
    return {
      tapBur: true,
      navList1: [true, false, false, false],
      navList2: [true, false],
      comCont: {},
      pid1: [],
      pid2: [],
      pid3: [],
      area: [0, 0, 0],
      contact_list: [{
        name: '',
        position: '',
        phone: '',
        email: ''
      }],
      upData: {
        relation: '',
        has_decision: '',
        department: '',
        simple_name: '',
        industry: '',
        type: '',
        net_url: '',
        province: '',
        city: '',
        area: '',
        address: '',
        people_num: '',
        fzjg_num: '',
        turnover: '',
        company: '',
        contact_list: [{
          name: '',
          position: '',
          phone: '',
          email: ''
        }]
      }
    }
  },
  methods: {
    submit: function () {
      let _this = this
      _this.pid1.map(function (p1, p2) {
        if (p1.id === _this.area[0]) {
          _this.upData.province = p1.name
        }
      })
      _this.pid2.map(function (p1, p2) {
        if (p1.id === _this.area[1]) {
          _this.upData.city = p1.name
        }
      })
      _this.pid3.map(function (p1, p2) {
        if (p1.id === _this.area[2]) {
          _this.upData.area = p1.name
        }
      })
      for (let i = 0; i < _this.navList1.length; i++) {
        if (_this.navList1[i]) {
          _this.upData.relation = i
        }
      }
      for (let i = 0; i < _this.navList2.length; i++) {
        if (_this.navList2[i]) {
          _this.upData.has_decision = i
        }
      }
      _this.upData.net_url = 'http://' + _this.upData.net_url
      _this.upData.company = this.comCont.id
      console.log(this.upData)
      _this.upData.contact_list = JSON.parse(JSON.stringify(_this.contact_list))
      _this.upData.contact_list = JSON.stringify(_this.upData.contact_list)
      _this.api.PostMyCustomer(_this.upData, function (res) {
        console.log(res)
      }, function (err) {
        console.log(err)
      })
    },
    cllLink: function (res) {
      console.log(res)
      this.upData.industry = res.name
    },
    nav1: function (num) {
      let arr = [false, false, false, false]
      if (num === 1) {
        this.navList2 = [true, false]
      }
      arr[num] = true
      this.navList1 = arr
    },
    nav2: function (num) {
      let arr = [false, false]
      if (this.navList1[1]) {
        arr = [true, false]
        this.navList2 = arr
        return
      }
      arr[num] = true
      this.navList2 = arr
    },
    checkCall: function (res) {
      this.upData.type = res
    },
    linkCall: function (res) {
      console.log(res)
      this.upData.department = res.name
    },
    linkClick: function (typ) {
      let _this = this
      if (typ === 'hangye') {
        _this.$refs.linkage.on_display({type: 'industry', Choice: 1})
      } else if (typ === 'type') {
        _this.$refs.check.on_display({type: 2, Pattern: 1})
      } else if (typ === 'xiansuo') {
        _this.$refs.linkage.on_display({type: 'industry', Choice: 3})
      }
    },
    path: function (num) {
      let _this = this
      switch (num) {
        case 0:
          _this.$router.push('/srceach')
          break
      }
    },
    areaClick: function (num) {
      let _this = this
      if (num === 0) {
        _this.area[1] = 0
        _this.area[2] = 0
        _this.areaList('pid2', num)
      } else if (num === 1) {
        _this.area[2] = 0
        _this.areaList('pid3', num)
      }
    },
    areaList: function (el, num) {
      let str = 'pid=' + num
      let _this = this
      _this.api.getAreaList(str, function (res) {
        _this[el] = res.data
      }, function (err) {
        console.log(err)
      })
    }
  },
  mounted (options) {
    let _this = this
    if (this.$route.query.type) {
      document.title = this.$route.query.type
    } else {
      document.title = '新增客户'
    }
    _this.comCont = _this.$route.query
    _this.areaList('pid1', 0)
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
.xexBox{
    margin-top:.3rem;
    text-align: right;
    border: none;
    width: calc(100% - 1rem);
    padding:0 0 0 1rem;
    color:#ccc;
    background: #fff;
    font-size: .7rem;
}
.xexBox>select{
    width:100%;
    height:1.5rem;
    vertical-align: top;
    border:0;
    font-size: .7rem;
    color:#888;
}
.checkBox{
    width:calc(100% - 3rem);
    padding-left:3rem;
    /* float: right; */
    margin-top:.3rem;
    text-align: right;
    border: none;
    font-size: .7rem;
    line-height: 1.5rem;
    color:#ccc;
}
.cheLeft{
    line-height: 1.5rem;
}
</style>
