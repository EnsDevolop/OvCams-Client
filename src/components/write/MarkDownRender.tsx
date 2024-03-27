import { marked } from "marked"

export default function MarkDownRender({ mark }: { mark: string }) {
  const html = marked.parse(mark)

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>
}
