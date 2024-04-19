'use client'

import { Icon } from "@team-return/design-system"
import { AttachmentResponse } from "@/apis/notice/type"
import { file_name_regex } from "@/util/regex";
import axios from "axios";

interface PropsType {
    props: AttachmentResponse[]
}

export default function AttachedBox ({props}: PropsType) {
    const downLoadFile = async (attachment: AttachmentResponse) => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_IMAGE_URL}/${attachment.url}`, {
                responseType: 'blob'
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const a = document.createElement("a");
            a.href = url;
            a.download = file_name_regex(attachment.url);
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            console.error('파일 다운로드 에러: ', error);
        }
    }

    return (
        <>
            <div className="flex flex-row w-full h-auto mt-[32px] border-t-[2px] border-b-[1px] border-[#135C9D] p-[16px] gap-[20px]">
                <div className="font-[500] text-[18px] ">첨부자료</div>
                <div className="flex flex-col gap-[4px] justify-center ">
                    {props.map((attachment) => (
                        <div key={attachment.id} className="flex gap-[7px] items-center">
                            <div>{file_name_regex(attachment.url)}</div> 
                            <Icon icon="Download" size={15} color="liteBlue" cursor="pointer" onClick={() => downLoadFile(attachment)} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}