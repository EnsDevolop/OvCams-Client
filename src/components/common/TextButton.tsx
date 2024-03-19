import styled from "@emotion/styled"
import Button, { ButtonPropsProps } from "./Button"
import { themedPalette } from "@/libs/styles/theme"
import React from "react"
import useFilteredProps from "@/libs/hooks/useFilteredProps"
import { keyframes } from "@emotion/react"

type IconProps = {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}
type OtherProps = { color: string; sz: string; active: boolean }
type TextButtonProps = ButtonPropsProps & IconProps & OtherProps

const included = ["className", "children", "startIcon", "endIcon", "color", "sz", "disabled", "active"]

const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps>(function TextButton(props, ref) {
  const { color, startIcon, endIcon, disabled, children, active, sz, className } = props

  const others = useFilteredProps(props, included) as Omit<ButtonPropsProps, "children" | "className">
  return (
    <TextButtonBox color="white" sz={sz} active={active} ref={ref} className={className} {...others}>
      {startIcon}
      {children}
      {endIcon}
      <TextButtonBottomBar active={active} />
    </TextButtonBox>
  )
})

const FontWeightKeyFrame = keyframes`
  0%{
    font-weight: 400
  }
  100%{
    font-weight: 600
  }
`

const BorderBottomKeyFrame = keyframes`
  0%{
    width: 0
  }
  100%{
    width: 100%
  }
`

const TextButtonBox = styled(Button)<OtherProps>`
  color: ${themedPalette.white};
  padding: 1px 2px;
  font-size: ${({ sz }) => (sz === "small" ? "14px" : "18px")};
  font-weight: ${({ active }) => (active ? 600 : 400)};
  font-family: Roboto;
  line-height: 20px;
  overflow: hidden;
  animation: ${({ active }) => active && FontWeightKeyFrame} 1s;
`

const TextButtonBottomBar = styled.div<{ active: boolean }>`
  content: "";
  position: absolute;
  bottom: 0;
  left: ${({ active }) => (active ? 0 : "-100%")};
  width: ${({ active }) => (active ? "100%" : 0)};
  height: 1px;
  background-color: ${themedPalette.white};
  animation: ${({ active }) => active && BorderBottomKeyFrame} 1s;
`

export default TextButton
