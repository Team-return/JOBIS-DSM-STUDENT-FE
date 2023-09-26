import { theme } from "@team-return/design-system";
import styled, { css } from "styled-components";

interface PropsType {
  disabled: boolean;
  text: string;
  onClick: () => void;
}

export default function LargeBtn({ disabled, text, onClick }: PropsType) {
  return (
    <button
      className={`w-full h-[50px] border-none rounded-[10px] text-white text-b3 leading-b3 font-b`}
      style={
        disabled
          ? { backgroundColor: theme.color.liteBlue, cursor: "pointer" }
          : { backgroundColor: theme.color.gray40, cursor: "default" }
      }
      disabled={!disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

const BtnContainer = styled.button<{ light: boolean }>`
  ${(props) =>
    props.light &&
    css`
      background-color: ${theme.color.liteBlue};
      cursor: pointer;
    `}
`;
