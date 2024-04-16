import styled from "@emotion/styled"
import OutsideClickHandler from "react-outside-click-handler"
import HeaderUserMenuItem from "./HeaderUserMenuItem"
import { UserMenu } from "@/libs/constants/UserMenu"

interface IHeaderUserMenu {
  onClose: (e: any) => void
  visible: boolean
  onLogout: () => void
}

export default function HeaderUserMenu({ onClose, visible, onLogout }: IHeaderUserMenu) {
  if (!visible) return null
  return (
    <OutsideClickHandler onOutsideClick={onClose}>
      <HeaderUserMenuBlock onClick={onClose}>
        <div className="menu-wrapper">
          {UserMenu.length > 0 &&
            UserMenu.map((e: { tab: string; url: string }) => (
              <HeaderUserMenuItem onClick={undefined} link={e.url}>
                {e.tab}
              </HeaderUserMenuItem>
            ))}

          <HeaderUserMenuItem onClick={onLogout} link="/home">
            logout
          </HeaderUserMenuItem>
        </div>
      </HeaderUserMenuBlock>
    </OutsideClickHandler>
  )
}

const HeaderUserMenuBlock = styled.div`
  position: absolute;
  top: 100%;
  margin-top: 16px;
  .menu-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 4px;
    position: relative;
    z-index: 5;
    width: 100px;
    height: auto;
    min-height: 50px;
    background: #171717;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  }
`
