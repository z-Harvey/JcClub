<template>
  <div class="submitAdd">
      <Toast ref="Toast" @confirm="test"/>
      <Check ref="Check" @ok="cllChe"/>
      <linkage ref="linkage" @ok="cllLink"/>
      <search ref="search" @ok="cllSrceach"/>
      <div class="memTitle">
          <img src="@/assets/membershipApp_shu1.png" alt="">
          <span class="clubName" v-text="userInfo.club[0].club__name"></span>
          <span class="genghuan" @click="genghuan">更换</span>
      </div>
      <div class="memTitle2">
          <div class="memtitImg">
            <div>
              <img v-if="cont_one" src="@/assets/radio_box(1).png" alt="">
              <img v-else src="@/assets/round.png" alt="">
              <div>基本信息</div>
            </div>
            <div class="gang1 g1" v-if="cont_one"></div>
            <div class="gang g1" v-else></div>
            <div >
              <img v-if="cont_one" src="@/assets/round(1).png" alt="">
              <img v-else src="@/assets/radio_box(1).png" alt="">
              <div>工作经验</div>
            </div>
            <div class="gang1 g2" v-if="true"></div>
            <div class="gang g2" v-else></div>
            <div>
              <img v-if="true" src="@/assets/round(1).png" alt="">
              <div>完成</div>
            </div>
          </div>
      </div>
      <div class="subContentBox" v-if="cont_one">
        <div class="subContent">
            <div class="contImg">
                <img :src="userInfo.avatarurl" alt="">
                <div class="contImgmol">
                    <img src="@/assets/camera.png" alt="">
                </div>
            </div>
            <div class="contList">
                <span>姓名</span>
                <input type="text" v-model="userInfo.name" placeholder="请输入真实姓名（必填）">
            </div>
            <div class="contList sex">
                <span>性别</span>
                <div>
                    <button @click="sex(1)" :class="userInfo.gender == 1?'navBtn':''">帅哥</button>
                    <button @click="sex(2)" :class="userInfo.gender == 2?'navBtn':''">美女</button>
                </div>
            </div>
            <div class="contList">
                <span>电话</span>
                <input type="text" v-model="userInfo.mobile" placeholder="请输入电话">
            </div>
            <div class="contLists">
                <span>所在地(必填)</span>
                <div class="xexBox">
                    <select v-model="city.sel1" @change="selText('0')" >
                        <option value="0" v-text="sel3text[0]||'--请选择--'"></option>
                        <option v-for="(item, index) in sList" :key="index" :value="item.id" v-text="item.name">省</option>
                    </select>
                    <!-- <span>/</span> -->
                    <select v-model="city.sel2" @change="selText('1')">
                        <option value="0" v-text="sel3text[1]||'--请选择--'"></option>
                        <option v-for="(item, index) in sList1" :key="index" :value="item.id" v-text="item.name">市</option>
                    </select>
                    <!-- <span>/</span> -->
                    <select v-model="city.sel3" @change="selText('2')">
                        <option value="0" v-text="sel3text[2]||'--请选择--'"></option>
                        <option v-for="(item, index) in sList2" :key="index" :value="item.id" v-text="item.name">区</option>
                    </select>
                </div>
            </div>
            <div class="contList">
                <span>邮件</span>
                <input type="email" v-model="userInfo.email" placeholder="请输入邮箱">
            </div>
            <div class="contList">
                <span>微信号</span>
                <input type="text" v-model="userInfo.wx_no" placeholder="请输入微信号（必填）">
            </div>
            <div class="contList">
                <span>生日</span>
                <input type="date" v-model="userInfo.birthday"/>
            </div>
            <div class="contLists">
                <span>学历(必填)</span>
                <div class="xexBox">
                    <select v-model="userInfo.edu_background" @change="selText">
                        <option value="">请选择</option>
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
      </div>
      <div class="subContentBox" v-else>
          <div class="subContent">
            <div class="contList">
                <span>公司</span>
                <div @click="check('sea')" v-text="workInfo.comname||'当前所在公司（必填）'" class="checkBox"></div>
            </div>
            <div class="contList">
                <span>行业</span>
                <div @click="check" v-text="workInfo.industry||'当前所在行业（必填）'" class="checkBox"></div>
            </div>
            <div class="contList">
                <span>职业</span>
                <input type="text" v-model="workInfo.position" placeholder="当前的职位（必填）">
            </div>
            <div class="contList">
                <span>擅长领域</span>
                <div @click="check('duo')" v-text="workInfo.scArea||'擅长的行业领域（多选、必填）'" class="checkBox" style="overflow: hidden;"></div>
            </div>
            <div class="contList">
                <span>对接部门</span>
                <div @click="check('xuanze')" v-text="workInfo.department||'开发客户的对接部门（多选）'" class="checkBox"></div>
            </div>
          </div>
          <div class="subContent">
            <div class="subcontList">
                <span>销售产品</span>
                <input class="width_100inp" v-for="(item,index) in workInfo.product" :key="index" v-model="item.key" type="text" placeholder="请输入产品名称">
                <img class="plus" @click="subjia(1)" src="@/assets/plus.png" alt="">
            </div>
          </div>
          <div class="subContent">
            <div class="contList">
                <span>工作年限</span>
                <input type="date" v-model="workInfo.workyears" placeholder="参加工作的年限（必填）"/>
            </div>
            <div class="contList">
                <span>销售年限</span>
                <input type="date" v-model="workInfo.salesyears" placeholder="做销售的工作年限（必填）"/>
            </div>
            <div class="contList">
                <span>行业年限</span>
                <input type="date" v-model="workInfo.industryyears" placeholder="目前所在行业的工作年限（必填）"/>
            </div>
          </div>
          <div class="subContent">
            <div class="subcontList">
                <span>销售荣誉</span>
                <div v-for="(item, index) in workInfo.honors" :key="index">
                    <input class="width_100inp" v-model="item.key" type="text" placeholder="请输入荣誉名称">
                    <button>上传图片</button>
                    <!-- <input type="file" accept="image/*"> -->
                </div>
                <img class="plus" @click="subjia(2)" src="@/assets/plus.png" alt="">
            </div>
          </div>
      </div>
      <div class="flxBut" v-if="cont_one">
          <button @click="userInfoPush">下一步</button>
      </div>
      <div class="flxBut2" v-else>
          <button @click="next_step">上一步</button>
          <button @click="submit">提交</button>
      </div>
  </div>
