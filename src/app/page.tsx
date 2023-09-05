"use client";

import Banner from "@/components/Carousel";
import Suggestion from "@/components/Suggestion";
import styled from "@emotion/styled";
import BandBanner from "@/components/BandBanner";

export default function Home() {
  return (
    <Main>
      <Banner />
      <Warpper>
        <Suggestion listType="Company" />
        <Suggestion listType="Recruitments" />
        <BandBanner />
        <Suggestion listType="BookMark" />
      </Warpper>
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  padding: 40px 0;
`;

const Warpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;
  margin-top: 80px;
`;
