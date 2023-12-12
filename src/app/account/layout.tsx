interface PropsType {
  children: React.ReactNode;
}

export default function Account({ children }: PropsType) {
  // document.querySelector("body")!.style.backgroundColor = "#f5f5f5";
  return (
    <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
      <div className="w-[400px] block bg-white shadow-elevaiton rounded-[20px] py-[36px] px-[32px] relative">
        {children}
      </div>
    </div>
  );
}
