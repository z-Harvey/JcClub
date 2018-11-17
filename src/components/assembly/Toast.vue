<template name="Toast">
  <div class="Toast" v-if="show">
    <div class="alert_box">
        <div class="title" v-text="content.Title? content.Title:'标题'">是否确认提交？</div>
        <div class="content" v-if="content.type === 1 || content.type === 4" v-text="content.Content? content.Content:'内容'">请您确保您填写的信息准确无误，否则可能会影响审核结果</div>
        <div class="contents" v-if="content.type === 2">
            <div class="xuanze">
                <div @click="rioC('ri1')" :class="rio.ri1?'chaRio': 'rio'"><div></div></div>
                <div class="tioTex">
                    <div><span v-text="mat.club_unlock_niuz"></span>牛钻</div>
                    <div>查看<span>俱乐部内部</span><span v-text="mat.club_mark_count"></span> 位会员标记的数据</div>
                </div>
            </div>
            <div class="xuanze">
                <div @click="rioC('ri2')" :class="rio.ri2?'chaRio': 'rio'"><div></div></div>
                <div class="tioTex">
                    <div><span v-text="mat.out_unlock_niuz"></span>牛钻</div>
                    <div>查看<span>俱乐部外部</span><span v-text="mat.out_mark_count"></span>位会员标记的数据</div>
                </div>
            </div>
            <div class="shengyu">剩余牛钻 <span><span v-text="mat.user_niuz"></span>颗</span></div>
        </div>
        <div class="contents" v-if="content.type === 3">
            <div class="t3_content_title">足迹内容为您的隐私，我们不会在任何地方进行展示，请放心填写~</div>
            <div class="t3_content_cont">
                <span>类型</span>
                <div class="cc1">
                    <select v-model="typ2.type">
                        <option value="1">电话拜访</option>
                        <option value="2">上门拜访</option>
                        <option value="3">回复</option>
                        <option value="4">市场活动</option>
                        <option value="5">邮件</option>
                    </select>
                </div>
            </div>
            <div class="t3_content_cont">
                <span>时间</span>
                <div class="cc2"><input v-model="typ2.time" type="date" name="" id=""></div>
            </div>
            <div class="t3_content_cont">
                <span>记录</span>
                <div class="cc3">
                    <textarea v-model="typ2.experience"></textarea>
                </div>
            </div>
        </div>
        <div style="height:2.5rem;"></div>
        <div class="butList" v-if="content.btn === 0">
            <button @click="close" v-text="content.No? content.No:'取消'" class="btnOne qx"></button>
        </div>
        <div class="butList" v-else-if="content.btn === 1">
            <button @click="_click" v-text="content.Yes? content.Yes:'确认'" class="btnOne"></button>
        </div>
        <div class="butList" v-else>
            <button @click="close" v-text="content.No? content.No:'取消'" class="qx"></button>
            <button @click="_click" v-text="content.Yes? content.Yes:'确认'"></button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      path: 1,
      show: false,
      rio: {
        ri1: false,
        ri2: false
      },
      content: {},
      mat: {},
      datas: null,
      typ2: {
        type: null,
        time: null,
        experience: null
      }
    }
  },
  mounted (res) {
  },
  methods: {
    rioC: function (re) {
      let _this = this
      _this.rio[re] = !_this.rio[re]
    },
    close: function () {
      this.show = false
    },
    _click: function () {
      let data = {}
      let _this = this
      if (_this.content.type === 2) {
        if (_this.rio.ri1 && _this.rio.ri2) {
          data['is_deepunlock'] = 3
        } else if (_this.rio.ri1) {
          data['is_deepunlock'] = 1
        } else if (_this.rio.ri2) {
          data['is_deepunlock'] = 2
        } else {
          data['is_deepunlock'] = false
        }
        data['club_unlock_niuz'] = _this.mat.club_unlock_niuz
        data['out_unlock_niuz'] = _this.mat.out_unlock_niuz
        data['user_niuz'] = _this.mat.user_niuz
        data['id'] = _this.comId
      } else if (_this.content.type === 4) {
        data = _this.datas
      } else if (this.content.type === 3) {
        data = _this.typ2
      }
      this.content.success(data)
      this.show = false
    },
    on_display: function (res, data) {
      let _this = this
      this.content = res
      _this.datas = data
      this.show = true
    },
    isUnlock: function (res, data) {
      this.content = res
      let _this = this
      let str = 'company=' + data.id
      _this.comId = data.id
      _this.api.getCompanyUnlock(str, function (res) {
        console.log(res)
        _this.mat = res.data
      }, function (err) {
        console.log(err)
      })
      this.show = true
    }
  }
}
</script>

