<template>
    <div class="smooth-scroll" ref="scrollContainer" :style="scrollStyle" @wheel="handleScroll">
    </div>
</template>
  
<script>

export default {
    data() {
    return {
      scrollSpeed: 0.5,
      scrollContainer: null,
      scrollY: 0
    };
  },
  computed: {
    scrollStyle() {
      return {
        transform: `translateY(-${this.scrollY}px)`
      };
    }
  },
  mounted() {
    this.scrollContainer = this.$refs.scrollContainer;
  },
  methods: {
    handleScroll(event) {
      event.preventDefault();

      const deltaY = event.deltaY;

      const scrollAmount = deltaY * this.scrollSpeed;

      this.scrollY -= scrollAmount;

      const maxScrollHeight = this.scrollContainer.scrollHeight - this.scrollContainer.clientHeight;
      this.scrollY = Math.max(0, Math.min(this.scrollY, maxScrollHeight));
    }
  }
};

</script>
  
<style>

.smooth-scroll {
    overflow: hidden;
}

</style>