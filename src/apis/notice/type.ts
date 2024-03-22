export interface NoticeListResponse {
    notices: {
        notice_id: number;
        title: string;
        createAt: string;
    }[];
};

export interface NoticeDetailResponse {
    title: string;
    content: string;
    createAt: string;
    attachments: string[];
}