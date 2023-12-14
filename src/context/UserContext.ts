"use client";

import { MyProfileProps } from "@/apis/students/type";
import { createContext } from "react";

interface UserProfileContextType {
  userProfile: MyProfileProps;
  setUserProfile: React.Dispatch<React.SetStateAction<MyProfileProps>>;
}

export const UserProfileContext = createContext<UserProfileContextType>({
  userProfile: {
    student_name: "",
    student_gcn: "",
    department: "SOFTWARE_DEVELOP",
    profile_image_url: "",
  },
  setUserProfile: () => {},
});