<style scoped>
.Toast{
    width:100%;
    height:100%;
    position: fixed;
    top:0rem;
    left: 0rem;
    z-index: 9;
    background: rgba(15,15,15,.3);
    text-align: center;
    display: flex;
}
.alert_box{
    background: #fff;
    border-radius:4px;
    width:14rem;
    min-height:7.3rem;
    margin: 0 auto 0;
    position: relative;
    align-self: center;
}
.title{
    height:2.45rem;
    font-size: .9rem;
    line-height: 2.45rem;
}
.content{
    width:90%;
    margin: 0 auto;
    line-height: 1.05rem;
    font-size: .75rem;
    color:#888;
}
.butList{
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 0rem;
    left:0rem;
    width:100%;
    height:2.5rem;
    border-radius:0 0 4px 4px;
    overflow: hidden;
    border-top: 1px solid #CCCCCC;
}
.butList>button{
    width:50%;
    height:2.5rem;
    border:0;
    border-radius: 0;
    background:rgba(0,0,0,0);
    font-size: .9rem;
    color:rgba(2, 187, 0, 1);
}
.butList>button::after{
    border:0;
}
.butList>.qx{
    color:#101010;
    border-right:1px solid #CCCCCC;
}
.butList>.btnOne{
    width:100%;
    color:rgba(2, 187, 0, 1);
}
.contents{
    margin-bottom: 2.5rem;
    width: 90%;
    margin:0 auto;
}
.xuanze{
    text-align: left;
}
.rio{
    width:.6rem;
    height:.6rem;
    border-radius: 50%;
    border:.1rem solid #888;
    float: left;
    margin-top:.2rem;
}
.chaRio{
    width:.6rem;
    height:.6rem;
    border-radius: 50%;
    border:.1rem solid #5677fc;
    float: left;
    background: #5677fc;
    margin-top:.2rem;
    display: flex;
}
.chaRio>div{
    width:.3rem;
    height:.3rem;
    border:.1rem solid #fff;
    margin: 0 auto 0rem;
    border-radius:50%;
    align-self: center;
}
.tioTex{
    vertical-align: top;
    font-size: .7rem;
    padding-left:.8rem;
    line-height: 1.2rem
}
.tioTex>div:first-child{
    color:rgba(255, 152, 0, 1);
}
.tioTex>div>span{
    font-weight: 600;
}
.shengyu{
    text-align: right;
    margin:0 auto;
    font-size: .7rem;
    line-height: 2rem
}
.shengyu>span{
    color:rgba(255, 152, 0, 1);
}
.t3_content_title{
    font-size:.7rem;
    color:#101010;
    text-align: left;
}
.t3_content_cont{
    text-align: left;
    font-size: .7rem;
    margin-top:.75rem;
}
.t3_content_cont>span{
    color:rgba(255, 152, 0, 1);
}
.cc1{
    font-size: .7rem;color:#888;
    display: inline-block
}
.cc1>img{
    width:.7rem;
    height:.7rem;
    vertical-align: text-top;
    margin-left:.1rem;
}
.cc2{
    font-size: .7rem;
    color:#ccc;
    display: inline-block
}
.cc2>input{
    border:none;
    color:#888;
}
.cc3{
    padding-left:1.5rem;
}
.cc3>textarea{
    width:100%;
    background:#f7f7f7;
    color:#888;
    height:6rem;
    border:none;
    resize:none
}
</style>
