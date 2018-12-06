// 筛选
<template>
  <div class="sort" v-if="show" :style="styles" @click="close">
    <div class="Screening" @click.stop="f1($event)">
        <div class="s1" v-if="msg.type === 100">
            <div class="s1-tit">客户关系</div>
            <div class="s1-btnbox">
                <div :class="s1Arr1[0]? 'xz': ''" @click="s1arr1s(0)">有过合作</div>
                <div :class="s1Arr1[1]? 'xz': ''" @click="s1arr1s(1)">正在合作</div>
                <div :class="s1Arr1[2]? 'xz': ''" @click="s1arr1s(2)">有过跟进</div>
                <div :class="s1Arr1[3]? 'xz': ''" @click="s1arr1s(3)">正在跟进</div>
            </div>
            <div class="s1-tit">决策链线索</div>
            <div class="s1-btnbox">
                <div :class="s1Arr2[0]? 'xz': ''" @click="s1Arr2s(0)">有</div>
                <div :class="s1Arr2[1]? 'xz': ''" @click="s1Arr2s(1)">无</div>
            </div>
            <div class="s1-btnlist">
                <button class="cz" @click="typ100cz">重置</button>
                <button class="qd" @click="typ100qd">确定</button>
            </div>
        </div>
        <div class="s2" v-if="msg.type === 2">
            <div @click="s2Clik(0)">
                <p>默认排序</p>
                <img v-if="s2[0]" src="@/assets/yes.png" alt="">
            </div>
            <div @click="s2Clik(1)">
                <p>按工作经验由多到少</p>
                <img v-if="s2[1]" src="@/assets/yes.png" alt="">
            </div>
            <div @click="s2Clik(2)">
                <p>按销售年限由多到少</p>
                <img v-if="s2[2]" src="@/assets/yes.png" alt="">
            </div>
            <div @click="s2Clik(3)">
                <p>按行业年限由多到少</p>
                <img v-if="s2[3]" src="@/assets/yes.png" alt="">
            </div>
            <div @click="s2Clik(4)">
                <p>按客户数量由多到少</p>
                <img v-if="s2[4]" src="@/assets/yes.png" alt="">
            </div>
        </div>
        <div class="s2" v-if="msg.type === 21">
            <div @click="s2Clik(0)">
                <p>全部</p>
                <img v-if="s2[0]" src="@/assets/yes.png" alt="">
            </div>
            <div @click="s2Clik(1)">
                <p>仅看我关注的会员跟进的</p>
                <img v-if="s2[1]" src="@/assets/yes.png" alt="">
            </div>
            <!-- <div @click="s2Clik(2)">
                <p>仅看本俱乐部的会员跟进的</p>
                <img v-if="s2[2]" src="@/assets/yes.png" alt="">
            </div> -->
        </div>
        <div class="s2" v-if="msg.type === 22">
            <div @click="s2Cliks(0)">
                <p>默认排序</p>
                <img v-if="s22[0]" src="@/assets/yes.png" alt="">
            </div>
            <div @click="s2Cliks(1)">
                <p>标记人数从多到少</p>
                <img v-if="s22[1]" src="@/assets/yes.png" alt="">
            </div>
            <div @click="s2Cliks(2)">
                <p>标记人数从少到多</p>
                <img v-if="s22[2]" src="@/assets/yes.png" alt="">
            </div>
        </div>
        <div class="s2" v-if="msg.type === 23">
            <div @click="s2Cliks(0)">
                <p>按标记时间从早到晚</p>
                <img v-if="s22[0]" src="@/assets/yes.png" alt="">
            </div>
            <div @click="s2Cliks(1)">
                <p>按标记时间从晚到早</p>
                <img v-if="s22[1]" src="@/assets/yes.png" alt="">
            </div>
        </div>
        <!-- <div class="s3" v-if="msg.type === 3" @touchmove.prevent="f1"> -->
        <div class="s3" v-if="msg.type === 3">
            <div>
                <div>
                    <div @click="type3Call(qb)">
                        <p>全部</p>
                        <img v-if="qb.show" src="@/assets/yes.png" alt="">
                    </div>
                    <div v-for="(item, index) in s1List1" :key="index" @click="type3Init(item)">
                        <p v-text="item.name"></p>
                        <img v-if="item.show" src="@/assets/yes.png" alt="">
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div v-for="(item, index) in s1List2" :key="index" @click="type3Call(item)">
                        <p v-text="item.name"></p>
                        <img v-if="item.show" src="@/assets/yes.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="s3" v-if="msg.type === 31">
            <div>
                <div>
                    <div @click="type3Call(qb)">
                        <p>全部</p>
                        <img v-if="qb.show" src="@/assets/yes.png" alt="">
                    </div>
                    <div v-for="(item, index) in s1List1" :key="index" @click="type31Init(item)">
                        <p v-text="item.name"></p>
                        <img v-if="item.show" src="@/assets/yes.png" alt="">
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div v-for="(item, index) in s1List2" :key="index" @click="type3Call(item)">
                        <p v-text="item.name"></p>
                        <img v-if="item.show" src="@/assets/yes.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="s3" v-if="msg.type === 32">
            <div>
                <div>
                    <div @click="type3Call(qb)">
                        <p>全部</p>
                        <img v-if="qb.show" src="@/assets/yes.png" alt="">
                    </div>
                    <div v-for="(item, index) in s1List1" :key="index" @click="type32Init(item)">
                        <p v-text="item.name"></p>
                        <img v-if="item.show" src="@/assets/yes.png" alt="">
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div v-for="(item, index) in s1List2" :key="index" @click="type3Call(item)">
                        <p v-text="item.name"></p>
                        <img v-if="item.show" src="@/assets/yes.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="s3" v-if="msg.type === 33">
            <div>
                <div>
                    <div @click="type3Call(qb)">
                        <p>全部</p>
                        <img v-if="qb.show" src="@/assets/yes.png" alt="">
                    </div>
                    <div v-for="(item, index) in s1List1" :key="index" @click="type33Init(item)">
                        <p v-text="item.name"></p>
                        <img v-if="item.show" src="@/assets/yes.png" alt="">
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div v-for="(item, index) in s1List2" :key="index" @click="type3Call(item)">
                        <p v-text="item.name"></p>
                        <img v-if="item.show" src="@/assets/yes.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sort',
  data () {
    return {
      s1Arr1: [false, false, false, false],
      s1Arr2: [false, false],
      msg: {
        type: null
      },
      s2: [true, false, false, false, false],
      s22: [true, false, false],
      s1List1: [],
      s1List2: [],
      show: false,
      qb: {
        name: '',
        id: '00',
        show: false
      }
    }
  },
  methods: {
    f1 (e) {
    },
    typ100cz () {
      this.s1Arr1 = [false, false, false, false]
      this.s1Arr2 = [false, false]
      this.msg.success('', '')
      this.close()
    },
    typ100qd () {
      let a
      let b
      for (let i = 0; i < this.s1Arr1.length; i++) {
        if (this.s1Arr1[i]) {
          a = i
          break
        } else {
          a = ''
        }
      }
      for (let i = 0; i < this.s1Arr2.length; i++) {
        if (this.s1Arr2[i]) {
          b = i
          break
        } else {
          b = ''
        }
      }
      this.msg.success(a, b)
      this.close()
    },
    close () {
      this.show = false
      this.msg.fail()
    },
    s1arr1s (num) {
      let arr = [false, false, false, false]
      if (num === 1) {
        if (this.s1Arr2[1]) {
          this.s1Arr2 = [true, false]
        }
      }
      arr[num] = !this.s1Arr1[num]
      this.s1Arr1 = arr
    },
    s1Arr2s (num) {
      let arr = [false, false]
      if (num === 1) {
        if (this.s1Arr1[1]) {
          return
        }
      }
      arr[num] = !this.s1Arr2[num]
      this.s1Arr2 = arr
    },
    on_display (obj) {
      this.msg = obj
      this.show = true
      if (obj.type === 3) {
        this.type3Init()
      } else if (obj.type === 31) {
        this.type31Init()
      } else if (obj.type === 32) {
        this.type32Init()
      } else if (obj.type === 33) {
        this.type33Init()
      }
    },
    s2Clik (num) {
      let arr = [false, false, false, false, false]
      arr[num] = !this.s2[num]
      if (!arr[num]) {
        arr[0] = true
      }
      this.s2 = arr
      this.msg.success(num)
      this.close()
    },
    s2Cliks (num) {
      let arr = [false, false, false]
      arr[num] = !this.s2[num]
      if (!arr[num]) {
        arr[0] = true
      }
      this.s22 = arr
      this.msg.success(num)
      this.close()
    },
    type3Init (item) {
      let str = ''
      this.s1List2 = []
      this.qb.show = false
      if (item) {
        this.s1List1.map((p1, p2) => {
          p1['show'] = false
        })
        item.show = true
        str = 'pid=' + item.id
      } else {
        str = 'pid=0'
      }
      this.api.getCustomerIndustry(str, (res) => {
        res.data.map((p1, p2) => {
          p1['show'] = false
        })
        if (item) {
          this.s1List2 = res.data
          return
        }
        this.s1List1 = res.data
      }, (err) => {
        console.log(err)
      })
    },
    type32Init (item) {
      let str = ''
      this.s1List2 = []
      this.qb.show = false
      if (item) {
        this.s1List1.map((p1, p2) => {
          p1['show'] = false
        })
        item.show = true
        str = 'pid=' + item.id
      } else {
        str = 'pid=0'
      }
      this.api.getSearchIndustry(str, (res) => {
        res.data.map((p1, p2) => {
          p1['show'] = false
        })
        if (item) {
          this.s1List2 = res.data
          return
        }
        this.s1List1 = res.data
      }, (err) => {
        console.log(err)
      })
    },
    type33Init (item) {
      this.qb.show = false
      if (item) {
        this.s1List1.map((p1, p2) => {
          p1['show'] = false
        })
        item.show = true
        console.log(item)
        return
      }
      let obj = [
        {
          id: 0,
          name: '有过合作',
          show: false
        },
        {
          id: 1,
          name: '正在合作',
          show: false
        },
        {
          id: 2,
          name: '有过跟进',
          show: false
        },
        {
          id: 3,
          name: '正在跟进',
          show: false
        }
      ]
      let obj1 = [
        {
          id: 0,
          name: '有决策链线索',
          show: false
        },
        {
          id: 1,
          name: '无决策链线索',
          show: false
        }
      ]
      this.s1List1 = obj
      this.s1List2 = obj1
    },
    type31Init (item) {
      let str = ''
      this.s1List2 = []
      this.qb.show = false
      if (item) {
        this.s1List1.map((p1, p2) => {
          p1['show'] = false
        })
        item.show = true
        str = 'pid=' + item.id
      } else {
        str = 'pid=0'
      }
      this.api.getAreaList(str, (res) => {
        res.data.map((p1, p2) => {
          p1['show'] = false
        })
        if (item) {
          this.s1List2 = res.data
          return
        }
        this.s1List1 = res.data
      }, (err) => {
        console.log(err)
      })
    },
    type3Call (item) {
      item.show = true
      this.s1List2 = []
      this.msg.success(item.name)
      this.close()
    }
  },
  mounted () {
  },
  props: ['styles']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sort{
    position: fixed;
    width:100%;
    height:100%;
    background: rgba(0,0,0,0);
    background:rgba(0,0,0,.2);
}
.Screening{
    position: fixed;
    left:0;
    width:100%;
}
.s1{
    background:#fff;
    padding:.5rem .75rem;
}
.s1-tit{
    font-size: .7rem;
    line-height: 2rem;
}
.s1-btnbox>div{
    padding:.25rem .4rem;
    font-size: .7rem;
    display: inline-block;
    background:rgba(241, 241, 241, 1);
    color:#101010;
    border-radius: .15rem;
    line-height: .7rem;
}
.s1-btnlist{
    padding:.5rem 0 0 0;
    border-top: 1px solid #ececed;
    margin-top:.5rem;
}
.s1-btnlist>button{
    border:0;
    border-radius: .2rem;
}
.s1-btnlist>button::after{
    border:0;
}
.cz{
    width:4rem;
    height:2rem;
    background:#bbb;
    color:#fff;
}
.qd{
    width:11.5rem;
    height:2rem;
    background:rgba(255, 152, 0, 1);
    color:#fff;
}
.s2{
    background:#fff;
    padding:.5rem .75rem;
    font-size: .7rem;
    text-align: left;
    line-height: 2rem;
}
.s2>div{
    position: relative;
}
.s2>div>img{
    width:.7rem;
    height:.7rem;
    position: absolute;
    top:.65rem;
    right:1rem;
}
.s3{
    background:#fff;
    display: flex;
    justify-content: space-around;
    font-size: .7rem;
    color:#2c2c2c;
    line-height: 1rem;
    padding:.5rem 0;
}
.s3>div{
    width:50%;
    max-height:9rem;
    overflow: auto;
}
.s3>div>div{
    position: relative;
}
.s3>div>div>div{
    position: relative;
    padding:.2rem 0;
}
.s3>div>div>div>img{
    width:.6rem;
    height:.6rem;
    position: absolute;
    right:.3rem;
    top:.15rem;
}
.s3>div>div>p{}
.s1-btnbox>.xz{
    background: rgba(255, 152, 0, 1);
    color:#fff;
}
</style>
