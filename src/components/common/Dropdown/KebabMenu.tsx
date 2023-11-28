"use client";

import { useDropDown } from "@/hook/useDropDown";
import { KebabItemType } from "@/util/type/kebabMenu";
import { Icon } from "@team-return/design-system";

interface PropsType {
  items: KebabItemType[];
}

export default function KebabMenu({ items }: PropsType) {
  const { DropDownComponent, toggleDropdown, closeDropDown } = useDropDown();
  return (
    <div className="relative cursor-pointer" onClick={toggleDropdown}>
      <Icon icon="KebabMenu" size={24} color="gray80" />
      <DropDownComponent>
        <div className="absolute top-[30px] right-0 z-[3] w-[150px] bg-white rounded-b-[16px] rounded-tl-[16px] rounded-tr-[4px] py-3 shadow-elevaiton flex flex-col items-center">
          {items.map(({ label, onClick }, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center w-full py-3 text-b3 leading-b3 font-m text-[#7f7f7f] cursor-pointer hover:text-[#333333]"
              onClick={() => {
                onClick();
                closeDropDown();
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </DropDownComponent>
    </div>
  );
}
