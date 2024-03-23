"use client"

import CampingForm from "@/components/camping/CampingForm"
import BlogCardList from "@/components/post/BlogCardList"
import SearchResultInfo from "@/components/search/SearchResult"
import { useCampingListQuery } from "@/libs/apis/camping"
import { useContinentStore } from "@/libs/layouts/providers/ContinentStoreContextProvider"

export default function SearchResult() {
  const { selectedCountry } = useContinentStore((state) => state)
  const { data } = useCampingListQuery(selectedCountry, 9, 1)
  return (
    <CampingForm>
      <SearchResultInfo />
      <BlogCardList list={data?.data?.data} />
    </CampingForm>
  )
}
