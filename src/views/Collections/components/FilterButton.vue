<template>
  <div class="flex flex-col">
    <div
      class="bg-primary text-white w-[5rem] md:w-[8rem] text-md md:text-lg flex p-0.5 md:p-1 justify-center items-center hover:bg-primary-600 select-none cursor-pointer"
      @click="isListOpen = !isListOpen"
    >
      <span class="w-4/5 text-center">{{ props.name }}</span>
      <div v-if="items && items.length > 0">
        <ArrowDown class="rotate-180" v-if="isListOpen" />
        <ArrowDown v-else />
      </div>
    </div>

    <!-- 下拉菜单 -->
    <div class="relative">
      <Transition name="slide-down">
        <div v-if="isListOpen" class="absolute visible z-50 top-2 w-[calc(100vw-2rem)] md:w-100">
          <div class="my-backdrop-blur-lg">
            <div
              v-for="item of items"
              class="text-md text-primary-100 px-3 md:px-5 py-2 flex items-center justify-between hover:text-white hover:bg-primary-300/30"
              :class="activeItemName === item.name ? 'text-white bg-primary-300/50' : ''"
              :key="item.name"
              :title="item.name"
              @click="setActiveItem(item)"
            >
              {{ item.name }}
              <!-- <ArrowDown class="text-2xl ml-1" v-if="item.subitems" /> -->
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowDown from '@/components/icons/ArrowDown.vue'
import { onMounted, ref } from 'vue'

// 定义FilterItemType接口
export interface FilterItemType {
  name: string
  value: string | number
  // subitems?: NavItemType[] // 如果需要支持子项目，可以添加
}

const isListOpen = ref(false)

const activeItemName = ref('')
const activeItemValue = ref<string | number>('')

const setActiveItem = (item: FilterItemType) => {
  activeItemName.value = item.name
  activeItemValue.value = item.value
  isListOpen.value = false // 选择后关闭下拉菜单
}

const props = defineProps<{
  name: string
  items?: FilterItemType[]
}>()

defineExpose({
  activeItemName,
  activeItemValue,
})

onMounted(() => {
  if (props.items && props.items.length > 0) {
    activeItemName.value = props.items[0].name
    activeItemValue.value = props.items[0].value
  }
})
</script>
