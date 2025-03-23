"use client";

import { RecruitmentsDetailTable } from "@/apis/recruitments/type";
import { hiringProgressEnum } from "@/util/object/enum";
import { money_regex, time_parsing } from "@/util/regex";
import { Icon } from "@team-return/design-system";
import React, { useCallback, useRef, useState } from "react";

function RecruitmentsTable({ ...rest }: RecruitmentsDetailTable) {
  const {
    areas,
    working_hours,
    required_licenses,
    hiring_progress,
    benefits,
    military_support,
    submit_document,
    start_date,
    end_date,
    etc,
    winter_intern,
    additional_qualifications,
    integration_plan,
  } = rest;

  return (
    <div className="drag mt-14 rounded-[12px] overflow-hidden border border-solid border-[#e5e5e5]">
      <table>
        <tbody>
          <tr>
            <td className="key">형태</td>
            <td className="value">{winter_intern ? "체험형" : "채용형"}</td>
          </tr>
          {areas.map((item, index) => {
            const [isOpen, setIsOpen] = useState<boolean>(false);
            const parentRef = useRef<HTMLDivElement>(null);
            const childRef = useRef<HTMLDivElement>(null);

            const handleButtonClick = useCallback(
              (event: React.MouseEvent) => {
                event.stopPropagation();
                if (parentRef.current === null || childRef.current === null)
                  return;
                if (parentRef.current.clientHeight > 0) {
                  parentRef.current.style.height = "0px";
                } else {
                  parentRef.current.style.height = `${childRef.current.clientHeight}px`;
                }
                setIsOpen((prev) => !prev);
              },
              [isOpen]
            );

            return (
              <>
                <div>
                  <tr key={index} onClick={handleButtonClick}>
                    <td className="cursor-pointer key">
                      모집분야 {areas.length !== 1 && index + 1}
                      <Icon
                        icon="Chevron"
                        color="liteBlue"
                        size={18}
                        direction={isOpen ? "right" : "bottom"}
                      />
                    </td>
                    <td className="cursor-pointer value">
                      {isOpen ? "닫기" : "펼쳐서 확인하기"}
                    </td>
                  </tr>
                  <div
                    ref={parentRef}
                    className="h-0 overflow-hidden transition-[height_0.5s_ease]"
                  >
                    <div ref={childRef} className="">
                      <tr>
                        <td className="key detail">직무</td>
                        <td className="value detail">
                          {item.job.map((item) => item.name).join(", ")}
                        </td>
                      </tr>
                      <tr>
                        <td className="key detail">기술스택</td>
                        <td className="leading-6 whitespace-pre value detail">
                          {item.tech.map((item) => item.name).join("\n")}
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
                      <tr>
                        <td className="key detail">우대사항</td>
                        <td className="value detail">
                          {item.preferential_treatment || "-"}
                        </td>
                      </tr>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <tr>
            <td className="key">필수 자격증</td>
            <td className="value">
              {!!required_licenses.length ? required_licenses.join(", ") : "-"}
            </td>
          </tr>
          <tr>
            <td className="key">기타 자격 요건</td>
            <td className="value">{additional_qualifications || "-"}</td>
          </tr>
          <tr>
            <td className="key">근무시간</td>
            <td className="value">주 {working_hours}시간</td>
          </tr>
          <tr>
            <td className="key">선발절차</td>
            <td className="value">
              {hiring_progress
                .map((itme) => hiringProgressEnum[itme])
                .join("  >  ")}
            </td>
          </tr>
          <tr>
            <td className="key">복지</td>
            <td className="value">{benefits || "-"}</td>
          </tr>
          {!winter_intern && (
            <tr>
              <td className="key">병역특례 여부</td>
              <td className="value">{military_support ? "있음" : "없음"}</td>
            </tr>
          )}
          <tr>
            <td className="key">제출 서류</td>
            <td className="value">{submit_document}</td>
          </tr>
          <tr>
            <td className="key">모집 기간</td>
            <td className="value">
              {start_date && end_date
                ? start_date + " ~ " + end_date
                : "상시채용"}
            </td>
          </tr>
          {winter_intern && (
            <tr>
              <td className="key">현장실습 연계 계획</td>
              <td className="value">{integration_plan ? "있음" : "없음"}</td>
            </tr>
          )}
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
