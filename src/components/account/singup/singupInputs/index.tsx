import FirstInputs from "./FirstInputs";
import SecondInputs from "./SecondInputs";
import ThirdInputs from "./ThirdInputs";

interface PropsType {
  page: string | string[];
}

export default function InputsComponents({ page }: PropsType) {
  switch (page) {
    case "1":
      return (
        <FirstInputs
        />
      );
    case "2":
      return (
        <SecondInputs
        />
      );
    case "3":
      return (
        <ThirdInputs
        />
      );
    default:
      return <></>;
  }
}
