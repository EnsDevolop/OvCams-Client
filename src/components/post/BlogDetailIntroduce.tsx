import styled from "@emotion/styled"
import Image from "next/image"
import MarkDownRender from "@/components/write/MarkDownRender"

interface IBlogDetailIntroduce {
  images: string[]
  content: string
}

export default function BlogDetailIntroduce({ images, content }: IBlogDetailIntroduce) {
  return (
    <CampingIntroduceBlock>
      <CampingImgList>{images?.map((e: any) => <Image src={e} alt={e} width={160} height={120} />)}</CampingImgList>
      {content && <MarkDownRender mark={content} />}
      <div>
        <span>취사장, 화장실, 욕탕</span>
      </div>
    </CampingIntroduceBlock>
  )
}

const CampingIntroduceBlock = styled.div`
  height: auto;
  padding: 60px 0;
`

const CampingImgList = styled.div`
  overflow-x: hidden;
  width: 80vw;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 30px;
`
