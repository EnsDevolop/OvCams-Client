"use clinet";

import { Continent } from "@/libs/constants/Contient";
import styled from "@emotion/styled";
import TextButton from "../common/TextButton";
import { useContinentStore } from "@/libs/layouts/providers/ContinentStoreContextProvider";
import { themedPalette } from "@/libs/styles/theme";
import { type Continent as ContinentType } from "@/stores/continent";

export default function CampingHeader() {
  const { continent, selectedCountry, changeContinent } = useContinentStore(
    (state) => state
  );

  return (
    <CampingHeaderBlock>
      <CampingHeaderInner>
        {Continent.map((contin) => (
          <TextButton
            className="continentStateButton"
            disabled={false}
            type="button"
            color="whtie"
            sz="medium"
            active={contin.tab === continent}
            onClick={() => changeContinent(contin.tab as ContinentType)}
          >
            {contin.tab}
          </TextButton>
        ))}
      </CampingHeaderInner>
    </CampingHeaderBlock>
  );
}

const CampingHeaderBlock = styled.div`
  width: 100vw;
  height: 60px;
  background-color: ${themedPalette.black};
`;
const CampingHeaderInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 180px;
`;
