<template>
  <div class="w-full h-full relative">
    <!-- 全景图容器 -->
    <div class="w-full h-full" id="viewer">
      <!-- 信息面板 -->
      <div
        id="infoPanel"
        class="absolute top-5 left-5 bg-black/50 text-white p-4 rounded-md text-[12px] z-[999] max-w-[300px]"
      >
        <h3 class="mb-2.5 text-primary text-xl">📍 操作指南</h3>
        <p class="my-1.5 text-[13px] leading-snug">• 拖拽旋转视角</p>
        <p class="my-1.5 text-[13px] leading-snug">• 滚轮缩放</p>
        <p class="my-1.5 text-[13px] leading-snug">• 点击热点查看详情</p>
        <!-- 调试模式说明 -->
        <div v-if="props.debugMode">
          <p class="my-1.5 text-[13px] leading-snug"><strong>调试模式：</strong></p>
          <p class="my-1.5 text-[13px] leading-snug">• 点击任意位置获取坐标</p>
          <p class="my-1.5 text-[13px] leading-snug">• 复制的代码可直接用于热点配置</p>
          <p class="text-[11px] text-[#aaa] mt-2.5">
            💡 <strong>坐标说明：</strong><br />
            • yaw: 水平角度 (-180° 到 180°)<br />
            • pitch: 垂直角度 (-90° 到 90°)<br />
            • 0,0 为全景图正前方中心点
          </p>
        </div>
      </div>

      <!-- 调试面板 -->
      <div
        v-if="props.debugMode"
        id="debugPanel"
        class="absolute top-5 right-5 bg-black/80 text-white p-4 rounded-md z-[1000] max-w-[300px] text-[14px]"
      >
        <div id="coordinateInfo" class="mt-2.5" v-if="debugMode">
          <div class="font-bold mb-2">点击位置坐标：</div>
          <div id="coordinateList"></div>
          <button
            id="clearCoordinates"
            class="bg-[#e67e22] text-white border-none py-2 px-3.5 rounded-md cursor-pointer mt-2.5 w-full hover:bg-[#d35400]"
          >
            清空坐标
          </button>
          <button
            id="copyMarkersData"
            class="bg-[#3498db] text-white border-none py-2 px-3.5 rounded-md cursor-pointer mt-2.5 w-full hover:bg-[#2980b9]"
          >
            复制热点数据
          </button>
        </div>
      </div>

      <!-- 状态指示器 -->
      <div
        class="absolute bottom-5 left-5 bg-black/80 text-white p-2.5 rounded-md text-[12px] z-[999]"
        id="statusIndicator"
      >
        正在加载...
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Viewer } from '@photo-sphere-viewer/core'
import { MarkersPlugin, type MarkerConfig } from '@photo-sphere-viewer/markers-plugin'
import { onMounted, ref } from 'vue'
import { getVrHallDetail, getExhibitionDetail } from '@/apis/exhibitionApi'
import type { VrHallDetailData, ExhibitionDetailData } from '@/types/api'

declare global {
  interface Window {
    copyCoordinate: (yaw: number, pitch: number) => void
  }
}

let viewer: Viewer | null = null

let markersPlugin: MarkersPlugin | null = null

const coordinateHistory = ref<Array<{ yaw: number; pitch: number; timestamp: string }>>([])

const props = defineProps({
  id: {
    type: Number,
  },
  panoramaUrl: {
    type: String,
    default: '',
  },
  caption: {
    type: String,
    default: '展厅',
  },
  debugMode: {
    type: Boolean,
    default: false,
  },
})

// 状态更新函数
function updateStatus(message: string) {
  const indicator = document.getElementById('statusIndicator')
  if (indicator) {
    indicator.textContent = message
  }
  console.log('状态:', message)
}

// 创建热点HTML元素的函数
function createHotspotElement(isVideo = false) {
  const div = document.createElement('div')
  div.className = `
                w-8
                h-8
                rounded-full
                border-2
                border-white
                shadow-md
                cursor-pointer
                animate-pulse
            `
  div.style.background = isVideo
    ? 'radial-gradient(circle, rgba(0,255,255,0.8) 0%, rgba(0,150,255,0.6) 50%, rgba(0,100,255,0.4) 100%)'
    : 'radial-gradient(circle, rgba(255,255,0,0.8) 0%, rgba(255,165,0,0.6) 50%, rgba(255,0,0,0.4) 100%)'
  return div
}

