import Image from "next/image";
import Logo from "../../../public/Logo.png";
import styled from "@emotion/styled";
import { Icon, theme } from "@team-return/design-system";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(() => {
        if (window.scrollY > 100) return 1;
        else return (window.scrollY % 100) / 100;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (pathname.toString().indexOf("/account") !== -1) {
    return null;
  }

  return (
    <Container scroll={scroll}>
      <Link href={"/"}>
        <Image width={80} height={22} src={Logo} alt="joibs_logo" />
      </Link>
      <MenuWarpper>
        <Menu router={pathname} id="/company" href={"/company?page=1&name="}>
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

const Container = styled.div<{ scroll: number }>`
  width: 100vw;
  height: 68px;
  background-color: ${theme.color.gray10};
  display: flex;
  justify-content: space-between;
  box-shadow: ${(props) => `0 2px 4px 0 rgba(229,229,229,${props.scroll})`};
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 12px 17.5vw;
  z-index: 4;
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
  font-weight: ${(props) => props.router === props.id && 700};
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
