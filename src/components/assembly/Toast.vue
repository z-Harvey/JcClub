<template name="Toast">
  <div class="Toast" v-if="show">
    <div class="alert_box">
        <div class="title" v-text="content.Title? content.Title:'标题'">是否确认提交？</div>
        <div class="content" v-if="content.type === 1" v-text="content.Content? content.Content:'内容'">请您确保您填写的信息准确无误，否则可能会影响审核结果</div>
        <div class="contents" v-if="content.type === 2">
            <div class="xuanze">
                <div @click="rioC(0)" :class="rio[0]?'chaRio': 'rio'"><div></div></div>
                <div class="tioTex">
                    <div>10牛钻</div>
                    <div>查看<span>俱乐部内部</span>999位会员标记的数据</div>
                </div>
            </div>
            <div class="xuanze">
                <div @click="rioC(1)" :class="rio[1]?'chaRio': 'rio'"><div></div></div>
                <div class="tioTex">
                    <div>15牛钻</div>
                    <div>查看<span>俱乐部外部</span>999位会员标记的数据</div>
                </div>
            </div>
            <div class="shengyu">剩余牛钻 <span>400颗</span></div>
        </div>
        <div class="contents" v-if="content.type === 3">
            <div class="t3_content_title">足迹内容为您的隐私，我们不会在任何地方进行展示，请放心填写~</div>
            <div class="t3_content_cont">
                <span>类型</span>
                <div class="cc1">电话拜访<img src="@/assets/bottom.png" alt=""></div>
            </div>
            <div class="t3_content_cont">
                <span>时间</span>
                <div class="cc2">请选择</div>
            </div>
            <div class="t3_content_cont">
                <span>记录</span>
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
      rio: [false, true],
      content: {}
    }
  },
  mounted (res) {
  },
  methods: {
    rioC: function (num) {
      let _this = this
      if (_this.rio[num]) {

      } else {
        let arr = [false, false]
        arr[num] = true
        _this.rio = arr
      }
    },
    close: function () {
      this.show = false
    },
    _click: function () {
      this.content.success(1)
      this.show = false
    },
    on_display: function (res) {
      this.content = res
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
</style>
