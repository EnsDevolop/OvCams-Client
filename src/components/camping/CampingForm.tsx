"use client";

import CampingHeader from "./CampingHeader";
import styled from "@emotion/styled";
import CampingSide from "./CampingSide";

export default function CampingForm({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CampingBox>
      <CampingHeader />
      <CampingMain>
        <CampingSide />
        {children}
      </CampingMain>
    </CampingBox>
  );
}

const CampingBox = styled.div`
  width: 100vw;
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const CampingMain = styled.div`
  width: 100vw;
  height: calc(100vh - 180px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
