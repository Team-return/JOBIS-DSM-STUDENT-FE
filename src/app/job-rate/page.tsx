import JobCurrentSituation from "@/components/jobRate/JobCurrentSituation";
import JobPieChart from "@/components/jobRate/JobPieChart";

export default function JobRate() {
  return (
    <div className="flex flex-col pt-16 gap-[63px]">
      <JobPieChart />
      <JobCurrentSituation />
    </div>
  );
}
