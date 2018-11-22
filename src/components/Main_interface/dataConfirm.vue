<template>
    <div class="dataConfirm">
        <div class="title">
            <img src="@/assets/info.png" alt="">
            <div>以下n条数据数据匹配公司失败，请确认公司名称是否填写正确</div>
        </div>
        <div>
            <div class="for">
                <img src="@/assets/membershipApp_shu.png" alt="">
                <div>北京聚牛天下网络科技有限公司北京聚牛天下网络科技有限公司</div>
            </div>
        </div>
        <div class="btnBox">
            <button class="qx">重新上传</button>
            <button class="qr">忽略</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'dataConfirm',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted (options) {
    document.title = '数据确认'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dataConfirm{
    position: fixed;
    top:0;
    left: 0;
    width:100%;
    height:100%;
    overflow: auto;
}
.title{
    background:rgba(255, 152, 0, 1);
    padding:.5rem .75rem;
    font-size: .7rem;
    color:#fff;
    text-align: left;
}
.title>img{
    width:.7rem;
    height:.7rem;
    float: left;
}
.title>div{
    padding-left:1rem;
    line-height: .8rem
}
.for{
    width:calc(92% - 1rem);
    padding:.65rem .5rem;
    text-align: left;
    margin:.5rem auto;
    background:#fff;
    border-radius: .25rem;
}
.for>img{
    width:.7rem;
    height:.7rem;
    float: left;
}
.for>div{
    font-size: .7rem;
    line-height: .8rem;
    padding-left: .8rem
}
.btnBox{
    width:100%;
    height:2.25rem;
    background:#fff;
    position: fixed;
    bottom: 0rem;
    left: 0;
}
.btnBox>button{
    width:8.25rem;
    height:1.75rem;
    border-radius: 1.5rem;
}
.btnBox>button::after{
    border:none;
}
.qx{
    border:1px solid rgba(255, 152, 0, 1);
    background: #fff;
    color:rgba(255, 152, 0, 1);
}
.qr{
    background: rgba(255, 152, 0, 1);
    color: #fff;
    border:none;
}
</style>
