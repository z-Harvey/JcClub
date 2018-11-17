<template>
    <div class="ModalInfo" v-if="show">
        <div class="content" v-if="type_num === 0">
            <div class="title">基本信息</div>
            <div class="contDiv">
                <div class="for" v-for="(item, index) in dataList" :key="index">
                    <div class="list">
                        <div>
                            <span>行业</span>
                            <span v-text="item.industry"></span>
                        </div>
                        <div>
                            <span>官网地址</span>
                            <span v-text="item.net_url"></span>
                        </div>
                        <div>
                            <span>公司地址</span>
                            <span v-text="item.address"></span>
                        </div>
                        <div>
                            <span>企业类型</span>
                            <span v-text="item.type"></span>
                        </div>
                    </div>
                    <div class="time"><span v-text="'@' + item.mark_people"></span>于 <span v-text="item.add_time"></span> 标记</div>
                </div>
            </div>
            <div class="return">
                <img @click="close" src="@/assets/Return.png" alt="">
            </div>
        </div>
        <div class="content" v-if="type_num === 1">
            <div class="title">企业规模</div>
            <div class="contDiv">
                <div class="for" v-for="(item, index) in dataList" :key="index">
                    <div class="list">
                        <div>
                            <span>人数</span>
                            <span v-text="item.people_num"></span>
                        </div>
                        <div>
                            <span>分支机构数</span>
                            <span v-text="item.fzjg_num"></span>
                        </div>
                        <div>
                            <span>营业额</span>
                            <span v-text="item.turnover"></span>
                        </div>
                    </div>
                    <div class="time"><span v-text="'@' + item.mark_people"></span>于 <span v-text="item.add_time"></span> 标记</div>
                </div>
            </div>
            <div class="return">
                <img @click="close" src="@/assets/Return.png" alt="">
            </div>
        </div>
        <div class="content" v-if="type_num === 2">
            <div class="title">联系人</div>
            <div class="contDiv">
                <div class="for" v-for="(item, index) in dataList" :key="index">
                    <div class="list" v-for="(msg, index) in item.contact_list" :key="index">
                        <div>
                            <span>姓名</span>
                            <span v-text="msg.name"></span>
                        </div>
                        <div>
                            <span>职务</span>
                            <span v-text="msg.position"></span>
                        </div>
                        <div>
                            <span>电话</span>
                            <span v-text="msg.phone"></span>
                        </div>
                        <div>
                            <span>邮件</span>
                            <span v-text="msg.email"></span>
                        </div>
                    </div>
                    <div class="time"><span v-text="'@' + item.mark_people"></span>于 <span v-text="item.add_time"></span> 标记</div>
                </div>
                <div class="footerBtn">
                    <button>15牛钻解锁俱乐部外部会员标记的数据</button>
                    <button>15牛钻解锁俱乐部内部会员标记的数据</button>
                </div>
            </div>
            <div class="return">
                <img @click="close" src="@/assets/Return.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ModalInfo',
  data () {
    return {
      show: false,
      type_num: null,
      dataList: []
    }
  },
  methods: {
    close: function () {
      this.show = false
    },
    on_display: function (data) {
      console.log(data.results)
      let _this = this
      _this.type_num = data.type_num
      if (data.type_num === 2) {
        data.results.map(function (p1, p2) {
          p1.contact_list = JSON.parse(p1.contact_list)
        })
      }
      _this.dataList = data.results
      this.show = true
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ModalInfo{
    position: fixed;
    width:100%;
    height:100%;
    background:rgba(16, 16, 16, .3);
    display: flex;
}
.content{
    align-self: center;
    width:calc(92% - 1rem);
    padding:0 .5rem;
    background:#fff;
    border-radius:.25rem;
    margin:  0 auto;
    max-height: 23rem;
}
.title{
    line-height: 2.5rem;
    font-size: .7rem;
}
.contDiv{
    max-height: 16.25rem;
    background:rgba(170, 170, 170, 0.1);
    overflow: auto;
    text-align: left;
}
.list{
    font-size: .7rem;
    line-height: 1rem;
    padding:.5rem .75rem;
}
.list>div>span:last-child{
    float: right;
    color:rgba(255, 152, 0, 1);
}
.time{
    font-size: .6rem;
    background: #fff;
    line-height: 1.5rem;
    padding:0 .75rem;
}
.time>span{
    color:rgba(255, 152, 0, 1);
}
.return{
    width:2.25rem;
    height:2.25rem;
    background:#fff;
    margin:1rem auto;
}
.return>img{
    width:2.25rem;
    height:2.25rem;
}
.footerBtn{
    background:#fff;
    text-align: center;
    padding:.25rem 0;
}
.footerBtn>button{
    width:90%;
    margin:0 auto;
    height:1.5rem;
    font-size: .6rem;
    border-radius: .25rem;
    background:#fff;
    border:1px solid rgba(255, 152, 0, 1);
    color:rgba(255, 152, 0, 1);
}
.footerBtn>button::after{
    border:0;
}
</style>
