import { useContext, useEffect } from "react";
import { ModalContext } from "@/context/ModalContext";

export default function useModal() {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  const preventScroll = (e: Event) => {
    e.preventDefault();
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen)
      document.addEventListener("wheel", preventScroll, { passive: false });
    return () => {
      document.removeEventListener("wheel", preventScroll);
    };
  }, [isOpen]);

  return {
    Modal: ({
      children,
      className,
      backgroundClose = true,
    }: {
      className?: string;
      children: React.ReactNode | React.ReactNode[];
      backgroundClose?: boolean;
    }) => (
      <>
        {isOpen && (
          <div
            onClick={() => {
              backgroundClose && closeModal();
            }}
            className="top-0 left-0 w-screen h-screen fixed z-[6] flex justify-center items-center bg-[rgba(0,0,0,0.3)]"
          >
            <div
              className={`py-8 px-10 bg-white rounded-[16px] shadow-[0px_4px_30px_0px_rgba(112,114,176,0.3)] ${
                className || ""
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </div>
          </div>
        )}
      </>
    ),
    openModal,
    closeModal,
    toggleModal,
    isOpen,
  };
}
