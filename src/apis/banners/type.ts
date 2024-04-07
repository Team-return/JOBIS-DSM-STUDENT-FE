export interface BannerResponse {
  banners: BannerResponseType[];
}

export interface BannerResponseType {
  id: number;
  banner_url: string;
  banner_type: string;
}

export interface BannerType {
  RECRUITMENT: string;
  BOOKMARK: string;
  NONE: string;
  INTERNSHIP: string;
  COMPANY: string;
}
