"use client";

import Banner from "@/components/Carousel";
import Suggestion from "@/components/Suggestion";
import BandBanner from "@/components/BandBanner";

export default function Home() {
  return (
    <main className="w-full py-[40px]">
      <Banner />
      <div className="flex flex-col items-center gap-[120px] mt-[80px]">
        <Suggestion listType="Company" />
        <Suggestion listType="Recruitments" />
        <BandBanner />
        <Suggestion listType="BookMark" />
      </div>
    </main>
  );
}
