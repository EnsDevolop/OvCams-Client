"use client"

import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { ASIA, EUROPE, AFRICA, OCEANIA } from "@/assets/slide"
import { useEffect, useState } from "react"

export default function Slide() {
  const [activeSlide, setActiveSlide] = useState(0)
  const slides = [
    {
      imageUrl: `url(${ASIA.src})`,
      title: "ASIA",
    },
    {
      imageUrl: `url(${EUROPE.src})`,
      title: "EUROPE",
    },
    {
      imageUrl: `url(${AFRICA.src})`,
      title: "AFRICA",
    },
    {
      imageUrl: `url(${OCEANIA.src})`,
      title: "OCEANIA",
    },
  ]

  useEffect(() => {
    setActiveSlide(0)
  }, [])

  return (
    <>
      {slides.map((slide, index) => (
        <SlideBlock
          key={index}
          active={index === activeSlide}
          style={{ backgroundImage: slide.imageUrl }}
          onClick={() => setActiveSlide(index)}
        />
      ))}
    </>
  )
}

const SlideBlock = styled.div<{ active: boolean }>`
  height: 100%;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  border-radius: 2px;
  transition: all 0.7s ease-in-out;
  filter: blur(3px);
  width: ${(props) => (props.active ? "auto" : "60px")};

  ${({ active }) =>
    active &&
    css`
      flex: 5;
      filter: blur(0px);
    `}
`

// const SlideTitle = styled.h3`
//   position: absolute;
//   font-size: clamp(1rem, 5vw, 5rem);
//   bottom: 20px;
//   left: 20px;
//   margin: 0;
//   opacity: 0;
//   background-color: #e3fdf5;
//   background-image: linear-gradient(-225deg, #e3fdf5 0%, #ffe6fa 100%);
//   -webkit-background-clip: text;
//   background-clip: text;
//   -webkit-text-fill-color: transparent;

//   ${({ active }) =>
//     active &&
//     css`
//       opacity: 1;
//       transition: opacity 0.3s ease-in 0.4s;
//     `}
// `;
