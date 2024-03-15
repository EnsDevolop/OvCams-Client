"use client";

import styled from "@emotion/styled";

export default function SlideForm({ children }: { children: React.ReactNode }) {
  return (
    <SlideContainer>
      <SlideWrapper>{children}</SlideWrapper>
    </SlideContainer>
  );
}

const SlideContainer = styled.div`
  display: flex;
  width: 100vw;
  overflow: hidden;
  margin: 0;
  height: 100vh;
  background-color: #0f0f0f;
`;

const SlideWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  margin: 1px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
