<template>
  <div class="collection-detail-view background">
    <div v-if="collectionDetail" class="max-w-[1200px] mx-auto py-8 px-4 md:px-8">
      <h1 class="text-3xl md:text-4xl font-bold mb-4 text-primary">{{ collectionDetail.name }}</h1>

      <div class="flex flex-col md:flex-row md:gap-8">
        <div class="md:w-1/2 mb-4 md:mb-0">
          <img
            :src="collectionDetail.image"
            :alt="collectionDetail.imageAlt"
            class="w-full h-auto object-cover rounded-md shadow-lg"
          />
        </div>
        <div class="md:w-1/2 bg-white p-6 rounded-md shadow-md">
          <p class="text-lg md:text-xl mb-2 text-secondary-700">
            <strong>属性:</strong> {{ collectionDetail.attribute }}
          </p>
          <p class="text-lg md:text-xl mb-2 text-secondary-700">
            <strong>时期:</strong> {{ collectionDetail.during }}
          </p>
          <p class="text-lg md:text-xl mb-4 leading-relaxed text-secondary-800 whitespace-pre-wrap">
            <strong>描述:</strong> {{ collectionDetail.content }}
          </p>
          <router-link to="/collections" class="text-primary hover:underline font-medium"
            >&#x2190; 返回藏品列表</router-link
          >
        </div>
      </div>
    </div>
    <div v-else class="text-center py-8 text-xl text-gray-500">加载中... 或未找到瓷器信息。</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getExhibitionDetail } from '@/apis/exhibitionApi'
import type { ExhibitionDetailData } from '@/types/api'

const route = useRoute()
const collectionDetail = ref<ExhibitionDetailData | null>(null)

const fetchCollectionDetail = async (id: string) => {
  try {
    const res = await getExhibitionDetail(parseInt(id))
    // const apiResponse = res.data as ExhibitionDetailResponse // 已经不需要显式类型断言，Vue会自动推断

    if (res.code === 200 && res.data) {
      collectionDetail.value = res.data
      if (collectionDetail.value && collectionDetail.value.content) {
        // 将\n替换为实际的换行符
        collectionDetail.value.content = collectionDetail.value.content.replace(/\\n/g, '\n')
      }
    } else {
      console.error('获取瓷器详细信息失败:', res.data.message)
      collectionDetail.value = null
    }
  } catch (error) {
    console.error('请求瓷器详细信息出错:', error)
    collectionDetail.value = null
  }
}

onMounted(() => {
  if (route.params.id) {
    fetchCollectionDetail(route.params.id as string)
  }
})

watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      fetchCollectionDetail(newId as string)
    }
  },
)
</script>

<style scoped>
.collection-detail-view {
  min-height: calc(100vh - 100px); /* 假设顶部有100px的头部，确保内容区有最小高度 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.background {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
    url('/cpdc-platform/herobg.png');

  background-position: center;
  overflow: hidden;
}

.my-backdrop-blur-lg {
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
