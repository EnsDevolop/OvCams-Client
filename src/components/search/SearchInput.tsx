import { SearchIcon } from "@/assets/icon"
import Input from "../common/Input"
import styled from "@emotion/styled"
import { useInput, useKeyPress } from "@/libs/hooks"
import { useEffect } from "react"

export default function SearchInput({ className }: { className: string }) {
  const [value, onChange, onReset] = useInput("")
  const [enterPress] = useKeyPress("Enter")

  useEffect(() => {
    if (enterPress && value.length !== 0) {
      window.location.href = `/camping?p=${value}`
    }
  }, [enterPress])

  return (
    <SearchInputBlock className={className}>
      <Input name="search" value={value} onChange={onChange} className="SearchInput" disabled={false} type="text" />
      <SearchIcon />
    </SearchInputBlock>
  )
}

const SearchInputBlock = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2px 5px;
  width: 300px;
  height: 30px;
  color: white;
  background-color: transparent;
  border-bottom: 1px solid white;
  border-radius: 4px;
  gap: 30px;
`
