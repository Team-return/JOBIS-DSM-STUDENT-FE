import { Icon, theme } from "@team-return/design-system";
import styled from "@emotion/styled";

interface PropsType {
  direction: "right" | "left";
  onClick: () => void;
}

export default function CircleBtn({ direction, onClick }: PropsType) {
  return (
    <Container aria-label="prevNextBtn" onClick={onClick}>
      <Icon icon="Chevron" direction={direction} size={30} color="gray60" />
    </Container>
  );
}

const Container = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: ${theme.color.gray10};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  transition: 0.2s;
  z-index: 2;
  cursor: pointer;
  &:hover {
    scale: 1.1;
    transition: 0.2s;
  }
`;
