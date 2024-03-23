import { Country } from "@/libs/constants/Country"
import { useContinentStore } from "@/libs/layouts/providers/ContinentStoreContextProvider"
import TextButton from "../common/TextButton"
import { type Country as CountryType } from "@/stores/continent"
import styled from "@emotion/styled"
import { useEffect, useState } from "react"

export default function CampingSide() {
  const { continent, selectedCountry, selectCountry } = useContinentStore((state) => state)

  const [visible, setVisible] = useState(true)
  const [prevContinent, setPrevContinent] = useState(continent)

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null
    if (visible) {
      setVisible(false)
    } else {
      timeoutId = setTimeout(() => setPrevContinent(continent), 700)
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [continent])

  return (
    <CampingSideBlock worked={prevContinent !== continent}>
      <CampingSideInner>
        {Country[prevContinent].map((count) => (
          <TextButton
            key={count}
            className="countryStateButton"
            disabled={false}
            type="button"
            color="white"
            sz="medium"
            active={selectedCountry === count}
            onClick={() => selectCountry(count as CountryType)}
          >
            {count}
          </TextButton>
        ))}
      </CampingSideInner>
    </CampingSideBlock>
  )
}

const CampingSideBlock = styled.div<{ worked: boolean }>`
  transform: translateX(${({ worked }) => (worked ? "-300%" : "0")});
  transition: transform 0.5s ease;
`

const CampingSideInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 60px;
`
