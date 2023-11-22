"use client";

import GhostBtn from "@/components/common/Button/GhostBtn";
import Logo from "@/components/common/Logo";
import FileUploader from "@/components/recruitments/apply/FileUploader";
import Header_Contents from "@/components/recruitments/apply/Header_Contents";
import LinkListComponent from "@/components/recruitments/apply/LinkListComponent";
import ShadowBox from "@/components/recruitments/apply/ShadowBox";
import TitleBox from "@/components/recruitments/apply/TitleBox";

export default function Apply() {
  return (
    <div className="flex flex-col items-center w-full gap-3 py-14">
      <ShadowBox width="80%">
        <div className="w-full h-full pt-12 px-[60px] pb-[60px]">
          <div className="flex gap-5 mb-[80px]">
            <Logo src={""} width="44px" height="44px" />
            <p className="text-black text-h5 leading-h5 font-b">
              (주)비바리퍼블리카
            </p>
          </div>
          <TitleBox title="제출서류">
            <Header_Contents title="포트폴리오">
              <FileUploader multiple />
            </Header_Contents>
            <Header_Contents title="자소서">
              <FileUploader multiple />
            </Header_Contents>
          </TitleBox>
        </div>
      </ShadowBox>
      <ShadowBox width="80%">
        <div className="w-full h-full pt-12 px-[60px] pb-[60px]">
          <TitleBox title="입력요소">
            <Header_Contents title="첨부파일">
              <FileUploader multiple />
            </Header_Contents>
            <Header_Contents title="링크">
              <LinkListComponent />
            </Header_Contents>
          </TitleBox>
          <GhostBtn>지원하기</GhostBtn>
        </div>
      </ShadowBox>
    </div>
  );
}
