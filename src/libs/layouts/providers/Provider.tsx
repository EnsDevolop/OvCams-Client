"use client"

import Header from "@/components/header/Header"
import styled from "@emotion/styled"
import React from "react"
import FloatingHeader from "@/components/header/FloatingHeader"
import Footer from "@/components/footer/Footer"

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Wrapper>
        <Header />
        <FloatingHeader />
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const Main = styled.div`
  width: 100%;
  height: auto;
`
