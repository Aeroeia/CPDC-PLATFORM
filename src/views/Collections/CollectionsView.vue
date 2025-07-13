<template>
  <div class="flex flex-col items-center background">
    <!-- 顶部占位区 -->
    <HeroComponent background-url="/cpdc-platform/collections/banner.png" title-color="primary" />
    <!-- 藏品展示区 -->
    <main class="max-w-[1600px] min-h-[80vh] pb-8 px-4 md:px-8 lg:px-16 w-full back">
      <!-- 索引条 -->
      <div class="flex justify-between py-4 md:py-8">
        <div class="flex gap-3 md:gap-6">
          <FilterButton ref="duringFilterRef" name="时代" :items="duringLists" />
          <FilterButton ref="typeFilterRef" name="分类" :items="typeLists" />
        </div>
        <SearchBar ref="searchBarRef" @search-clicked="getCollectionsList" />
      </div>

      <!-- 瓷器展示 -->
      <div class="flex flex-wrap gap-4">
        <div
          class="w-full md:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)] cursor-pointer"
          v-for="(collection, index) of collectionsList"
          :key="index"
          @click="goToDetail(collection.id)"
        >
          <div
            class="w-full h-70 overflow-hidden flex justify-center items-center bg-secondary rounded-md"
          >
            <img class="object-cover h-full" :src="collection.image" :alt="collection.imageAlt" />
          </div>
          <div class="py-3">
            <h2 class="text-primary text-xl font-bold mb-1">{{ collection.name }}</h2>
            <div class="text-secondary-600 text-md">{{ collection.title }}</div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import HeroComponent from '@/components/Hero/HeroComponent.vue'
import FilterButton from './components/FilterButton.vue'
import SearchBar from './components/SearchBar.vue'
import { getExhibitions } from '@/apis/exhibitionApi'
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import type { ExhibitionsRecord } from '@/types/api'
import type { FilterItemType } from './components/FilterButton.vue'

const router = useRouter()

const duringLists: FilterItemType[] = [
  {
    name: '全部',
    value: undefined,
  },
  {
    name: '清代康熙末年（1662 — 1722年）——萌芽时期',
    value: 1,
  },
  {
    name: '清代雍正年间（1723 — 1735）——初具风貌',
    value: 2,
  },
  {
    name: '清代乾隆年间（1736 — 1796）——发展成熟',
    value: 3,
  },
  {
    name: '嘉庆道光年间（1796 — 1850年）——转型时期',
    value: 4,
  },
  {
    name: '清末民国（1851 — 1949年）——日渐式微',
    value: 5,
  },
  {
    name: '当代（1950至今）——恢复发展',
    value: 6,
  },
]

const typeLists: FilterItemType[] = [
  {
    name: '全部',
    value: undefined,
  },
  {
    name: '大盘',
    value: 1,
  },
  {
    name: '纹盘',
    value: 2,
  },
  {
    name: '托盘',
    value: 3,
  },
  {
    name: '纹瓶',
    value: 4,
  },
]

const collectionsList = ref<ExhibitionsRecord[]>([])
const searchBarRef = ref<InstanceType<typeof SearchBar>>()
const duringFilterRef = ref<InstanceType<typeof FilterButton>>()
const typeFilterRef = ref<InstanceType<typeof FilterButton>>()

const pageCount = ref(1)

const getCollectionsList = async () => {
  const keyword = searchBarRef.value ? searchBarRef.value.serachContent : undefined

  const type = typeFilterRef.value?.activeItemValue as number | undefined
  const during = duringFilterRef.value?.activeItemValue as number | undefined

  const res = await getExhibitions(
    keyword,
    pageCount.value,
    24, // 默认每页24个
    type,
    during,
  )

  collectionsList.value = res.data.records
}

const goToDetail = (id: number) => {
  router.push(`/collections/${id}`)
}

onMounted(() => getCollectionsList())

watch(
  [() => duringFilterRef.value?.activeItemValue, () => typeFilterRef.value?.activeItemValue],
  () => {
    getCollectionsList()
  },
)
</script>

<style scoped>
.background {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
    url('/cpdc-platform/herobg.png');

  background-position: center;
  overflow: hidden;
}
</style>
