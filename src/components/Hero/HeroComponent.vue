<template>
  <div
    class="h-80 bg-center bg-cover flex flex-col justify-center items-center w-full bg-gray-200"
    :style="props.backgroundUrl ? `background-image: url(${backgroundUrl})` : ''"
  >
    <h1
      class="text-4xl font-extrabold"
      :class="props.titleColor ? `text-${props.titleColor}` : 'text-gray-800'"
    >
      {{ props.title }}
    </h1>
    <span v-if="props.subTitle" class="text-lg text-gray-800 mt-8">{{ props.subTitle }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string
  subTitle?: string
  backgroundUrl?: string
  titleColor?: string
}>()
</script>
