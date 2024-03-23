"use client"

import SearchInput from "@/components/search/SearchInput"
import styled from "@emotion/styled"
import { ASIA } from "@/assets/slide"

export default function LargeSearchInput() {
  return (
    <SearchBackGroundImageBlock url={ASIA.src}>
      <LargeSearchInputBlock className="LargeSearchInput" />
    </SearchBackGroundImageBlock>
  )
}

const SearchBackGroundImageBlock = styled.div<{ url: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 300px;
  background-image: ${({ url }) => `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5) ), url(${url})`};
  background-size: cover;
  background-repeat: no-repeat;
`

const LargeSearchInputBlock = styled(SearchInput)`
  width: 600px;
  height: 40px;
  border: 1px solid white;
  background-color: black;
`
