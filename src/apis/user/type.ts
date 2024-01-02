type AuthorityType = "TEACHER" | "STUDENT" | "COMPANY" | "DEVELOPER";

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
  platform_type: 'WEB'| 'ANDROID' | 'IOS'
}
