<template>
  <HeaderSection></HeaderSection>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'

export default {
  name: 'App',
  components: {
    HeaderSection
  }
}
</script>

<style lang="scss">

body {
  background-color: #1b1b1b;
  color: #fff;
  margin: 0;
  word-spacing: 1px;
  line-height: 1.5;
  font-family: "VisueltPro",sans-serif;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 15px;
}

.color-white {
  color: #fff;
}

.color-red {
  color: #eb3846
}

</style>
