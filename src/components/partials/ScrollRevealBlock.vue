<template>
    <div ref="block" class="scroll-reveal-block">
      <eComerce></eComerce>
    </div>
  </template>
  
  <script>
  import ScrollReveal from 'scrollreveal';
  import eComerce from '../eComerce.vue';
  

  export default {
    components: {
        eComerce
    },
    directives: {
      ScrollReveal: ScrollReveal(),
    },
    mounted() {
    const scrollReveal = ScrollReveal.default();
      scrollReveal.reveal(this.$refs.block, {
        delay: 200, // Затримка перед появою блоку
        distance: '50px', // Відстань на яку блок буде зсуватись
        duration: 1000, // Тривалість анімації появи блоку
        origin: 'bottom', // Відкуда починається анімація
        easing: 'ease-out', // Функція згладжування анімації
      });
    }
  };
  </script>
  
  <style>
  .scroll-reveal-block {
    opacity: 0;
  }
  </style>
  