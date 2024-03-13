import styled from "@emotion/styled";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        대한민국 대전광역시 유성구 장동 23-9 34111 <br />
        Contact : chemins60217@gmail.com | 010-7571-2800 <br />
        Copyright © 2024 OvCams Inc
      </FooterWrapper>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  position: absolute;
  bottom: -100%;
  height: 180px;
`;

const FooterWrapper = styled.div`
  width: 1608px;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 10px;
  padding: 30px 0;
`;
