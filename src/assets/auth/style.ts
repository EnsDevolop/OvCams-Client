import { themedPalette } from "@/libs/styles/theme";
import styled from "@emotion/styled";

export const AuthLogoBox = styled.div`
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${themedPalette.white};
`;
