import { useEffect, useRef } from "react"
import styled from "@emotion/styled"
import "codemirror/mode/markdown/markdown"
import "codemirror/addon/display/placeholder"
import "codemirror/lib/codemirror.css"
import Codemirror, { EditorFromTextArea, Editor } from "codemirror"

export interface IMarkdownEditorProps {
  onChangeMarkDown: (e: string) => void
}

export default function MarkdownEditor({ onChangeMarkDown }: IMarkdownEditorProps) {
  const textArea = useRef<HTMLTextAreaElement | null>(null)
  const codemirror = useRef<EditorFromTextArea | null>(null)

  useEffect(() => {
    if (!textArea.current) return
    const cm = Codemirror.fromTextArea(textArea.current, {
      mode: "markdown",
      theme: "ayu-mirage",
      placeholder: "Please describe the campsite (including price).",
      lineWrapping: true,
    })
    codemirror.current = cm
    cm.on("change", onChange)
    return () => {
      cm.toTextArea()
    }
  }, [])

  const onChange = (cm: Editor) => {
    onChangeMarkDown(cm.getValue())
  }

  return (
    <MarkdownEditorBlock>
      <textarea ref={textArea} style={{ border: "none", display: "none" }} />
    </MarkdownEditorBlock>
  )
}

const MarkdownEditorBlock = styled.div`
  width: 50%;
  height: 600px;
  .CodeMirror {
    background-color: transparent;
    width: 100%;
    height: 100%;
    border: 1px solid white;

    .cm-header-1 {
      font-size: 1.5rem;
    }
    .cm-header-2 {
      font-size: 1.25rem;
    }
    .cm-header-3 {
      font-size: 1.2rem;
    }
    .cm-header-4,
    .cm-header-5,
    .cm-header-6 {
      font-size: 1.125rem;
    }
    .CodeMirror-placeholder {
      font-size: 0.875rem;
    }
  }
`