// 热点数据
const markersData = ref<MarkerConfig[]>([])

// 初始化Photo Sphere Viewer
const initViewer = () => {
  updateStatus('正在初始化Photo Sphere Viewer...')

  try {
    viewer = new Viewer({
      container: document.getElementById('viewer')!,
      panorama: props.panoramaUrl,
      caption: props.caption,
      navbar: ['zoom', 'move', 'fullscreen'],
      plugins: [[MarkersPlugin, {}]],
      defaultZoomLvl: 50,
      minFov: 30,
      maxFov: 90,
      mousewheel: true,
      mousewheelCtrlKey: false,
      touchmoveTwoFingers: true,
      // useXmpData: false, // Removed this line
    })

    // 获取标记插件实例
    markersPlugin = viewer.getPlugin(MarkersPlugin) as MarkersPlugin

    updateStatus('Photo Sphere Viewer 创建成功，等待加载...')

    // 绑定事件
    bindEvents()
  } catch (error) {
    console.error('初始化Photo Sphere Viewer失败:', error)
    if (error instanceof Error) {
      updateStatus('初始化失败: ' + error.message)
    }
  }
}

// 添加热点标记
const addMarkers = () => {
  updateStatus('正在添加标记...')
  console.log('开始添加标记，数量:', markersData.value.length)

  try {
    markersData.value.forEach((marker: MarkerConfig, index: number) => {
      console.log(`添加标记 ${index + 1}:`, marker)
      markersPlugin?.addMarker(marker)
    })
    updateStatus(`成功添加 ${markersData.value.length} 个标记`)
  } catch (error) {
    console.error('添加标记失败:', error)
    if (error instanceof Error) {
      updateStatus('添加标记失败: ' + error.message)
    }
  }
}

// 绑定事件
const bindEvents = () => {
  console.log('开始绑定事件...')

  // 准备就绪事件
  viewer?.addEventListener('ready', () => {
    console.log('Photo Sphere Viewer 准备就绪')
    updateStatus('全景图加载完成')
    addMarkers()

    // 添加CSS动画
    const style = document.createElement('style')
    style.textContent = `
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
      }
    `
    document.head.appendChild(style)
  })

  // 点击热点事件
  markersPlugin?.addEventListener('select-marker', (e: any) => {
    const selectedMarker = e.marker
    const data = selectedMarker.data

    // 创建模态框
    const modal = document.createElement('div')
    modal.className = `
      fixed top-0 left-0 w-full h-full
      flex items-center justify-center
      bg-black/90 z-[9999]
      p-4
    `

    // 创建内容容器
    const content = document.createElement('div')
    content.className = `
      relative
      max-w-[95vw]
      max-h-[95vh]
      overflow-hidden
    `

    // 创建关闭按钮
    const closeButton = document.createElement('button')
    closeButton.className = `
      absolute top-2 right-2
      text-white/60 hover:text-white
      bg-black/50 hover:bg-black/70
      border-none
      cursor-pointer
      text-2xl
      w-10 h-10
      flex items-center justify-center
      rounded-full
      z-10
    `
    closeButton.innerHTML = '×'
    closeButton.onclick = () => modal.remove()
    content.appendChild(closeButton)

    // 如果有热点图片，显示图片
    const markerData = markersData.value.find(m => m.id === selectedMarker.id)
    if (markerData?.data?.imageUrl) {
      const img = document.createElement('img')
      img.src = markerData.data.imageUrl
      img.alt = data.title || '展品图片'
      img.className = 'max-w-full max-h-[95vh] object-contain'
      content.appendChild(img)
    }

    modal.appendChild(content)
    document.getElementById('viewer')?.appendChild(modal)

    // 点击背景关闭
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove()
      }
    })
  })

  // 调试模式：点击获取坐标
  if (props.debugMode) {
    viewer?.addEventListener('click', (e: any) => {
      if (e.rightClick) return // 忽略右键点击

      const coords = viewer?.getPosition()
      if (coords) {
        addCoordinate(coords.yaw, coords.pitch)
      }
    })
  }

  // 错误事件
  viewer?.addEventListener('panorama-error', (e: { error: unknown }) => {
    console.error('全景图加载错误:', e)
    if (e.error instanceof Error) {
      updateStatus('全景图加载失败: ' + e.error.message)
    } else {
      updateStatus('全景图加载失败')
    }
  })
}

