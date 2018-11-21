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
                    <div>所在地(必选)</div>
                    <div class="xexBox">
                        <select v-model="area.a1" @change="areaClick(0)">
                            <option value="0" v-text="upData.province||'选择省'"></option>
                            <option v-for="(item, index) in pid1" :key="index" :value="item.id" v-text="item.name"></option>
                        </select>
                        <select v-model="area.a2" @change="areaClick(1)">
                            <option value="0" v-text="upData.city||'选择市'"></option>
                            <option v-for="(item, index) in pid2" :key="index" :value="item.id" v-text="item.name">市</option>
                        </select>
                        <select v-model="area.a3" @change="areaClick(2)">
                            <option value="0" v-text="upData.area||'选择区'"></option>
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
            </div>
            <div class="plus">
                <img @click="contactPush" src="@/assets/plus.png" alt="">
            </div>
        </div>
        <div style="height:2.5rem;"></div>
        <div class="markFooter">
            <button @click="submit">提交</button>
        </div>
        <linkage ref="linkage" @ok="cllLink" @ok1="linkCall"/>
        <Check ref="check" @ok="checkCall"/>
        <search ref="search" @ok="cllSrceach"/>
        <Toast ref="Toast"/>
    </div>
</template>

<script>
import search from '@/components/Logon_process/srceach'

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
      urlExp: "^((https|http|ftp|rtsp|mms)?://)?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].[a-z]{2,6})(:[0-9]{1,4})?((/?)|(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$",
      area: {
        a1: 0,
        a2: 0,
        a3: 0
      },
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
        people_num: null,
        fzjg_num: null,
        turnover: null,
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
  components: {
    search
  },
  methods: {
    cllSrceach (call) {
      this.comCont = call
    },
    contactPush: function () {
      let obj = {
        name: '',
        position: '',
        phone: '',
        email: ''
      }
      this.contact_list.push(obj)
    },
    submit: function () {
      let _this = this
      _this.pid1.map(function (p1, p2) {
        if (p1.id === _this.area.a1) {
          _this.upData.province = p1.name
        }
      })
      _this.pid2.map(function (p1, p2) {
        if (p1.id === _this.area.a2) {
          _this.upData.city = p1.name
        }
      })
      _this.pid3.map(function (p1, p2) {
        if (p1.id === _this.area.a3) {
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
      _this.upData.company = this.comCont.id
      if (_this.upData.company === '' || _this.upData.company === undefined) {
        let obj = {
          Title: '提示',
          Content: '未选择公司',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      } else if (_this.upData.simple_name === '') {
        let obj = {
          Title: '提示',
          Content: '请输入简称',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      } else if (_this.upData.industry === '') {
        let obj = {
          Title: '提示',
          Content: '请选择行业',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      } else if (_this.upData.type === '') {
        let obj = {
          Title: '提示',
          Content: '请选择类型',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      } else if (_this.upData.net_url !== '') {
        let reg = RegExp(/:\/\//)
        console.log(reg.test(_this.upData.net_url))
        if (!(reg.test(_this.upData.net_url))) {
          _this.upData.net_url = 'http://' + _this.upData.net_url
        }
        let re = new RegExp(_this.urlExp)
        if (!(re.test(_this.upData.net_url))) {
          let obj = {
            Title: '提示',
            Content: '网址不正确',
            type: 1,
            btn: 0
          }
          this.$refs.Toast.on_display(obj)
          return
        }
      }
      if (_this.upData.province === '') {
        let obj = {
          Title: '提示',
          Content: '未选择省',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      } else if (_this.upData.city === '') {
        let obj = {
          Title: '提示',
          Content: '未选择市',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      } else if (_this.upData.area === '') {
        let obj = {
          Title: '提示',
          Content: '未选择区',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      } else if (_this.upData.people_num === null && _this.upData.fzjg_num === null && _this.upData.turnover === null) {
        let obj = {
          Title: '提示',
          Content: '企业规模至少填写一项',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      }
      if (_this.contact_list[0].name === '' || _this.contact_list[0].phone === '' || _this.contact_list[0].position === '') {
        if (!(_this.contact_list[0].name === '' && _this.contact_list[0].phone === '' && _this.contact_list[0].position === '')) {
          if (_this.contact_list[0].name === '') {
            let obj = {
              Title: '提示',
              Content: '请填写联系人姓名',
              type: 1,
              btn: 0
            }
            this.$refs.Toast.on_display(obj)
            return
          } else if (_this.contact_list[0].position === '') {
            let obj = {
              Title: '提示',
              Content: '请填写联系人职务',
              type: 1,
              btn: 0
            }
            this.$refs.Toast.on_display(obj)
            return
          } else if (_this.contact_list[0].phone === '') {
            let obj = {
              Title: '提示',
              Content: '请填写联系人电话',
              type: 1,
              btn: 0
            }
            this.$refs.Toast.on_display(obj)
            return
          }
        } else {
          let obj = {
            Title: '提示',
            Content: '至少填写一位联系人',
            type: 1,
            btn: 0
          }
          this.$refs.Toast.on_display(obj)
          return
        }
      } else {
        if (!(/^1[3456789]\d{9}$/.test(_this.contact_list[0].phone))) {
          let obj = {
            Title: '提示',
            Content: '电话号码格式错误',
            type: 1,
            btn: 0
          }
          this.$refs.Toast.on_display(obj)
          return
        }
      }
      if (_this.upData.province === '') {
        let obj = {
          Title: '提示',
          Content: '未选择省',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      }
      _this.upData.contact_list = _this.contact_list
      _this.upData.contact_list = JSON.stringify(_this.upData.contact_list)
      if (_this.cType === 'edit') {
        _this.api.putMyCustomers(_this.comCont.id, _this.upData, function (res) {
          console.log(res)
          if (res.status === 200) {
            _this.$router.go(-1)
          }
        }, function (err) {
          console.log(err)
        })
        return
      }
      _this.api.PostMyCustomer(_this.upData, function (res) {
        console.log(res)
        if (res.status === 201) {
          let obj = {
            Title: '解锁成功',
            Content: '新增成功，获得牛钻+' + res.data.niuz_num,
            type: 1,
            btn: 2,
            No: '我的客户',
            Yes: '继续新增',
            success: function (res) {
              console.log(res)
              _this.$router.go(-1)
            },
            fail: function () {
              _this.Global.navListType = [false, false, true, false]
              _this.$router.push({
                path: '/home'
              })
            }
          }
          _this.$refs.Toast.on_display(obj)
        }
      }, function (err) {
        console.log(err)
        if (err.data.net_url) {
          let obj = {
            Title: '提示',
            Content: '网址不正确',
            type: 1,
            btn: 0
          }
          _this.$refs.Toast.on_display(obj)
        } else if (err.data.non_field_errors) {
          let obj = {
            Title: '提示',
            Content: '标记过该客户，可进入客户首页编辑标记信息。',
            type: 1,
            btn: 0
          }
          _this.$refs.Toast.on_display(obj)
        }
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
      this.upData.department = res.name
    },
    linkClick: function (typ) {
      let _this = this
      if (typ === 'hangye') {
        _this.$refs.linkage.on_display({type: 'industry', Choice: 1})
      } else if (typ === 'type') {
        _this.$refs.check.on_display({type: 2, Pattern: 1})
      } else if (typ === 'xiansuo') {
        _this.$refs.check.xiansuo({
          type: 'xiansuo',
          Pattern: 1,
          success: function (res) {
            _this.upData.department = res
          }
        })
      }
    },
    path: function (num) {
      let _this = this
      switch (num) {
        case 0:
          _this.$refs.search.on_display()
          break
      }
    },
    areaClick: function (num) {
      let _this = this
      if (num === 0) {
        _this.area.a2 = 0
        console.log(_this.area.a1)
        _this.area.a3 = 0
        _this.areaList('pid2', _this.area.a1)
      } else if (num === 1) {
        _this.area.a3 = 0
        _this.areaList('pid3', _this.area.a2)
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
      document.title = '编辑客户信息'
      _this.cType = _this.$route.query.type
      _this.api.getCompany(_this.$route.query.com_id, function (res) {
        _this.comCont = res.data
      }, function (err) {
        console.log(err)
      })
      _this.api.getMyCustomers(_this.$route.query.com_id, function (res) {
        _this.upData = res.data
        _this.upData.contact_list = JSON.parse(_this.upData.contact_list)
        if (_this.upData.contact_list !== null) {
          _this.contact_list = _this.upData.contact_list
        }
      }, function (err) {
        console.log(err)
      })
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
    font-size: .7rem;
}
.btnList{
    width: 100%;
    display: inline-block;
    text-align: right;
    line-height: 1.5rem
}
.btnList>span{
    padding:.2rem .3rem;
    border-radius: .15rem;
    background:#f1f1f1;
    color:#2c2c2c;
    display: inline-block;
    font-size: .6rem;
    height:.6rem;
    line-height: .6rem
}
.btnLists{
    width: 100%;
    text-align: right;
}
.btnLists>span{
    padding:.2rem .3rem;
    border-radius: .15rem;
    background:#f1f1f1;
    color:#2c2c2c;
    font-size: .6rem;
}
.contcon>div>div>.atrCli{
    background:rgba(255, 152, 0, 1);
    color:#fff;
}

input::placeholder{
    color:#ccc !important;
}
.plus{
    padding-left:.5rem;
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
    font-size: .7rem;
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
    background:#fff;
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
