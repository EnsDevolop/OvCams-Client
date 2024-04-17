"use client"

import { useInput } from "@/libs/hooks"
import CampingWriteInput from "@/components/write/CampingWriteInput"
import MarkdownEditor from "@/components/write/MarkDownEditor"
import MarkDownRender from "@/components/write/MarkDownRender"
import styled from "@emotion/styled"
import CheckBox from "@/components/common/CheckBox"
import { ICamping } from "@/libs/apis/camping/type"
import ImageInput from "./ImageInput"
import ImagesInput from "./ImagesInput"
import { useCampingCreateMutation } from "@/libs/apis/camping"
import TextButton from "@/components/common/TextButton"
import toast from "react-hot-toast"

export default function EditPanelContainer() {
  const { mutate: campingCreateMutation } = useCampingCreateMutation()
  const {
    form: value,
    setForm: setValue,
    onChange,
  } = useInput<Omit<ICamping, "like" | "like_count" | "reviews" | "recommend" | "campingID">>({
    placeName: "",
    country: "",
    address: "",
    number: "",
    content: "",
    mainImage: "",
    images: [],
    period: [],
    facility: [],
    homepage: null,
  })

  const createCampingHandling = () => {
    const { placeName, country, address, number, mainImage, period, facility, homepage } = value
    if (placeName && country && address && number && mainImage && period.length > 0 && facility.length > 0) {
      campingCreateMutation(value)
    } else {
      toast.error("Some required fields are missing")
    }
  }

  return (
    <CampingWriteBlock>
      <CheckBoxesBlock>
        <InfoInputBlock>
          <InputsBlock>
            <CampingWriteInput name="placeName" value={value.placeName} onChange={onChange} label="place name" />
            <CampingWriteInput name="country" value={value.country} onChange={onChange} label="country" />
            <CampingWriteInput name="address" value={value.address} onChange={onChange} label="address" />
            <CampingWriteInput name="number" value={value.number} onChange={onChange} label="contact number" />
            <CampingWriteInput name="homepage" value={value.homepage} onChange={onChange} label="homepage" />
          </InputsBlock>
          <CheckBoxesBlock>
            <CheckBox
              label="Period"
              value={value.period}
              setValue={(e: string[]) => setValue({ ...value, period: e })}
              options={["spring", "summer", "autumn", "winter"]}
            />
            <CheckBox
              label="Facility"
              value={value.facility}
              setValue={(e: string[]) => setValue({ ...value, facility: e })}
              options={["electron", "hot water", "playground", "pool", "exercise facility", "store"]}
            />
          </CheckBoxesBlock>
        </InfoInputBlock>
        <ImageInputBlock>
          <ImageInput
            value={value.mainImage}
            setValue={(e: string) => setValue({ ...value, mainImage: e })}
            width="665px"
            height="495px"
            placeholder="select main image"
          />
          <ImagesInput
            value={value.images}
            placeholder="select images"
            width="160px"
            height="160px"
            setValue={(e: string[]) => setValue({ ...value, images: e })}
          />
        </ImageInputBlock>
        <MarkdownDivider>
          <MarkdownEditor onChangeMarkDown={(e: string) => setValue({ ...value, content: e })} />
          <MarkDownRender mark={value.content} />
        </MarkdownDivider>
      </CheckBoxesBlock>
      <TextButton
        onClick={createCampingHandling}
        className="submit"
        disabled={false}
        type={"button"}
        color="white"
        sz="medium"
        active={false}
      >
        submit
      </TextButton>
    </CampingWriteBlock>
  )
}

const CampingWriteBlock = styled.div`
  margin-top: 60px;
  width: 100vw;
  padding: 0 60px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 60px;
`

const MarkdownDivider = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;
`

const InputsBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const InfoInputBlock = styled.div`
  display: flex;
  flex-direction: column;
`

const CheckBoxesBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const ImageInputBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 30px;
`
