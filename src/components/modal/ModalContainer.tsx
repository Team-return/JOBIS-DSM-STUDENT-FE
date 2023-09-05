import { ModalContext } from "@/context/ModalContext";
import useMoadl from "@/hook/useModal";
import { useContext } from "react";
import styled from "styled-components";

export default function ModalContainer() {
  const { isOpen, closeModal } = useMoadl();
  return <>{isOpen && <Background onClick={closeModal} />}</>;
}

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`;
