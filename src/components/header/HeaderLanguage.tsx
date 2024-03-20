import styled from "@emotion/styled"
import TextButton from "../common/TextButton"
import { themedPalette } from "@/libs/styles/theme"

export default function HeaderLanguage() {
  return (
    <HeaderLanguageBox>
      <TextButton className={""} disabled={true} type={"button"} color={""} sz={""} active={false}>
        KR
      </TextButton>
      <TextButton className={""} disabled={false} type={"button"} color={""} sz={""} active={true}>
        EN
      </TextButton>
    </HeaderLanguageBox>
  )
}

const HeaderLanguageBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  position: relative;
  &::after {
    content: "";
    width: 1px;
    height: 30px;
    content: "";
    position: absolute;
    left: 50%;
    background-color: ${themedPalette.white};
  }
`
