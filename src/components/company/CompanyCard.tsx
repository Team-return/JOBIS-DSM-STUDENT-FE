"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useGetCompaniesList } from "@/apis/companies";
import { useEffect, useState } from "react";
import { CompaniesListType } from "@/apis/companies/type";
import HoverPrefetchLink from "../common/HoverPrefetchLink";
import { Icon } from "@team-return/design-system";
import CompaniesSkelton from "../common/Skelton/CompanySkelton";

export default function CompanyCard() {
  const getParams = useSearchParams();
  const [companyList, setCompanyList] = useState<CompaniesListType[]>([]);

  const {data: compnayList, isLoading} = useGetCompaniesList(getParams.toString());

  useEffect(() => {
    if (compnayList?.data.companies) {
      (() => {
        setCompanyList(compnayList.data.companies);
      })();
    }
  }, [compnayList]);

  return (
    <div className="w-full my-[10px] grid grid-cols-2 md:grid-cols-3 gap-[2vw]">
      {isLoading && <CompaniesSkelton />}
      {companyList.map(
        ({ logo_url, name, take, has_recruitment, id }, index) => (
          <HoverPrefetchLink href={`/companies/detail?id=${id}`} key={index}>
            <div className="relative w-full transition duration-200 cursor-pointer hover:transition hover:scale-105 z-1">
              <div className="w-full h-0 pb-[60%] relative shadow-elevaiton rounded-[14px] overflow-hidden">
                <Image
                  className="absolute object-contain"
                  fill
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${logo_url}`}
                  alt={name}
                />
              </div>
              <div className="relative">
                <p className="mt-4 mr-8 text-black text-h6 font-b leading-h6">
                  {name}
                </p>
                <p className="text-b4 leading-b4 font-m text-[#7f7f7f] mt-2">
                  연매출 {take}억원
                </p>
                {has_recruitment && (
                  <div className="absolute flex items-center justify-center w-6 h-6 border-none top-1 right-1 bg-none">
                    <Icon icon="Document" color="gray60" />
                  </div>
                )}
              </div>
            </div>
          </HoverPrefetchLink>
        )
      )}
    </div>
  );
}
