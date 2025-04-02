'use client'

import { useGetNoticeDetailData } from "@/apis/notice";
import AttachedBox from "@/components/notice/AttachedBox";

export default function NoticeDetailPage(props:any) {
    const noticeId = props.params.id
    const {data} = useGetNoticeDetailData(noticeId);

    return (
        <div className="flex justify-cent4er items-center mt-[100px]">
            <div className="flex flex-col gap-[40px]">
                <h1 className="text-[28px] font-[500] text-left">공지사항</h1>
                <div className="w-[1151px] h-[494px] overflow-y-auto">
                    <div className="bg-white border-[1px] border-gray rounded-[12px] p-[40px]">
                        <h1 className="font-[700] text-[28px]">{data?.title}</h1>
                        <h2 className="font-[500] text-[20px] mt-[20px]">{data?.created_at.substring(0, 10)}</h2>
                        <p className="font-[400] text-[16px] mt-[28px] whitespace-pre-line">{data?.content}</p>
                        {data?.attachments && <AttachedBox attachmentProps = {data?.attachments || []} /> }
                    </div>
                </div>
            </div>
        </div>
    );
}

