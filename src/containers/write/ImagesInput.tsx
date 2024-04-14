import React, { useEffect } from "react"
import styled from "@emotion/styled"
import { useImageMutation } from "@/libs/apis/image"

interface ImgInputType {
  value: string[] // 이미지 URL의 배열
  setValue: (value: string[]) => void
  label?: string
  width: string
  height: string
  placeholder?: string
}

export default function ImagesInput({ value, setValue, label, width, height, placeholder }: ImgInputType) {
  const { mutate: ImageMutation, data } = useImageMutation()

  const onCustomInputClick = () => {
    const fileInput = document.getElementById("imageInput")
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
    if (data) setValue([...value, data.img])
  }, [data])

  return (
    <ImgInputContainer>
      {label && <InputLabelBox>{label}</InputLabelBox>}
      <StyledInput id="imageInput" type="file" accept="image/png, image/jpg, image/jpeg" onChange={onChange} />
      <CustomLabel onClick={onCustomInputClick}>{placeholder}</CustomLabel>
      <GridContainer>
        {value.length > 0 &&
          value.map((imageUrl, index) => (
            <Img key={index} src={imageUrl} alt="Preview" width={width} height={height} />
          ))}
      </GridContainer>
    </ImgInputContainer>
  )
}

const ImgInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const StyledInput = styled.input`
  display: none;
`

const CustomLabel = styled.div`
  font-size: 18px;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`

const Img = styled.img`
  width: ${({ width }) => width ?? "180px"};
  height: ${({ height }) => height ?? "180px"};
  border-radius: 4px;
  border: 1px solid white;
`

const InputLabelBox = styled.div`
  font-size: 22px;
  font-weight: 400;
`
