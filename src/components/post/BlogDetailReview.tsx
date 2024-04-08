import Image from "next/image"
import styled from "@emotion/styled"
import Text from "../common/Text"

export default function BlogDetailReview({ reviews, children }) {
  return (
    <ReviewsBlock>
      {children}
      {reviews ? (
        reviews.map((review) => (
          <ReviewBlock key={review.id}>
            <ProfileBlock>
              <ImageWrapper>
                <Image src={review.user.picture} width={30} height={30} alt={review.name} />
              </ImageWrapper>
              <Text size="medium">{review.user.name}</Text>
            </ProfileBlock>
            <Text size="small">{review.content}</Text>
          </ReviewBlock>
        ))
      ) : (
        <Text size="large">No reviews yet.</Text>
      )}
    </ReviewsBlock>
  )
}

const ReviewsBlock = styled.div`
  padding: 60px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
`

const ReviewBlock = styled.div`
  padding: 0 60px;
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`

const ProfileBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`

const ImageWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 30px;
  height: 30px;
`
