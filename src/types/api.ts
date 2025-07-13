// 获取展厅列表响应
export interface VrHallResponse {
  code: number
  data: VrHallData
  message: null | string
}

export interface VrHallData {
  /**
   * 数据列表
   */
  records: VrHallRecord[]
}

export interface VrHallRecord {
  /**
   * 展馆id
   */
  id: string
  /**
   * 封面图片
   */
  image: string
}

// 获取展品响应
export interface ExhibitionsResponse {
  code: number
  data: ExhibitionsData
  message: string
  /**
   * 总页数
   */
  p: number
  /**
   * 总
   */
  total: number
}

export interface ExhibitionsData {
  record: ExhibitionsRecord[]
}

export interface ExhibitionsRecord {
  /**
   * ID 编号
   */
  id: number
  /**
   * 展品图片
   */
  image: string
  /**
   * 图片替代
   */
  imageAlt: string
  /**
   * 展品名称
   */
  name: string
  /**
   * 展品标题
   */
  title: string
}

// 获取展品详情响应
export interface ExhibitionDetailResponse {
  code: number
  data: ExhibitionDetailData
  message: string
}

export interface ExhibitionDetailData {
  /**
   * 展品尺寸数据
   */
  attribute: string
  /**
   * 展品内容
   */
  content: string
  /**
   * 展品时期
   */
  during: string
  /**
   * 展品id
   */
  id: string
  /**
   * 展品照片
   */
  image: string
  /**
   * 展品照片描述
   */
  imageAlt: string
  /**
   * 展品名字
   */
  name: string
  /**
   * 展品标题名字
   */
  title: string
}

// 获取搜索建议响应
export interface SearchSuggestionResponse {
  code: number
  data: string[]
  message: string
}
