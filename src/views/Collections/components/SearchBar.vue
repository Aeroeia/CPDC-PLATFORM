<template>
  <div class="flex flex-col">
    <div
      class="border-2 border-primary bg-primary/70 text-white w-[8rem] text-lg flex justify-center items-center focus-within:w-[16rem] ease-in-out duration-200"
    >
      <input
        type="text"
        placeholder="搜索"
        class="flex-1 w-[calc(100%-2rem)] outline-0 px-2"
        v-model="serachContent"
        @input="onInput"
        @keyup.enter="handleSerach"
      />
      <div
        class="w-[2rem] bg-primary h-[2rem] flex justify-center items-center hover:bg-primary-600 cursor-pointer"
        @click="handleSerach"
      >
        <SearchIcon />
      </div>
    </div>
    <!-- 搜索建议下拉框 -->
    <div class="relative">
      <Transition name="slide-down">
        <div
          v-if="suggestions.length > 0 && serachContent"
          class="absolute visible z-50 top-2 w-[16rem]"
        >
          <div class="my-backdrop-blur-lg">
            <div
              v-for="(suggestion, index) in suggestions"
              :key="index"
              class="text-md text-primary-100 px-3 md:px-5 py-2 flex items-center justify-between hover:text-white hover:bg-primary-300/30"
              @click="selectSuggestion(suggestion)"
            >
              <span v-html="suggestion"></span>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchIcon from '@/components/icons/SearchIcon.vue'
import { ref } from 'vue'
import { debounce } from '@/utils/utils'
import { getSearchSuggestion } from '@/apis/exhibitionApi'

const serachContent = ref('')
const suggestions = ref<string[]>([])

const emits = defineEmits(['search-clicked'])

const getSearchSuggestions = debounce(async (value: string) => {
  if (value.trim() === '') {
    suggestions.value = []
    return
  }
  try {
    const res = await getSearchSuggestion(value)
    suggestions.value = res.data
  } catch (error) {
    console.error('获取搜索建议失败:', error)
    suggestions.value = []
  }
}, 1000)

const onInput = () => {
  getSearchSuggestions(serachContent.value)
}

const handleSerach = async () => {
  suggestions.value = [] // 清空建议
  emits('search-clicked') // 触发搜索事件
}

const selectSuggestion = (suggestion: string) => {
  const cleanSuggestion = suggestion.replace(/<.?em>/g, '') // 移除<em>和</em>标签
  serachContent.value = cleanSuggestion
  suggestions.value = [] // 清空建议
  emits('search-clicked') // 触发搜索事件
}

defineExpose({
  serachContent,
})
</script>

<style scoped>
/* 过渡动画 */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease-out;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>

<style>
em {
  font-style: normal !important;
  font-weight: bold !important;
  padding: 0 2px !important;
}
</style>
