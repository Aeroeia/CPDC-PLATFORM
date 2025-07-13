<template>
  <main class="w-full px-12 py-12 flex justify-between items-center">
    <!-- 左侧展厅 -->
    <SmallExhibitionComponent
      :data="leftExhibition"
      @click="goToExhibitionDetail(leftExhibition.link)"
    />
    <!-- 中心展厅 -->
    <LargeExhibitionComponent
      :data="centerExhibition"
      @click="goToExhibitionDetail(centerExhibition.link)"
    />
    <!-- 右侧展厅 -->
    <SmallExhibitionComponent
      :data="rightExhibition"
      @click="goToExhibitionDetail(rightExhibition.link)"
    />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ExhibitionDataType } from '@/types/exhibition_data'
import SmallExhibitionComponent from './components/SmallExhibitionComponent.vue'
import LargeExhibitionComponent from './components/LargeExhibitionComponent.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const exhibitionDataList: ExhibitionDataType[] = [
  {
    name: '发展脉络展厅',
    img: {
      src: '/cpdc-platform/exhibition/2.png',
      alt: '发展脉络展厅',
    },
    link: '1',
  },
  {
    name: '工坊主题展厅',
    img: {
      src: '/cpdc-platform/exhibition/1.png',
      alt: '工坊主题展厅',
    },
    link: '2',
  },
  {
    name: '华彩新章展厅',
    img: {
      src: '/cpdc-platform/exhibition/3.png',
      alt: '华彩新章展厅',
    },
    link: '3',
  },
]

const leftExhibition = ref<ExhibitionDataType>(exhibitionDataList[0])
const centerExhibition = ref<ExhibitionDataType>(exhibitionDataList[1])
const rightExhibition = ref<ExhibitionDataType>(exhibitionDataList[2])

const goToExhibitionDetail = (id: string) => {
  router.push(`/exhibition_hall/${id}`)
}
</script>
