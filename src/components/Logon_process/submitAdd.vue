<template>
  <div class="submitAdd">
      <Toast ref="Toast" @confirm="test"/>
      <Check ref="Check" @ok="cllChe"/>
      <linkage ref="linkage"/>
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
      <div class="srrTop"></div>
      <div class="subContentBox" v-if="cont_one">
        <div class="subContent">
            <div class="contImg">
                <img :src="userInfo.avatarurl" alt="">
                <div class="contImgmol">
                    <img src="@/assets/camera.png" alt="">
                    <input type="file" @change="upPort($event)" @blur="blurs($event)" accept="image/*">
                </div>
            </div>
            <div class="contList">
                <span>姓名<span class="red">*</span></span>
                <input type="text" v-model="userInfo.name" @blur="blurs($event)" maxlength="10" placeholder="请输入真实姓名">
            </div>
            <div class="contList sex">
                <span>性别<span class="red">*</span></span>
                <div>
                    <button @click="sex(1)" :class="userInfo.gender == 1?'navBtn':''">帅哥</button>
                    <button @click="sex(2)" :class="userInfo.gender == 2?'navBtn':''">美女</button>
                </div>
            </div>
            <div class="contList">
                <span>电话<span class="red">*</span></span>
                <input type="text" disabled v-model="userInfo.mobile" @blur="blurs($event)" placeholder="请输入电话">
            </div>
            <div class="contLists">
                <span>所在地<span class="red">*</span></span>
                <div class="xexBox">
                    <select v-model="city.sel1" @change="selText('0')" @blur="blurs($event)">
                        <option value="0" v-text="sel3text[0]||'省'"></option>
                        <option v-for="(item, index) in sList" :key="index" :value="item.id" v-text="item.name">省</option>
                    </select>
                    <!-- <span>/</span> -->
                    <select v-model="city.sel2" @change="selText('1')" @blur="blurs($event)">
                        <option value="0" v-text="sel3text[1]||'市'"></option>
                        <option v-for="(item, index) in sList1" :key="index" :value="item.id" v-text="item.name">市</option>
                    </select>
                    <!-- <span>/</span> -->
                    <select v-model="city.sel3" @change="selText('2')" @blur="blurs($event)">
                        <option value="0" v-text="sel3text[2]||'区'"></option>
                        <option v-for="(item, index) in sList2" :key="index" :value="item.id" v-text="item.name">区</option>
                    </select>
                </div>
            </div>
            <div class="contList">
                <span>邮件</span>
                <input type="email" v-model="userInfo.email" @blur="blurs($event)" placeholder="请输入邮箱">
            </div>
            <div class="contList">
                <span>微信号<span class="red">*</span></span>
                <input type="text" v-model="userInfo.wx_no" @blur="blurs($event)" placeholder="请输入微信号">
            </div>
            <div class="contList">
                <span>生日</span>
                <input type="date" v-model="userInfo.birthday" @blur="blurs($event)"/>
            </div>
            <div class="contLists">
                <span>学历<span class="red">*</span></span>
                <div class="xexBox">
                    <select v-model="userInfo.edu_background" @change="selText" @blur="blurs($event)">
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
      </div>
      <div class="subContentBox" v-else>
          <div class="subContent">
            <div class="contList">
                <span>公司<span class="red">*</span></span>
                <div @click="check('sea')" v-text="workInfo.comname||'当前所在公司'" class="checkBox"></div>
            </div>
            <div class="contList">
                <span>职业<span class="red">*</span></span>
                <input type="text" v-model="workInfo.position" @blur="blurs($event)" placeholder="当前的职位">
            </div>
            <div class="contList">
                <span>销售产品行业<span class="red">*</span></span>
                <div @click="check" v-text="workInfo.industry||'产品相关的行业 (多选)'" class="checkBox"></div>
            </div>
            <div class="contList">
                <span>对接部门<span class="red">*</span></span>
                <div @click="check('xuanze')" v-text="workInfo.department||'开发客户的对接部门 (多选)'" class="checkBox"></div>
            </div>
            <div class="contList">
                <span>工作年限<span class="red">*</span></span>
                <input type="date" v-model="workInfo.workyears" @blur="blurs($event)" placeholder="什么时候参加工作"/>
            </div>
            <div class="contList">
                <span>销售年限<span class="red">*</span></span>
                <input type="date" v-model="workInfo.salesyears" @blur="blurs($event)" placeholder="什么时候开始做销售"/>
            </div>
            <div class="contList">
                <span>行业年限<span class="red">*</span></span>
                <input type="date" v-model="workInfo.industryyears" @blur="blurs($event)" placeholder="什么时候接触到现在的行业"/>
            </div>
          </div>
          <div class="subContent">
            <div class="contList">
                <span>目标客户行业<span class="red">*</span></span>
                <div @click="check('duos')" v-text="workInfo.mbkh_industry||'目标客户所在的行业 (多选)'" class="checkBox" style="overflow: hidden;"></div>
            </div>
            <div class="contList">
                <span>擅长领域<span class="red">*</span></span>
                <div @click="check('duo')" v-text="workInfo.scArea||'擅长的行业领域 (多选)'" class="checkBox" style="overflow: hidden;"></div>
            </div>
            <div class="subcontList">
                <span>标杆客户<span class="red">*</span></span><span class="rightTex">以下至少填写一项</span>
                <input class="width_100inp" v-for="(item,index) in bg_customer" :key="index" v-model="item.key" type="text" @blur="blurs($event)" placeholder="请输入标杆客户的简称">
                <img class="plus" @click="subjia(3)" src="@/assets/plus.png" alt="">
            </div>
          </div>
          <div class="subContent">
            <div class="subcontList">
                <span>销售产品<span class="red">*</span></span><span class="rightTex">以下至少填写一项</span>
                <input class="width_100inp" v-for="(item,index) in product" :key="index" v-model="item.key" type="text" @blur="blurs($event)" placeholder="请输入目前销售的产品名称">
                <img class="plus" @click="subjia(1)" src="@/assets/plus.png" alt="">
            </div>
          </div>
          <div class="subContent">
            <div class="subcontList">
                <span>销售荣誉</span>
                <div v-for="(item, index) in honors" :key="index">
                    <input class="width_100inp" v-model="item.key" type="text" @blur="blurs($event)" placeholder="请输入荣誉名称">
                    <div>
                      <img v-if="item.img" :src="item.img" alt="">
                      <button v-else>上传图片</button>
                      <input type="file" @change="upimg($event, item)" @blur="blurs($event)" accept="image/*">
                    </div>
                </div>
                <img class="plus" @click="subjia(2)" src="@/assets/plus.png" alt="">
            </div>
          </div>
      </div>
      <div class="flxBut" v-if="cont_one">
          <button v-if="isImg" @click="userInfoPush">下一步</button>
          <button v-else disabled v-text="porBtnText"></button>
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
      isImg: true,
      porBtnText: '正在上传图像...',
      city: {
        sel1: 0,
        sel2: 0,
        sel3: 0
      },
      edu: '',
      userInfo: {
        name: '', // 用户名  *
        gender: '3', // 性别 1男2女 *
        mobile: '', // 电话 *
        area: '', // 所在地 *
        email: '', // 邮箱
        wx_no: '', // 微信号 *
        birthday: '', // 生日 *
        edu_background: '', // 学历 *
        avatarurl: '', // 头像路径
        club: [{club__name: ''}] // 俱乐部   int
      },
      product: [{key: ''}], // 产品
      honors: [{key: '', img: ''}], // 荣誉
      bg_customer: [{key: ''}], // 标杆客户
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
        club_id: null, // 俱乐部ID
        mbkh_industry: null
      }
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
    errMotl (errData) {
      let errStr = ''
      let tit = this.Global.HTTPStatusCode[errData.status]
      for (let i in errData.data) {
        errStr += i +' : '
        errStr += errData.data[i]
      }
      let obj = {
        Title: tit,
        Content: errStr||'无错误内容提示',
        type: 1,
        btn: 0
      }
      this.$refs.Toast.on_display(obj)
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
          this.userInfo.avatarurl = res.data.url
        }
      }, (err) => {
        this.errMotl(err)
      })
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
    subjia (num) {
      let _this = this
      if (num === 1) {
        _this.product.push({key: ''})
      } else if (num === 2) {
        _this.honors.push({key: '', img: ''})
      } else if (num === 3) {
        this.bg_customer.push({key: ''})
      }
    },
    /**
     * 男女按钮
     */
    sex (num) {
      let _this = this
      _this.userInfo.gender = num
    },
    /**
     * 提交 基本信息
     */
    userInfoPush () {
      let _this = this
      let areaArr = []
      if (_this.city.sel1 === 0) {
        areaArr.push(_this.sel3text[0])
        if (_this.sel3text[0] === '省') {
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
        _this.sList.map((p1, p2) => {
          if (p1.id === _this.city.sel1) {
            areaArr.push(p1.name)
          }
        })
      }
      if (_this.city.sel2 === 0) {
        areaArr.push(_this.sel3text[1])
        if (_this.sel3text[1] === '市') {
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
        _this.sList1.map((p1, p2) => {
          if (p1.id === _this.city.sel2) {
            areaArr.push(p1.name)
          }
        })
      }
      if (_this.city.sel3 === 0) {
        areaArr.push(_this.sel3text[2])
        if (_this.sel3text[2] === '区') {
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
        _this.sList2.map((p1, p2) => {
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
      _this.api.postUserInfo(datas, (res) => {
        if (res.data.step === 2) {
          document.documentElement.scrollTop = 0
          document.body.scrollTop = 0
          _this.cont_one = !_this.cont_one
        }
      }, (err) => {
        this.errMotl(err)
      })
    },
    selText (str, data) {
      let _this = this
      let num = null
      if (str === '0') {
        _this.sel3text = ['省', '市', '区']
        num = _this.city.sel1
        _this.city.sel2 = 0
        _this.city.sel3 = 0
      } else if (str === '1') {
        _this.sel3text[2] = '区'
        num = _this.city.sel2
        _this.city.sel3 = 0
      }
      _this.api.getAreaList('pid=' + num, (res) => {
        switch (str) {
          case '0':
            _this.sList1 = res.data
            break
          case '1':
            _this.sList2 = res.data
            break
        }
      }, (err) => {
        this.errMotl(err)
      })
    },
    check (typ) {
      let _this = this
      if (typ === 'sea') {
        _this.$refs.search.on_display()
        return
      } else if (typ === 'duo') {
        this.$refs.linkage.on_display({
          type: 'industry',
          Choice: 2,
          success: (res) => {
            _this.workInfo.scArea = res.name
          }
        })
        return
      } else if (typ === 'duos') {
        this.$refs.linkage.on_display({
          type: 'Cust',
          Choice: 2,
          success: (res) => {
            _this.workInfo.mbkh_industry = res.name
          }
        })
        return
      } else if (typ === 'xuanze') {
        this.$refs.Check.on_display({type: 'submitAdd'})
        return
      }
      this.$refs.linkage.on_display({
        type: 'industry',
        Choice: 2,
        success: (res) => {
          _this.workInfo.industry = res.name
        }
      })
    },
    /**
     * 点击 '上一步' 时界面切换
     */
    next_step (res) {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      this.cont_one = !this.cont_one
    },
    /**
     * 提交经验信息
     */
    test () {
      let _this = this
      this.$refs.Toast.close()
      let data = JSON.parse(JSON.stringify(_this.workInfo))
      data.product = JSON.stringify(_this.product)
      data.honors = JSON.stringify(_this.honors)
      data.bg_customer = JSON.stringify(_this.bg_customer)
      _this.api.postWorkInfo(data, (res) => {
        console.log(res)
        _this.$router.push({
          path: '/applySuccess',
          query: res.data
        })
      }, (err) => {
        this.errMotl(err)
      })
    },
    /**
     * 点击提交
     */
    submit () {
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
      if (_this.workInfo.mbkh_industry === null || _this.workInfo.mbkh_industry === '') {
        let obj = {
          Title: '提示',
          Content: '请选择目标客户行业',
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
      if (_this.bg_customer[0].key === '') {
        let obj = {
          Title: '提示',
          Content: '至少一个标杆客户',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
        return
      }
      if (_this.product[0].key === '') {
        let obj = {
          Title: '提示',
          Content: '至少一个销售产品',
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
    cllSrceach (data) {
      let _this = this
      _this.workInfo.comname = data.name
    },
    cllChe (res) {
      let _this = this
      _this.workInfo.department = res
    },
    genghuan () {
      this.$router.push('/membershipApp')
    }
  },
  mounted () {
    document.title = '入会申请'
    let _this = this
    _this.api.getUserNum((res) => { // 未完成的基本信息
      console.log(res.data)
      _this.sel3text = res.data.area ? res.data.area.split('|') : ['', '', '']
      _this.userInfo = res.data
    }, (err) => {
      this.errMotl(err)
    })
    _this.api.getWorkNum((res) => { // 未完成的经验信息
      this.workInfo = res.data
      this.honors = JSON.parse(res.data.honors)
      this.product = JSON.parse(res.data.product)
      this.bg_customer = JSON.parse(res.data.bg_customer)
    }, (err) => {
      this.errMotl(err)
    })
    _this.api.getAreaList('pid=0', (res) => {
      _this.sList = res.data
    }, (err) => {
      this.errMotl(err)
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
.rightTex{
  float: right;
}
div>span>.red{
  color:red;
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
    min-height:2rem;
    text-align: left;
    padding:0rem .5rem;
    font-size: .7rem;
    line-height: 2rem;
    position: relative;
}
.contList>span{
  float: left;
  position: absolute;
  top:0;
  left:.5rem;
}
.contList>input{
    height:1.5rem;
    width:10.7rem;
    margin-top:.3rem;
    text-align: right;
    border: none;
    font-size: .7rem;
    background:#fff;
    -webkit-appearance: none;
    float: right;
}
.contList>.checkBox{
    min-height:1.5rem;
    width:calc(100% - 35%);
    padding-left:35%;
    margin-top:.3rem;
    padding-top:.25rem;
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
.flxBut>button[disabled]{
    color: #888;
    background:rgba(241, 241, 241, 1);
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
    -webkit-appearance: none;
}
.width_100inp{
  font-size: .7rem;
}
.contList>div{
  color:#888;
}

.contImgmol>input{
    width:100%;
    height:100%;
    position: absolute;
    top:0;
    left:0;
    opacity: 0;
}
</style>
