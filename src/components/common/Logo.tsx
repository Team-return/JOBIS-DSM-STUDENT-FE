import Image from "next/image";

interface PropsType {
  src: string;
  width?: string;
  height?: string;
}

export default function Logo({ src, width, height }: PropsType) {
  return (
    <div
      className="rounded-[8px] overflow-hidden flex items-center content-center shadow-elevaiton relative"
      style={{
        width: width ? width : "100%",
        height: height ? height : "100%",
      }}
    >
      <Image
        className="object-contain"
        fill
        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${src}`}
        alt="CompaniesLogo"
      />
    </div>
  );
}
