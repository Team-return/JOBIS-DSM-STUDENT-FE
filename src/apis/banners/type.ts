export interface BannerResponseType {
    banners: BannerItemsType[];
}

export interface BannerItemsType {
    id: number,
    banner_url: string,
    banner_type: "RECRUITMENT" | "BOOKMARK" | "NONE" | "INTERNSHIP" | "COMPANY" | "EMPLOYMENT",
    detail_id: number
}
