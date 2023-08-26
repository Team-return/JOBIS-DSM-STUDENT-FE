import { ChangeEvent, useState } from "react";

export default function useInput(initialState: string) {
  const [state, setState] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return { state, setState, onChange };
}
