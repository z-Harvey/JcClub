<template>
    <div class="CuInfo" v-if="show">
        <h1 v-if="type == 'undefind'||type == ''" v-text="type"></h1>
        <div v-if="type === 'cardInfo'" class="contBox">
            <div class="contTitle">
                <div>当前工作情况</div>
                <div></div>
            </div>
            <div class="contcon">
                <div>
                    <div>公司</div>
                    <div>北京聚牛天下网络科技有限公司</div>
                </div>
                <div>
                    <div>职位</div>
                    <div>CEO</div>
                </div>
                <div>
                    <div>工作年限</div>
                    <div>17年</div>
                </div>
                <div>
                    <div>销售年限</div>
                    <div>10年</div>
                </div>
                <div>
                    <div>行业年限</div>
                    <div>5年</div>
                </div>
            </div>
        </div>
        <div v-if="type === 'cardInfo'" class="contBox">
            <div class="contTitle">
                <div>销售产品</div>
                <div></div>
            </div>
            <div class="contcons">
                <div>
                    <div>此处显示产品名称</div>
                    <div></div>
                </div>
                <div>
                    <div>此处显示产品名称</div>
                    <div></div>
                </div>
                <div>
                    <div>此处显示产品名称</div>
                    <div></div>
                </div>
                <div>
                    <div>此处显示产品名称</div>
                    <div></div>
                </div>
            </div>
        </div>
        <div v-if="type === 'cardInfo'" class="contBox">
            <div class="contTitle">
                <div>开发客户的对接部门</div>
                <div></div>
            </div>
            <div class="contcons">
                <div>
                    <div>此处显示部门名称</div>
                    <div></div>
                </div>
                <div>
                    <div>此处显示部门名称</div>
                    <div></div>
                </div>
            </div>
        </div>
        <div v-if="type === 'cardInfo'" class="contBox">
            <div class="contTitle">
                <div>擅长领域</div>
                <div></div>
            </div>
            <div class="contcons">
                <div>
                    <div>此处显示领域名称</div>
                    <div></div>
                </div>
                <div>
                    <div>此处显示领域名称</div>
                    <div></div>
                </div>
            </div>
        </div>
        <div v-if="type === 'cardInfo'" class="contBox">
            <div class="contTitle">
                <div>销售荣誉</div>
                <div></div>
            </div>
            <div class="contcons">
                <div>
                    <div>此处显示荣誉名称</div>
                    <div>
                      <img src="@/assets/tupian.png" alt="">
                    </div>
                </div>
                <div>
                    <div>此处显示荣誉名称</div>
                    <div></div>
                </div>
                <div>
                    <div>此处显示荣誉名称</div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CuInfo',
  data () {
    return {
      tapBur: true
    }
  },
  methods: {
  },
  mounted (options) {
    console.log(this.type)
    document.title = '酷牛仔'
  },
  props: ['type', 'show']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contBox{
    width:92%;
    border-radius: .25rem;
    background:#fff;
    margin: 0 auto .5rem;
}
.contTitle{
    padding:.65rem .5rem;
    height:.7rem;
    font-size: .7rem;
    line-height: .7rem;
}
.contTitle>div:first-child{
    color:#101010;
    float: left;
    font-weight: 600;
}
.contTitle>div:last-child{
    color:#888;
    float: right;
}
.contcon{
    border-radius: .25rem;
    border-top: 1px solid #f7f7f7;
    font-size: .7rem;
    padding:.25rem 0;
}
.contcon>div{
    padding:.25rem .5rem;
    height:.7rem;
    font-size: .7rem;
    line-height: .7rem;
}
.contcon>div>div:first-child{
    color:#101010;
    float: left;
}
.contcon>div>div:last-child{
    color:rgba(255, 152, 0, 1);
    float: right;
}
.contFooter{
    border-radius: .25rem;
    border-top: 1px solid #f7f7f7;
    font-size: .6rem;
    padding:.75rem .5rem .9rem;
    text-align: left;
}
.contFooter>span{
    color:rgba(255, 152, 0, 1);
}
.contcons{
    border-radius: .25rem;
    border-top: 1px solid #f7f7f7;
    font-size: .7rem;
    padding:.25rem 0;
}
.contcons>div{
    padding:.25rem .5rem;
    height:.7rem;
    font-size: .7rem;
    line-height: .7rem;
}
.contcons>div>div:first-child{
    color:rgba(255, 152, 0, 1);
    float: left;
}
.contcons>div>div:last-child{
    float: right;
}
.contcons>div>div{
  display: flex;
}
.contcons>div>div>img{
    width:.7rem;
    height:.7rem;
    align-self: center;
}
</style>
