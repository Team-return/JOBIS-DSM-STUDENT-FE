import { ApplicationsStatusType } from "@/apis/applications/type";
import { applicationEnum, applicationStatusStyle } from "@/util/object/enum";

interface PropsType {
  status: ApplicationsStatusType;
}

export default function ApplicationStatus({ status }: PropsType) {
  return (
    <div
      className="py-[6px] px-3 rounded-[4px]"
      style={applicationStatusStyle[status]}
    >
      <p className="text-caption leading-caption font-r">
        {applicationEnum[status]}
      </p>
    </div>
  );
}
