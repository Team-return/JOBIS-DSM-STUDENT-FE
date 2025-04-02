import NoticeLists from "@/components/notice/NoticeLists"

export default function Notice () {
    return (
        <div className="flex items-center justify-center mt-[90px]">
            <div className="flex flex-col items-center">
                <div className="flex flex-row gap-[702px]">
                    <div className="flex flex-col gap-[20px]">
                        <div className="font-bold text-[35px]">공지사항</div>
                        <div className="font-medium text-[20px]">자비스의 새로운 소식을 보실 수 있어요.</div>
                    </div>
                    <div className="flex items-end">
                        <div className="flex items-end text-[32px] text-[#135C9D] font-[806]">JOBIS</div>
                    </div>
                </div>
                <NoticeLists />
            </div>
        </div>
    )
}