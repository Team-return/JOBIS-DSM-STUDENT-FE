import Image from "next/image";
import Logo from "../../../public/Logo.png";
import BellIcon from "../../../public/Bell.svg";
import styled from "@emotion/styled";
import { theme } from "@team-return/design-system";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const router = usePathname();
  console.log(router);

  return (
    <Container>
      <Link href={"/"}>
        <Image width={80} height={22} src={Logo} alt="joibs_logo" />
      </Link>
      <MenuWarpper>
        <Menu router={router} id="/company" href={"/company"}>
          기업체
        </Menu>
        <Menu router={router} id="/recruitments" href={"/recruitments"}>
          모집의뢰서
        </Menu>
      </MenuWarpper>
      <ASide>
        <Bell onClick={() => {}}>
          <Image width={16} height={20} src={BellIcon} alt="알림" />
        </Bell>
        <Profile onClick={() => {}}>
          <div />
          <p>강용수</p>
        </Profile>
      </ASide>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 68px;
  background-color: ${theme.color.gray10};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  padding: 12px 17.5vw;
  z-index: 10;
  a,
  p {
    color: ${theme.color.gray80};
  }
`;

const MenuWarpper = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Menu = styled(Link)<{ router: string; id: string }>`
  ${theme.font.Body2}
  font-weight: ${(props) => props.router === props.id && 700}
`;

const ASide = styled.div`
  display: flex;
  gap: 20px;
`;

const Bell = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Profile = styled.div`
  height: 32px;
  background-color: ${theme.color.gray10};
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  ${theme.font.Body4}
  > div {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #d9d9d9;
  }
`;
