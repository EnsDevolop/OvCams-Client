"use client"

import CampingForm from "@/components/camping/CampingForm"
import BlogCardList from "@/components/post/BlogCardList"
import { instance } from "@/libs/apis/axios"
import { useContinentStore } from "@/libs/layouts/providers/ContinentStoreContextProvider"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation"
import { useIntersectionObserver } from "@/libs/hooks"
import { ICampingResponse } from "@/libs/apis/camping/type"

export default function SearchResult() {
  const p = useSearchParams().get("p") as string
  const { selectedCountry } = useContinentStore((state) => state)

  const fetchCampingData = async ({ pageParam }: { pageParam?: number }) => {
    const { data } = (
      await instance.get<{ data: ICampingResponse }>("camping", {
        params: { p, country: selectedCountry, take: 9, page: pageParam },
      })
    ).data
    return data
  }

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: [p, selectedCountry],
    queryFn: fetchCampingData,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1
      return lastPage.data.length === 0 ? undefined : nextPage
    },
    select: (data) => ({
      pages: data?.pages.flatMap((page) => page?.data),
      pageParams: data.pageParams,
    }),
  })

  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  })

  return (
    <CampingForm>
      {data?.pages.length ? <BlogCardList list={data?.pages} /> : <span>no data</span>}
      <div ref={setTarget} />
    </CampingForm>
  )
}
