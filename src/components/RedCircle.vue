<template>
    <div
      class="red-circle"
      :class="{ 'hovered': isHovered }"
      :style="{ top: y + 'px', left: x + 'px' }"
      @mousemove="handleMouseMove"
    ></div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        x: 0,
        y: 0,
        isHovered: false
      };
    },
    mounted() {
      document.addEventListener('mousemove', this.moveCircle);
    },
    beforeUnmount() {
      document.removeEventListener('mousemove', this.moveCircle);
    },
    methods: {
      moveCircle(event) {
        this.x = event.clientX - 15;
        this.y = event.clientY - 15;
      }
    }
  };
  </script>
  
  <style>
  .red-circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #eb3846;
    position: absolute;
    pointer-events: none;
    transition: 0.5s ease;
    z-index: 1000;
  }
  </style>
  