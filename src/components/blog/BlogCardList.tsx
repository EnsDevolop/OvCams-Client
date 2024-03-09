import BlogCard from "./BlogCard";

export default function BlogCardList({ data }) {
  return (
    <div>
      {data.map(() => (
        <BlogCard />
      ))}
    </div>
  );
}
