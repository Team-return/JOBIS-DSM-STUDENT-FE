import Shimmer from "./Shimmer";

export default function CompaniesSkelton() {
  const skeltonArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  return (
    <>
      {skeltonArray.map(() => (
        <div className="bg-[#ffffff] w-full rounded-[14px]">
          <div className="skeltonUi w-full h-[12vw] rounded-[14px] relative overflow-hidden">
            <Shimmer />
          </div>
          <div className="skeltonUi w-full h-8 rounded-[6px] mt-4 relative overflow-hidden">
            <Shimmer />
          </div>
          <div className="skeltonUi w-2/3 h-6 rounded-[6px] mt-2 relative overflow-hidden">
            <Shimmer />
          </div>
        </div>
      ))}
    </>
  );
}
