<template>
    <div class="buOppoNew">
        <div class="areaBox">
            <div class="tit">
                <span>商机描述<span class="redSp">*</span></span>
            </div>
            <div class="inpCont">
                <textarea></textarea>
            </div>
        </div>
        <div class="inpuList">
            <div class="tit">
                <span>商机信息</span>
            </div>
            <div class="inpCont">
                <!-- <div class="inp">
                    <div class="inpLef">客户</div>
                    <div class="inpRig">
                        <input type="text" placeholder="选择客户">
                    </div>
                </div> -->
                <div class="inp">
                    <div class="inpLef">客户</div>
                    <div class="inpRig">
                        <div @click="path(0)" v-text="nickName || '选择客户'"></div>
                    </div>
                </div>
                <div class="inp">
                    <div class="inpLef">客户行业<span class="redSp">*</span></div>
                    <div class="inpRig">
                        <div @click="linkClick('hangye')">asdsdfdsdfdsdfdf</div>
                    </div>
                </div>
                <div class="inp">
                    <div class="inpLef">企业类型</div>
                    <div class="inpRig">
                        <div>asdsdfdsdfdsdfdf</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="btnList">
            <div class="tit">
                <span>有效期<span class="redSp">*</span></span>
            </div>
            <div class="btnListBox">
                <div>1天</div>
                <div>2天</div>
                <div>3天</div>
                <div>4天</div>
            </div>
        </div>
        <div class="subBtn">
            <button>发布</button>
        </div>
        <linkage ref="linkage"/>
        <search ref="search" @ok="cllSrceach"/>
    </div>
</template>

<script>
import search from '@/components/Logon_process/srceach'

export default {
  name: 'buOppoNew',
  data () {
    return {
      nickName: null
    }
  },
  components: {
    search
  },
  methods: {
    path (num) {
      switch (num) {
        case 0:
          this.$refs.search.on_display()
          break;
      }
    },
    cllSrceach (res) {
      this.nickName = res.name
    },
    linkClick: function (typ) {
      let _this = this
      if (typ === 'hangye') {
        _this.$refs.linkage.on_display({
          type: 'Cust',
          Choice: 'n',
          success (res) {
            console.log(res)
          }
        })
      }
    },
  },
  mounted () {
    document.title = '新增商机'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buOppoNew{
    position: fixed;
    width:100%;
    height:100%;
    overflow: auto;
    background:#f9f9f9;
    top:0rem;
    left:0rem;
}
.redSp{
    color:red;
}
.inpuList,.btnList,.areaBox{
    width: 92%;
    background:#fff;
    border-radius: .25rem;
    margin:0 auto;
    text-align: left;
    margin-top: .5rem;
}
.inpuList>.tit{
    border-bottom: .1rem solid #f7f7f7;
}
.tit{
    text-align: left;
    font-size: .7rem;
    color:#101010;
    padding-left:.5rem;
    line-height: 2.75rem;
    font-weight: 600;
}
.inpCont{
    padding:0 .5rem 0;
}
.inpCont>.inp{

}
.inpCont>.inp>.inpLef{
    float: left;
    line-height: 2.25rem;
    font-size: .7rem;
    margin-right:.2rem;
}
.inpCont>.inp>.inpRig{
    min-height:2.25rem;
    line-height: 1rem;
    font-size: .7rem;
    text-align: right;
    color:#101010;
    width:100%;
    border:1px solid rgba(0,0,0,0);
}
.inpCont>.inp>.inpRig>div{
    text-align: right;
    max-width: 100%;
    word-wrap:break-word;
    margin-top:.55rem;
}
.inpCont>.inp>.inpRig>input{
    height:1.5rem;
    border:none;
    text-align: right;
    margin-top:.3rem;
}
.inpCont>textarea{
    width:100%;
    min-height: 4rem;
    font-size: .7rem;
    background:#f9f9f9;
    border: none;
    margin-bottom:.5rem;
}
.btnListBox{
    display: flex;
    justify-content: space-around;
    padding-bottom: .5rem;
}
.btnListBox>div{
    width:3rem;
    height:1.5rem;
    border-radius: .15rem;
    background:rgba(255, 152, 0, 1);
    text-align: center;
    font-size: .7rem;
    line-height: 1.5rem;
    color:#fff;
}
.subBtn{
    height:2.25rem;
    width:100%;
    background:#fff;
    position: fixed;
    bottom: 0rem;
    left:0rem;
    display: flex;
    border-top: .1rem solid #f7f7f7;
}
.subBtn>button{
    width:10rem;
    height:1.75rem;
    border-radius: 1rem;
    color:#fff;
    background: rgba(255, 152, 0, 1);
    border:none;
    align-self: center;
    margin: 0 auto;
}
.subBtn>button::after{
    border:none;
}
</style>
