"use client";

import { RecruitmentsDetailTable } from "@/apis/recruitments/type";
import { hiringProgressEnum } from "@/util/object/enum";
import { money_regex, time_parsing } from "@/util/regex";
import { Icon } from "@team-return/design-system";
import React, { useCallback, useRef, useState } from "react";

function RecruitmentsTable({ ...rest }: RecruitmentsDetailTable) {
  const {
    areas,
    required_grade,
    working_hours,
    required_licenses,
    hiring_progress,
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
                setIsOpen(prev => !prev);
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
                          {item.job.map(item => item.name).join(", ")}
                        </td>
                      </tr>
                      <tr>
                        <td className="key detail">기술스택</td>
                        <td className="leading-6 whitespace-pre value detail">
                          {item.tech.map(item => item.name).join("\n")}
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
            <td className="key">모집일</td>
            <td className="value">
              {start_date && end_date
                ? start_date + " ~ " + end_date
                : "상시채용"}
            </td>
          </tr>
          <tr>
            <td className="key">최소성적</td>
            <td className="value">
              {required_grade ? required_grade + "%" : "-"}
            </td>
          </tr>
          <tr>
            <td className="key">필수자격증</td>
            <td className="value">
              {!!required_licenses.length ? required_licenses.join(", ") : "-"}
            </td>
          </tr>
          <tr>
            <td className="key">근무시간</td>
            <td className="value">{working_hours}</td>
          </tr>
          <tr>
            <td className="key">면접과정</td>
            <td className="value">
              {hiring_progress
                .map(itme => hiringProgressEnum[itme])
                .join("  >  ")}
            </td>
          </tr>
          <tr>
            <td className="key">실습 수당</td>
            <td className="value">이스터에그 입니다 ^^<div className="easteregg" /></td>       
          </tr>
          <tr>
            <td className="key">정규직 전환 시</td>
            <td className="value">안 보여 줄 거지롱~<div className="easteregg" /></td>       
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
            <td className="key">기타</td>
            <td className="value">{etc || "-"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default React.memo(RecruitmentsTable);
