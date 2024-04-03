import styled from "@emotion/styled"
import TextArea from "@/components/common/TextArea"
import TextButton from "@/components/common/TextButton"
import { useInput, useKeyPress } from "@/libs/hooks"

export default function ReviewTextArea() {
  const [comment, onChange, onReset] = useInput("")
  const [enterPress] = useKeyPress("Enter")

  return (
    <ReviewTextAreaBlock>
      <TextArea
        placeholder="댓글을 작성하세요"
        width="100%"
        height="180px"
        value={comment}
        onChange={onChange}
        label="댓글"
      />
      <TextButton disabled={comment.trim() === ""} className={""} type={"button"} color={""} sz={""} active={false}>
        댓글 작성
      </TextButton>
    </ReviewTextAreaBlock>
  )
}

const ReviewTextAreaBlock = styled.div`
  display: flex;
  width: 100vw;
  padding: 0 60px;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px;
`
