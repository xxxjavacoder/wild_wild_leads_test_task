<template>
    <div class="smooth-scroll" ref="scrollContainer" :style="scrollStyle" @wheel="handleScroll">
    </div>
</template>
  
<script>

export default {
    data() {
    return {
      scrollSpeed: 0.5, // Швидкість прокрутки. Значення від 0 до 1, де 1 - повна швидкість, 0.5 - половина швидкості
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

      // Здійснюємо прокрутку у протилежному напрямку
      this.scrollY -= scrollAmount;

      // Обмежуємо прокрутку до меж контейнера
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