<template>
  <div class="flex flex-col items-center hero-background">
    <!-- 背景图片 -->
    <!-- 顶部banner -->
    <div class="my-12 flex flex-col items-center">
      <h1 class="text-2xl font-bold text-primary-400 mb-4">七十二道笔触，三百年釉上春秋</h1>
      <span class="text-primary-400"
        >“从景德白胎到织金彩瓷，每一道金线都是时光的引脚，每一次窑变都是岭南的呼吸”</span
      >
    </div>
    <!-- 中部流程 -->
    <div class="grid grid-cols-7 gap-5 max-w-[1280px] mx-10">
      <div class="flex flex-col" v-for="showItem of showItems" :key="showItem.alt">
        <img class="mb-4" :src="showItem.src" :alt="showItem.alt" />
        <div
          class="bg-primary-200 text-white flex justify-center items-center text-sm md:text-md lg:text-lg font-bold py-1 px-2 md:px-3 lg:px-5 mx-auto"
        >
          {{ showItem.alt }}
        </div>
      </div>
    </div>
    <!-- 底部文本 -->
    <div class="mt-18 mb-5 flex flex-col items-center">
      <div class="text-xl font-bold text-white bg-primary mb-5 py-2.5 px-4">广彩历史长廊</div>
      <div class="flex flex-col items-center text-primary-400 gap-1">
        <span>当清代匠人的毛笔点染出第一朵岭南牡丹</span>
        <span>时光便为瓷器镀上包浆</span>
        <span>此刻，我们以数字针脚修补历史的经纬，邀您共织广彩记忆</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ImageType } from '@/types/ui'
import { ref } from 'vue'

const showItems = ref<ImageType[]>([
  {
    src: '/cpdc-platform/showItems/1.png',
    alt: '胚体准备',
  },
  {
    src: '/cpdc-platform/showItems/2.png',
    alt: '纹样设计',
  },
  {
    src: '/cpdc-platform/showItems/3.png',
    alt: '釉彩填色',
  },
  {
    src: '/cpdc-platform/showItems/4.png',
    alt: '本金勾勒',
  },
  {
    src: '/cpdc-platform/showItems/5.png',
    alt: '开窗构图',
  },
  {
    src: '/cpdc-platform/showItems/6.png',
    alt: '窑火淬炼',
  },
  {
    src: '/cpdc-platform/showItems/7.png',
    alt: '款识落印',
  },
])
</script>

<style scoped>
.hero-background {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),
    url('/cpdc-platform/herobg.png');

  background-size: cover;
  background-position: center;
  overflow: hidden;
}
</style>
