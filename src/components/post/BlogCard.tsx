import styled from "@emotion/styled"
import Image from "next/image"
import ASIA from "@/assets/slide/아시아.png"
import TextButton from "../common/TextButton"
import { ICamping } from "@/libs/apis/camping/type"

interface IButton {
  onClick: () => void
}

export default function BlogCard({
  placeName,
  recommend,
  onClick,
}: Pick<ICamping, "placeName" | "recommend"> & IButton) {
  return (
    <CampingPostBlock onClick={onClick}>
      <MainCampingImg src={ASIA} alt={"main image"} width={240} height={180} />
      <CampingSimpleInfoBox>
        <span>{placeName}</span>
        <TextButton className="recommend" disabled={false} type="button" color="white" sz="small" active={false}>
          {recommend}
        </TextButton>
      </CampingSimpleInfoBox>
    </CampingPostBlock>
  )
}

const CampingPostBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 200px;
  cursor: pointer;
`

const MainCampingImg = styled(Image)`
  width: 100%;
  height: 180px;
  border-radius: 4px;
`

const CampingSimpleInfoBox = styled.div`
  height: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2px 0;
`
