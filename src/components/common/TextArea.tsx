import styled from "@emotion/styled"
import Text from "./Text"

const TextArea = ({ width, height, label, placeholder, onChange, value }) => {
  return (
    <TextAreaBlock width={width} height={height}>
      {label && <Text size="medium">{label}</Text>}
      <textarea value={value} onChange={onChange} placeholder={placeholder} />
    </TextAreaBlock>
  )
}

export default TextArea

const TextAreaBlock = styled.div<{ width: string; height: string }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  transition: all 0.125s ease-in;
  cursor: text;
  textarea {
    width: 100%;
    height: 100%;
    border: 1px solid white;
    border-radius: 5px;
    transition: all 0.125s ease-in;
    font-size: 16px;
    line-height: 18px;
    flex: 1;
    display: block;
    padding: 12px;
    outline: 0;
    background: transparent;
    min-width: 0;
    resize: none;
    &::placeholder {
      color: #8f8f8f;
    }
  }
`
