import { CompaniesDetailsTable } from "@/apis/companies/type";
import { pon_number_regex } from "@/util/regex";
import React from "react";

function CompanyTable({ ...rest }: CompaniesDetailsTable) {
  const {
    representative_name,
    representative_phone_no,
    worker_number,
    company_introduce,
    main_zip_code,
    main_address,
    main_address_detail,
    sub_zip_code,
    sub_address,
    sub_address_detail,
    manager_name,
    manager_phone_no,
    sub_manager_name,
    sub_manager_phone_no,
    fax,
    email,
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
            <td className="key">대표 번호</td>
            <td className="value">
              {pon_number_regex(representative_phone_no)}
            </td>
          </tr>
          <tr>
            <td className="key">직원 수</td>
            <td className="value">{worker_number} 명</td>
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
            <td className="key">회사 주소</td>
            <td className="value">
              ({main_zip_code}) {main_address}({main_address_detail})
            </td>
          </tr>
          <tr>
            <td className="key">지점 주소</td>
            <td className="value">
              {(sub_zip_code &&
                sub_address &&
                sub_address_detail &&
                `(${sub_zip_code}) ${sub_address}(${sub_address_detail})`) ||
                "-"}
            </td>
          </tr>
          <tr>
            <td className="key">담당자</td>
            <td className="value">{manager_name}</td>
          </tr>
          <tr>
            <td className="key">담당자 연락처</td>
            <td className="value">{pon_number_regex(manager_phone_no)}</td>
          </tr>
          <tr>
            <td className="key">부담당자</td>
            <td className="value">{sub_manager_name || "-"}</td>
          </tr>
          <tr>
            <td className="key">부담당자 연락처</td>
            <td className="value">
              {pon_number_regex(sub_manager_phone_no) || "-"}
            </td>
          </tr>
          <tr>
            <td className="key">팩스번호</td>
            <td className="value">{pon_number_regex(fax) || "-"}</td>
          </tr>
          <tr>
            <td className="key">이메일</td>
            <td className="value">{email}</td>
          </tr>
          <tr>
            <td className="key">설립일</td>
            <td className="value">{founded_at}</td>
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
            <td className="value">첨부파일</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default React.memo(CompanyTable);
