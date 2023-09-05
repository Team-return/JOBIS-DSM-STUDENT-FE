import { SignupType } from "@/components/account/singup/type";
import { ChangeEvent, createContext, Dispatch, SetStateAction } from "react";

interface ModalContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  setIsOpen: () => {},
});
