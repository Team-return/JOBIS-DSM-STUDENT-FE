import styled from "@emotion/styled";
import { Icon, theme } from "@team-return/design-system";
import React, { KeyboardEvent, useRef } from "react";

interface PropsType extends React.ComponentProps<"input"> {
  customType?: "Text" | "Search";
  enterEvent?: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextFiled({
  value,
  placeholder,
  onChange,
  customType = "Text",
  name,
  enterEvent,
  width,
}: PropsType) {
  const inputRef = useRef<HTMLInputElement>(null);
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") if (enterEvent) enterEvent();
  };
  return (
    <Container width={width}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        ref={inputRef}
        onKeyUp={onKeyDown}
      />
      {customType !== "Text" && (
        <div onClick={enterEvent}>
          <Icon icon={customType} size={20} color="gray60" />
        </div>
      )}
    </Container>
  );
}

const Container = styled.div<{ width: string | number | undefined }>`
  height: 40px;
  width: 40%;
  background-color: ${theme.color.gray10};
  border: 1px solid ${theme.color.gray50};
  border-radius: 8px;
  display: flex;
  align-items: center;
  overflow: hidden;
  width: ${(props) => {
    if (typeof props.width === "number") return props.width + "px";
    else props.width;
  }};
  input {
    flex: 1;
    height: 100%;
    padding: 0 16px;
    border: none;
    font-size: 14px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 14px;
    cursor: pointer;
  }
`;

export default React.memo(TextFiled);
