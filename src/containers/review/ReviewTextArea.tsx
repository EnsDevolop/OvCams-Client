import styled from "@emotion/styled"
import TextArea from "@/components/common/TextArea"
import TextButton from "@/components/common/TextButton"
import { useInput } from "@/libs/hooks"
import { IReviewRequest } from "@/libs/apis/review/type"

interface IReviewTextArea {
  onClick: (e: IReviewRequest) => void
}

export default function ReviewTextArea({ onClick }: IReviewTextArea) {
  const { form: content, setForm: setContent, onChange } = useInput("")

  return (
    <ReviewTextAreaBlock>
      <TextArea
        placeholder="댓글을 작성하세요"
        width="100%"
        height="180px"
        name="content"
        value={content}
        onChange={onChange}
        label="리뷰"
      />
      <TextButton
        onClick={() => onClick({ content })}
        disabled={content.trim() === ""}
        className={""}
        type={"button"}
        color={""}
        sz={""}
        active={false}
      >
        리뷰 작성
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
