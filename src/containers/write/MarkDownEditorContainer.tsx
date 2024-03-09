"use clinet";

import MarkdownEditor from "@/components/write/MarkDownEditor";
import MarkDownRender from "@/components/write/MarkDownRender";
import { useState } from "react";

export default function () {
  const [markdown, setMarkdown] = useState("");
  return (
    <>
      <MarkdownEditor
        onChangeMarkDown={(markDown: string) => setMarkdown(markDown)}
      />
      <MarkDownRender mark={markdown} />
    </>
  );
}
