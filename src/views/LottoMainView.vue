<template>
  <div class="lotto">
  <HeaderCommon/>
  <LottoMain/>
  <FooterCommon/>
</div>
</template>

<script>
import HeaderCommon from '../components/common/HeaderCommon.vue'
import FooterCommon from '../components/common/FooterCommon.vue'
import LottoMain from '../components/lotto/LottoMain.vue'
export default {
  name: 'LottoMainView',
  components: {
    HeaderCommon,
    FooterCommon,
    LottoMain
  }
}
</script>

<style scoped>
.lotto{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
