import BlogCardList from "@/components/post/BlogCardList"
import SearchResultInfo from "@/components/search/SearchResult"

export default function SearchResult() {
  return (
    <div>
      <SearchResultInfo />
      <BlogCardList data={[]} />
    </div>
  )
}
