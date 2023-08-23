import Image from "next/image";
import Logo from "../../../public/Logo.svg";
import BellIcon from "../../../public/Bell.svg";
import { styled } from "styled-components";
import { theme } from "@team-return/design-system";
import Link from "next/link";

export default function Header() {
  return (
    <Container>
      <Image width={70} height={20} src={Logo} alt="joibs_logo" />
      <Menu>
        <Link href={"/company"}>기업체</Link>
        <Link href={"/"}>모집의뢰서</Link>
      </Menu>
      <div></div>
      <div></div>
      <div></div>
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
  background-color: ${theme.color.gray10};
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.05);
  position: absolute;
  top: 0;
  left: 0;
  padding: 12px 17.5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a,
  p {
    color: ${theme.color.gray80};
  }
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  ${theme.font.Body2}
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
