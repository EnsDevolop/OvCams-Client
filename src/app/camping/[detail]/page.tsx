import BlogDetailContainer from "@/containers/post/BlogDetailContainer"

export default function Home({ params }: { params: { detail: string } }) {
  return <BlogDetailContainer id={params.detail} />
}
