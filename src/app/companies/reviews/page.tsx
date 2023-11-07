import ReviewList from "@/components/company/ReviewList";

export default function Reviews() {
  return (
    <div className="w-2/3 mx-auto my-5">
      <p className="py-12 leading-10 text-center text-h4 font-b text-prmyBlue03">
        면접 후기
      </p>
      <hr className="border-[#135C9D]" />
      <ReviewList />
    </div>
  );
}
