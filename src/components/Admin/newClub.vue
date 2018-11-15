<template>
  <div class="newClub">
      <div class="content">
          <div>
              <span>名称</span>
              <input type="text" placeholder="输入俱乐部名称">
          </div>
          <div>
              <span>人数限制</span>
              <input type="text" placeholder="输入限制数量">
          </div>
          <div>
              <span>地区</span>
              <input type="text" placeholder="选择俱乐部所在地区">
          </div>
      </div>
      <div class="con1">
          <div>备注</div>
          <textarea placeholder="输入备注信息"></textarea>
      </div>
      <div class="benBox">
          <button v-if="false" @click="ok">提交</button>
          <button v-else class="dis">提交</button>
      </div>
      <Toast ref="Toast"/>
  </div>
</template>

<script>
export default {
  name: 'newClub',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    ok: function () {

    }
  },
  mounted () {
    document.title = '创建俱乐部'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.newClub{
    position: fixed;
    width:100%;
    height:100%;
    top:0;
    left:0;
    overflow: hidden;
    background:#f9f9f9;
}
.content{
    width:92%;
    margin:0 auto;
    background:#fff;
    border-radius: .25rem;
    /* padding:; */
    overflow: hidden;
    font-size: .7rem;
    text-align: left;
    padding-top:.55rem;
}
.content>div{
    padding:.4rem .5rem .35rem;
    line-height: 1.5rem;
}
.content>div>input{
    width:13rem;
    height:1.5rem;
    float: right;
    text-align: right;
    border:0;
}
.content>div>input::after{
    border:0;
}
.con1{
    padding:.5rem;
    width:calc(92% - 1rem);
    background:#fff;
    margin:.5rem auto 0;
}
.con1>div{
    text-align: left;
    font-size: .7rem;
}
.con1>textarea{
    width:calc(100% - .4rem);
    min-height: 5rem;
    margin-top:.2rem;
    background:#f9f9f9;
    border:0;
    resize:none;
    font-size: .7rem;
    padding:.2rem;
}
.con1>textarea::after{
    border:0;
}
.benBox{
    width:100%;
    height:2.25rem;
    position: fixed;
    bottom: 0rem;
    left:0rem;
    background:#fff;
}
.benBox>button{
    width:10rem;
    height:1.75rem;
    background: rgba(255, 152, 0, 1);
    color:#fff;
    margin-top:.25rem;
    border-radius: 1rem;
    border: 0;
}
.benBox>button::after{
    border:0;
}
.benBox>.dis{
    background: rgba(241, 241, 241, 1);
    color:#888;
}
</style>
