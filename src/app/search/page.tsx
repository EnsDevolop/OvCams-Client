import LargeSearchInput from "@/containers/search/LargeSearchInput";
import SearchLayout from "./layout";
import SearchResult from "@/containers/search/SearchResult";

export default function Home() {
  return (
    <SearchLayout>
      <LargeSearchInput />
      <SearchResult/>
    </SearchLayout>
  )
}
