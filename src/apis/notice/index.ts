import { NoticeListResponse } from "./type";
import { useState, useEffect } from "react";
import { instance } from "../axios";
import { useQuery } from "@tanstack/react-query";
import { useToastStore } from "@team-return/design-system";

/** 공지사항 리스트를 조회하는 api 입니다 */
export const useGetNoticeListData = () => {
    const [notices, setNotices] = useState<NoticeListResponse[]>([]);
    const { append } = useToastStore();
    useEffect(() => {
        const fetchNoticeList = async () => {
            try {
                const { data } = await instance.get(`${process.env.NEXT_PUBLIC_BASE_URL}/notices`);
                const fetchedNotices: NoticeListResponse[] = data.notices.map((notice: any) => ({
                    id: notice.id,
                    title: notice.title,
                    created_at: new Date(notice.created_at).toISOString()
                }));
                setNotices(fetchedNotices);
            } catch (error: any) {
                append({
                    title: "",
                    message: "공지사항 리스트 조회에 실패하였습니다.",
                    type: "RED",
                });
            }
        };
        fetchNoticeList();
    }, []);

    return { notices };
}


/** 공지사항 상세보기를 조회하는 api 입니다 */
export const useGetNoticeDetailData = (noticeId: string) => {
    const { append } = useToastStore();
    const fetchNoticeDetail = async () => {
        const {data} = await instance.get(`${process.env.NEXT_PUBLIC_BASE_URL}/notices/${noticeId}`);

        return {
            title: data.title,
            content: data.content,
            created_at: new Date(data.created_at).toISOString(),
            attachments: data.attachments.map((attachment: any) => ({
                url: attachment.url,
                type: attachment.type
            }))
        };
    };

    const { data: noticeDetail } = useQuery(['noticeDetail', noticeId], fetchNoticeDetail, {
        onSuccess: () => {
            console.log('공지사항 상세보기 성공');
        },
        onError: () => {
            append({
              title: "",
              message: "공지사항 상세보기 조회에 실패하였습니다.",
              type: "RED",
            });
        },
    });

    return { noticeDetail };
};
