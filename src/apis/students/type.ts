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
  department: string; // 소개과 | 임베과 | 정보보안 | 인공지능
  profile_image_url: string;
}
