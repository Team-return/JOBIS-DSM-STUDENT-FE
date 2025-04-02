import { NoticeDetailResponse, NoticeListResponse } from "./type";
import { instance } from "../axios";
import { useQuery } from "@tanstack/react-query";
import { useToastStore } from "@team-return/design-system";

const router = '/notices'

/** 공지사항 리스트를 조회하는 api 입니다 */
export const useGetNoticeListData = () => {
    const { append } = useToastStore();
    return useQuery(['noticeList'], async () => {
        const {data} = await instance.get<NoticeListResponse>(`${router}`);
        return data
    }, {
        onError: () => {
            append({
              title: "",
              message: "공지사항 리스트 조회에 실패하였습니다.",
              type: "RED",
            });
        },
    })
}


/** 공지사항 상세보기를 조회하는 api 입니다 */
export const useGetNoticeDetailData = (noticeId: string) => {
    const { append } = useToastStore();
    return useQuery(['noticeDetail', noticeId], async () => {
        const {data} = await instance.get<NoticeDetailResponse>(`${router}/${noticeId}`)
        return data
    }, {
        onError: () => {
            append({
              title: "",
              message: "공지사항 상세보기 조회에 실패하였습니다.",
              type: "RED",
            });
        },
    });
};