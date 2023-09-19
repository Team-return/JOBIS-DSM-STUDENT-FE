import useMoadl from "@/hook/useModal";
import { Icon } from "@team-return/design-system";
import React from "react";

interface PropsType {
  title: string;
}

function SearchDropDown({ title }: PropsType) {
  const { Modal, toggleModal } = useMoadl();
  return (
    <div
      className="h-10 pr-[12px] pl-4 border border-solid border-[#cccccc] rounded-[8px] flex items-center gap-[23px] text-b3 leading-b3 font-r text-[#7f7f7f] relative"
      onClick={toggleModal}
    >
      <p>{title}</p>
      <Icon icon="Chevron" color="gray60" />
      <Modal className="absolute left-0 min-w-full top-11">
        <>hi</>
      </Modal>
    </div>
  );
}

export default React.memo(SearchDropDown);
