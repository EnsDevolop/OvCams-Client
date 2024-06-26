"use client"

import CampingForm from "@/components/camping/CampingForm"
import BlogCardList from "@/components/post/BlogCardList"
import { useCampingListQuery } from "@/libs/apis/camping"
import { useContinentStore } from "@/libs/layouts/providers/ContinentStoreContextProvider"

export default function CampingLandingContainer() {
  const { selectedCountry } = useContinentStore((state) => state)
  const { data } = useCampingListQuery({ p: "", country: selectedCountry, take: 9, page: 1 })
  return <CampingForm>{data && <BlogCardList list={data?.data} />}</CampingForm>
}
