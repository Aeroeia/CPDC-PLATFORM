<template>
  <div ref="carouselRef" class="carousel relative overflow-hidden">
    <!-- 图片容器 -->
    <div
      class="carousel-inner flex h-full transition-transform duration-300"
      :style="{
        transform: `translateX(${translateX}px)`,
        transition: isDragging ? 'none' : 'transform 300ms ease',
      }"
      @transitionend="handleTransitionEnd"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="carousel-item min-w-full h-full"
        :style="{ width: `${containerWidth}px` }"
      >
        <img
          :src="image.src"
          :alt="image.alt || `Slide ${index + 1}`"
          class="w-full h-full object-cover object-bottom"
          draggable="false"
        />
      </div>
    </div>

    <!-- 左右切换按钮 -->
    <button
      @click="prevSlide"
      class="carousel-control left absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-opacity duration-300"
      :class="{ 'opacity-0': !isHovering, 'opacity-100': isHovering }"
      aria-label="上一张"
    >
      <ArrowLeft class="w-[24px]" />
    </button>

    <button
      @click="nextSlide"
      class="carousel-control right absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-opacity duration-300"
      :class="{ 'opacity-0': !isHovering, 'opacity-100': isHovering }"
      aria-label="下一张"
    >
      <ArrowRight class="w-[24px]" />
    </button>

    <!-- 底部指示器 -->
    <div
      class="carousel-indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
    >
      <button
        v-for="(_, index) in images"
        :key="index"
        @click="goToSlide(index)"
        class="w-3 h-3 rounded-full transition-all duration-300"
        :class="index === currentIndex ? 'bg-primary scale-110' : 'bg-white/50 hover:bg-white/70'"
        :aria-label="`转到第 ${index + 1} 张图片`"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue'
import type { ImageType } from '@/types/ui'
import ArrowLeft from '@/components/icons/ArrowLeft.vue'
import ArrowRight from '@/components/icons/ArrowRight.vue'
import { useElementSize, useMouseInElement, useIntervalFn, useMouse } from '@vueuse/core'

const props = defineProps({
  // 轮播图片数组，每个对象包含 src 和可选的 alt
  images: {
    type: Array<ImageType>,
    required: true,
    default: () => [],
  },
  // 自动播放间隔时间（毫秒）
  autoplayInterval: {
    type: Number,
    default: 3000,
  },
  // 是否自动播放
  autoplay: {
    type: Boolean,
    default: true,
  },
  // 滑动阈值（像素）
  swipeThreshold: {
    type: Number,
    default: 50,
  },
})

// 使用 ref 存储 carousel 元素
const carouselRef = ref<HTMLElement | null>(null)

// 使用 useElementSize 获取容器宽度
const { width: containerWidth } = useElementSize(carouselRef)

// 滑动相关状态
const currentIndex = ref(0)
const isDragging = ref(false)
const translateX = ref(0)
const startX = ref(0)
const currentDragX = ref(0)
const dragDiff = computed(() => currentDragX.value - startX.value)

// 使用 useMouseInElement 检测鼠标是否悬停在元素上
const { isOutside } = useMouseInElement(carouselRef)
const isHovering = computed(() => !isOutside.value)

// 使用 useMouse 获取鼠标位置
const { x: mouseX } = useMouse()

// 鼠标事件处理
const handleMouseDown = (e: MouseEvent) => {
  // 只有在左键点击时才处理
  if (e.button !== 0) return

  isDragging.value = true
  startX.value = mouseX.value
  currentDragX.value = mouseX.value

  // 暂停自动播放
  pause()

  // 防止拖动时选中文本
  e.preventDefault()
}

const handleMouseMove = () => {
  if (!isDragging.value) return

  currentDragX.value = mouseX.value
}

const handleMouseUp = () => {
  if (!isDragging.value) return

  const diff = dragDiff.value

  // 判断是否需要切换幻灯片
  if (Math.abs(diff) > props.swipeThreshold) {
    if (diff > 0 && currentIndex.value > 0) {
      // 向右拖动，显示上一张
      currentIndex.value--
    } else if (diff < 0 && currentIndex.value < props.images.length - 1) {
      // 向左拖动，显示下一张
      currentIndex.value++
    }
  }

  // 重置拖动状态
  isDragging.value = false
  translateX.value = -currentIndex.value * containerWidth.value

  // 恢复自动播放
  if (props.autoplay) {
    resume()
  }
}

