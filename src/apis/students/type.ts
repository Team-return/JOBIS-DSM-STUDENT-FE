export interface RequestBody {
  email: string;
  password: string;
  grade: number | undefined;
  name: string;
  gender: "MAN" | "WOMAN" | undefined;
  class_room: number | undefined;
  number: number | undefined;
}
