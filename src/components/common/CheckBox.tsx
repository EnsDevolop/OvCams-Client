import { CheckBoxIcon } from "@/assets/icon"
import React from "react"
import styled from "@emotion/styled"
import Text from "./Text"

interface CheckBoxProps<T> {
  value: T[]
  label?: string
  setValue: (e: T[]) => void
  options: T[]
}

const CheckBox = <T extends string | number>({ label, value, setValue, options }: CheckBoxProps<T>): JSX.Element => {
  const handleToggle = (option: T): void => {
    const isSelected: boolean = value.includes(option)

    if (isSelected) {
      setValue(value.filter((item: T) => item !== option))
    } else {
      const newValue: T[] = [...value, option].sort((a: T, b: T) => options.indexOf(a) - options.indexOf(b))
      setValue(newValue)
    }
  }

  return (
    <CheckBoxBlock>
      <Text size="medium">{label}</Text>
      <CheckBoxListBlock>
        {options.map((option: T, index: number) => (
          <CheckBlock key={index} onClick={() => handleToggle(option)}>
            <CheckBoxIcon active={value.includes(option)} />
            {option}
          </CheckBlock>
        ))}
      </CheckBoxListBlock>
    </CheckBoxBlock>
  )
}

export default CheckBox

const CheckBoxBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const CheckBoxListBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
`

const CheckBlock = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
`
