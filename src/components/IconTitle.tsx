import styled from "@emotion/styled";
import { theme } from "@team-return/design-system";
import Image, { StaticImageData } from "next/image";

interface ProsType {
  children: string;
  icon: StaticImageData;
}

export default function IconTitle({ children, icon }: ProsType) {
  return (
    <Warpper>
      <Image width={40} height={40} src={icon} alt="titleIcon" />
      <p>{children}</p>
    </Warpper>
  );
}

const Warpper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  ${theme.font.Heading5}
  font-weight: 700;
`;
