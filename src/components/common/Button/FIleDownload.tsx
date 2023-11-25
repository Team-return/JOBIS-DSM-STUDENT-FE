import Link from "next/link";
import { file_name_regex } from "@/util/regex";
import { Icon } from "@team-return/design-system";

interface PropsType {
  fileURL: string;
  onClick?: (props: any) => void;
}

export default function FileDownload({ fileURL, onClick }: PropsType) {
  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${fileURL}`}
      passHref
      target="_blank"
      onClick={onClick}
    >
      <div className="flex items-center justify-center w-fit h-fit gap-2 px-3 py-1 rounded-[8px] bg-[#f7f7f7] hover:underline">
        <p className="text-caption leading-caption font-r text-[#7F7F7F] max-w-[100px] overflow-hidden whitespace-nowrap text-ellipsis">
          {file_name_regex(fileURL)}
        </p>
        <Icon icon="Download" size={12} color="gray60" />
      </div>
    </Link>
  );
}
