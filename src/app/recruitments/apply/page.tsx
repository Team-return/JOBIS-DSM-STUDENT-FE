"use client";

import { useApplyToCompany, useReapply } from "@/apis/applications";
import {
  ApplyRequestItmeType,
  AttachmentsType
} from "@/apis/applications/type";
import { useCreatePresignedURL } from "@/apis/file";
import { useGetRecruitmentsDetail } from "@/apis/recruitments";
import GhostBtn from "@/components/common/Button/GhostBtn";
import Loading from "@/components/common/Loading";
import Logo from "@/components/common/Logo";
import FilePreview from "@/components/recruitments/apply/FilePreview";
import FileUploader from "@/components/recruitments/apply/FileUploader";
import Header_Contents from "@/components/recruitments/apply/Header_Contents";
import ShadowBox from "@/components/recruitments/apply/ShadowBox";
import TitleBox from "@/components/recruitments/apply/TitleBox";
import URLItem from "@/components/recruitments/apply/URLItem";
import UrlListComponent from "@/components/recruitments/apply/UrlListComponent";
import useMoadl from "@/hook/useModal";
import { Icon, useToastStore } from "@team-return/design-system";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Apply() {
  const param = useSearchParams();
  const applicationId = param.get("application");
  const { Modal, openModal, closeModal } = useMoadl();
  const { mutate: onApplyToCompany, isLoading: applyIsLoading } =
    useApplyToCompany(param.get("id")!);
  const { mutate: onReapply, isLoading: reapplyIsLoading } =
    useReapply(applicationId);
  const {
    data: fileResponse,
    mutate: onUploadFile,
    isLoading,
    isSuccess,
  } = useCreatePresignedURL();
  const { append } = useToastStore();
  const [fileList, setFileList] = useState<File[]>([]);
  const [urlList, setUrlList] = useState<string[]>([]);
  const [applyRequest, setApplyRequest] = useState<ApplyRequestItmeType[]>([]);
  const [isClickedApplyBtn, setIsClickedApplyBtn] = useState<boolean>(false);

  const [isApply, setIsApply] = useState(false);

  const addRequestFileList = (fileList: File[]) => {
    setFileList((prev) => [...prev, ...fileList]);
  };

  const addRequestUrlList = (urlList: string[]) => {
    setUrlList((prev) => [...prev, ...urlList]);
    if (urlList.length)
      setApplyRequest((prev) => [
        ...prev,
        ...urlList.map((url) => ({
          url,
          type: "URL" as AttachmentsType,
        })),
      ]);
  };

  useEffect(() => {
    if (isClickedApplyBtn) {
      if (fileList.length) {
        openModal();
      } else {
        append({
          title: "",
          message: "파일이 존재하지 않습니다.",
          type: "RED",
        });
        setIsClickedApplyBtn(false);
        setApplyRequest([]);
      }
    }
  }, [fileList]);

  useEffect(() => {
    if (isSuccess) {
      setIsApply(true);
      setApplyRequest((prev: ApplyRequestItmeType[]) => [
        ...prev,
        ...fileResponse.data.urls.map(({ file_path }) => ({
          url: file_path,
          type: "FILE" as AttachmentsType,
        })),
      ]);
    }
  }, [fileResponse?.data]);

  useEffect(() => {
    if (isApply) {
      if (!applicationId) onApplyToCompany(applyRequest);
      else onReapply(applyRequest);
    }
  }, [applyRequest]);

  //==============================
  // 모집의뢰서

  const { data: recruitmentsDetial } = useGetRecruitmentsDetail(
    param.get("id")!
  );

  return (
    <>
      {(isLoading || applyIsLoading || reapplyIsLoading) && (
        <div
          className="fixed top-0 left-0 w-screen h-screen z-10 bg-[rgba(0,0,0,0.2)]"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex items-center justify-center w-full h-full">
            <Loading size="80px" />
          </div>
        </div>
      )}
      <div className="flex flex-col items-center w-full gap-3 py-14">
        <ShadowBox width="80%">
          <div className="w-full h-full pt-12 px-[60px] pb-[60px]">
            <div className="flex items-center gap-5 mb-5">
              <Logo
                src={recruitmentsDetial?.company_profile_url ?? ""}
                width="44px"
                height="44px"
              />
              <p className="text-black text-h5 leading-h5 font-b">
                {recruitmentsDetial?.company_name}
              </p>
            </div>
            <p className="mb-[60px] text-caption leading-caption font-r text-[#7f7f7f]">
              제출서류 : {recruitmentsDetial?.submit_document}
            </p>
            
            <TitleBox title="제출서류">
              <Header_Contents title="포트폴리오">
                <FileUploader
                  multiple
                  addFilesToRequest={addRequestFileList}
                  isBtnClicked={isClickedApplyBtn}
                />
              </Header_Contents>
              <Header_Contents title="자소서">
                <FileUploader
                  multiple
                  addFilesToRequest={addRequestFileList}
                  isBtnClicked={isClickedApplyBtn}
                />
              </Header_Contents>
            </TitleBox>
          </div>
        </ShadowBox>
        <ShadowBox width="80%">
          <div className="w-full h-full pt-12 px-[60px] pb-[60px]">
            <TitleBox title="입력요소">
              <Header_Contents title="첨부파일">
                <FileUploader
                  multiple
                  addFilesToRequest={addRequestFileList}
                  isBtnClicked={isClickedApplyBtn}
                />
              </Header_Contents>
              <Header_Contents title="링크">
                <UrlListComponent
                  addUrlsToRequest={addRequestUrlList}
                  isBtnClicked={isClickedApplyBtn}
                />
              </Header_Contents>
            </TitleBox>
            <div className="flex justify-between items-end w-full mt-14">
              <div>
              <p className="text-caption leading-caption font-r text-[#E74C3C]">
                ※ 파일 첨부 시 파일 확장자를 확인해 주시기 바랍니다.
              </p>
              <p className="text-caption leading-caption font-r text-[#7f7f7f]">
                pdf, ppt, pptx, hwp, jpg, png, zip, txt, mp4, png, jpg, svg
              </p>
              </div>
              <GhostBtn
                onClick={() => {
                  setIsClickedApplyBtn(true);
                }}
              >
                지원하기
              </GhostBtn>
            </div>
          </div>
        </ShadowBox>
      </div>
      <Modal
        backgroundClose={false}
        className="top-0 left-0 fiex w-[600px] min-h-[300px]"
      >
        <div className="flex flex-col justify-between w-full h-full min-h-[200px] relative">
          <div>
            <p className="text-b4 leading-b4 font-b">첨부파일</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {fileList.map((file, idx) => (
                <FilePreview key={idx} fileName={file.name} />
              ))}
            </div>
            <p className="mt-8 text-b4 leading-b4 font-b">URL</p>
            <div className="mb-5">
              {urlList.length ? (
                urlList.map((url, idx) => <URLItem url={url} key={idx} />)
              ) : (
                <p className="text-caption leading-caption font-r text-[#7f7f7f]">
                  등록된 URL이 존재하지 않습니다.
                </p>
              )}
            </div>
          </div>
          <div className="self-end mt-4">
            
            <GhostBtn
              onClick={() => {
                onUploadFile(fileList);
              }}
            >
              지원하기
            </GhostBtn>
          </div>
          <button
            onClick={() => {
              setIsClickedApplyBtn(false);
              setFileList([]);
              setUrlList([]);
              closeModal();
            }}
            className="absolute top-[-18px] right-[-22px] rounded-[50%] w-7 h-7 flex justify-center items-center hover:bg-[#f7f7f7]"
          >
            <Icon icon="Close" size={20} color="gray80" />
          </button>
        </div>
      </Modal>
    </>
  );
}
