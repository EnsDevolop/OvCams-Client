"use client"

import CampingHeader from "./CampingHeader"
import styled from "@emotion/styled"
import CampingSide from "./CampingSide"

export default function CampingForm({ children }: { children: React.ReactNode }) {
  return (
    <CampingBox>
      <CampingHeader />
      <CampingMain>
        <CampingSide />
        <CampingResultBlock>{children}</CampingResultBlock>
      </CampingMain>
    </CampingBox>
  )
}

const CampingBox = styled.div`
  width: 100vw;
  display: table;
`

const CampingMain = styled.div`
  min-width: 1280px;
  width: 100%;
  min-height: calc(100vh - 60px);
  height: auto;
  padding: 60px 180px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`

const CampingResultBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;
`
