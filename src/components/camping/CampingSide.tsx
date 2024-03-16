import { Country } from "@/libs/constants/Country";
import { useContinentStore } from "@/libs/layouts/providers/ContinentStoreContextProvider";
import TextButton from "../common/TextButton";
import { type Country as CountryType } from "@/stores/continent";
import styled from "@emotion/styled";

export default function CampingSide() {
  const { continent, selectedCountry, selectCountry } = useContinentStore(
    (state) => state
  );

  return (
    <CampingSideBlock>
      <CampingSideInner>
        {Country[continent].map((count) => (
          <TextButton
            className="countryStateButton"
            disabled={false}
            type="button"
            color="whtie"
            sz="medium"
            active={selectedCountry === count.tab}
            onClick={() => selectCountry(count.tab as CountryType)}
          >
            {count.tab}
          </TextButton>
        ))}
      </CampingSideInner>
    </CampingSideBlock>
  );
}

const CampingSideBlock = styled.div``;

const CampingSideInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 60px;
`;
