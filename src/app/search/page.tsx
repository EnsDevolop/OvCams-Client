import LargeSearchInput from "@/containers/search/LargeSearchInput"
import SearchLayout from "./layout"
import SearchResult from "@/containers/search/SearchResult"
import styled from "@emotion/styled"

export default function Home() {
  return (
    <div>
      <LargeSearchInput />
      <SearchResult />
    </div>
  )
}

