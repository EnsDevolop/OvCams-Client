"use client"

import styled from "@emotion/styled"
import { useTabs } from "@/libs/hooks"
import TextButton from "@/components/common/TextButton"
import BlogDetail from "@/components/post/BlogDetail"
import BlogDetailIntroduce from "@/components/post/BlogDetailIntroduce"
import BlogDetailMap from "@/components/post/BlogDetailMap"
import BlogDetailReview from "@/components/post/BlogDetailReview"
import { useCampingDetailQuery } from "@/libs/apis/camping"
import { useLikePatchMutation } from "@/libs/apis/like"
import ReviewTextArea from "../review/ReviewTextArea"
import { useWriteReviewMutation } from "@/libs/apis/review"

export default function BlogDetailContainer({ id }: { id: string }) {
  const { data } = useCampingDetailQuery(id)
  const { mutate: campingLike } = useLikePatchMutation(id)
  const { mutate } = useWriteReviewMutation(id)
  const [currentIndex, currentItem, setCurrentIndex] = useTabs(0, [
    <BlogDetailIntroduce images={data ? data?.images : []} content={data ? data?.content : ""} />,
    <BlogDetailMap />,
    <BlogDetailReview reviews={data ? data?.reviews : []}>
      <ReviewTextArea onClick={mutate} />
    </BlogDetailReview>,
  ])

  return (
    <Block>
      <Inner>
        {data && (
          <BlogDetail
            mainImage={data?.mainImage}
            address={data?.address}
            number={data?.number}
            period={data?.period}
            homepage={data?.homepage}
            like={data?.like}
            like_count={data?.like_count}
            onClick={campingLike}
          />
        )}
        <CampingInfoHeader>
          <TextButton
            className="introduce"
            disabled={false}
            type={"button"}
            color={"white"}
            sz={"medium"}
            active={currentIndex === 0}
            onClick={() => setCurrentIndex(0)}
          >
            캠핑장 소개
          </TextButton>
          <TextButton
            className="position"
            disabled={false}
            type={"button"}
            color={"white"}
            sz={"medium"}
            active={currentIndex === 1}
            onClick={() => setCurrentIndex(1)}
          >
            위치/주변 정보
          </TextButton>
          <TextButton
            className="review"
            disabled={false}
            type={"button"}
            color={"white"}
            sz={"medium"}
            active={currentIndex === 2}
            onClick={() => setCurrentIndex(2)}
          >
            리뷰
          </TextButton>
        </CampingInfoHeader>
        <CampingInfoMain>{currentItem}</CampingInfoMain>
      </Inner>
    </Block>
  )
}

const Block = styled.div`
  margin-top: 60px;
  width: 100vw;
  height: auto;
`

const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const CampingInfoHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 300px;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 60px;
  background-color: black;
`

const CampingInfoMain = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