// 显示热点详情弹窗
function showHotspotModal(data: {
  title: string
  body: string
  type: string
  videoUrl?: string
  imageUrl?: string
}) {
  console.log('显示热点详情:', data)
  // 创建模态框
  const modal = document.createElement('div')
  modal.className = `
                fixed
                inset-0
                bg-black/70
                flex
                justify-center
                items-center
                z-[2000]
            `

  const content = document.createElement('div')
  content.className = `
                bg-white
                max-w-5xl
                w-11/12
                max-h-full
                overflow-y-auto
                rounded-lg
                p-5
                relative
            `

  let innerHTML = `
                <button class="absolute top-3 right-4 bg-transparent border-none text-2xl cursor-pointer text-[#999] hover:text-[#666]" onclick="this.closest('[class*=fixed]').remove()">&times;</button>
                <h2 class="mt-0 text-[#2c3e50]">${data.title}</h2>
                <p class="leading-relaxed text-[#333]">${data.body}</p>
            `

  if (data.type === 'video' && data.videoUrl) {
    innerHTML += `
                    <video controls class="w-full rounded-md mt-2.5">
                        <source src="${data.videoUrl}" type="video/mp4">
                        您的浏览器不支持视频播放。
                    </video>
                `
  } else if (data.type === 'image' && data.imageUrl) {
    innerHTML += `
                    <img src="${data.imageUrl}" alt="${data.title}" class="w-full rounded-md mt-2.5 object-contain max-h-[70vh]" />
                `
  }

  content.innerHTML = innerHTML
  modal.appendChild(content)
  document.getElementById('viewer')?.appendChild(modal)

  // 点击背景关闭
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove()
    }
  })
}

// 添加坐标到历史记录
function addCoordinate(yaw: number, pitch: number) {
  console.log('添加坐标:', yaw, pitch)
  const coordinate = {
    yaw: yaw,
    pitch: pitch,
    timestamp: new Date().toLocaleTimeString(),
  }

  coordinateHistory.value.unshift(coordinate)

  // 限制历史记录数量
  if (coordinateHistory.value.length > 10) {
    coordinateHistory.value = coordinateHistory.value.slice(0, 10)
  }

  updateCoordinateDisplay()
}

// 更新坐标显示
function updateCoordinateDisplay() {
  const list = document.getElementById('coordinateList')
  if (list) {
    list.innerHTML = ''

    coordinateHistory.value.forEach((coord, index) => {
      const item = document.createElement('div')
      item.className = 'coordinate-item bg-white/10 p-2 my-1.5 rounded-md font-mono text-[12px]'

      // 转换为度数显示（更直观）
      const yawDegrees = ((coord.yaw * 180) / Math.PI).toFixed(1)
      const pitchDegrees = ((coord.pitch * 180) / Math.PI).toFixed(1)

      item.innerHTML = `
                    <div><strong class="font-bold">点击 ${index + 1}</strong> (${coord.timestamp})</div>
                    <div class="text-[11px] text-[#aaa] my-0.5">
                        yaw: ${yawDegrees}°, pitch: ${pitchDegrees}°
                    </div>
                    <div class="font-mono text-[10px] bg-white/10 p-1 rounded-sm my-0.5">
                        position: { yaw: ${coord.yaw.toFixed(6)}, pitch: ${coord.pitch.toFixed(6)} }
                    </div>
                    <button class="copy-btn bg-[#27ae60] text-white border-none py-1 px-2 rounded-[3px] cursor-pointer text-[11px] ml-1.5 hover:bg-[#219a52]" onclick="copyCoordinate(${coord.yaw}, ${coord.pitch})">复制位置代码</button>
                `
      list.appendChild(item)
    })

    console.log('坐标历史已更新，当前数量:', coordinateHistory.value.length)
  }
}

