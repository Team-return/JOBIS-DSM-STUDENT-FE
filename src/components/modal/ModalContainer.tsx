import useMoadl from "@/hook/useModal";

export default function ModalContainer() {
  const { isOpen, closeModal } = useMoadl();
  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full z-[5]"
          onClick={closeModal}
        />
      )}
    </>
  );
}