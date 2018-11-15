<template>
  <div class="memberJournal">
      <div class="forBox">
          <div>
              <div>操作人员</div>
              <div>李晓沫</div>
          </div>
          <div>
              <div>时间</div>
              <div>yyyy/mm/dd hh:mm</div>
          </div>
          <div>
              <div>操作</div>
              <div>申请入会</div>
          </div>
          <div>
              <div>备注信息</div>
              <div>此处显示备注信息</div>
          </div>
      </div><div class="forBox">
          <div>
              <div>操作人员</div>
              <div>李晓沫</div>
          </div>
          <div>
              <div>时间</div>
              <div>yyyy/mm/dd hh:mm</div>
          </div>
          <div>
              <div>操作</div>
              <div>申请入会</div>
          </div>
          <div>
              <div>备注信息</div>
              <div>此处显示备注信息</div>
          </div>
      </div><div class="forBox">
          <div>
              <div>操作人员</div>
              <div>李晓沫</div>
          </div>
          <div>
              <div>时间</div>
              <div>yyyy/mm/dd hh:mm</div>
          </div>
          <div>
              <div>操作</div>
              <div>申请入会</div>
          </div>
          <div>
              <div>备注信息</div>
              <div>此处显示备注信息</div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'memberJournal',
  components: {
  },
  data () {
    return {

    }
  },
  methods: {

  },
  mounted () {
    document.title = '会员日志'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.memberJournal{
    width:100%;
    height:100%;
    position: fixed;
    top:0rem;
    left: 0rem;
    overflow: auto;
    background:rgba(249, 249, 249, 1);
}
.forBox{
    width:calc(92% - 1rem);
    padding: .5rem;
    border-radius: .25rem;
    font-size: .7rem;
    line-height: 1rem;
    text-align: left;
    margin:.5rem auto 0;
    background:#fff;
}
.forBox>div>div:first-child{
    color:#101010;
    float: left;
}
.forBox>div>div:last-child{
    text-align: right;
    color:#888;
}
</style>
