import styled from "@emotion/styled";
import { Icon, theme } from "@team-return/design-system";
import { ChangeEvent } from "react";

interface PropsType {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: "Text" | "Search";
  onIconClick?: () => void;
}

export default function TextFiled({
  value,
  placeholder,
  onChange,
  type = "Text",
  onIconClick,
}: PropsType) {
  return (
    <Container>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {type !== "Text" && (
        <div onClick={onIconClick}>
          <Icon icon={type} size={16} />
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  height: 34px;
  width: 300px;
  background-color: ${theme.color.gray10};
  border: 1px solid ${theme.color.gray50};
  border-radius: 4px;
  display: flex;
  align-items: center;
  overflow: hidden;
  input {
    flex: 1;
    height: 100%;
    padding: 0 12px;
    border: none;
    outline: none;
  }
  div {
    padding: 8px;
    margin-right: 5px;
    cursor: pointer;
  }
`;
