import { css } from "@emotion/react"
import { themedPalette, themes } from "./theme"
const GlobalStyles = css`
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif,
      "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR",
      "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    background-color: #0b0b0b;
  }

  * {
    box-sizing: inherit;
  }

  code {
    font-family: "Fira Mono", source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  span,
  p,
  h1,
  h2,
  h3,
  h4,
  input,
  button,
  textarea {
    font-family: inherit;
    color: ${themedPalette.white};
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    ${themes.default}
  }
`

export default GlobalStyles
