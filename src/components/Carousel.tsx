import Image from "next/image";
import styled from "@emotion/styled";
import { theme } from "@team-return/design-system";
import React, { useEffect, useRef, useState } from "react";
import CircleBtn from "./CircleBtn";

//=======================================================================================================
import TeatBannerImg from "@public/test-banner-1.png";
const test = [
  {
    img: TeatBannerImg,
    url: "https://www.naver.com",
  },
  {
    img: TeatBannerImg,
    url: "https://www.naver.com",
  },
  {
    img: TeatBannerImg,
    url: "https://www.naver.com",
  },
  {
    img: TeatBannerImg,
    url: "https://www.naver.com",
  },
  {
    img: TeatBannerImg,
    url: "https://www.naver.com",
  },
];
//=======================================================================================================

export default function Banner() {
  const [selected, setSelected] = useState<number>(0);
  const BannerRefs = useRef<HTMLDivElement[] | null[]>([]);

  const handleChangeNext = () => {
    setSelected((prev) => {
      if (test.length - 1 === prev) {
        return 0;
      }
      return ++prev;
    });
  };
  const handleChangePrev = () => {
    setSelected((prev) => {
      if (prev === 0) {
        return test.length - 1;
      }
      return --prev;
    });
  };

  useEffect(() => {
    BannerRefs.current[selected]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [selected]);

  return (
    <Warpper>
      <BannerWarpper>
        {test.map((item, index) => (
          <CurrentBanner
            index={index}
            end={test.length - 1}
            ref={(el: HTMLDivElement) => (BannerRefs.current[index] = el)}
            onClick={() => {
              window.open(item.url);
            }}
          >
            <Image width={0} height={0} src={item.img} alt="" />
          </CurrentBanner>
        ))}
      </BannerWarpper>

      <PageIndicator>
        {test.map((_, index: number) => (
          <Dot
            key={index}
            onClick={() => {
              setSelected(index);
            }}
            select={index === selected}
          />
        ))}
      </PageIndicator>
      <PrevNextBtns>
        <CircleBtn direction="left" onClick={handleChangePrev} />
        <CircleBtn direction="right" onClick={handleChangeNext} />
      </PrevNextBtns>
    </Warpper>
  );
}

const Warpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
const BannerWarpper = styled.div`
  width: 100vw;
  display: flex;
  gap: 50px;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  z-index: 1;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CurrentBanner = styled.div<{ index: number; end: number }>`
  width: 65vw;
  height: 20vw;
  display: inline-block;
  flex: 0 0 auto;
  border-radius: 12px;
  border: 1px solid ${theme.color.gray40};
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  margin: ${(props) => {
    switch (props.index) {
      case 0:
        return "0 0 0 17.5vw";
      case props.end:
        return "0 17.5vw 0 0";
    }
  }};
`;

const PageIndicator = styled.div`
  display: flex;
  gap: 7px;
  position: relative;
  bottom: 40px;
  z-index: 3;
`;

const Dot = styled.div<{ select: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) =>
    props.select ? theme.color.gray10 : "rgba(255, 255, 255, 0.40)"};
`;

const PrevNextBtns = styled.div`
  width: 100vw;
  height: 20vw;
  display: flex;
  justify-content: space-between;
  background: none;
  align-items: center;
  position: absolute;
  padding: 0 8vw;
`;
