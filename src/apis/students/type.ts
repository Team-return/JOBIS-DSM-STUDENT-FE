export interface RequestBody {
  email: string;
  password: string;
  grade: number | undefined;
  name: string;
  gender: "MAN" | "WOMAN" | undefined;
  class_room: number | undefined;
  number: number | undefined;
}

export interface MyProfileProps {
  student_name: string;
  student_gcn: string;
  department:
    | "SOFTWARE_DEVELOP"
    | "EMBEDDED_SOFTWARE"
    | "INFORMATION_SECURITY"
    | "AI_SOFTWARE";
  profile_image_url: string;
}
