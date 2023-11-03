"use client";

import React, { useEffect, useState } from "react";
import { useDropDown } from "@/hook/useDropDown";
import { Icon } from "@team-return/design-system";
import TextFiled from "./TextFiled";
import useForm from "@/hook/useForm";
import Chips from "./Chips";
import { GetCode } from "@/apis/code";
import { TechCodeResponensType } from "@/util/type";
import GhostBtn from "./Button/GhostBtn";
import { setQueryStringType, useQueryString } from "@/hook/useQueryString";

interface PropsType {
  title: string;
}

function SearchDropDown({ title }: PropsType) {
  const { DropDownComponent, toggleDropdown, closeDropDown } = useDropDown();

  const { setQueryString, getQueryString } = useQueryString({
    page: "1",
    job_code: "",
    tech_code: "",
    name: "",
  });

  return (
    <div
      className="h-10 pr-[12px] pl-4 border border-solid border-[#cccccc] rounded-[8px] flex items-center gap-[23px] text-b3 leading-b3 font-r text-[#7f7f7f] relative"
      onClick={toggleDropdown}
    >
      <p>{title}</p>
      <Icon icon="Chevron" color="gray60" />
      <DropDownComponent className="absolute left-0 min-w-full top-11">
        <TechCodeDropDownComponent
          closeDropDown={closeDropDown}
          setQueryString={setQueryString}
          getQueryString={getQueryString}
        />
      </DropDownComponent>
    </div>
  );
}

function TechCodeDropDownComponent({
  closeDropDown,
  setQueryString,
  getQueryString
}: {
  closeDropDown: () => void;
  setQueryString: (newValue: setQueryStringType) => void;
  getQueryString: (key: keyof setQueryStringType) => string;
}) {
  const [select, setSelect] = useState<TechCodeResponensType[]>([]);
  const [searchKeyword, setSearch] = useState<string>("");
  const { state: techSearchState, onChange } = useForm<{
    techCodeSearch: string;
  }>({
    techCodeSearch: "",
  });

  const { data } = GetCode("TECH", searchKeyword);

  useEffect(() => {
    const techArray = getQueryString("tech_code")
      .split(",")
      .map((item) => Number(item));
    setSelect(() => {
      return (
        data?.data.codes.filter((item: TechCodeResponensType) =>
          techArray?.some((techItem) => item.code === techItem)
        ) || []
      );
    });
  }, [getQueryString("tech_code"), data?.data.codes]);

  return (
    <div
      className="bg-white w-[400px] h-[430px] shadow-elevaiton rounded-[8px] p-5 flex flex-col"
      onClick={(e) => e.stopPropagation()}
    >
      <TextFiled
        placeholder="검색어를 입력해주세요."
        onChange={onChange}
        value={techSearchState.techCodeSearch}
        name="techCodeSearch"
        width="100%"
        enterEvent={() => {
          setSearch(techSearchState.techCodeSearch);
        }}
      />
      <hr className="mx-2 my-4" />
      <div className="mb-5">
        <Chips value={select} select={select} setSelect={setSelect} />
      </div>
      <div className="flex-1 overflow-hidden">
        <Chips
          value={data?.data.codes || []}
          select={select}
          setSelect={setSelect}
        />
      </div>
      <div className="flex justify-end h-8 mt-2">
        <GhostBtn
          onClick={() => {
            setQueryString({
              tech_code: select.map((item) => item.code).toString(),
            });
            closeDropDown();
          }}
        >
          저장
        </GhostBtn>
      </div>
    </div>
  );
}

export default React.memo(SearchDropDown);
