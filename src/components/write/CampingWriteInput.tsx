import styled from "@emotion/styled"
import Input from "../common/Input"

export default function CampingWriteInput({
  name,
  value,
  onChange,
  label,
}: {
  value: string | number | null
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  label: string
}) {
  return (
    <SearchInputBlock>
      <LabelStyles>{label}</LabelStyles>
      <Input name={name} className={name} disabled={false} type="text" value={value} onChange={onChange} />
    </SearchInputBlock>
  )
}

const SearchInputBlock = styled.div`
  width: 300px;
  height: 40px;
  box-sizing: border-box;
  margin: 20px 0;
  position: relative;
  border: 1px solid #dddddd !important;
  display: flex;
  align-items: center;
  padding: 2px 8px;
`

const LabelStyles = styled.label`
  display: inline-block;
  position: absolute;
  top: -20px;
  left: 14px;
  padding: 10px;
  background: #000000;
  font-size: 14px;
  color: #eaeaea;
  font-weight: bold;
  vertical-align: -1px;
`
