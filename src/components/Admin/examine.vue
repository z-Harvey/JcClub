<template>
  <div class="examine">
      <div class="navBtn">
            <nav>
                <div>全部</div>
                <div>入会审核</div>
                <div>权限审核</div>
            </nav>
            <div class="navLit">
                <div class="check">待审核</div>
                <div>已审核</div>
            </div>
      </div>
      <ToBeAudited/>
  </div>
</template>

<script>
import ToBeAudited from '@/components/Admin/ToBeAudited'

export default {
  name: 'examine',
  data () {
    return {
    }
  },
  components: {
    ToBeAudited
  },
  methods: {

  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navBtn{
    padding:0 .75rem;
    position: fixed;
    width:calc(100% - 1.5rem);
    height:4.2rem;
    background: #fff;
}
nav{
    padding-top:.5rem;
    text-align: left;
}
nav>div{
    padding:0 .8rem;
    display: inline-block;
    font-size: .6rem;
    border-radius: 1.5rem;
    height:1.25rem;
    line-height: 1.25rem;
    background: rgba(170, 170, 170, 0.1);
    color:#888;
    margin-right:.75rem;
}
.navLit{
    font-size: .7rem;
    text-align: left;
}
.navLit>div{
    display: inline-block;
    margin: .8rem 1.5rem 0 0;
    color:#888;
}
.navLit>.check{
    color:#101010;
    border-bottom: .15rem solid rgba(255, 152, 0, 1)
}
</style>
