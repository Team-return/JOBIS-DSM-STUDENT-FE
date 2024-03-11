import Pagination from "../common/Pagination"
import Link from "next/link";

export default function NoticeLists() {

    return (
        <div className="flex flex-col justify-center items-center mt-[48px] gap-[40px]">
            <table className="flex table-fixed flex-col justify-center items-center">
                <thead className="flex justify-center items-center border-b-[0.5px] border-t-[2px] border-[#7F7F7F] w-[1119px] h-[60px] bg-[#F7F7F7]">
                    <tr>
                        <th className="w-[192px] text-[16px] px-4 py-2">번호</th>
                        <th className="w-[735px] text-[16px] px-4 py-2">제목</th>
                        <th className="w-[192px] text-[16px] px-4 py-2">작성일</th>
                    </tr>
                </thead>
                <Link href={"/mypage/notice/detail"}>
                    <tbody className="flex justify-center items-center border-collapse">
                        <tr className="h-[60px] border-b-[0.5px] border-[#7F7F7F]">
                            <td className="border-none w-[192px] text-[16px] text-[#135C9D] flex justify-center">12</td>
                            <td className="border-none w-[735px] text-[16px] flex justify-center">[중요] 오리엔테이션날 일정 안내</td>
                            <td className="border-none w-[192px] text-[16px] flex justify-center">2024-01-16</td>
                        </tr>
                    </tbody>
                </Link>
                <tbody className="flex justify-center items-center border-collapse">
                    <tr className="h-[60px] border-b-[0.5px] border-[#7F7F7F]">
                        <td className="border-none w-[192px] text-[16px] text-[#135C9D] flex justify-center">12</td>
                        <td className="border-none w-[735px] text-[16px] flex justify-center">2024학년도 신입생 건강검진 안내</td>
                        <td className="border-none w-[192px] text-[16px] flex justify-center">2024-01-16</td>
                    </tr>
                </tbody>
            </table>
            <div className="mb-[98px]">
                <Pagination />
            </div>
        </div>
    )
}