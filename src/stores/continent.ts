import { createStore } from "zustand/vanilla"

export type Continent = "ASIA" | "AFRICA" | "EUROPE" | "OCEANIA" | "AMERICA"
export type Country =
  | "KOREA"
  | "JAPAN"
  | "THAILAND"
  | "MONGOLIA"
  | "NEPAL"
  | "FRANCE"
  | "SWEDEN"
  | "SWITZERLAND"
  | "NORWAY"
  | "UNITED KINGDOM"
  | "CROATIA"
  | "SOUTH AFRICA"
  | "KENYA"
  | "NAMIBIA"
  | "TANZANIA"
  | "UGANDA"
  | "NEW ZEALAND"
  | "AUSTRALIA"
  | "FIJI"
  | "NEW CALEDONIA"
  | "UNITED STATES"
  | "CANADA"
  | "COSTA RICA"
  | "CHILE"
  | "BRAZIL"

export type ContinentState = {
  continent: Continent
  selectedCountry: Country
}

export type ContinentActions = {
  changeContinent: (continent: Continent) => void
  selectCountry: (country: Country) => void
  reset: () => void
}

export type ContinentStore = ContinentActions & ContinentState
export const defaultInitState: ContinentState = {
  continent: "ASIA",
  selectedCountry: "KOREA",
}

export const createContinentAndCountry = (initState: ContinentState = defaultInitState) => {
  return createStore<ContinentStore>()((set) => ({
    ...initState,
    changeContinent: (continent: Continent) =>
      set({
        continent,
        selectedCountry: getCountriesByContinent(continent)[0],
      }),
    selectCountry: (country: Country) => set({ selectedCountry: country }),
    reset: () => set(() => defaultInitState),
  }))
}

const getCountriesByContinent = (continent: Continent): Country[] => {
  switch (continent) {
    case "ASIA":
      return ["KOREA", "JAPAN", "THAILAND", "MONGOLIA", "NEPAL"]
    case "EUROPE":
      return ["FRANCE", "SWEDEN", "SWITZERLAND", "NORWAY", "UNITED KINGDOM", "CROATIA"]
    case "AFRICA":
      return ["SOUTH AFRICA", "KENYA", "NAMIBIA", "TANZANIA", "UGANDA"]
    case "OCEANIA":
      return ["NEW ZEALAND", "AUSTRALIA", "FIJI", "NEW CALEDONIA"]
    case "AMERICA":
      return ["UNITED STATES", "CANADA", "COSTA RICA", "CHILE", "BRAZIL"]
    default:
      return []
  }
}
