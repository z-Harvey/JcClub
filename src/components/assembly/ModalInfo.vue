<template>
    <div class="ModalInfo" v-if="show">
        <div class="content">
            <div class="title">基本信息</div>
            <div class="contDiv">
                <div class="for">
                    <div class="list">
                        <div>
                            <span>行业</span>
                            <span>人力资源</span>
                        </div>
                        <div>
                            <span>行业</span>
                            <span>人力资源</span>
                        </div>
                        <div>
                            <span>行业</span>
                            <span>人力资源</span>
                        </div>
                        <div>
                            <span>行业</span>
                            <span>人力资源</span>
                        </div>
                        <div>
                            <span>行业</span>
                            <span>人力资源</span>
                        </div>
                    </div>
                    <div class="time"><span>@xxxxx</span>于yyyy/mm/dd标记</div>
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
      show: true
    }
  },
  methods: {
    close: function () {
      this.show = false
    },
    on_display: function (data) {
      console.log(data)
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
</style>
