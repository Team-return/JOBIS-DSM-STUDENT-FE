interface PropsType {
  title: string;
  children: React.ReactNode;
}

export default function Header_Contents({ title, children }: PropsType) {
  return (
    <div className="flex w-full gap-2">
      <p className="text-b3 font-r leading-b3 text-[#333333] w-[100px]">
        {title}
      </p>
      {children}
    </div>
  );
}
