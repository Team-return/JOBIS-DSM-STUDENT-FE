export interface BannerResponseType {
    banners: BannerItemsType[];
}

export interface BannerItemsType {
    id: number,
    banner_url: string,
    banner_type: BannerStatusType,
    detail_id: number
}

export type BannerStatusType = "RECRUITMENT" | "BOOKMARK" | "NONE" | "INTERNSHIP" | "COMPANY" | "EMPLOYMENT";