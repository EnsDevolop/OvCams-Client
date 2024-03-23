"use client"

import styled from "@emotion/styled"

export default function MarginTopProvider({ children }: { children: React.ReactNode }) {
  return <MarginTopBlock>{children}</MarginTopBlock>
}

const MarginTopBlock = styled.div`
  margin-top: 60px;
`
