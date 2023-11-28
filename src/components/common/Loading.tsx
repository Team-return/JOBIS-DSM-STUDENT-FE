import LoadingImage from "@public/Loading.png";
import Image from "next/image";

interface PropsType {
  size?: string;
}

export default function Loading({ size = "100px" }: PropsType) {
  return (
    <div
      className="relative animate-loading"
      style={{ width: size, height: size }}
    >
      <Image fill src={LoadingImage} alt="로딩 중..." />
    </div>
  );
}
