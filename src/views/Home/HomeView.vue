<template>
  <CarouselComponent
    :images="images"
    :autoplay="true"
    :autoplayInterval="4000"
    :swipeThreshold="50"
  />
  <HeroComponent />
  <TripIntroComponent />
</template>

<script setup lang="ts">
import CarouselComponent from '@/views/Home/components/CarouselComponent.vue'
import HeroComponent from './components/HeroComponent.vue'
import TripIntroComponent from './components/TripIntroComponent.vue'

const images = [
  {
    src: '/cpdc-platform/1.png',
    alt: '广彩瓷1',
  },
  {
    src: '/cpdc-platform/2.png',
    alt: '广彩诞生',
  },
  {
    src: '/cpdc-platform/3.png',
    alt: '数字焕新',
  },
]
</script>
