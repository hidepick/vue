<template>
  <div class="lotto">
  <HeaderCommon/>
  <RspMain/>
  <FooterCommon/>
</div>
</template>

<script>
import HeaderCommon from '../components/common/HeaderCommon.vue'
import RspMain from '@/components/rsp/RspMain.vue'
import FooterCommon from '../components/common/FooterCommon.vue'
export default {
  name: 'LottoMainView',
  components: {
    HeaderCommon,
    FooterCommon,
    RspMain,
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
