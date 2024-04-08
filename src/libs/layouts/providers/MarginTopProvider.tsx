"use client"

import { IChildren } from "@/libs/types"
import styled from "@emotion/styled"

export default function MarginTopProvider({ children }: IChildren) {
  return <MarginTopBlock>{children}</MarginTopBlock>
}

const MarginTopBlock = styled.div`
  margin-top: 60px;
`
