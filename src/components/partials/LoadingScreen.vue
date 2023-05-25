<template>
  <div class="loading-screen">
      <img class="loading-img" src="../../assets/loader.png" alt="Loader">
      <div class="loading-line"></div>
  </div>
</template>
  
<style>

  .loading-screen {
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 1);
  }

  .loading-img {
    position: absolute;
    top: calc(50% - 120px);
    left: 50%;
    transform: translateX(-50%);
  }
  
  .loading-line {
    position: absolute;
    top: 50%;
    left: 40%;
    height: 10px;
    background-color: #eb3846;
    animation: load 3s linear;
  }
  
  @keyframes load {
    0% {
        width: 0;
    }
    100% {
        width: 300px;
    }
  }
</style>
  