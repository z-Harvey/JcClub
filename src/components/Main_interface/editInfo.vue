<template>
  <div class="editInfo">
      <Toast title='标题'></Toast>
      <div class="subContentBoxs" v-if="type === 'personal'">
        <div class="subContent">
            <div class="contImg">
                <img :src="dataList.avatarurl" alt="">
                <div class="portMold">
                    <img src="@/assets/camera.png" alt="">
                    <input type="file" @change="upPort($event)" @blur="blurs($event)" accept="image/*">
                </div>
            </div>
            <div class="contList">
                <span>称号<span class="red">*</span></span>
                <input type="text" v-model="dataList.nickname" @blur="blurs($event)" placeholder="请输入称号">
            </div>
            <div class="contList">
                <span>姓名<span class="red">*</span></span>
                <input type="text" v-model="dataList.name" @blur="blurs($event)" placeholder="请输入姓名" disabled>
            </div>
            <div class="contList sex">
                <span>性别<span class="red">*</span></span>
                <div>
                    <button @click="gencli" :class="dataList.gender === 1? 'navbtn': ''">帅哥</button>
                    <button @click="gencli" :class="dataList.gender === 2? 'navbtn': ''">美女</button>
                </div>
            </div>
            <div class="contList">
                <span>电话<span class="red">*</span></span>
                <input type="text" v-model="dataList.mobile" @blur="blurs($event)" placeholder="请输入电话" disabled>
            </div>
            <div class="contList">
                <span>所在地<span class="red">*</span></span>
                <select v-model="pid.a1" @change="areaFn1()" @blur="blurs($event)">
                    <option value="0" v-text="ara[0]">请选择</option>
                    <option v-for="(item, index) in pid1" :key="index" v-text="item.name" :value="item.id"></option>
                </select>
                <select v-model="pid.a2" @change="areaFn2()" @blur="blurs($event)">
                    <option value="0" v-text="ara[1]">请选择</option>
                    <option v-for="(item, index) in pid2" :key="index" v-text="item.name" :value="item.id"></option>
                </select>
                <select v-model="pid.a3" @blur="blurs($event)">
                    <option value="0" v-text="ara[2]">请选择</option>
                    <option v-for="(item, index) in pid3" :key="index" v-text="item.name" :value="item.id"></option>
                </select>
            </div>
            <div class="contList">
                <span>邮件</span>
                <input type="text" v-model="dataList.email" @blur="blurs($event)" placeholder="请输入邮件">
            </div>
            <div class="contList">
                <span>微信号<span class="red">*</span></span>
                <input type="text" v-model="dataList.wx_no" @blur="blurs($event)" placeholder="请输入微信号">
            </div>
            <div class="contList">
                <span>生日</span>
                <input type="date" v-model="dataList.birthday" @blur="blurs($event)" value="'0000-00-00'">
            </div>
            <div class="contList">
                <span>学历<span class="red">*</span></span>
                <select v-model="dataList.edu_background" @blur="blurs($event)">
                    <option value="null">请选择</option>
                    <option value="小学">小学</option>
                    <option value="初中">初中</option>
                    <option value="中专">中专</option>
                    <option value="中技">中技</option>
                    <option value="高中">高中</option>
                    <option value="大专">大专</option>
                    <option value="本科">本科</option>
                    <option value="硕士">硕士</option>
                    <option value="博士">博士</option>
                </select>
            </div>
        </div>
      </div>
      <div class="subContentBox" v-if="type === 'exper'">
          <div class="subContent">
            <div class="contList">
                <span>公司<span class="red">*</span></span>
                <div v-text="dataList.comname||'当前所在公司'" class="checkBox"></div>
            </div>
            <div class="contList">
                <span>行业<span class="red">*</span></span>
                <!-- <div @click="check" v-text="dataList.industry||'当前所在行业（必填）'" class="checkBox"></div> -->
                <div v-text="dataList.industry||'当前所在行业'" class="checkBox"></div>
            </div>
            <div class="contList">
                <span>职业<span class="red">*</span></span>
                <input type="text" v-model="dataList.position" @blur="blurs($event)" placeholder="当前的职位" disabled>
            </div>
            <div class="contList">
                <span>对接部门<span class="red">*</span></span>
                <div @click="check('xuanze')" v-text="dataList.department||'开发客户的对接部门（多选）'" class="checkBox"></div>
            </div>
            <div class="contList">
                <span>工作年限<span class="red">*</span></span>
                <input type="date" v-model="dataList.workyears" @blur="blurs($event)" placeholder="参加工作的年限">
            </div>
            <div class="contList">
                <span>销售年限<span class="red">*</span></span>
                <input type="date" v-model="dataList.salesyears" @blur="blurs($event)" placeholder="做销售的工作年限">
            </div>
            <div class="contList">
                <span>行业年限<span class="red">*</span></span>
                <input type="date" v-model="dataList.industryyears" @blur="blurs($event)" placeholder="目前所在行业的工作年限">
            </div>
          </div>
          <div class="subContent">
            <div class="contList">
                <span>目标客户行业<span class="red">*</span></span>
                <div @click="check('duos')" v-text="dataList.mbkh_industry||'目标客户所在的行业 (多选)'" class="checkBox"></div>
            </div>
            <div class="contList">
                <span>擅长领域<span class="red">*</span></span>
                <div @click="check('duo')" v-text="dataList.scArea||'擅长的行业领域（多选）'" class="checkBox"></div>
            </div>
            <div class="subcontList">
                <span>标杆客户<span class="red">*</span></span><span class="rightTex">至少一个</span>
                <input class="width_100inp" v-for="(item,index) in bg_customer" :key="index" v-model="item.key" @blur="blurs($event)" type="text" placeholder="请输入标杆客户">
                <img class="plus" @click="plus(2)" src="@/assets/plus.png" alt="">
            </div>
          </div>
          <div class="subContent">
            <div class="subcontList">
                <span>销售产品<span class="red">*</span></span><span class="rightTex">至少一个</span>
                <input class="width_100inp" v-for="(item, index) in product" :key="index" v-model="item.key" @blur="blurs($event)" type="text" placeholder="请输入产品名称">
                <img class="plus" @click="plus(0)" src="@/assets/plus.png" alt="">
            </div>
          </div>
          <div class="subContent">
            <div class="subcontList">
                <span>业绩荣誉</span>
                <div v-for="(item, index) in honors" :key="index">
                    <input class="width_100inp" v-model="item.key" type="text" @blur="blurs($event)" placeholder="请输入荣誉名称">
                    <div>
                        <img v-if="item.img" :src="item.img" alt="">
                        <button  v-else>上传图片</button>
                        <input @change="upimg($event, item)" type="file" @blur="blurs($event)" accept="image/*">
                    </div>
                </div>
                <img class="plus" @click="plus(1)" src="@/assets/plus.png" alt="">
            </div>
          </div>
      </div>
      <div class="flxBut" v-if="type === 'personal'">
          <button v-if="isImg" @click="submit">保存</button>
          <button v-else disabled v-text="porBtnText"></button>
      </div>
      <div class="flxBut" v-else>
          <button v-if="isImg" @click="submit1">保存</button>
          <button v-else disabled v-text="porBtnText"></button>
      </div>
      <Toast ref="Toast" @confirm="test"/>
      <Check ref="Check" @ok="cllChe"/>
      <linkage ref="linkage" @ok="cllLink"/>
      <search ref="search" @ok="cllSrceach"/>
  </div>
