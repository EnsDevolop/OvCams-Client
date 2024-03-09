import { useCallback, useEffect, useRef } from "react";
import "codemirror/mode/markdown/markdown";
import "codemirror/addon/display/placeholder";
import "codemirror/lib/codemirror.css";
import Codemirror, { EditorFromTextArea, Editor } from "codemirror";

export interface IMarkdownEditorProps {
  onChangeMarkDown: (e: string) => void;
}

export default function MarkdownEditor({
  onChangeMarkDown,
}: IMarkdownEditorProps) {
  const textArea = useRef<HTMLTextAreaElement | null>(null);
  const codemirror = useRef<EditorFromTextArea | null>(null);

  useEffect(() => {
    if (!textArea.current) return;
    const cm = Codemirror.fromTextArea(textArea.current, {
      mode: "markdown",
      theme: "ayu-mirage",
      placeholder: "캠핑장에 대해 설명해주세요(가격 포함).",
      lineWrapping: true,
    });
    codemirror.current = cm;
    cm.on("change", onChange);
    return () => {
      cm.toTextArea();
    };
  }, []);

  const onChange = (cm: Editor) => {
    onChangeMarkDown(cm.getValue());
  };

  return (
    <div style={{ border: "1px solid #ccc" }}>
      <textarea
        ref={textArea}
        style={{ border: "none", width: "100%", height: "300px" }}
      />
    </div>
  );
}
