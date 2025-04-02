'use client'

import Link from "next/link"
import { useGetNoticeListData } from "@/apis/notice";

export default function NoticeListTable () {
    const {data} = useGetNoticeListData();

    return (
        <>
            {data?.notices.map((notice, index) => (
                <Link key={notice.id} href={`detail/${notice.id}`}>
                    <tbody className="flex justify-center items-center border-collapse">
                        <tr className="h-[60px] border-b-[0.5px] border-[#7F7F7F]">
                            <td className="border-none w-[192px] text-[16px] text-[#135C9D] flex justify-center">{index+1}</td>
                            <td className="border-none w-[735px] text-[16px] flex justify-center">{notice.title}</td>
                            <td className="border-none w-[192px] text-[16px] flex justify-center">{notice.created_at.substring(0, 10)}</td>
                        </tr>
                    </tbody>
                </Link>
            ))}
        </>
    )
}