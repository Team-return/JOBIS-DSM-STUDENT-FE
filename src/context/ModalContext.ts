"use client";

import { createContext, Dispatch, SetStateAction } from "react";

interface ModalContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  setIsOpen: () => {},
});
