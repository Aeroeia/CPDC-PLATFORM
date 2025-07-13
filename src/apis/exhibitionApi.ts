import type {
  ExhibitionDetailResponse,
  ExhibitionsResponse,
  SearchSuggestionResponse,
  VrHallResponse,
  VrHallDetailResponse
} from '@/types/api'
import apiClient from '@/utils/apiClient'

// 展厅接口
// 获取展厅列表
export const getVrHall = (): Promise<VrHallResponse> => {
  return apiClient.get('/vrhall/list')
}

// 获取展厅内热点坐标、图片
export const getVrHallDetail = (exhibitionId: number): Promise<VrHallDetailResponse> => {
  return apiClient.get(`/vrhall/details/${exhibitionId}`)
}

// 展品接口
// 获取展品
export const getExhibitions = (
  keyword?: string,
  page?: number,
  size?: number,
  type?: number,
  during?: number,
): Promise<ExhibitionsResponse> => {
  const params = new URLSearchParams()
  if (keyword) params.append('keyword', keyword)
  if (page) params.append('page', page.toString())
  if (size) params.append('size', size.toString())
  if (type) params.append('type', type.toString())
  if (during) params.append('during', during.toString())

  return apiClient.get(`/items/search?${params.toString()}`)
}

// 获取展品详情
export const getExhibitionDetail = (id: number): Promise<ExhibitionDetailResponse> => {
  return apiClient.get(`/items/${id}`)
}

// 获取搜索建议
export const getSearchSuggestion = (keyword: string): Promise<SearchSuggestionResponse> => {
  return apiClient.get(`/items/suggestions?keyword=${keyword}`)
}
