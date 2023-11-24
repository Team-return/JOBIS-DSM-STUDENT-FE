"use client";

import { useDropDown } from "@/hook/useDropDown";
import { Icon } from "@team-return/design-system";
import Image from "next/image";

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
  const { DropDownComponent, toggleDropdown, closeDropDown } = useDropDown();

  const menuStyle =
    "flex-1 text-b3 leading-b3 font-m text-[#7f7f7f] flex justify-start items-center px-[10px] cursor-pointer hover:text-[#333333]";
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
        <button
          className="relative flex items-center justify-center bg-white border-none cursor-pointer"
          onClick={toggleDropdown}
        >
          <Icon icon="KebabMenu" size={20} color="gray60" />
          <DropDownComponent>
            <div className="absolute top-[30px] right-0 w-[150px] h-[100px] bg-white rounded-b-[16px] rounded-tl-[16px] rounded-tr-[4px] p-[10px] shadow-elevaiton flex flex-col">
              <div
                className={menuStyle}
                onClick={() => {
                  onClickRecruitments();
                  closeDropDown();
                }}
              >
                모집의뢰서 조회
              </div>
              <div
                className={menuStyle}
                onClick={() => {
                  onClickInterview();
                  closeDropDown();
                }}
              >
                면접 후기 조회
              </div>
            </div>
          </DropDownComponent>
        </button>
      )}
      {children}
    </div>
  );
}
