import {
  useDeleteApplication,
  useGetRejectionReason,
} from "@/apis/applications";
import { ApplicationItemType } from "@/apis/applications/type";
import useModal from "@/hook/useModal";
import { getApplyKebabItems } from "@/util/object/kebabMenuItems";
import { KebabItemType } from "@/util/type/kebabMenu";
import { Icon } from "@team-return/design-system";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import FileDownload from "../common/Button/FIleDownload";
import FillBtn from "../common/Button/FillBtn";
import KebabMenu from "../common/Dropdown/KebabMenu";
import ApplicationStatus from "./ApplicationStatus";

export default function APpliedCompanyItem({
  company,
  application_status,
  attachments,
  recruitment_id,
  application_id,
}: ApplicationItemType) {
  const navigator = useRouter();
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [isCollapse, setIsCollapse] = useState(false);
  const { Modal, openModal, closeModal } = useModal();
  const { mutate: deleteApplication } = useDeleteApplication(application_id);
  const KebabItems: KebabItemType[] = getApplyKebabItems(
    () => {
      navigator.push(
        `/recruitments/apply/?id=${recruitment_id}&application=${application_id}`
      );
    },
    () => {
      openModal();
    }
  );

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

  const rejectReason = () => {
    if (application_status === "REJECTED") {
      const { data } = useGetRejectionReason(application_id.toString());
      return data?.rejection_reason;
    }
  };

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
        <div className="absolute bottom-[12px] left-[50%] translate-x-[-50%]">
          <Icon
            icon="Chevron"
            color="gray60"
            size={18}
            direction={parentRefHeight === "0px" ? "bottom" : "top"}
          />
        </div>
        <div className="flex flex-row items-center gap-4">
          <ApplicationStatus status={application_status} />
          {(application_status === "REQUESTED" ||
            application_status === "REJECTED") && (
            <>
              <KebabMenu items={KebabItems} />
              <Modal>
                <div className=" text-h5 font-b leading-h5">지원 취소</div>
                <p className=" mt-2 text-b1 font-r leading-b1 text-[#7F7F7F]">
                  {company}에 지원을 취소하겠습니까?
                </p>
                <div className=" flex justify-end gap-2 mt-8">
                  <div
                    onClick={closeModal}
                    className="text-b2 leading-b2 font-b min-w-[122px] h-[48px] text-[#135C9D] flex gap-2 items-center py-[10px] px-6 border border-[#135C9D] rounded-[8px] hover:bg-[#135C9D] hover:text-white justify-center cursor-pointer"
                  >
                    취소
                  </div>
                  <FillBtn
                    onClick={() => {
                      deleteApplication();
                      closeModal();
                      location.reload();
                    }}
                  >
                    확인
                  </FillBtn>
                </div>
              </Modal>
            </>
          )}
        </div>
      </div>
      <div
        ref={parentRef}
        className="w-full h-0 px-2 overflow-hidden transition-[height_0.35s_ease]"
      >
        <div ref={childRef}>
          {application_status === "REJECTED" && (
            <div className="mb-6 ml-2">
              <p className="text-b3 leading-b3 font-m text-[#E74C3C]">
                반려사유
              </p>
              <p className="text-caption leading-caption font-r text-[#E74C3C]">
                {rejectReason()}
              </p>
            </div>
          )}
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
