import Link from "next/link"

export default function NoticeListTable () {
    return (
        <>
            <Link href={"/mypage/notice/detail"}>
                <tbody className="flex justify-center items-center border-collapse">
                        <tr className="h-[60px] border-b-[0.5px] border-[#7F7F7F]">
                        <td className="border-none w-[192px] text-[16px] text-[#135C9D] flex justify-center">12</td>
                        <td className="border-none w-[735px] text-[16px] flex justify-center">[중요] 오리엔테이션날 일정 안내</td>
                        <td className="border-none w-[192px] text-[16px] flex justify-center">2024-01-16</td>
                    </tr>
                </tbody>
            </Link>
        </>
    )
}