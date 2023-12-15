import { MyProfileProps } from "@/apis/students/type";
import { ModalContext } from "@/context/ModalContext";
import { ReactNode, useState } from "react";
import { UserProfileContext } from "../UserContext";

export default function UserProfileProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userProfile, setUserProfile] = useState<MyProfileProps>({
    student_name: "",
    student_gcn: "",
    department: "SOFTWARE_DEVELOP",
    profile_image_url: "",
  });
  return (
    <UserProfileContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
}
