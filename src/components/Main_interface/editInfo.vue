<template>
  <div class="editInfo">
      <Toast title='标题'></Toast>
      <div class="subContentBoxs" v-if="type === 'personal'">
        <div class="subContent">
            <div class="contImg">
                <img src="@/assets/touxiang.jpg" alt="">
                <div>
                    <img src="" alt="">
                </div>
            </div>
            <div class="contList">
                <span>称号</span>
                <input type="text" placeholder="bala">
            </div>
            <div class="contList">
                <span>姓名</span>
                <input type="text" placeholder="aaa">
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
                <input type="text" placeholder="18888888888">
            </div>
            <div class="contList">
                <span>所在地</span>
                <input type="text" placeholder="北京·昌平">
            </div>
            <div class="contList">
                <span>邮件</span>
                <input type="text" placeholder="lqn@xiaoshoun.cn">
            </div>
            <div class="contList">
                <span>微信号</span>
                <input type="text" placeholder="lixiaomo">
            </div>
            <div class="contList">
                <span>生日</span>
                <input type="text" placeholder="1992年6月3日">
            </div>
            <div class="contList">
                <span>学历</span>
                <input type="text" placeholder="本科">
            </div>
        </div>
      </div>
      <div class="subContentBox" v-if="type === 'exper'">
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
                <input type="text" placeholder="擅长的行业领域（多选）">
            </div>
            <div class="contList">
                <span>对接部门</span>
                <input type="text" placeholder="开发客户的对接部门（多选）">
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
                <span>业绩荣誉</span>
                <div>
                    <input class="width_100inp" type="text" placeholder="请输入荣誉名称">
                    <button>上传图片</button>
                </div>
                <img class="plus" src="@/assets/plus.png" alt="">
            </div>
          </div>
      </div>
      <div class="flxBut">
          <button>保存</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'editInfo',
  data () {
    return {
      cont_one: false,
      type: null
    }
  },
  methods: {
  },
  mounted () {
    this.type = this.$route.query.type
    document.title = '编辑工作经验'
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
</style>
