<template>
  <div class="submitAdd">
      <Toast ref="Toast" @confirm="test"/>
      <Check ref="Check"/>
      <linkage ref="linkage"/>
      <div class="memTitle">
          北京酷牛仔俱乐部
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
                <img src="@/assets/touxiang.jpg" alt="">
                <div class="contImgmol">
                    <img src="@/assets/camera.png" alt="">
                </div>
            </div>
            <div class="contList">
                <span>姓名</span>
                <input type="text" placeholder="请输入真实姓名（必填）">
            </div>
            <div class="contList sex">
                <span>性别</span>
                <div>
                    <button>帅哥</button>
                    <button>美女</button>
                </div>
            </div>
            <div class="contList">
                <span>电话</span>
                <input type="text" placeholder="请输入电话">
            </div>
            <div class="contList">
                <span>所在地</span>
                <div class="seleBox">
                    <select v-model="city.sel1" @change="selText('1')">
                        <option value="0">省</option>
                        <option value="北京">北京</option>
                        <option value="吉林">吉林</option>
                    </select>
                    <span>/</span>
                    <select v-model="city.sel2" @change="selText('2')">
                        <option value="0">市</option>
                        <option value="长春">长春</option>
                        <option value="吉林">吉林</option>
                    </select>
                    <span>/</span>
                    <select v-model="city.sel3" @change="selText('3')">
                        <option value="0">区</option>
                        <option value="丰满区">丰满区</option>
                        <option value="船营区">船营区</option>
                    </select>
                </div>
            </div>
            <div class="contList">
                <span>邮件</span>
                <input type="text" placeholder="请输入邮箱">
            </div>
            <div class="contList">
                <span>微信号</span>
                <input type="text" placeholder="请输入微信号">
            </div>
            <div class="contList">
                <span>生日</span>
                <input type="date" v-model="date"/>
            </div>
            <div class="contList">
                <span>学历</span>
                <div class="seleBox">
                    <select v-model="edu" @change="selText">
                        <option value="0">请选择</option>
                        <option value="小学">小学</option>
                        <option value="初中">初中</option>
                        <option value="高中">高中</option>
                        <option value="中专">中专</option>
                        <option value="大专">大专</option>
                        <option value="本科">本科</option>
                        <option value="研究生">研究生</option>
                    </select>
                </div>
            </div>
        </div>
      </div>
      <div class="subContentBox" v-else>
          <div class="subContent">
            <div class="contList">
                <span>公司</span>
                <input type="text" placeholder="当前所在公司（必填）">
            </div>
            <div class="contList">
                <span>行业</span>
                <input type="text" placeholder="当前所在行业（必填）">
            </div>
            <div class="contList">
                <span>职业</span>
                <input type="text" placeholder="当前的职位（必填）">
            </div>
            <div class="contList">
                <span>擅长领域</span>
                <div @click="check" class="checkBox">擅长的行业领域（多选、必填）</div>
            </div>
            <div class="contList">
                <span>对接部门</span>
                <div @click="check" class="checkBox">开发客户的对接部门（多选）</div>
            </div>
          </div>
          <div class="subContent">
            <div class="subcontList">
                <span>销售产品</span>
                <input class="width_100inp" type="text" placeholder="请输入产品名称">
                <img class="plus" src="@/assets/plus.png" alt="">
            </div>
          </div>
          <div class="subContent">
            <div class="contList">
                <span>工作年限</span>
                <input type="text" placeholder="参加工作的年限">
            </div>
            <div class="contList">
                <span>销售年限</span>
                <input type="text" placeholder="做销售的工作年限">
            </div>
            <div class="contList">
                <span>行业年限</span>
                <input type="text" placeholder="目前所在行业的工作年限">
            </div>
          </div>
          <div class="subContent">
            <div class="subcontList">
                <span>销售荣誉</span>
                <div>
                    <input class="width_100inp" type="text" placeholder="请输入荣誉名称">
                    <button>上传图片</button>
                </div>
                <img class="plus" src="@/assets/plus.png" alt="">
            </div>
          </div>
      </div>
      <div class="flxBut" v-if="cont_one">
          <button @click="next_step">下一步</button>
      </div>
      <div class="flxBut2" v-else>
          <button @click="next_step">上一步</button>
          <button @click="submit">提交</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'submitAdd',
  data () {
    return {
      CityStr: null,
      cont_one: false,
      city: {
        sel1: 0,
        sel2: 0,
        sel3: 0
      },
      date: null,
      edu: 0
    }
  },
  methods: {
    selText: function (str) {
      console.log(this.edu)
      switch (str) {
        case '1':
          console.log(this.city.sel1)
          break
        case '2':
          console.log(this.city.sel2)
          break
        case '3':
          console.log(this.city.sel3)
          break
      }
    },
    check: function () {
    //   this.$refs.Check.on_display()
      this.$refs.linkage.on_display()
    },
    /**
     * 点击'下一步'或'上一步' 时界面切换
     */
    next_step: function (res) {
      this.cont_one = !this.cont_one
    },
    test: function () {
      console.log('点击了确认')
      this.$refs.Toast.close()
      this.$router.push('applySuccess')
    },
    submit: function () {
      let obj = {
        Title: '是否确认提交？',
        Content: '请您确保您填写的信息准确无误，否则可能会影响审核结果',
        type: 1,
        btn: 2
      }
      this.$refs.Toast.on_display(obj)
    }
  },
  mounted () {
    document.title = '入会申请'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.memTitle{
    width:100%;
    height:2rem;
    background:rgba(255, 152, 0, 1);
    color:#fff;
    font-size: .7rem;
    line-height: 2rem;
    position: fixed;
    top:0;
    left:0;
}
.memTitle2{
    width:100%;
    height:2.75rem;
    background:#fff;
    font-size: .6rem;
    position: fixed;
    top:2rem;
    left:0;
}
.memtitImg{
    margin-top: .5rem
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
    font-size: .7rem;
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
</style>
