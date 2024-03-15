import { Router } from "@/libs/constants/Router";
import styled from "@emotion/styled";
import Link from "next/link";
import TextButton from "../common/TextButton";

export default function HeaderRouter({ currentUrl }: { currentUrl: string }) {
  return (
    <HeaderRouterBlock>
      {Router.map((e) => (
        <Link href={e.url} key={e.tab}>
          <TextButton
            className={e.tab}
            disabled={false}
            type="button"
            active={e.url === currentUrl}
            color="white"
            sz="medium"
          >
            {e.tab}
          </TextButton>
        </Link>
      ))}
    </HeaderRouterBlock>
  );
}

const HeaderRouterBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;
