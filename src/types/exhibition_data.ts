import type { ImageType } from "./ui";

export interface ExhibitionDataType {
  name: string
  img: ImageType
  link: string
}

/**
 * FirstStage (1,"清代康熙末年"),
 * SecondStage(2,"清代雍正年间"),
 * ThirdStage (3,"清代乾隆年间"),
 * ForthStage (4,"清代乾隆年间"),
 * FifthStage (5,"清末民国"),
 * SixthStage (6,"当代")
 */
export enum During {
  FirstStage = 1, SecondStage, ThirdStage, ForthStage, FifthStage, SixthStage
}
