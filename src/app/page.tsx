"use client";

import Banner from "@/components/Carousel";
import EmploymentBanner from "@/components/EmploymentBanner";
import Suggestion from "@/components/Suggestion";
import Header from "@/components/common/Header";
import { styled } from "styled-components";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <Banner />
        <Warpper>
          <Suggestion listType="Company" />
          <Suggestion listType="Recruitments" />
          <EmploymentBanner />
          <Suggestion listType="BookMark" />
        </Warpper>
      </Main>
    </>
  );
}

const Main = styled.main`
  margin-top: 56px;
  width: 100%;
  padding: 40px 0;
`;

const Warpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;
  margin-top: 150px;
`;
