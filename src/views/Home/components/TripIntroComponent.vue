<template>
  <div class="flex flex-col items-center py-10 intro-background relative">
    <img src="/introbg.png" class="max-w-[1280px] px-10 md:px-30 lg:px-40 w-full" />
    <div
      class="text-xl font-bold px-2 text-white bg-primary-200 rounded-sm absolute bottom-1/3 cursor-pointer hover:bg-primary-300"
    >
      点击开启回忆之旅
    </div>
  </div>
</template>

<style scoped>
.intro-background {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url('/cpdc-platform/herobg.png');

  background-size: cover;
  background-position: center;
  overflow: hidden;
}
</style>
