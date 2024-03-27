import { ICamping } from "@/libs/apis/camping/type"
import BlogCard from "./BlogCard"
import styled from "@emotion/styled"
import { useRouter } from "next/navigation"

export default function BlogCardList({ list }: { list: ICamping[] }) {
  const router = useRouter()
  return (
    <BlogCardListBLock>
      {list?.map((e, index) => (
        <BlogCard
          onClick={() => router.push(`/camping/${index}`)}
          key={index}
          placeName={e.placeName}
          recommend={e.recommend}
        />
      ))}
    </BlogCardListBLock>
  )
}

const BlogCardListBLock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 30px;
  min-height: 660px;
  width: 780px;
`
