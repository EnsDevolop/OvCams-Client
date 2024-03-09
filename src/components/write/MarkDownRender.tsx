import { marked } from "marked";

export default function MarkDownRender({ mark }: { mark: any }) {
  const html = marked.parse(mark);

  console.log(html);
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
}
