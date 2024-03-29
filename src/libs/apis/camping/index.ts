"use client"

import { useQuery } from "@tanstack/react-query"
import { instance } from "../axios"
import { ICampingResponse } from "./type"

export const useCampingListQuery = ({
  p,
  country,
  take,
  page,
}: {
  p?: string
  country: string
  take: number
  page: number
}) => {
  const response = async () => {
    const { data } = (
      await instance.get<{ data: ICampingResponse }>("camping", {
        params: { p, country, take, page },
      })
    ).data
    return data
  }
  return useQuery({ queryKey: [p, "campingList", country, page, take], queryFn: response })
}
