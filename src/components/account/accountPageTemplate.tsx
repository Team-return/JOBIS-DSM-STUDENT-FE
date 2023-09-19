import styled from "styled-components";
import Image from "next/image";
import { theme } from "@team-return/design-system";

interface PropsType {
  title: string;
  children: JSX.Element;
}

export default function AccountPageTemplate({ title, children }: PropsType) {
  return (
    <div className="w-full h-full absolute flex justify-center items-center left-0 top-0">
      <div className="w-[400px] block bg-white shadow-elevaiton rounded-[20px] py-[36px] px-[32px] relative">
        <div className="max-w-[450px] w-[70%] gap-30 py-70 px-0 w-full m-auto">
          <div>
            <p className="leading-h5 text-h5 text-skyBlue font-bold text-center">
              {title}
            </p>
          </div>
          <main className="w-full flex flex-col">{children}</main>
        </div>
      </div>
    </div>
  );
}
