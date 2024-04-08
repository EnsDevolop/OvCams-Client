import styled from "@emotion/styled"
import Image from "next/image"

interface IHeaderUserIcon {
  onClick: () => void
  picture: string
}

export default function HeaderUserIcon({ onClick, picture }: IHeaderUserIcon) {
  return (
    <HeaderUserIconBlock onClick={onClick}>
      <Image src={picture} alt="profile" width={24} height={24} />
    </HeaderUserIconBlock>
  )
}

const HeaderUserIconBlock = styled.div`
  cursor: pointer;
`
