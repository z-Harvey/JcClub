<template>
    <div class="buOppoNew">
        <div class="areaBox">
            <div class="tit">
                <span>商机描述<span class="redSp">*</span></span>
            </div>
            <div class="inpCont">
                <textarea v-model="obj.desc" maxlength="300"></textarea>
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
                        <div @click="path(0)" v-text="obj.customer || '选择客户'"></div>
                    </div>
                </div>
                <div class="inp">
                    <div class="inpLef">客户行业<span class="redSp">*</span></div>
                    <div class="inpRig">
                        <div @click="linkClick('hangye')" v-text="obj.industry || '选择客户行业'"></div>
                    </div>
                </div>
                <div class="inp">
                    <div class="inpLef">企业类型</div>
                    <div class="inpRig">
                        <div @click="linkClick('type')" v-text="obj.type || '选择企业类型'"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="btnList">
            <div class="tit">
                <span>相关产品<span class="redSp">*</span></span><span class="titRig">至少一个</span>
            </div>
            <div class="inpForListBox">
                <input type="text" v-for="(item, index) in obj.product" :key="index" @blur="blurs($event)" v-model="item.key" placeholder="请输入产品名称">
                <div class="inpForimgBox">
                    <img @click="plus" src="@/assets/plus.png" alt="">
                </div>
            </div>
        </div>
        <div class="btnList" v-if="!que.id">
            <div class="tit">
                <span>有效期<span class="redSp">*</span></span>
            </div>
            <div class="btnListBox">
                <div @click="btnList(1)" :class="obj.term === 1? 'navCli': ''">1天</div>
                <div @click="btnList(2)" :class="obj.term === 2? 'navCli': ''">2天</div>
                <div @click="btnList(3)" :class="obj.term === 3? 'navCli': ''">3天</div>
                <div @click="btnList(4)" :class="obj.term === 4? 'navCli': ''">4天</div>
            </div>
        </div>
        <div style="height:2.5rem;"></div>
        <div class="subBtn">
            <button v-if="noSubs" @click="subMit">发布</button>
            <button v-else class="noSub" disabled>发布</button>
        </div>
        <linkage ref="linkage"/>
        <search ref="search" @ok="cllSrceach"/>
        <Check ref="check" @ok="checkCall"/>
        <Toast ref="Toast"/>
    </div>
</template>

<script>
import search from '@/components/Logon_process/srceach'

export default {
  name: 'buOppoNew',
  data () {
    return {
      nickName: null,
      noSubs: true,
      obj: {
        desc: null, // 商机描述 str
        customer: null, // 客户名称 str
        industry: null, // 行业 str
        product: [{key: ''}], // 销售产品 arr.obj
        type: null, // 类型 str
        // department: null, // 对接部门 str
        term: 1 // 天数  int
      },
      que: {}
    }
  },
  components: {
    search
  },
  methods: {
    blurs (e) {
      document.documentElement.scrollTop = document.documentElement.scrollTop
      document.body.scrollTop = document.body.scrollTop
    },
    checkCall (res) {
      this.obj.type = res
    },
    path (num) {
      switch (num) {
        case 0:
          this.$refs.search.on_display()
          break
      }
    },
    cllSrceach (res) {
      this.obj.customer = res.name
    },
    linkClick: function (typ) {
      let _this = this
      if (typ === 'hangye') {
        _this.$refs.linkage.on_display({
          type: 'Cust',
          Choice: 'n',
          success (res) {
            _this.obj.industry = res.name
          }
        })
      } else if (typ === 'type') {
        _this.$refs.check.on_display({type: 2, Pattern: 1})
      }
    },
    plus () {
      let obj = {
        key: ''
      }
      this.obj.product.push(obj)
    },
    btnList (num) {
      this.obj.term = num
    },
    subMit () {
      let _this = this
      let arrStr = []
      _this.obj.product.map((p1) => {
        arrStr.push(p1.key)
      })
      if (_this.obj.desc === null || _this.obj.desc === '') {
        let obj = {
          Title: '提示',
          Content: '请填写商机描述',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
      } else if (_this.obj.industry === null || _this.obj.industry === '') {
        let obj = {
          Title: '提示',
          Content: '请选择客户行业',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
      } else if (arrStr.join('') === '') {
        let obj = {
          Title: '提示',
          Content: '至少一个相关产品',
          type: 1,
          btn: 0
        }
        this.$refs.Toast.on_display(obj)
      } else if (this.que.id) {
        let obj = {
          Title: '提示',
          Content: '是否确认发布商机？',
          type: 1,
          btn: 2,
          success () {
            let datas = JSON.parse(JSON.stringify(_this.obj))
            datas.product = JSON.stringify(datas.product)
            _this.api.putBusinessOpportunity(_this.que.id, datas, (res) => {
              if (res.status === 200) {
                _this.$router.go(-1)
              }
            }, (err) => {
              _this.errMotl(err)
            })
          }
        }
        this.$refs.Toast.on_display(obj)
      } else {
        let obj = {
          Title: '提示',
          Content: '是否确认发布商机？',
          type: 1,
          btn: 2,
          success () {
            let data = JSON.parse(JSON.stringify(_this.obj))
            data.product = JSON.stringify(data.product)
            _this.api.postBusinessOpportunity(data, (res) => {
              if (res.status === 201) {
                _this.noSubs = false
                let obj = {
                  Title: '提示',
                  Content: '发布成功',
                  No: '3S后自动调转到‘我的商机’哦...',
                  type: 1,
                  btn: 0
                }
                _this.$refs.Toast.on_display(obj)
                setTimeout(() => {
                  _this.$router.push({
                    path: '/cardInfo',
                    query: {
                      source: 'my',
                      user_id: _this.Global.userInfo.myId,
                      typ: 1
                    }
                  })
                }, 3000)
              }
            }, (err) => {
              _this.errMotl(err)
            })
          }
        }
        this.$refs.Toast.on_display(obj)
      }
    },
    editInit () {
      this.api.getBusinessOpportunity(this.que.id, (res) => {
        res.data.product = JSON.parse(res.data.product)
        this.obj = res.data
      }, (err) => {
        this.errMotl(err)
      })
    },
    errMotl (errData) {
      let errStr = ''
      let tit = this.Global.HTTPStatusCode[errData.status]
      for (let i in errData.data) {
        errStr += i + ' : '
        errStr += errData.data[i]
      }
      let obj = {
        Title: tit,
        Content: errStr || '无错误内容提示',
        type: 1,
        btn: 0
      }
      this.$refs.Toast.on_display(obj)
    }
  },
  mounted () {
    document.title = '新增商机'
    this.que = this.$route.query
    if (this.que.id) {
      this.editInit()
    }
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
.titRig{
    float: right;
    font-weight: 400;
}
.inpForListBox>input{
    width:calc(100% - 1rem);
    padding: 0 .5rem;
    height:1.5rem;
    border:0;
}
.inpForListBox>input::after{
    border:none;
}
.inpForimgBox>img{
    width:1.2rem;
    height:1.2rem;
    margin:.9rem 0 0 .5rem;
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
    background:#f1f1f1;
    text-align: center;
    font-size: .7rem;
    line-height: 1.5rem;
    color:#101010;
}
.btnListBox>.navCli{
    background: rgba(255, 152, 0, 1);
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
    font-size: .7rem;
}
.subBtn>button::after{
    border:none;
}
.subBtn>.noSub{
    background:#ccc;
    color:#fff;
}
</style>
