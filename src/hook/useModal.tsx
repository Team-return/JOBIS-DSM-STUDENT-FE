import { useContext, useState } from "react";
import { ModalContext } from "@/context/ModalContext";

export default function useMoadl() {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return {
    Modal: ({
      children,
    }: {
      children: React.ReactNode | React.ReactNode[];
    }) => (
      <>
        {
          isOpen && 
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ zIndex: 6, cursor: "default" }}
          >
          {
            children
          }
          </div>
        }
      </>
    ),
    openModal,
    closeModal,
    toggleModal,
    isOpen,
  };
}
