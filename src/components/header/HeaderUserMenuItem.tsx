import Link from "next/link"
import TextButton from "../common/TextButton"

export default function HeaderUserMenuItem({ children, link, onClick }) {
  const jsx = (
    <TextButton
      onClick={onClick}
      className="userMenuItem"
      disabled={false}
      type={"button"}
      color="white"
      sz="small"
      active={false}
    >
      {children}
    </TextButton>
  )
  if (link) return <Link href={link}>{jsx}</Link>
  else return jsx
}
