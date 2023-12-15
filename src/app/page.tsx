"use client";

import BandBanner from "@/components/BandBanner";
import Banner from "@/components/Carousel";
import Suggestion from "@/components/Suggestion";

export default function Home() {
  return (
    <main className="w-full py-[40px]">
      <Banner />
      <div className="flex flex-col items-center gap-[120px] my-[80px]">
        <Suggestion listType="Company" />
        <Suggestion listType="Recruitments" />
        <BandBanner />
        <Suggestion listType="Bookmark" />
      </div>
    </main>
  );
}
