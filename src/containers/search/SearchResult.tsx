import BlogCardList from "@/components/blog/BlogCardList";
import SearchResultInfo from "@/components/search/SearchResult";

export default function SearchResult() {
  return (
    <div>
      <SearchResultInfo />
      <BlogCardList data={[]} />
    </div>
  );
}
