"use client";

import { KebabItemType } from "@/util/type/kebabMenu";
import Image from "next/image";
import KebabMenu from "../common/Dropdown/KebabMenu";

interface PropsType {
  business_number?: string;
  company_name: string;
  company_profile_url: string;
  onClickRecruitments?: () => void;
  onClickInterview?: () => void;
  children?: React.ReactNode;
}

export default function CompanyTitle({
  business_number,
  company_name,
  company_profile_url,
  onClickRecruitments,
  onClickInterview,
  children,
}: PropsType) {

  const kebabItems:KebabItemType[] = [
    {
      label : '모집의뢰서 조회',
      onClick: ()=>{
        onClickRecruitments && onClickRecruitments();
      }
    },
    {
      label : '면접 후기 조회',
      onClick: ()=>{
        onClickInterview && onClickInterview();

      }
    }
  ]

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex gap-6">
        <div className="w-[76px] h-[76px] rounded-[8px] overflow-hidden shadow-elevaiton flex items-center">
          <Image
            className="object-contain"
            width={76}
            height={76}
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${company_profile_url}`}
            alt={company_name}
          />
        </div>
        <div className="flex flex-col justify-center drag">
          <p className="mb-2 text-h4 leading-h4 font-b">{company_name}</p>
          {business_number && (
            <p className="text-b2 leading-b2 font-m text-[#7f7f7f]">
              사업자 번호 : {business_number}
            </p>
          )}
        </div>
      </div>
      {onClickInterview && onClickRecruitments && (
        <KebabMenu items={kebabItems} />
      )}
      {children}
    </div>
  );
}
