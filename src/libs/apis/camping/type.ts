import { IReview } from "../review/type"

export interface ICamping {
  campingID: number
  recommend: number
  mainImage: string
  images: string[]
  placeName: string
  country: string
  address: string
  number: string
  period: string[]
  homepage: string
  content: string
  facility: string[]
  like: boolean
  like_count: number
  reviews: IReview[]
}

export interface ICampingResponse {
  length: number
  data: ICamping[]
}
