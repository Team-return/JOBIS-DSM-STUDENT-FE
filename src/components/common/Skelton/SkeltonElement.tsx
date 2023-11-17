import Shimmer from "./Shimmer";

export default function RecruitmentSkelton() {
  return (
    <>
      {Array.from({ length: 12 }, () => (
        <div className="w-full rounded-[14px] overflow-hidden">
          <div className="w-full h-[10vw] skeltonUi relative ">
            <Shimmer />
          </div>
          <div className="w-full h-8 rounded-[6px] skeltonUi mt-4 ">
            <Shimmer />
          </div>
          <div className="w-2/3 h-6 rounded-[6px] skeltonUi mt-2 ">
            <Shimmer />
          </div>
          <div className="w-1/3 h-8 rounded-[20px] skeltonUi mt-2 mb-5 ">
            <Shimmer />
          </div>
        </div>
      ))}
    </>
  );
}
