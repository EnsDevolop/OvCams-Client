import styled from "@emotion/styled"
import TextButton from "@/components/common/TextButton"
import { HeartIcon } from "@/assets/icon"
import Image from "next/image"
import { ICamping } from "@/libs/apis/camping/type"

interface IBlogDetail
  extends Pick<ICamping, "mainImage" | "address" | "number" | "period" | "homepage" | "like" | "like_count"> {
  onClick: any
}

export default function BlogDetail({
  mainImage,
  address,
  number,
  period,
  homepage,
  like,
  like_count,
  onClick,
}: IBlogDetail) {
  return (
    <InfoBlock>
      <Image src={mainImage} alt={""} width={660} height={495} />
      <InfoInner>
        <InfoTextBlock>
          <span>Address : {address}</span>
          <span>Contact : {number}</span>
          <span>Homepage :{homepage}</span>
          <span>Period : {period}</span>
        </InfoTextBlock>
        <ButtonBlock>
          <TextButton
            className="heart"
            startIcon={<HeartIcon active={like} />}
            disabled={false}
            type="button"
            color="white"
            sz="small"
            onClick={onClick}
            active={false}
          >
            하트
            {like_count}
          </TextButton>
          <TextButton className="heart" disabled={false} type="button" color="white" sz="small" active={false}>
            문의하기
          </TextButton>
        </ButtonBlock>
      </InfoInner>
    </InfoBlock>
  )
}

const InfoBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 120px;
  padding: 60px 0;
`

const InfoTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 60px;
`

const InfoInner = styled.div`
  width: 660px;
  height: 495px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ButtonBlock = styled.div`
  display: flex;
  gap: 120px;
`
