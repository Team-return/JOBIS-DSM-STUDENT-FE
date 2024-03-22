'use client'

import { useGetNoticeDetail } from "@/apis/notice";
import { useEffect, useState } from "react";
import AttachedBox from "@/components/notice/AttachedBox";

export default function NoticeDetailPage() {
    return (
        <div className="flex justify-center items-center mt-[100px]">
            <div className="flex flex-col gap-[40px]">
                <h1 className="text-[28px] font-[500] text-left">공지사항</h1>
                <div className="w-[1151px] h-[494px] overflow-y-auto">
                    <div className="bg-white border-[1px] border-gray rounded-[12px] p-[40px]">
                        <h1 className="font-[700] text-[28px]">[중요] 신입생 오리엔테이션 안내</h1>
                        <h2 className="font-[500] text-[20px] mt-[20px]">2023-12-05</h2>
                        <p className="font-[400] text-[16px] mt-[28px]">
                            신입생 오리엔테이션 책자에 있는 입학전 과제의 양식입니다.
                            첨부파일을 다운받아 사용하시고,
                            영어와 전공은 특별한 양식이 없으니 내용에 맞게 작성하여 학교 홈페이지에 제출하시기 바랍니다.
                            신입생 오리엔테이션 책자에 있는 입학전 과제의 양식입니다.
                            첨부파일을 다운받아 사용하시고,
                            영어와 전공은 특별한 양식이 없으니 내용에 맞게 작성하여 학교 홈페이지에 제출하시기 바랍니다.
                            신입생 오리엔테이션 책자에 있는 입학전 과제의 양식입니다.
                            첨부파일을 다운받아 사용하시고,
                            영어와 전공은 특별한 양식이 없으니 내용에 맞게 작성하여 학교 홈페이지에 제출하시기 바랍니다.
                            신입생 오리엔테이션 책자에 있는 입학전 과제의 양식입니다.
                            첨부파일을 다운받아 사용하시고,
                            영어와 전공은 특별한 양식이 없으니 내용에 맞게 작성하여 학교 홈페이지에 제출하시기 바랍니다.
                            신입생 오리엔테이션 책자에 있는 입학전 과제의 양식입니다.
                            첨부파일을 다운받아 사용하시고,
                            영어와 전공은 특별한 양식이 없으니 내용에 맞게 작성하여 학교 홈페이지에 제출하시기 바랍니다.
                            신입생 오리엔테이션 책자에 있는 입학전 과제의 양식입니다.
                            첨부파일을 다운받아 사용하시고,
                            영어와 전공은 특별한 양식이 없으니 내용에 맞게 작성하여 학교 홈페이지에 제출하시기 바랍니다.
                            신입생 오리엔테이션 책자에 있는 입학전 과제의 양식입니다.
                            첨부파일을 다운받아 사용하시고,
                            영어와 전공은 특별한 양식이 없으니 내용에 맞게 작성하여 학교 홈페이지에 제출하시기 바랍니다.
                            신입생 오리엔테이션 책자에 있는 입학전 과제의 양식입니다.
                            첨부파일을 다운받아 사용하시고,
                            영어와 전공은 특별한 양식이 없으니 내용에 맞게 작성하여 학교 홈페이지에 제출하시기 바랍니다.
                            신입생 오리엔테이션 책자에 있는 입학전 과제의 양식입니다.
                            첨부파일을 다운받아 사용하시고,
                            영어와 전공은 특별한 양식이 없으니 내용에 맞게 작성하여 학교 홈페이지에 제출하시기 바랍니다.
                        </p>
                        <AttachedBox />
                    </div>
                </div>
            </div>
        </div>
    );
}

