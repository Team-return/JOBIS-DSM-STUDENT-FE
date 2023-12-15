"use client";

import UserProfileProvider from "@/context/provider/UserContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "@team-return/design-system";
import { CookiesProvider } from "react-cookie";
import ModalContextProvider from "../context/provider/ModalContextProvider";
import SignupContextProvider from "../context/provider/SignupContextProvider";

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
            <UserProfileProvider>
              <ToastContainer />
              {children}
            </UserProfileProvider>
          </SignupContextProvider>
        </ModalContextProvider>
      </CookiesProvider>
    </QueryClientProvider>
  );
}
