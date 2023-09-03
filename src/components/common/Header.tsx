import Image from "next/image";
import Logo from "../../../public/Logo.png";
import styled from "@emotion/styled";
import { Icon, theme } from "@team-return/design-system";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <Container>
      <Link href={"/"}>
        <Image width={80} height={22} src={Logo} alt="joibs_logo" />
      </Link>
      <MenuWarpper>
        <Menu router={pathname} id="/company" href={"/company"}>
          기업체
        </Menu>
        <Menu router={pathname} id="/recruitments" href={"/recruitments"}>
          모집의뢰서
        </Menu>
        <Menu router={pathname} id="/mypage" href={"/mypage"}>
          마이페이지
        </Menu>
      </MenuWarpper>
      <ASide>
        <Profile onClick={() => {}}>
          <Image src={""} alt="프로필사진" />
          <p>강용수</p>
        </Profile>
        <Arrow>
          <Icon icon={"Chevron"} size={16} color="gray90" />
        </Arrow>
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
  position: fixed;
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
  gap: 44px;
`;

const Menu = styled(Link)<{ router: string; id: string }>`
  ${theme.font.Body2}
  font-weight: ${(props) => props.router === props.id && 700}
`;

const ASide = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Profile = styled.div`
  height: 32px;
  background-color: ${theme.color.gray10};
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  ${theme.font.Body2}
  > img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #d9d9d9;
  }
`;

const Arrow = styled.div``;
