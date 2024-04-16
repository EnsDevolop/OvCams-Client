import Link from "next/link"
import TextButton from "../common/TextButton"

interface IHeaderUserMenuItem {
  children: React.ReactNode
  link?: string
  onClick?: () => void
}

export default function HeaderUserMenuItem({ children, link, onClick }: IHeaderUserMenuItem) {
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
