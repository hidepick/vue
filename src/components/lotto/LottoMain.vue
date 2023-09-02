<template>
  <div class="container">
    <div class="row mt-sm-5">
      <lotto-ball v-for="num in lottoSet" :key="num" :lottoNum="num"></lotto-ball>
    </div>
  </div>

</template>

<script>
import LottoBall from './LottoBall.vue'

export default {
  name: 'LottoMain',
  components:{
    LottoBall
  },
  data() {
    return {
      lottoSet : new Set()
    }
  },
  created(){
    console.log(typeof this.lottoSet)
    while (this.lottoSet.size != 6) {
      const lottoNum = Math.ceil(Math.random() * 45 + 1)
      this.lottoSet.add(lottoNum)
    }

    for (let temp of this.lottoSet) {
      console.log(temp)
    }
  },

}

</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
