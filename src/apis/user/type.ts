type AuthorityType = "TEACHER" | "STUDENT" | "COMPANY";

export interface RequestBody {
  account_id: string;
  password: string;
}

export interface ResponseBody {
  access_token: string;
  access_expires_at: string;
  refresh_token: string;
  refresh_expires_at: string;
  authority: AuthorityType;
}
