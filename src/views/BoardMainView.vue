<template>

  <div class="lotto">
    <header-common></header-common>
      <board-setup-main></board-setup-main>
    <FooterCommon></FooterCommon>
  </div>

</template>

<script>
import HeaderCommon from '../components/common/HeaderCommon.vue';
import FooterCommon from '../components/common/FooterCommon.vue';
import BoardSetupMain from '../components/board/BoardSetupMain.vue';



export default {
  name: 'BoardMainView',
  components: {
    HeaderCommon,
    FooterCommon,
    BoardSetupMain 
  }
}
</script>

<style scoped>
.lotto {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>