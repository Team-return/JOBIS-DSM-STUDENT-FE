import { ModalContext } from "@/context/ModalContext";
import { ReactNode, useState } from "react";

export default function ModalContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}
