import Image from "next/image"
import styled from "@emotion/styled"
import { themedPalette } from "@/libs/styles/theme"
import logo from "@/assets/logo.svg"
import { keyframes, css } from "@emotion/react"
import TextButton from "../common/TextButton"
import { useAnimation } from "@/libs/hooks"

interface IAuthModalProps {
  children: React.ReactNode
  visible: boolean
  onClose: () => void
}

const CloseButton = styled(TextButton)`
  position: fixed;
  top: 10px;
  right: 10px;
`

export default function AuthModal({ children, visible, onClose }: IAuthModalProps) {
  const [worked, setWorked] = useAnimation(visible, 400)
  if (!visible && worked) return null

  return (
    <AuthModalBlock>
      <AuthModalWrapper visible={visible}>
        <CloseButton
          onClick={onClose}
          className="closeModalButton"
          disabled={false}
          type="button"
          color="white"
          sz="small"
          active={false}
        >
          X
        </CloseButton>
        <AuthModalTitle>Login to your Account</AuthModalTitle>
        <LoginFormWrapper>
          <LogoBlock>
            <Image src={logo} alt="logo" width={120} height={90} />
            <span style={{ fontSize: "14px" }}>OVERSEAS CAMPINGS</span>
          </LogoBlock>
          {children}
        </LoginFormWrapper>
      </AuthModalWrapper>
    </AuthModalBlock>
  )
}

const PopIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(400px) scale(0.75);
  }
  75% {
    opacity: 1;
    transform: translateY(-16px) scale(1.0);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`

const PopOut = keyframes`
  100% {
    opacity: 0;
    transform: translateY(400px) scale(0.75);
  }
  25% {
    opacity: 1;
    transform: translateY(-16px) scale(1.0);
  }
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
`

const AuthModalBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
`

const AuthModalWrapper = styled.div<{ visible: boolean }>`
  width: 430px;
  height: 300px;
  background-color: #0b0b0b;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${({ visible }) =>
    visible
      ? css`
          ${PopIn} 0.4s forwards ease-in-out
        `
      : css`
          ${PopOut} 0.4s forwards ease-in-out
        `};
`

const AuthModalTitle = styled.span`
  color: ${themedPalette.white};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-top: 16px;
`

const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 45px;
`

const LogoBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  align-items: center;
  justify-content: center;
`
