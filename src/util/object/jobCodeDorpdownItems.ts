import { GetCode } from "@/apis/code";

interface PropsType {
  setFilter: React.Dispatch<
    React.SetStateAction<{
      page: string;
      job_code: string;
      tech_code: string;
      winter_intern: string;
    }>
  >;
}

export const internDropdownItems = [
  {
    code: "true",
    label: "채험형",
  },
  {
    code: "false",
    label: "채용형",
  },
];
