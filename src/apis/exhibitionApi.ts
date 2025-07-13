import apiClient from "@/utils/apiClient";

// 展厅接口
// 获取展厅列表
export const getVrHall = () => {
  return apiClient.get('/vrhall/list');
}

// 展品接口
// 获取展品
export const getExhibitions = (keyword: string, page: number, size: number, type: number, during: number) => {
  return apiClient.get(`/items/search?keyword=${keyword}&page=${page}&size=${size}&type=${type}&during=${during}`);
}

// 获取展品详情
export const getExhibitionDetail = (id: number) => {
  return apiClient.get(`/items/${id}`);
}

// 获取搜索建议
export const getSearchSuggestion = (keyword: string) => {
  return apiClient.get(`/items/suggestions?keyword=${keyword}`);
}
