interface PropsType {
  children?: string | number;
}

export default function GhostTag({ children }: PropsType) {
  return (
    <div className="px-2 py-[2px] border border-[#18DB89] rounded-[100px] h-fit w-fit">
      <p className="text-caption leading-caption font-m text-[#18DB89]">
        {children}
      </p>
    </div>
  );
}
