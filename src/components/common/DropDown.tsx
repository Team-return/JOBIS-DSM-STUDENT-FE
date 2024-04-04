"use client";

import { useDropDown } from "@/hook/useDropDown";
import { Icon } from "@team-return/design-system";
import React from "react";

interface DropdownItemsType {
  code: string;
  label: string;
}

interface PropsType {
  title: string;
  items: DropdownItemsType[];
  onClickItem: (itemId: string) => void;
  selected: number | string;
}

function DropDown({ title, items, onClickItem, selected }: PropsType) {
  const { toggleDropdown, DropDownComponent, closeDropDown } = useDropDown();

  const selectedItemLabel = items.find((item) => item.code === String(selected));

  return (
    <div
      onClick={toggleDropdown}
      className="h-10 pr-[12px] pl-4 border border-solid border-[#cccccc] rounded-[8px] flex items-center gap-[23px] text-b3 leading-b3 font-r text-[#7f7f7f] relative"
    >
      <p className={`${
                selectedItemLabel
                  ? "text-lightBlue font-m"
                  : "text-[#7f7f7f] font-r"
              }`}>{selectedItemLabel ? selectedItemLabel.label : title}</p>
      <Icon icon="Chevron" color="gray60" />
      <DropDownComponent className="absolute left-0 min-w-full top-11">
        <div className="min-w-full max-h-40 py-2 px-2 bg-white shadow-elevaiton rounded-[8px] overflow-scroll">
          {items?.map((item, idx) => (
            <div
              key={idx}
              onClick={() => {
                onClickItem(item.code.toString());
                closeDropDown();
              }}
              className={`text-caption leading-caption ${
                selected == item.code
                  ? "text-lightBlue font-m"
                  : "text-[#7f7f7f] font-r"
              } hover:text-black py-2 w-full flex flex-col items-center`}
            >
              {item.label}
            </div>
          ))}
        </div>
      </DropDownComponent>
    </div>
  );
}

export default React.memo(DropDown);
