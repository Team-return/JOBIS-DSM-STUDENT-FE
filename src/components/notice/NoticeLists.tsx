import Pagination from "../common/Pagination"
import Link from "next/link";
import NoticeListTable from "./NoticeListTable";
import { useGetNoticeList } from "@/apis/notice";

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
                <NoticeListTable />
            </table>
            <div className="mb-[98px]">
                <Pagination />
            </div>
        </div>
    )
}