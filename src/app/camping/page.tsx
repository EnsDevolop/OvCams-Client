import LargeSearchInput from "@/containers/search/LargeSearchInput"
import SearchResult from "@/containers/search/SearchResult"
import { Fragment } from "react"

export default function Home() {
  return (
    <Fragment>
      <LargeSearchInput />
      <SearchResult />
    </Fragment>
  )
}
