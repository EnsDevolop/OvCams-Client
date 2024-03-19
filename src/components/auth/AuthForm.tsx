import React from "react"
import TextButton from "../common/TextButton"
import { GoogleIcon, NaverIcon } from "@/assets/auth"
import styled from "@emotion/styled"

export default function AuthForm() {
  return (
    <LoginBox>
      <TextButton
        className="google"
        disabled={false}
        type="button"
        color="white"
        sz="small"
        active={false}
        onClick={() => {
          window.location.href = "http://localhost:8080/auth/google"
        }}
        startIcon={<GoogleIcon />}
      >
        Continue with Google
      </TextButton>
      <TextButton
        className="naver"
        disabled={false}
        type="button"
        color="white"
        sz="small"
        active={false}
        onClick={() => {
          window.location.href = "http://localhost:8080/auth/naver"
        }}
        startIcon={<NaverIcon />}
      >
        Continue with Naver
      </TextButton>
    </LoginBox>
  )
}

const LoginBox = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
`
