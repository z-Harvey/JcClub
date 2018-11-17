<template>
  <div class="editInfo">
      <Toast title='标题'></Toast>
      <div class="subContentBoxs" v-if="type === 'personal'">
        <div class="subContent">
            <div class="contImg">
                <img :src="dataList.avatarurl" alt="">
                <div>
                    <img src="" alt="">
                </div>
            </div>
            <div class="contList">
                <span>称号</span>
                <input type="text" v-model="dataList.nickname" placeholder="bala">
            </div>
            <div class="contList">
                <span>姓名</span>
                <input type="text" v-model="dataList.name" placeholder="aaa">
            </div>
            <div class="contList sex">
                <span>性别</span>
                <div>
                    <button @click="gencli" :class="dataList.gender === 1? 'navbtn': ''">帅哥</button>
                    <button @click="gencli" :class="dataList.gender === 2? 'navbtn': ''">美女</button>
                </div>
            </div>
            <div class="contList">
                <span>电话</span>
                <input type="text" v-model="dataList.mobile" placeholder="18888888888">
            </div>
            <div class="contList">
                <span>所在地</span>
                <select v-model="pid.a1" @change="areaFn1()">
                    <option value="0" v-text="ara[0]">请选择</option>
                    <option v-for="(item, index) in pid1" :key="index" v-text="item.name" :value="item.id"></option>
                </select>
                <select v-model="pid.a2" @change="areaFn2()">
                    <option value="0" v-text="ara[1]">请选择</option>
                    <option v-for="(item, index) in pid2" :key="index" v-text="item.name" :value="item.id"></option>
                </select>
                <select v-model="pid.a3">
                    <option value="0" v-text="ara[2]">请选择</option>
                    <option v-for="(item, index) in pid3" :key="index" v-text="item.name" :value="item.id"></option>
                </select>
            </div>
            <div class="contList">
                <span>邮件</span>
                <input type="text" v-model="dataList.email" placeholder="lqn@xiaoshoun.cn">
            </div>
            <div class="contList">
                <span>微信号</span>
                <input type="text" v-model="dataList.wx_no" placeholder="lixiaomo">
            </div>
            <div class="contList">
                <span>生日</span>
                <input type="date" v-model="dataList.birthday" placeholder="1992年6月3日">
            </div>
            <div class="contList">
                <span>学历</span>
                <select v-model="dataList.edu_background">
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
      <div class="subContentBox" v-if="type === 'exper'">
          <div class="subContent">
            <div class="contList">
                <span>公司</span>
                <div @click="check('sea')" v-text="dataList.comname||'当前所在公司（必填）'" class="checkBox"></div>
            </div>
            <div class="contList">
                <span>行业</span>
                <div @click="check" v-text="dataList.industry||'当前所在行业（必填）'" class="checkBox"></div>
            </div>
            <div class="contList">
                <span>职业</span>
                <input type="text" v-model="dataList.position" placeholder="当前的职位（必填）">
            </div>
            <div class="contList">
                <span>擅长领域</span>
                <div @click="check('duo')" v-text="dataList.scArea||'擅长的行业领域（多选、必填）'" class="checkBox"></div>
            </div>
            <div class="contList">
                <span>对接部门</span>
                <div @click="check('xuanze')" v-text="dataList.department||'开发客户的对接部门（多选）'" class="checkBox"></div>
            </div>
          </div>
          <div class="subContent">
            <div class="subcontList">
                <span>销售产品</span>
                <input class="width_100inp" v-for="(item, index) in dataList.product" :key="index" v-model="item.key" type="text" placeholder="请输入产品名称">
                <img class="plus" src="@/assets/plus.png" alt="">
            </div>
          </div>
          <div class="subContent">
            <div class="contList">
                <span>工作年限</span>
                <input type="date" v-model="dataList.workyears" placeholder="参加工作的年限">
            </div>
            <div class="contList">
                <span>销售年限</span>
                <input type="date" v-model="dataList.salesyears" placeholder="做销售的工作年限">
            </div>
            <div class="contList">
                <span>行业年限</span>
                <input type="date" v-model="dataList.industryyears" placeholder="目前所在行业的工作年限">
            </div>
          </div>
          <div class="subContent">
            <div class="subcontList">
                <span>业绩荣誉</span>
                <div v-for="(item, index) in dataList.honors" :key="index">
                    <input class="width_100inp" v-model="item.key" type="text" placeholder="请输入荣誉名称">
                    <button>上传图片</button>
                </div>
                <img class="plus" src="@/assets/plus.png" alt="">
            </div>
          </div>
      </div>
      <div class="flxBut" v-if="type === 'personal'">
          <button @click="submit">保存</button>
      </div>
      <div class="flxBut" v-else>
          <button @click="submit1">保存</button>
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
        nickname: ''
      },
      pid: {
        a1: 0,
        a2: 0,
        a3: 0
      },
      pid1: [],
      pid2: [],
      pid3: [],
      ara: []
    }
  },
  components: {
    search
  },
  methods: {
    test (data) {
      console.log(data)
    },
    cllChe (data) {
      console.log(data)
      this.dataList.department = data
    },
    cllLink (data) {
      console.log(data)
      if (data.type === 'duo') {
        this.dataList.scArea = data.name
      } else {
        this.dataList.industry = data.name
      }
    },
    submit1 () {
      console.log(this.dataList)
      let obj = JSON.parse(JSON.stringify(this.dataList))
      obj.honors = JSON.stringify(obj.honors)
      obj.product = JSON.stringify(obj.product)
      this.api.putWorkInfo(obj, (res) => {
        console.log(res)
      }, (err) => {
        console.log(err)
      })
    },
    // 选择公司后的回调
    cllSrceach (data) {
      console.log(data)
      this.dataList.comname = data.name
    },
    check (typ) {
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
    areaFn (num) {
      let str = null
      if (num) {
        str = 'pid=' + num
      } else {
        str = 'pid=' + 0
      }
      this.api.getAreaList(str, (res) => {
        this.pid1 = res.data
      }, (err) => {
        console.log(err)
      })
    },
    gencli () {
      if (this.dataList.gender === 1) {
        this.dataList.gender = 2
      } else {
        this.dataList.gender = 1
      }
    },
    areaFn1 (num) {
      let str = null
      if (num) {
        str = 'pid=' + num
      } else {
        str = 'pid=' + 0
      }
      this.api.getAreaList(str, (res) => {
        this.pid2 = res.data
      }, (err) => {
        console.log(err)
      })
    },
    areaFn2 (num) {
      let str = null
      if (num) {
        str = 'pid=' + num
      } else {
        str = 'pid=' + 0
      }
      this.api.getAreaList(str, (res) => {
        this.pid3 = res.data
      }, (err) => {
        console.log(err)
      })
    },
    submit () {
      delete this.dataList.club
      let arr = []
      if (this.pid.a1 !== 0) {
        this.pid1.map((p1, p2) => {
          if (p1.id === this.pid.a1) {
            arr.push(p1.name)
          }
        })
        this.pid2.map((p1, p2) => {
          if (p1.id === this.pid.a2) {
            arr.push(p1.name)
          }
        })
        this.pid3.map((p1, p2) => {
          if (p1.id === this.pid.a3) {
            arr.push(p1.name)
          }
        })
        this.dataList.area = arr.join('|')
      }
      console.log(this.dataList)
      this.api.putMyCardInfo(this.Global.userInfo.myId, this.dataList, (res) => {
        console.log(res)
        if (res.status === 200) {
          this.$router.go(-1)
        }
      }, (err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.type = this.$route.query.type
    if (this.$route.query.type === 'personal') {
      document.title = '编辑个人信息'
      this.areaFn()
      this.api.getMyCardInfo(this.Global.userInfo.myId, (res) => {
        console.log(res)
        this.dataList = res.data
        this.ara = this.dataList.area.split('|')
        console.log(this.ara)
      }, (err) => {
        console.log(err)
      })
    } else {
      document.title = '编辑工作经验'
      this.api.getWorkNum((res) => {
        console.log(res)
        this.dataList = res.data
        this.dataList.honors = JSON.parse(this.dataList.honors)
        this.dataList.product = JSON.parse(this.dataList.product)
      }, (err) => {
        console.log(err)
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
}
.contImg>img{
    width:2.5rem;
    align-self: center;
}
.subContent>.contList{
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
}
.contList>select{
    width:100%;
    height:1.5rem;
    text-align: right;
    border:none;
    padding-left: 1rem;
    color:#888;
}
.contList>div{
    width:10.7rem;
    float: right;
    line-height: 1.5rem;
    margin-top:.3rem;
    text-align: right;
    color:#888;
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
    text-align: left;
    float: left;
    color:#101010;
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
.plus{
    width: 1.2rem;
    height:1.2rem;
    text-align: left;
    margin-top:.9rem;
}
</style>
