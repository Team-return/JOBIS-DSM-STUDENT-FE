"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "@team-return/design-system";
import { CookiesProvider } from "react-cookie";
import SignupContextProvider from "./account/singup/ContextProvider";
import ModalContainer from "./modal/ModalContainer";
import ModalContextProvider from "./modal/ModalContextProvider";

interface PropsType {
  children: React.ReactNode;
}

export default function Provider({ children }: PropsType) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <ModalContextProvider>
          <SignupContextProvider>
            <ToastContainer />
            <ModalContainer />
            {children}
          </SignupContextProvider>
        </ModalContextProvider>
      </CookiesProvider>
    </QueryClientProvider>
  );
}