// 触摸事件处理
const handleTouchStart = (e: TouchEvent) => {
  isDragging.value = true
  startX.value = e.touches[0].clientX
  currentDragX.value = e.touches[0].clientX

  // 暂停自动播放
  pause()
}

const handleTouchMove = (e: TouchEvent) => {
  if (!isDragging.value) return

  currentDragX.value = e.touches[0].clientX

  // 防止页面滚动
  e.preventDefault()
}

const handleTouchEnd = () => {
  handleMouseUp()
}

// 计算实际的 translateX 值
const calculateTranslateX = computed(() => {
  if (isDragging.value) {
    const diff = dragDiff.value

    // 限制拖动范围，防止过度拖动
    if (
      (currentIndex.value === 0 && diff > 0) ||
      (currentIndex.value === props.images.length - 1 && diff < 0)
    ) {
      // 在边缘位置时，减少拖动效果
      return -currentIndex.value * containerWidth.value + diff * 0.3
    }

    return -currentIndex.value * containerWidth.value + diff
  }

  return -currentIndex.value * containerWidth.value
})

// 监听计算属性变化并更新 translateX
watch(calculateTranslateX, (newValue) => {
  translateX.value = newValue
})

// 处理过渡结束事件
const handleTransitionEnd = () => {
  // 确保在过渡结束后，translateX 值与当前索引对应
  translateX.value = -currentIndex.value * containerWidth.value
}

// 使用 useIntervalFn 处理自动播放
const { pause, resume, isActive } = useIntervalFn(
  () => {
    nextSlide()
  },
  props.autoplayInterval,
  { immediate: false, immediateCallback: false },
)

// 切换到下一张图片
const nextSlide = () => {
  if (currentIndex.value < props.images.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
  translateX.value = -currentIndex.value * containerWidth.value
}

// 切换到上一张图片
const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = props.images.length - 1
  }
  translateX.value = -currentIndex.value * containerWidth.value
}

// 切换到指定图片
const goToSlide = (index: number) => {
  currentIndex.value = index
  translateX.value = -currentIndex.value * containerWidth.value
}

// 组件挂载时
onMounted(() => {
  // 添加事件监听
  if (carouselRef.value) {
    carouselRef.value.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    carouselRef.value.addEventListener('touchstart', handleTouchStart)
    carouselRef.value.addEventListener('touchmove', handleTouchMove, { passive: false })
    carouselRef.value.addEventListener('touchend', handleTouchEnd)
  }

  // 启动自动播放
  if (props.autoplay) {
    resume()
  }
})

// 监听 autoplay 属性变化
watch(
  () => props.autoplay,
  (newValue) => {
    if (newValue && !isActive.value) {
      resume()
    } else if (!newValue && isActive.value) {
      pause()
    }
  },
)

// 监听 currentIndex 变化
watch(
  () => currentIndex.value,
  () => {
    // 确保在索引变化时更新 translateX
    if (!isDragging.value) {
      translateX.value = -currentIndex.value * containerWidth.value
    }
  },
)

// 监听容器宽度变化
watch(
  () => containerWidth.value,
  () => {
    translateX.value = -currentIndex.value * containerWidth.value
  },
)
</script>

<style scoped>
.carousel {
  width: 100%;
  height: calc(100vh - 5rem);
  user-select: none; /* 防止拖动时选中文本 */
  touch-action: pan-y; /* 允许垂直滚动，但水平滑动会被组件处理 */
  cursor: grab; /* 显示抓取光标 */
}

.carousel:active {
  cursor: grabbing; /* 拖动时显示抓取中光标 */
}

@media (max-width: 1024px) {
  .carousel {
    height: 450px;
  }
}

@media (max-width: 640px) {
  .carousel {
    height: 250px;
  }
}

/* 添加触摸滑动的平滑过渡 */
.carousel-inner {
  will-change: transform;
}

/* 禁用图片拖动 */
.carousel-item img {
  pointer-events: none;
}
</style>
