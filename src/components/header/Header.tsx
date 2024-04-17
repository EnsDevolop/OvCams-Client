import React, { useCallback, useRef } from "react"
import HeaderLogo from "./HeaderLogo"
import HeaderRouter from "./HeaderRouter"
import styled from "@emotion/styled"
import { usePathname } from "next/navigation"
import TextButton from "../common/TextButton"
import { useToggle } from "@/libs/hooks"
import HeaderLanguage from "./HeaderLanguage"
import { useAuthModalStore } from "@/libs/layouts/providers/AuthModalStoreContextProvider"
import SearchInput from "../search/SearchInput"
import { useProfileQuery } from "@/libs/apis/auth"
import HeaderUserIcon from "./HeaderUserIcon"
import HeaderUserMenu from "./HeaderUserMenu"
import { customCookie } from "@/libs/CustomCookie"

function Header() {
  const { data } = useProfileQuery()
  const { openModal } = useAuthModalStore((state) => state)
  const [userMenu, toggleUserMenu] = useToggle(false)
  const ref = useRef<HTMLDivElement>(null)
  const router = usePathname()

  const onOutsideClick = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return
      if (ref.current.contains(e.target as any)) return
      toggleUserMenu()
    },
    [toggleUserMenu],
  )

  return (
    <HeaderBlock>
      <HeaderInner>
        <Left>
          <HeaderLogo />
          <HeaderRouter currentUrl={router} />
        </Left>
        <SearchInput className="SearchInput" />
        <Right>
          {data ? (
            <div>
              <div ref={ref}>
                <HeaderUserIcon picture={data?.data && data?.data?.picture} onClick={toggleUserMenu} />
              </div>
              <HeaderUserMenu
                onClose={onOutsideClick}
                onLogout={() => {
                  customCookie.remove.accessToken()
                  customCookie.remove.refreshToken()
                  window.location.href = "/home"
                }}
                visible={userMenu}
              />
            </div>
          ) : (
            <TextButton
              disabled={userMenu}
              type="button"
              onClick={openModal}
              color=""
              sz=""
              className="123"
              active={false}
            >
              LOGIN
            </TextButton>
          )}
          <HeaderLanguage />
        </Right>
      </HeaderInner>
    </HeaderBlock>
  )
}

const HeaderBlock = styled.div`
  position: absolute;
  top: 0;
  z-index: 10;
  height: 60px;
`

const HeaderInner = styled.div`
  width: 1608px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Left = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 180px;
`

const Right = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 60px;
`

export default Header
