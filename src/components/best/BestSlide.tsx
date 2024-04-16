import React, { useState } from "react"
import styled from "@emotion/styled"
import { ICampingBestResponse } from "@/libs/apis/camping/type"
import { useRouter } from "next/navigation"

export default function BestSlide({ data }: ICampingBestResponse) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const slideCount = data?.length
  const router = useRouter()

  const changeSlide = (direction: "up" | "down") => {
    if (direction === "up") {
      setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slideCount)
    } else if (direction === "down") {
      setActiveSlideIndex((prevIndex) => (prevIndex - 1 + slideCount) % slideCount)
    }
  }

  return (
    <Container>
      <Sidebar index={activeSlideIndex}>
        {data?.map((img, index) => <Title key={img.placeName}>{`Top ${index + 1}`}</Title>)}
      </Sidebar>
      <MainSlide index={activeSlideIndex}>
        {data?.map((img) => (
          <Slide key={img.placeName} image={img.mainImage} onClick={() => router.push(`camping/${img.campingID}`)}>
            {img.placeName}
          </Slide>
        ))}
      </MainSlide>
      <DownButton onClick={() => changeSlide("down")}>
        <i className="fas fa-arrow-down"></i>
      </DownButton>
      <UpButton onClick={() => changeSlide("up")}>
        <i className="fas fa-arrow-up"></i>
      </UpButton>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
`

const Sidebar = styled.div<{ index: number }>`
  height: 100%;
  width: 20%;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.5s ease-in-out;
  transform: ${({ index }) => `translateY(${index * 100}vh)`};
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
`

const Title = styled.span`
  font-size: 20px;
  line-height: 100vh;
  vertical-align: center;
`
const MainSlide = styled.div<{ index: number }>`
  height: 100%;
  position: absolute;
  top: 0;
  left: 20%;
  width: 80%;
  transition: transform 0.5s ease-in-out;
  transform: ${({ index }) => `translateY(-${index * 100}vh)`};
`

const Slide = styled.div<{ image: string }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 54px;
  padding-left: 300px;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 100%;
`

const Button = styled.button`
  background-color: #fff;
  border: none;
  color: #aaa;
  cursor: pointer;
  font-size: 16px;
  padding: 15px;
  position: absolute;
  left: 20%;
  top: 50%;
  z-index: 100;
  &:hover {
    color: #222;
  }
`

const DownButton = styled(Button)`
  transform: translateX(-100%);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`

const UpButton = styled(Button)`
  transform: translateY(-100%);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`
