import { CompaniesDetailsTable } from "@/apis/companies/type";
import { pon_number_regex } from "@/util/regex";
import React from "react";
import FilePreview from "../recruitments/apply/FilePreview";

function CompanyTable({ ...rest }: CompaniesDetailsTable) {
  const {
    representative_name,
    worker_number,
    company_introduce,
    main_zip_code,
    main_address,
    main_address_detail,
    founded_at,
    take,
    service_name,
    business_area,
    attachments,
  } = rest;

  return (
    <div className="drag mt-14 rounded-[12px] overflow-hidden border border-solid border-[#e5e5e5]">
      <table>
        <tbody>
          <tr>
            <td className="key">대표</td>
            <td className="value">{representative_name}</td>
          </tr>
          <tr>
            <td className="key">서비스이름</td>
            <td className="value">{service_name}</td>
          </tr>
          <tr>
            <td className="key">회사소개</td>
            <td className="value">{company_introduce}</td>
          </tr>
          <tr>
            <td className="key">회사 주소(본사)</td>
            <td className="value">
              ({main_zip_code}) {main_address}({main_address_detail})
            </td>
          </tr>
          <tr>
            <td className="key">설립일</td>
            <td className="value">{founded_at}</td>
          </tr>
          <tr>
            <td className="key">직원수</td>
            <td className="value">{worker_number}명</td>
          </tr>
          <tr>
            <td className="key">연매출</td>
            <td className="value">{take} 억원</td>
          </tr>
          <tr>
            <td className="key">사업분야</td>
            <td className="value">{business_area}</td>
          </tr>
          <tr>
            <td className="key">첨부파일</td>
            <td className="value file">
              {attachments.length === 0
                ? "-"
                : attachments.map((fileUrl) => (
                    <FilePreview
                      fileName={fileUrl.split("/")[1].slice(37)}
                      onClick={() => {
                        window.open(
                          `${process.env.NEXT_PUBLIC_IMAGE_URL}/${fileUrl}`
                        );
                      }}
                    />
                  ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default React.memo(CompanyTable);
