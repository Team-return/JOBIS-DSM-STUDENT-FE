import { theme } from "@team-return/design-system";
import styled, { css } from "styled-components";

interface PropsType {
  disabled: boolean;
  text: string;
  onClick: () => void;
}

export default function LargeBtn({ disabled, text, onClick }: PropsType) {
  return (
    <BtnContainer light={disabled} disabled={!disabled} onClick={onClick}>
      {text}
    </BtnContainer>
  );
}

const BtnContainer = styled.button<{ light: boolean }>`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: ${theme.color.gray40};
  cursor: default;
  color: ${theme.color.gray10};
  ${(props) =>
    props.light &&
    css`
      background-color: ${theme.color.liteBlue};
      cursor: pointer;
    `}
  ${theme.font.Body1}
`;
