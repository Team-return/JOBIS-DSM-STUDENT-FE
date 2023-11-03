"use client";

import { RecruitmentsDetailTable } from "@/apis/recruitments/type";
import { hiringProgressEnum } from "@/util/enum";
import { Icon } from "@team-return/design-system";
import React, { useState } from "react";

function RecruitmentsTable({ ...rest }: RecruitmentsDetailTable) {
  const {
    areas,
    preferential_treatment,
    required_grade,
    work_hours,
    required_licenses,
    hiring_progress,
    train_pay,
    pay,
    benefits,
    military,
    submit_document,
    start_date,
    end_date,
    etc,
  } = rest;

  return (
    <div className="drag mt-14 rounded-[12px] overflow-hidden border border-solid border-[#e5e5e5]">
      <table>
        <tbody>
          {areas.map((item, index) => {
            const [isOpen, setIsOpen] = useState<boolean>(false);
            return (
              <>
                <tr key={index}>
                  <td
                    className="cursor-pointer key"
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    모집분야 {areas.length !== 1 && index + 1}
                    <Icon
                      icon="Chevron"
                      color="liteBlue"
                      size={18}
                      direction={isOpen ? "right" : "bottom"}
                    />
                  </td>
                  <td
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="cursor-pointer value"
                  >
                    펼쳐서 확인하기
                  </td>
                </tr>
                {isOpen && (
                  <>
                    <tr>
                      <td className="key detail">직무</td>
                      <td className="value detail">{item.job.join(", ")}</td>
                    </tr>
                    <tr>
                      <td className="key detail">기술스택</td>
                      <td className="leading-6 whitespace-pre value detail">
                        {item.tech.join("\n")}
                      </td>
                    </tr>
                    <tr>
                      <td className="key detail">채용인원</td>
                      <td className="value detail">{item.hiring} 명</td>
                    </tr>
                    <tr>
                      <td className="key detail">수행업무</td>
                      <td className="value detail">{item.major_task}</td>
                    </tr>
                  </>
                )}
              </>
            );
          })}
          <tr>
            <td className="key">우대사항</td>
            <td className="value">{preferential_treatment || "-"}</td>
          </tr>
          <tr>
            <td className="key">최소성적</td>
            <td className="value">{required_grade || "-"}</td>
          </tr>
          <tr>
            <td className="key">필수자격증</td>
            <td className="value">
              {!!required_licenses.length ? required_licenses.join(", ") : "-"}
            </td>
          </tr>
          <tr>
            <td className="key">근무시간</td>
            <td className="value">{work_hours} 시간</td>
          </tr>
          <tr>
            <td className="key">면접과정</td>
            <td className="value">
              {hiring_progress
                .map((itme) => hiringProgressEnum[itme])
                .join("  >  ")}
            </td>
          </tr>
          <tr>
            <td className="key">실습 수당 월</td>
            <td className="value">{train_pay} 만원/월</td>
          </tr>
          <tr>
            <td className="key">정규직 전환 시 연봉</td>
            <td className="value">{pay ?? "-"} 만원/년</td>
          </tr>
          <tr>
            <td className="key">복지</td>
            <td className="value">{benefits || "-"}</td>
          </tr>
          <tr>
            <td className="key">병역특례 여부</td>
            <td className="value">{military ? "있음" : "없음"}</td>
          </tr>
          <tr>
            <td className="key">제출 서류</td>
            <td className="value">{submit_document}</td>
          </tr>
          <tr>
            <td className="key">모집 시작일</td>
            <td className="value">{start_date}</td>
          </tr>
          <tr>
            <td className="key">모집 종료일</td>
            <td className="value">{end_date}</td>
          </tr>
          <tr>
            <td className="key">기타</td>
            <td className="value">{etc || "-"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default React.memo(RecruitmentsTable);
