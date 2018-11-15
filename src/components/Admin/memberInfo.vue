<template>
  <div class="memberInfo">
      <div class="userInfo">
          <div class="InfoTop">
              <div class="infoImg">
                  <img src="@/assets/touxiang.jpg" alt="">
              </div>
              <div class="infoText">
                  <div class="i1">
                      <img v-if="true" src="@/assets/man.png" alt="">
                      <img v-else src="@/assets/woman.png" alt="">
                      <span>李晓沫（bala）</span>
                      <div>互联网</div>
                  </div>
                  <div class="i2">北京酷牛仔俱乐部（已加入n天）</div>
                  <div class="i3">邀请者<span>@XXX</span></div>
              </div>
          </div>
          <div class="Infobom">
              <div>
                  <div>99</div>
                  <div>关注</div>
              </div>
              <div>
                  <div>99</div>
                  <div>粉丝</div>
              </div>
              <div>
                  <div>99</div>
                  <div>客户</div>
              </div>
          </div>
      </div>
      <div class="listBtn">
          <div>会员日志</div>
          <div>
              <span>已入会</span>
              <img src="@/assets/right.png" alt="">
          </div>
      </div>
      <div class="listBox">
          <div class="BoxTit">基本信息</div>
          <div>
              <div>姓名</div>
              <div>李晓沫</div>
          </div>
          <div>
              <div>年龄</div>
              <div>24</div>
          </div>
          <div>
              <div>学历</div>
              <div>本科</div>
          </div>
          <div>
              <div>所在地</div>
              <div>北京·昌平</div>
          </div>
      </div>
      <div class="listBox">
          <div class="BoxTit">联系方式</div>
          <div>
              <div>手机号</div>
              <div>166 6666 6666</div>
          </div>
          <div>
              <div>邮箱</div>
              <div>lqn@xiaoshouniu.cn</div>
          </div>
          <div>
              <div>微信号</div>
              <div>lixiaomo</div>
          </div>
      </div>
      <div class="listBox">
          <div class="BoxTit">当前工作情况</div>
          <div>
              <div>公司</div>
              <div>北京聚牛天下网络科技有限公司</div>
          </div>
          <div>
              <div>职位</div>
              <div>产品经理</div>
          </div>
          <div>
              <div>工作年限</div>
              <div>17年</div>
          </div>
          <div>
              <div>销售年限</div>
              <div>17年</div>
          </div>
          <div>
              <div>行业年限</div>
              <div>17年</div>
          </div>
      </div>
      <div class="listBoxs">
          <div class="BoxTit">销售产品</div>
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
      <div class="listBoxs">
          <div class="BoxTit">开发客户的对接部门</div>
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
      <div class="listBoxs">
          <div class="BoxTit">擅长领域</div>
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
      <div class="listBoxs">
          <div class="BoxTit">销售荣誉</div>
          <div>
              <div>此处显示产品名称</div>
              <div>
                  <img src="@/assets/choiceness.png" alt="">
              </div>
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
      <div class="listBox">
          <div class="BoxTit">会员分析</div>
          <div>
              <div>俱乐部内同行会员</div>
              <div>2人</div>
          </div>
          <div>
              <div>全部同行会员</div>
              <div>2人</div>
          </div>
          <div>
              <div>俱乐部内同公司会员</div>
              <div>2人</div>
          </div>
          <div>
              <div>全部同公司会员</div>
              <div>2人</div>
          </div>
      </div>
      <div style="height:2.5rem;"></div>
      <div class="btnList">
          <button class="ty">同意</button>
          <button class="jj">拒绝</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'memberInfo',
  data () {
    return {

    }
  },
  methods: {

  },
  mounted () {
    document.title = '会员信息'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.memberInfo{
    position: fixed;
    width:100%;
    height:100%;
    top:0;
    left: 0;
    background: #f9f9f9;
    overflow: auto;
}
.userInfo{
    width:calc(92% - 1rem);
    padding:.5rem;
    border-radius: .25rem;
    margin:.5rem auto;
    background:#fff;
    box-shadow: .2rem .2rem .5rem 0 rgba(202, 202, 207, 1)
}
.infoImg{
    width:2.5rem;
    height:2.5rem;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    float: left;
}
.infoImg>img{
    width:2.5rem;
    align-self: center;
}
.infoText{
    text-align: left;
    padding-left: 2.75rem;
    margin-bottom: .5rem;
}
.i1{
    font-size: .7rem;
    color:#101010;
}
.i1>img{
    width:.7rem;
    height:.7rem;
}
.i1>div{
    padding:.25rem .4rem;
    font-size: .5rem;
    line-height: .5rem;
    background: rgba(255, 152, 0, 1);
    float: right;
    border-radius: 2rem;
    color:#fff;
}
.i2{
    color:#101010;
    font-size: .6rem;
    margin:.15rem 0;
}
.i3{
    color:#888;
    font-size: .6rem;
}
.i3>span{
    color:rgba(255, 152, 0, 1);
}
.Infobom{
    display: flex;
    justify-content: space-around;
    font-size: .7rem;
    color:#101010;
}
.Infobom>div{
    width:33%;
    height:1.75rem;
    padding:.5rem 0 .75rem;
}
.Infobom>div>div:first-child{
    color:#FF9800;
}
.listBtn{
    padding:0 .5rem;
    width:calc(92% - 1rem);
    height:2.2rem;
    background:#fff;
    border-radius: .25rem;
    font-size: .7rem;
    margin:0 auto .5rem;
}
.listBtn>div:first-child{
    float: left;
    color:#101010;
    margin-left: .75rem;
}
.listBtn>div:last-child{
    color:#888;
    float: right;
    margin-right:.75rem;
}
.listBtn>div{
    line-height: 2.2rem;
    display: inline-block;
}
.listBtn>div>img{
    width:.7rem;
    height:.7rem;
    vertical-align: text-top;
}
.listBox{
    width:92%;
    margin:0 auto .5rem;
    border-radius: .25rem;
    background:#fff;
    color:#101010;
    font-size: .7rem;
    text-align: left;
    padding-bottom: .5rem;
}
.listBox>div{
    padding:0 .5rem;
    line-height: 1rem
}
.listBox>div>div:first-child{
    float: left;
}
.listBox>div>div:last-child{
    text-align: right;
    color:rgba(255, 152, 0, 1);
}
.listBox>.BoxTit{
    font-weight: 600;
    line-height: 2rem;
    border-bottom: 1px solid #f7f7f7;
}

.listBoxs{
    width:92%;
    margin:0 auto .5rem;
    border-radius: .25rem;
    background:#fff;
    font-size: .7rem;
    text-align: left;
    padding-bottom: .5rem;
}
.listBoxs>div{
    padding:0 .5rem;
    line-height: 1rem;
    height:1rem;
}
.listBoxs>div>div:first-child{
    color:rgba(255, 152, 0, 1);
    float: left;
}
.listBoxs>div>div:last-child{
    text-align: right;
    height:1rem;
    position: relative;
}
.listBoxs>.BoxTit{
    font-weight: 600;
    color:#101010;
    height:2rem;
    line-height: 2rem;
    border-bottom: 1px solid #f7f7f7;
}
.listBoxs>div>div{
    display: flex;
}
.listBoxs>div>div>img{
    width:.7rem;
    height:.7rem;
    align-self: center;
    vertical-align: text-top;
    position: absolute;
    right:0;
}
.btnList{
    width:calc(100% - 1.5rem);
    padding:0 .75rem;
    height:2.25rem;
    background:#fff;
    position: fixed;
    bottom: 0;
    left:0;
}
.btnList>button{
    width:5rem;
    height:1.75rem;
    border-radius: 1rem;
    font-size: .7rem;
    line-height: 1.75rem;
    margin-top:.25rem;
    border:0;
    margin-left: .5rem;
}
.btnList>.jj{
    background:rgba(241, 241, 241, 1);
    color:#2c2c2c;
    float: right;
}
.btnList>.ty{
    background:rgba(255, 152, 0, 1);
    color:#fff;
    float: right;
}
</style>
