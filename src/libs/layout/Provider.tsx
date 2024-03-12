"use client";

import Header from "@/components/header/Header";
import styled from "@emotion/styled";
import React from "react";
import FloatingHeader from "@/components/header/FloatingHeader";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Wrapper>
        <Header />
        <FloatingHeader />
        {children}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  min-height: 200vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
