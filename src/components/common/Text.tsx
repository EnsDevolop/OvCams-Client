import styled from "@emotion/styled"
import React from "react" // Ensure React is imported when using JSX

interface IText {
  size: "medium" | "small" | "large"
  children: React.ReactNode
}

const Text = ({ size = "medium", children }: IText) => {
  return <TextBlock size={size}>{children}</TextBlock>
}

export default Text

const TextBlock = styled.span<{ size: "medium" | "small" | "large" }>`
  ${({ size }) => {
    switch (size) {
      case "small":
        return `
          font-size: 16px;
          line-height: 18px;
        `
      case "medium":
        return `
          font-size: 18px;
          line-height: 20px;
        `
      case "large":
        return `
          font-size: 20px;
          line-height: 24px;
        `
      default:
        return `
          font-size: 18px;
          line-height: 20px;
        `
    }
  }};
`
