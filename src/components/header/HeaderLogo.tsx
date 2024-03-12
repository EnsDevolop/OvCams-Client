import { themedPalette } from "@/libs/styles/theme";
import styled from "@emotion/styled";
import Image from "next/image";
import logo from "@/assets/logo.svg";

export default function HeaderLogo() {
  return (
    <HeaderLogoBlock>
      <Image src={logo} alt="logo" width={26} height={26} />
      <span>OVERCAMS</span>
    </HeaderLogoBlock>
  );
}

const HeaderLogoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 400;
  color: ${themedPalette.white};
  font-size: 22px;
  text-decoration: none;
  font-family: Robot;
  line-height: normal;
`;
