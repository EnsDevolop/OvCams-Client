"use client"

import BestSlide from "@/components/best/BestSlide"
import { useBestCampingQuery } from "@/libs/apis/camping"

export default function Best() {
  const { data } = useBestCampingQuery()
  return <BestSlide data={data?.data} />
}
