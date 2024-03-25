'use client'

import { useGetNoticeDetailData, useGetNoticeListData } from "@/apis/notice";
import { useEffect, useState } from "react";
import AttachedBox from "@/components/notice/AttachedBox";

export default function NoticeDetailPage(props:any) {
    const noticeId = props.params.id
    const {noticeDetail} = useGetNoticeDetailData(noticeId);
    const items = [noticeDetail]

    return (
        <div className="flex justify-cent4er items-center mt-[100px]">
            <div className="flex flex-col gap-[40px]">
                <h1 className="text-[28px] font-[500] text-left">공지사항</h1>
                <div className="w-[1151px] h-[494px] overflow-y-auto">
                    <div className="bg-white border-[1px] border-gray rounded-[12px] p-[40px]">
                        <h1 className="font-[700] text-[28px]">{noticeDetail?.title}</h1>
                        <h2 className="font-[500] text-[20px] mt-[20px]">{noticeDetail?.created_at.substring(0, 10)}</h2>
                        <p className="font-[400] text-[16px] mt-[28px] whitespace-pre-line">{noticeDetail?.content}</p>
                        {items?.map((item) => (
                            <AttachedBox props={item?.attachments || []} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

