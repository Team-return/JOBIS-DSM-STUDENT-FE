import { styled } from "styled-components";
import Icon from "@team-return/design-system";

interface TextFiledOption {
  isPassword?: boolean;
  title?: string;
  helpText?: string;
  errorText?: string;
  width?: number;
}
interface PropsType extends TextFiledOption {
  onChange: () => void;
  placeholder: string;
  value: string;
  name: string;
}

export default function TextFiled({}: PropsType) {
  return (
    <Warpper>
      <></>
    </Warpper>
  );
}

const Warpper = styled.div`
  width: 100%;
  display: flex;
`;
