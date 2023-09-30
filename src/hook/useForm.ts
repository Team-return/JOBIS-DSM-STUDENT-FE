import { useState, useCallback } from "react";

export default function useForm<T>(initialState: T) {
  const [state, setState] = useState<T>(initialState);
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setState((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  return { state, setState, onChange };
}