</template>

<script>
import search from '@/components/Logon_process/srceach'

export default {
  name: 'editInfo',
  data () {
    return {
      cont_one: false,
      type: null,
      isImg: true,
      porBtnText: '正在上传图像...',
      bg_customer: [{key: ''}],
      dataList: {
        area: '',
        avatarurl: '',
        birthday: '',
        club: '',
        edu_background: '',
        email: '',
        gender: '',
        mobile: '',
        name: '',
        wx_no: '',
        nickname: '',
        mbkh_industry: '',
        bg_customer: [{key: ''}]
      },
      pid: {
        a1: 0,
        a2: 0,
        a3: 0
      },
      pid1: [],
      pid2: [],
      pid3: [],
      ara: [],
      honors: [],
      product: []
    }
  },
  components: {
    search
  },
  methods: {
    blurs (e) {
      document.documentElement.scrollTop = document.documentElement.scrollTop
      document.body.scrollTop = document.body.scrollTop
    },
    upimg (file, item) {
      let files = new FormData()
      files.append('file', file.target.files[0])
      files.append('type', 1)
      this.isImg = false
      this.api.upImg(files, (res) => {
        if (res.status === 200) {
          this.porBtnText = '图像上传成功'
          setTimeout(() => {
            this.isImg = true
            this.porBtnText = '正在上传图像...'
          }, 500)
          item.img = res.data.url
        }
      }, (err) => {
        this.errMotl(err)
      })
    },
    upPort (file) {
      let files = new FormData()
      files.append('file', file.target.files[0])
      files.append('type', 1)
      this.isImg = false
      this.api.upImg(files, (res) => {
        if (res.status === 200) {
          this.porBtnText = '图像上传成功'
          setTimeout(() => {
            this.isImg = true
            this.porBtnText = '正在上传图像...'
          }, 500)
          this.dataList.avatarurl = res.data.url
        } else {
          this.errMotl(res)
        }
      }, (err) => {
        this.errMotl(err)
      })
    },
    plus (num) {
      let obj = null
      switch (num) {
        case 0:
          obj = {
            key: ''
          }
          this.product.push(obj)
          break
        case 1:
          obj = {
            key: '',
            img: ''
          }
          this.honors.push(obj)
          break
        case 2:
          obj = {
            key: '',
            img: ''
          }
          this.bg_customer.push(obj)
          break
      }
    },
    test: function (data) {
    },
    cllChe (data) {
      this.dataList.department = data
    },
    cllLink (data) {
      if (data.type === 'duo') {
        this.dataList.scArea = data.name
      } else {
        this.dataList.industry = data.name
      }
    },
    submit1: function () {
      let _this = this
      if (_this.dataList.industry === null || _this.dataList.industry === '') {
        let obj = {
          Title: '提示',
          Content: '请选择行业',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      }
      if (_this.dataList.position === null || _this.dataList.position === '') {
        let obj = {
          Title: '提示',
          Content: '请选择职业',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      }
      if (_this.dataList.department === null || _this.dataList.department === '') {
        let obj = {
          Title: '提示',
          Content: '请选择对接部门',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      }
      if (_this.dataList.workyears === null || _this.dataList.workyears === '') {
        let obj = {
          Title: '提示',
          Content: '请选择工作年限',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      }
      if (_this.dataList.salesyears === null || _this.dataList.salesyears === '') {
        let obj = {
          Title: '提示',
          Content: '请选择销售年限',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      }
      if (_this.dataList.industryyears === null || _this.dataList.industryyears === '') {
        let obj = {
          Title: '提示',
          Content: '请选择行业年限',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      }
      if (_this.dataList.scArea === null || _this.dataList.scArea === '') {
        let obj = {
          Title: '提示',
          Content: '请选择擅长领域',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      }
      // if (_this.bg_customer[0].key === null || _this.bg_customer[0].key === '') {
      //   let obj = {
      //     Title: '提示',
      //     Content: '至少填写一个标杆客户',
      //     type: 1,
      //     btn: 0
      //   }
      //   this.$refs.Toast.on_display(obj)
      //   return
      // }
      if (_this.product[0].key === null || _this.product[0].key === '') {
        let obj = {
          Title: '提示',
          Content: '至少填写一个销售产品',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      }
      let obj = JSON.parse(JSON.stringify(_this.dataList))
      obj.honors = JSON.stringify(_this.honors)
      obj.product = JSON.stringify(_this.product)
      obj.bg_customer = JSON.stringify(_this.bg_customer)
      _this.api.putWorkInfo(obj, function (res) {
        if (res.status === 200) {
          _this.$router.go(-1)
        }
      }, function (err) {
        _this.errMotl(err)
      })
    },
    // 选择公司后的回调
    cllSrceach (data) {
      this.dataList.comname = data.name
    },
    check: function (typ) {
      let _this = this
      if (typ === 'sea') {
        _this.$refs.search.on_display()
        return
      } else if (typ === 'duo') {
        _this.$refs.linkage.on_display({
          type: 'industry',
          Choice: 2,
          success: (res) => {
            _this.dataList.scArea = res.name
          }
        })
        return
      } else if (typ === 'duos') {
        this.$refs.linkage.on_display({
          type: 'Cust',
          Choice: 2,
          success: (res) => {
            _this.dataList.mbkh_industry = res.name
          }
        })
        return
      } else if (typ === 'xuanze') {
        _this.$refs.Check.on_display({type: 'submitAdd'})
        return
      }
      _this.$refs.linkage.on_display({type: 'industry', Choice: 1})
    },
    areaFn: function (num) {
      let str = null
      let _this = this
      if (num) {
        str = 'pid=' + num
      } else {
        str = 'pid=' + 0
      }
      _this.api.getAreaList(str, function (res) {
        _this.pid1 = res.data
      }, function (err) {
        _this.errMotl(err)
      })
    },
    gencli: function () {
      let _this = this
      if (_this.dataList.gender === 1) {
        _this.dataList.gender = 2
      } else {
        _this.dataList.gender = 1
      }
    },
    areaFn1: function (num) {
      let str = null
      let _this = this
      str = 'pid=' + _this.pid.a1
      _this.api.getAreaList(str, function (res) {
        _this.pid2 = res.data
      }, function (err) {
        _this.errMotl(err)
      })
    },
    areaFn2: function (num) {
      let str = null
      let _this = this
      str = 'pid=' + _this.pid.a2
      _this.api.getAreaList(str, function (res) {
        _this.pid3 = res.data
      }, function (err) {
        _this.errMotl(err)
      })
    },
    submit: function () {
      delete this.dataList.club
      let _this = this
      let arr = []
      if (_this.pid.a1 !== 0) {
        _this.pid1.map(function (p1, p2) {
          if (p1.id === _this.pid.a1) {
            arr.push(p1.name)
          }
        })
        _this.pid2.map(function (p1, p2) {
          if (p1.id === _this.pid.a2) {
            arr.push(p1.name)
          }
        })
        _this.pid3.map(function (p1, p2) {
          if (p1.id === _this.pid.a3) {
            arr.push(p1.name)
          }
        })
        _this.dataList.area = arr.join('|')
      }
      _this.api.putMyCardInfo(_this.Global.userInfo.myId, _this.dataList, function (res) {
        if (res.status === 200) {
          _this.$router.go(-1)
        }
      }, function (err) {
        _this.errMotl(err)
      })
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
    let _this = this
    _this.type = _this.$route.query.type
    if (_this.$route.query.type === 'personal') {
      document.title = '编辑个人信息'
      _this.areaFn()
      _this.api.getMyCardInfo(_this.Global.userInfo.myId, (res) => {
        _this.dataList = res.data
        _this.ara = _this.dataList.area.split('|')
      }, (err) => {
        _this.errMotl(err)
      })
    } else {
      document.title = '编辑工作经验'
      _this.api.getWorkNum(function (res) {
        _this.dataList = res.data
        _this.honors = JSON.parse(_this.dataList.honors)
        _this.product = JSON.parse(_this.dataList.product)
        console.log(_this.dataList.bg_customer === null)
        if (_this.dataList.bg_customer !== null) {
          _this.bg_customer = JSON.parse(_this.dataList.bg_customer)
        } else {
          _this.bg_customer = [{key: ''}]
        }
      }, function (err) {
        _this.errMotl(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.editInfo{
    position: fixed;
    width:100%;
    height:100%;
    top:0;
    left:0;
    overflow: auto;
    background:rgba(249, 249, 249, 1);
}
.rightTex{
  float: right;
}
div>span>.red{
  color:red;
}
.subContentBox{
    width: 100%;
    padding:.75rem 0 3rem;
}
.subContentBoxs{
    width: 100%;
    padding:2.25rem 0 3rem;
}
.subContent{
    width:92%;
    min-height:2rem;
    background:#fff;
    margin:0 auto .75rem;
    border-radius: .25rem;
    text-align: center;
    border: 1px solid rgba(0,0,0,0)
}
.contImg{
    width:2.5rem;
    height:2.5rem;
    border-radius: 50%;
    overflow: hidden;
    margin: -.5rem auto .5rem;
    display: flex;
    position: relative;
}
.contImg>img{
    width:2.5rem;
    align-self: center;
}

.portMold{
    width:100%;
    height:100%;
    background:rgba(16, 16, 16, 0.3);
    position: absolute;
    top:0;
    left:0;
    display: flex;
}
.portMold>img{
    width:1.1rem;
    height:1.1rem;
    align-self: center;
    margin:0 auto;
}
.portMold>input{
    width:100%;
    height:100%;
    position: absolute;
    top:0;
    left:0;
    opacity: 0;
}
.subContent>.contList{
    text-align: left;
    padding:0rem .5rem;
    font-size: .7rem;
    line-height: 2.25rem;
    min-height: 2.35rem;
}
.contList>input{
    height:1.5rem;
    width:70%;
    margin-top:.3rem;
    text-align: right;
    border: none;
    background:#fff;
    float: right;
    font-size: .7rem;
    -webkit-appearance: none;
    color:#2c2c2c;
}
.contList>input::placeholder{
    color:#2c2c2c;
}
.contList>span{
    float: left;
    color:#888;
}
.contList>select{
    width:100%;
    height:1.5rem;
    text-align: right;
    border:none;
    padding-left: 1rem;
    color:#2c2c2c;
    background:#fff;
    font-size: .7rem;
    -webkit-appearance: none;
}
.contList>div{
    width:calc(100% - 2.5rem);
    min-height: 2.25rem;
    margin-top:.3rem;
    text-align: right;
    padding-left:2.5rem;
}
.sex>div{
    height:1.5rem;
    width:9rem;
    float: right;
    margin-top:.3rem;
}
.sex>div>button{
    width:4rem;
    height:1.5rem;
    float: right;
    margin-left:.5rem;
    border:0;
    background:rgba(241, 241, 241, 1);
    border-radius: .15rem;
    font-size: .7rem;
    color:#101010;
}
.sex>div>button::after{
    border:0;
}
.sex>div>button:focus{
    background:rgba(255, 152, 0, 1);
    color:#fff;
}
.sex>div>.navbtn{
    color:#fff;
    background:rgba(255, 152, 0, 1);
}
.flxBut{
    width:100%;
    height:2.25rem;
    position: fixed;
    bottom:0rem;
    left:0rem;
    background: #fff;
}
.flxBut>button{
    width:10rem;
    height:1.75rem;
    border-radius:1rem;
    background: rgba(255, 152, 0, 1);
    color:#fff;
    margin-top:.25rem;
    border:none;
    font-size: .7rem;
}
.flxBut>button[disabled]{
    color: #2c2c2c;
    background:rgba(241, 241, 241, 1);
}
.flxBut>button::after{
    border:none;
}

.flxBut2{
    width:100%;
    height:2.25rem;
    position: fixed;
    bottom:0rem;
    left:0rem;
    background: #fff;
    display: flex;
    justify-content: space-evenly
}
.flxBut2>button{
    width:7rem;
    height:1.75rem;
    border-radius:1rem;
    background: rgba(255, 152, 0, 1);
    color:#fff;
    margin-top:.25rem;
    border:none;
}
.flxBut2>button::after{
    border:none;
}
.flxBut2>button:first-child{
    border:1px solid rgba(255, 152, 0, 1);
    background:#fff;
    color:rgba(255, 152, 0, 1);
}
.subContent>.subcontList{
    text-align: left;
    padding:0rem .5rem;
    font-size: .7rem;
    line-height: 2.25rem;
}
.subcontList>input{
    height:1.5rem;
    width: 100%;
    margin-top:.3rem;
    text-align: right;
    border: none;
    text-align: left;
}
.subcontList>div{
    height:1.5rem;
    margin-top:.3rem;
}
.subcontList>div>input{
    height:1.5rem;
    width: 70%;
    text-align: right;
    border: none;
    float: left;
}
.subcontList>div>button{
    height:1.5rem;
    width: 30%;
    text-align: right;
    border: none;
    float: left;
    background: #fff;
    border:0;
    color:rgba(255, 152, 0, 1);
}
.subcontList>div>div>img{
    float: right;
    width:1rem;
    height:1rem;
    margin:.25rem 1.5rem 0 0;
}
.subcontList>div>div{
    height:1.5rem;
    width: 29%;
    border: none;
    text-align: right;
    float: left;
    background: #fff;
    border:0;
    color:rgba(255, 152, 0, 1);
    position: relative;
}
.subcontList>div>div>button::after{
    border:none;
}
.subcontList>div>div>button{
    width:100%;
    height:1.5rem;
    border: none;
    color:rgba(255, 152, 0, 1);
    background: #fff;
    vertical-align: top;
}
.subcontList>div>div>input{
    vertical-align: top;
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    opacity: 0;
}
.plus{
    width: 1.2rem;
    height:1.2rem;
    text-align: left;
    margin-top:.9rem;
}
.subcontList>div>input,button{
    font-size: .7rem;
}
.subcontList>div>.width_100inp,.subcontList>.width_100inp{
    font-size: .7rem;
    text-align: left;
}
.subcontList>span{
  color:#888;
}
.contList>input[disabled]{
  color:#2c2c2c;
}
</style>
