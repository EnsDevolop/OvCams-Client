import styled from "@emotion/styled"
import React from "react"

export type InputProps = {
  name: string
  className: string
  disabled: boolean
  type: "submit" | "text" | "password"
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(function (props, ref) {
  const { value, onChange, name, className, type, disabled } = props

  return (
    <InputBlock
      name={name}
      className={className}
      type={type}
      value={value}
      onChange={onChange}
      ref={ref}
      disabled={disabled}
      autoComplete="off"
    />
  )
})

const InputBlock = styled.input<{ disabled: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0;
  border: 0;
  border-radius: 0;
  margin: 0;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  color: inherit;
  padding: 1px 2px;
  font-size: 14px;
  font-weight: 400;
  font-family: Roboto;
  line-height: 20px;
  width: 100%;
`

export default Input
