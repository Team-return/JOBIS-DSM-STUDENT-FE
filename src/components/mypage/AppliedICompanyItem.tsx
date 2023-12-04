import { ApplicationItemType } from "@/apis/applications/type";
import { Icon } from "@team-return/design-system";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import FileDownload from "../common/Button/FIleDownload";
import ApplicationStatus from "./ApplicationStatus";

export default function APpliedCompanyItem({
  company,
  application_status,
  attachments,
}: ApplicationItemType) {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [isCollapse, setIsCollapse] = useState(false);

  const handleButtonClick = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = "0";
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
      }
      setIsCollapse(!isCollapse);
    },
    [isCollapse]
  );

  const parentRefHeight = parentRef.current?.style.height ?? "0px";

  return (
    <div
      className="w-full border border-[#e5e5e5] rounded-[8px] p-4 relative"
      onClick={handleButtonClick}
    >
      <div className="w-full h-[76px] flex items-center justify-between">
        <div className="ml-4">
          <p className="text-b2 leading-b2 font-m">{company}</p>
          {/*디자인에는 있지만 api에는 없어서 잠시 주석*/}
          {/* <p className="text-caption leading-caption font-r text-[#7F7F7F]">
            2023.11.25
          </p> */}
        </div>
        <div className="absolute bottom-[12px] left-[22.5vw]">
          <Icon
            icon="Chevron"
            color="gray60"
            size={18}
            direction={parentRefHeight === "0px" ? "bottom" : "top"}
          />
        </div>
        <div className="flex flex-row items-center gap-4">
          {(application_status === "REQUESTED" ||
            application_status === "REJECTED") && (
            <p
              onClick={(event) => {
                event.stopPropagation();
              }}
              className="underline text-caption leading-caption font-r text-[#7f7f7f] cursor-pointer"
            >
              재지원하기
            </p>
          )}

          <ApplicationStatus status={application_status} />
        </div>
      </div>
      <div
        ref={parentRef}
        className="w-full h-0 px-2 overflow-hidden transition-[height_0.35s_ease]"
      >
        <div ref={childRef}>
          <div className="flex flex-wrap gap-2">
            {attachments.map((item, idx) => (
              <>
                {item.type === "FILE" && (
                  <FileDownload
                    key={idx}
                    fileURL={item.url}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  />
                )}
              </>
            ))}
          </div>
          <div
            className="flex flex-col gap-1 mt-4 ml-2"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {attachments.map((item, idx) => (
              <>
                {item.type === "URL" && (
                  <Link href={item.url} target="_blank">
                    <li
                      key={idx}
                      className="text-caption leading-caption font-r underline text-[#3366BB]"
                    >
                      {item.url}
                    </li>
                  </Link>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