</template>

<script>
import search from '@/components/Logon_process/srceach'

export default {
  name: 'submitAdd',
  data () {
    return {
      sel3text: [],
      CityStr: null,
      cont_one: true,
      sList: [],
      sList1: [],
      sList2: [],
      city: {
        sel1: 0,
        sel2: 0,
        sel3: 0
      },
      edu: '',
      userInfo: {
        name: '', // 用户名  *
        gender: '', // 性别 1男2女 *
        mobile: '', // 电话 *
        area: '', // 所在地 *
        email: '', // 邮箱
        wx_no: '', // 微信号 *
        birthday: '', // 生日 *
        edu_background: '', // 学历 *
        avatarurl: '', // 头像路径
        club: [{club__name: ''}] // 俱乐部   int
      },
      workInfo: {
        comname: null, // 公司名
        industry: null, // 行业
        position: null, // 职位
        scArea: null, // 擅长领域
        department: null, // 对接部门
        product: [{key: ''}], // 产品
        workyears: null, // 工作年限
        salesyears: null, // 销售年限
        industryyears: null, // 行业年限
        honors: [{key: '', img: ''}], // 荣誉
        club_id: null // 俱乐部ID
      }
    }
  },
  components: {
    search
  },
  methods: {
    subjia: function (num) {
      let _this = this
      if (num === 1) {
        if (!(_this.workInfo.product[_this.workInfo.product.length - 1].key === '')) {
          _this.workInfo.product.push({key: ''})
        }
      } else if (num === 2) {
        if (!(_this.workInfo.honors[_this.workInfo.honors.length - 1].key === '')) {
          _this.workInfo.honors.push({key: ''})
        }
      }
    },
    /**
     * 男女按钮
     */
    sex: function (num) {
      let _this = this
      _this.userInfo.gender = num
    },
    /**
     * 提交 基本信息
     */
    userInfoPush: function () {
      let _this = this
      let areaArr = []
      if (_this.city.sel1 === 0) {
        areaArr.push(_this.sel3text[0])
        if (_this.sel3text[0] === '--请选择--') {
          let obj = {
            Title: '提示',
            Content: '请选择完整所在地',
            type: 1,
            btn: 0
          }
          this.$refs.Toast.on_display(obj)
          return
        }
      } else if (_this.city.sel1 > 0) {
        _this.sList.map(function (p1, p2) {
          if (p1.id === _this.city.sel1) {
            areaArr.push(p1.name)
          }
        })
      }
      if (_this.city.sel2 === 0) {
        areaArr.push(_this.sel3text[1])
        if (_this.sel3text[1] === '--请选择--') {
          let obj = {
            Title: '提示',
            Content: '请选择完整所在地',
            type: 1,
            btn: 0
          }
          this.$refs.Toast.on_display(obj)
          return
        }
      } else if (_this.city.sel2 > 0) {
        _this.sList1.map(function (p1, p2) {
          if (p1.id === _this.city.sel2) {
            areaArr.push(p1.name)
          }
        })
      }
      if (_this.city.sel3 === 0) {
        areaArr.push(_this.sel3text[2])
        if (_this.sel3text[2] === '--请选择--') {
          let obj = {
            Title: '提示',
            Content: '请选择完整所在地',
            type: 1,
            btn: 0
          }
          this.$refs.Toast.on_display(obj)
          return
        }
      } else if (_this.city.sel3 > 0) {
        _this.sList2.map(function (p1, p2) {
          if (p1.id === _this.city.sel3) {
            areaArr.push(p1.name)
          }
        })
      }
      _this.userInfo.area = areaArr.join('|')
      if (_this.userInfo.name === null || _this.userInfo.name === '') {
        let obj = {
          Title: '提示',
          Content: '请填写真实姓名',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      }
      if (!(_this.userInfo.gender === 1 || _this.userInfo.gender === 2)) {
        let obj = {
          Title: '提示',
          Content: '请填写性别',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      }
      if (_this.userInfo.mobile === null || _this.userInfo.mobile === '') {
        let obj = {
          Title: '提示',
          Content: '请填写电话号码',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      }
      if (_this.userInfo.area === null || _this.userInfo.area === '') {
        let obj = {
          Title: '提示',
          Content: '请选择所在地',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      }
      if (_this.userInfo.wx_no === null || _this.userInfo.wx_no === '') {
        let obj = {
          Title: '提示',
          Content: '请填写微信号',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      }
      if (_this.userInfo.edu_background === null || _this.userInfo.edu_background === '') {
        let obj = {
          Title: '提示',
          Content: '请选择学历',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      }
      let datas = JSON.parse(JSON.stringify(_this.userInfo))
      delete datas.club
      _this.api.postUserInfo(datas, function (res) {
        if (res.data.step === 2) {
          document.getElementsByClassName('submitAdd')[0].scrollTop = 0
          _this.cont_one = !_this.cont_one
        }
      }, function (err) {
        console.log(err)
      })
    },
    selText: function (str, data) {
      let _this = this
      let num = null
      if (str === '0') {
        _this.sel3text = ['--请选择--', '--请选择--', '--请选择--']
        num = _this.city.sel1
        _this.city.sel2 = 0
        _this.city.sel3 = 0
      } else if (str === '1') {
        _this.sel3text[2] = '--请选择--'
        num = _this.city.sel2
        _this.city.sel3 = 0
      }
      _this.api.getAreaList('pid=' + num, function (res) {
        console.log(res)
        switch (str) {
          case '0':
            _this.sList1 = res.data
            break
          case '1':
            _this.sList2 = res.data
            break
        }
      }, function (err) {
        console.log(err)
      })
    },
    check: function (typ) {
      let _this = this
      if (typ === 'sea') {
        _this.$refs.search.on_display()
        return
      } else if (typ === 'duo') {
        this.$refs.linkage.on_display({type: 'industry', Choice: 2})
        return
      } else if (typ === 'xuanze') {
        this.$refs.Check.on_display({type: 'submitAdd'})
        return
      }
      this.$refs.linkage.on_display({type: 'industry', Choice: 1})
    },
    /**
     * 点击 '上一步' 时界面切换
     */
    next_step: function (res) {
      this.cont_one = !this.cont_one
    },
    /**
     * 提交经验信息
     */
    test: function () {
      let _this = this
      this.$refs.Toast.close()
      let data = JSON.parse(JSON.stringify(_this.workInfo))
      data.product = JSON.stringify(_this.workInfo.product)
      data.honors = JSON.stringify(_this.workInfo.honors)
      _this.api.postWorkInfo(data, function (res) {
        console.log(res)
        _this.$router.push({
          path: '/applySuccess',
          query: res.data
        })
      }, function (err) {
        console.log(err)
      })
    },
    /**
     * 点击提交
     */
    submit: function () {
      let _this = this
      if (_this.workInfo.comname === null || _this.workInfo.comname === '') {
        let obj = {
          Title: '提示',
          Content: '请选择公司',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      }
      if (_this.workInfo.industry === null || _this.workInfo.industry === '') {
        let obj = {
          Title: '提示',
          Content: '请选择行业',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      }
      if (_this.workInfo.position === null || _this.workInfo.position === '') {
        let obj = {
          Title: '提示',
          Content: '请填写职业',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      }
      if (_this.workInfo.scArea === null || _this.workInfo.scArea === '') {
        let obj = {
          Title: '提示',
          Content: '请选择擅长领域',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      }
      if (_this.workInfo.department === null || _this.workInfo.department === '') {
        let obj = {
          Title: '提示',
          Content: '请选择对接部门',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      }
      if (_this.workInfo.workyears === null || _this.workInfo.workyears === '') {
        let obj = {
          Title: '提示',
          Content: '请输入工作年限',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      }
      if (_this.workInfo.department === null || _this.workInfo.department === '') {
        let obj = {
          Title: '提示',
          Content: '请输入销售年限',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      }
      if (_this.workInfo.industryyears === null || _this.workInfo.industryyears === '') {
        let obj = {
          Title: '提示',
          Content: '请输入行业年限',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      }
      let obj = {
        Title: '是否确认提交？',
        Content: '请您确保您填写的信息准确无误，否则可能会影响审核结果',
        type: 1,
        btn: 2,
        success: _this.test
      }
      this.$refs.Toast.on_display(obj)
    },
    cllSrceach: function (data) {
      let _this = this
      _this.workInfo.comname = data.name
    },
    cllLink: function (res) {
      let _this = this
      if (res.type === 'duo') {
        _this.workInfo.scArea = res.name
        console.log(res.name)
        return
      }
      _this.workInfo.industry = res.name
    },
    cllChe: function (res) {
      let _this = this
      _this.workInfo.department = res
    },
    genghuan: function () {
      this.$router.push('/membershipApp')
    }
  },
  mounted () {
    document.title = '入会申请'
    let _this = this
    _this.api.getUserNum(function (res) { // 未完成的基本信息
      _this.sel3text = res.data.area ? res.data.area.split('|') : ['', '', '']
      _this.userInfo = res.data
    }, function (err) {
      console.log(err)
    })
    _this.api.getWorkNum(function (res) { // 未完成的经验信息
      console.log(res)
    }, function (err) {
      console.log(err)
    })
    _this.api.getAreaList('pid=0', function (res) {
      _this.sList = res.data
    }, function (err) {
      console.log(err)
    })
    if (_this.$route.query.step === '2' || _this.$route.query.step === 2) {
      _this.cont_one = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.memTitle{
    width:calc(100% - 1.5rem);
    height:2rem;
    background:rgba(255, 152, 0, 1);
    padding:0 .75rem;
    color:#fff;
    font-size: .7rem;
    line-height: 2rem;
    position: fixed;
    top:0;
    left:0;
    z-index: 9;
    text-align: left;
}
.memTitle>img{
  width:.7rem;
  height:.7rem;
}
.genghuan{
  float: right;
}
.memTitle2{
    width:100%;
    height:2.75rem;
    background:#fff;
    font-size: .6rem;
    position: fixed;
    top:2rem;
    left:0;
    z-index: 9;
}
.memtitImg{
    margin-top: .5rem;
}
.memtitImg>div{
    width:3rem;
    display:inline-block;
    margin:0 -.4rem;
}
.memtitImg>div>img{
    width:.8rem;
    height:.8rem;
}
.memtitImg>.gang,.memtitImg>.gang1{
    vertical-align: top;
    width:4rem;
    height:.35rem;
    border-bottom:1px solid rgba(255, 152, 0, 1);
}
.memtitImg>.gang1{
    border-bottom:1px solid #888;
}

.subContentBox{
    width: 100%;
    background:rgba(240, 240, 242, 1);
    padding:4.75rem 0 5rem;
}
.subContent{
    width:92%;
    min-height:2rem;
    background:#fff;
    margin:1rem auto 0;
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
.subContent>.contList{
    height:2.25rem;
    text-align: left;
    padding:0rem .5rem;
    font-size: .7rem;
    line-height: 2.25rem;
}
.contList>input{
    height:1.5rem;
    width:10.7rem;
    float: right;
    margin-top:.3rem;
    text-align: right;
    border: none;
    font-size: .7rem;
    background:#fff;
}
.contList>.checkBox{
    height:1.5rem;
    width:10.7rem;
    float: right;
    margin-top:.3rem;
    text-align: right;
    border: none;
    font-size: .7rem;
    line-height: 1.5rem;
    color:#ccc;
}
.contList>input::placeholder{
    color:#ccc;
}
.contList>button{
    height:1.5rem;
    width:10.7rem;
    float: right;
    margin-top:.3rem;
    text-align: right;
    border: none;
    color:#ccc;
    background: rgba(0,0,0,0);
    font-size: .7rem;
}

.contList>.seleBox{
    height:1.5rem;
    width:10.7rem;
    float: right;
    margin-top:.3rem;
    text-align: right;
    border: none;
    color:#ccc;
    background: rgba(0,0,0,0);
    font-size: .7rem;
}
.contList>.seleBox>select{
    height:1.5rem;
    vertical-align: top;
    border:0;
    font-size: .5rem;
}
.contList>.seleBox>span{
    display: inline-block;
    vertical-align: top;
    line-height: 1.5rem;
    font-size: .7rem;
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
.flxBut>button::after{
    border:none;
}

.flxBut2{
    width:100%;
    height:2.25rem;
    position: fixed;
    bottom:0;
    left:0;
    background: #fff;
    display: flex;
    justify-content: space-around;
}
.flxBut2>button{
    width:7rem;
    height:1.75rem;
    border-radius:1rem;
    background: rgba(255, 152, 0, 1);
    color:#fff;
    margin-top:.25rem;
    border:none;
    font-size: .7rem;
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
    text-align: left;
    float: left;
    color:#101010;
    background:#fff;
}
.subcontList>div>button{
    height:1.5rem;
    width: 30%;
    text-align: right;
    border: none;
    text-align: right;
    float: left;
    background: #fff;
    border:0;
    color:rgba(255, 152, 0, 1);
}
.subcontList>div>input,button{
  font-size: .7rem;
}
.plus{
    width: 1.2rem;
    height:1.2rem;
    text-align: left;
    margin-top:.9rem;
}
.contImgmol{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(16, 16, 16, 0.3);
    display: flex;
}
.contImgmol>img{
    width:1.1rem;
    height:1.1rem;
    align-self: center;
    margin:0 auto;
}
.sex>div>.navBtn{
    background:rgba(255, 152, 0, 1);
    color:#fff;
}
.subContent>.contLists{
    text-align: left;
    padding:0rem .5rem;
    font-size: .7rem;
    line-height: 2.25rem;
}
.contLists>.xexBox{
    margin-top:.3rem;
    text-align: right;
    border: none;
    width: calc(100% - 1rem);
    padding:0 0 0 1rem;
    color:#ccc;
    background: #fff;
    font-size: .7rem;
}
.contLists>.xexBox>select{
    width:100%;
    height:1.5rem;
    vertical-align: top;
    border:0;
    font-size: .7rem;
    color:#888;
    background: #fff;
}
.width_100inp{
  font-size: .7rem;
}
.contList>div{
  color:#888;
}
</style>
