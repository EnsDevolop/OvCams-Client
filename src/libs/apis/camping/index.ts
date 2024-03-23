"use client"

import { useQuery } from "@tanstack/react-query"
import { instance } from "../axios"

export const useCampingListQuery = (country: string, take: number, page: number) => {
  const response = async () => {
    const { data } = await instance.get("camping", {
      params: { country, take, page },
    })
    return data
  }
  return useQuery({ queryKey: ["campingList", country, page, take], queryFn: response })
}
