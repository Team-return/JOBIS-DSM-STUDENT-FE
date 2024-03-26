import { NoticeListResponse } from "./type";
import { NoticeDetailResponse } from "./type";
import { useState, useEffect } from "react";
import { instance } from "../axios";

/** 공지사항 리스트를 조회하는 api 입니다 */
export const useGetNoticeListData = () => {
    const [notices, setNotices] = useState<NoticeListResponse[]>([]);

    useEffect(() => {
        const fetchNoticeList = async () => {
            try {
                const response = await instance.get(`${process.env.NEXT_PUBLIC_BASE_URL}/notices`);
                const data = response.data;

                const fetchedNotices: NoticeListResponse[] = data.notices.map((notice: any) => ({
                    id: notice.id,
                    title: notice.title,
                    created_at: new Date(notice.created_at).toISOString()
                }));
                setNotices(fetchedNotices);
            } catch (error: any) {
                console.error('notice list error: ', error.message);
            }
        };
        fetchNoticeList();
    }, []);

    return { notices };
}

/** 공지사항 상세보기를 조회하는 api 입니다 */
export const useGetNoticeDetailData = (noticeId: string) => {
    const [noticeDetail, setNoticeDetail] = useState<NoticeDetailResponse | null>(null);
    
    useEffect(() => {
        const fetchNoticeDetail = async () => {
            try {
                const response = await instance.get(`${process.env.NEXT_PUBLIC_BASE_URL}/notices/${noticeId}`);
                const data = response.data;

                const fetchedNoticeDetail: NoticeDetailResponse = {
                    title: data.title,
                    content: data.content,
                    created_at: new Date(data.created_at).toISOString(),
                    attachments: data.attachments.map((attachment: any) => ({
                        url: attachment.url,
                        type: attachment.type
                    }))
                };
                setNoticeDetail(fetchedNoticeDetail);
            } catch (error: any) {
                console.error('notice detail error:', error.message);
            }
        };
        fetchNoticeDetail();
    }, [noticeId]);

    return { noticeDetail };
};
