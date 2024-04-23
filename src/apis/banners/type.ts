export interface BannerResponse {
  banners: BannerResponseType[];
}

export interface BannerResponseType {
  id: number;
  banner_url: string;
  banner_type: string;
}