// 复制坐标
function copyCoordinate(yaw: number, pitch: number) {
  const text = `position: { yaw: ${yaw}, pitch: ${pitch} }`
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert('Photo Sphere Viewer位置代码已复制到剪贴板！\n可直接用于热点配置。')
    })
    .catch(() => {
      // 备用方案
      const textArea = document.createElement('textarea')
      textArea.value = text
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      alert('Photo Sphere Viewer位置代码已复制到剪贴板！\n可直接用于热点配置。')
    })
}

// 复制markersData
function copyMarkersData() {
  const text = JSON.stringify(markersData.value, null, 2)
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert('热点数据已复制到剪贴板！')
    })
    .catch((err) => {
      console.error('复制热点数据失败:', err)
      alert('复制热点数据失败，请检查浏览器权限。')
    })
}

onMounted(async () => {
  console.log('页面加载完成，开始初始化...')

  try {
    updateStatus('正在加载展厅热点数据...')
    const vrHallDetailRes = await getVrHallDetail(props.id || 1)
    
    // 确保数据存在且格式正确
    if (!vrHallDetailRes.data?.records || !Array.isArray(vrHallDetailRes.data.records)) {
      throw new Error('热点数据格式不正确')
    }
    
    const hotSpotData = vrHallDetailRes.data.records

    // 记录热点数量
    console.log('获取到热点数量:', hotSpotData.length)

    const markerPromises = hotSpotData.map(async (hotspot) => {
      let exhibitionDetail: ExhibitionDetailData | null = null
      
      if (hotspot.exhibitionId) {
        try {
          const exhibitRes = await getExhibitionDetail(hotspot.exhibitionId)
          if (exhibitRes.data) {
            exhibitionDetail = exhibitRes.data
          }
        } catch (exhibitError) {
          console.error(
            `获取展品详情失败 ID ${hotspot.exhibitionId}:`,
            exhibitError,
          )
        }
      }

      return {
        id: `marker-${hotspot.id}`,
        position: { 
          yaw: hotspot.yaw || 0,  // 提供默认值
          pitch: hotspot.pitch || 0 
        },
        html: createHotspotElement(false).outerHTML,
        tooltip: exhibitionDetail?.name || '展品热点',
        data: {
          title: exhibitionDetail?.title || '未知展品',
          body: exhibitionDetail?.content || '暂无详细介绍',
          type: exhibitionDetail?.image ? 'image' : 'text',
          imageUrl: exhibitionDetail?.image || hotspot.image, // 如果展品详情没有图片，使用热点图片
        },
      } as MarkerConfig
    })

    const markers = await Promise.all(markerPromises)
    markersData.value = markers
    updateStatus(`成功加载 ${markers.length} 个热点数据`)

    // 设置全景图URL
    // panoramaUrl.value = vrHallDetailRes.data.url // This line was removed as panoramaUrl is a prop
    console.log('全景图URL:', props.panoramaUrl) // This line was added to reflect the change

    initViewer()
  } catch (error) {
    console.error('加载热点数据失败:', error)
    updateStatus('加载热点数据失败: ' + (error instanceof Error ? error.message : '未知错误'))
    // 即使加载热点失败，也初始化查看器
    markersData.value = [] // 确保标记数据是空数组而不是undefined
    initViewer()
  }

  // Expose copyCoordinate to global scope for onclick in dynamically generated HTML
  window.copyCoordinate = copyCoordinate

  // Clear coordinates
  const clearCoordinates = document.getElementById('clearCoordinates')
  if (clearCoordinates) {
    clearCoordinates.addEventListener('click', () => {
      coordinateHistory.value = []
      updateCoordinateDisplay()
      console.log('坐标历史已清空')
    })
  }

  // Copy markers data
  const copyMarkersBtn = document.getElementById('copyMarkersData')
  if (copyMarkersBtn) {
    copyMarkersBtn.addEventListener('click', () => {
      copyMarkersData()
      console.log('热点数据已复制')
    })
  }

  // Error handling
  window.addEventListener('error', (e: ErrorEvent) => {
    console.error('JavaScript错误:', e)
    updateStatus('发生错误: ' + e.message)
  })
})
</script>

<style>
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
