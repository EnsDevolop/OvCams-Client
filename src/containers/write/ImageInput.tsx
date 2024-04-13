import React, { useEffect } from "react"
import styled from "@emotion/styled"
import { useImageMutation } from "@/libs/apis/image"

interface ImgInputType {
  value: string | null
  label?: string
  width: string
  height: string
  placeholder?: string
  setValue: (e: string) => void
}

export default function ImageInput({ value, setValue, label, width, height, placeholder }: ImgInputType) {
  const { mutate: ImageMutation, data } = useImageMutation()

  const onCustomInputClick = () => {
    const fileInput = document.getElementById("imagesInput")
    if (fileInput) {
      fileInput.click()
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      ImageMutation(file)
    }
  }

  useEffect(() => {
    if (data) setValue(data?.img)
  }, [data])

  return (
    <ImgInputContainer>
      {label && <InputLabelBox>{label}</InputLabelBox>}
      <StyledInput id="imagesInput" type="file" accept="image/png, image/jpg, image/jpeg" onChange={onChange} />
      <CustomCircleInput onClick={onCustomInputClick} width={width} height={height}>
        {value ? (
          <Img src={value} alt="Preview" width={width} height={height} />
        ) : (
          <CustomLabel>{placeholder}</CustomLabel>
        )}
      </CustomCircleInput>
    </ImgInputContainer>
  )
}

const ImgInputContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: flex-start;
`

const StyledInput = styled.input`
  display: none;
`

const CustomLabel = styled.div`
  font-size: 18px;
`

const CustomCircleInput = styled.label<{ width?: string; height?: string }>`
  display: flex;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 4px;
  border: 1px solid white;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const Img = styled.img<{ width?: string; height?: string }>`
  width: ${({ width }) => width ?? "180px"};
  height: ${({ height }) => height ?? "180px"};
  border: 1px solid white;
`

const InputLabelBox = styled.div`
  font-size: 22px;
  font-weight: 400;
`
