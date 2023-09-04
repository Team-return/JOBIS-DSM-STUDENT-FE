type AUTH_CODE_TYPE = "PASSWORD" | "SIGN_UP";

export interface IAuthorizationResponse {
  access_token: string;
  access_expires_at: string;
  refresh_token: string;
  refresh_expires_at: string;
  authority: string;
}

export interface SendAuthCodeType {
  email: string;
  auth_code_type: AUTH_CODE_TYPE;
}
export interface AuthCode {
  email: string;
  auth_code: string;
}
