<script setup>

import HeadComponent from '../components/HeadComponent.vue';
import LeftComponent from "../components/LeftComponent.vue";
import RightComponent from "../components/RightComponent.vue";
</script>
<template>
  <div class="w-[100%] h-[100vh] flex justify-center items-center">
    <div class="bg-orange-100 p-10 space-y-7 drop-shadow-2xl rounded-md">
      <div class="text-2xl text-gray-500 font-bold border-b-green-500 border-b-2 p-2">
        我的任务清单
      </div>
      <HeadComponent></HeadComponent>
      <div class="flex space-x-3">
        <LeftComponent></LeftComponent>
        <RightComponent></RightComponent>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>