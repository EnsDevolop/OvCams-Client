import { marked } from "marked"

export default function MarkDownRender({ mark }: { mark: string }) {
  const html = marked.parse(mark)

  return (
    <div
      style={{ width: "50%", height: "600px", overflowWrap: "break-word" }}
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  )
}
