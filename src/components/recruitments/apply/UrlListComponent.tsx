import useForm from "@/hook/useForm";
import { Icon } from "@team-return/design-system";
import { useEffect, useState } from "react";
import URLItem from "./URLItem";

interface PropsType {
  addUrlsToRequest: (urlList: string[]) => void;
  isBtnClicked: boolean;
}

export default function UrlListComponent({
  addUrlsToRequest,
  isBtnClicked,
}: PropsType) {
  const {
    state: urlState,
    onChange,
    setState: setUrlState,
  } = useForm<{ url: string }>({
    url: "",
  });
  const [urlList, setUrlList] = useState<string[]>([]);

  useEffect(() => {
    if (isBtnClicked) addUrlsToRequest(urlList);
  }, [isBtnClicked]);

  const onEnterEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") appendURL();
  };

  const appendURL = () => {
    if (urlState.url.replaceAll(" ", "")) {
      setUrlList((prev) => [...prev, urlState.url]);
      setUrlState({ url: "" });
    }
  };

  const prependURL = (itemIdx: number) => {
    setUrlList((prev) => prev.filter((_, idx) => idx !== itemIdx));
  };

  return (
    <div className="w-full">
      <div className="border border-[#CCCCCC] rounded-[8px] w-full flex overflow-hidden items-center">
        <input
          type="text"
          name="url"
          onChange={onChange}
          value={urlState.url}
          onKeyUp={onEnterEvent}
          placeholder="포트폴리오 링크 또는 기타 URL 입력"
          className="py-[10px] px-[14px] flex-1 text-caption leading-caption font-r"
          autoComplete="off"
        />
        <div
          className="flex items-center justify-center mr-3 cursor-pointer"
          onClick={appendURL}
        >
          <Icon icon="Plus" size={26} color="gray60" />
        </div>
      </div>
      {urlList.map((item, idx) => (
        <URLItem
          key={idx}
          url={item}
          prepend={() => {
            prependURL(idx);
          }}
        />
      ))}
    </div>
  );
}
