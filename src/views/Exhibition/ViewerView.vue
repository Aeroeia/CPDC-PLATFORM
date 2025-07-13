<script setup lang="ts">
import ViewerComponent from '@/components/Viewer/ViewerComponent.vue'
</script>

<template>
  <div class="w-full h-[calc(100vh-5rem)] relative">
    <ViewerComponent
      :id="1"
      caption="第一展厅"
      panorama-url="/cpdc-platform/exhibition/panorama/3.png"
    />
  </div>
</template>

<style scoped></style>
