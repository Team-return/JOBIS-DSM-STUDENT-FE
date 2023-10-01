"use client";

import { Icon } from "@team-return/design-system";

interface PropsType {
  direction: "right" | "left";
  onClick: () => void;
}

export default function CircleBtn({ direction, onClick }: PropsType) {
  return (
    <button
      className="w-[50px] h-[50px] border-none rounded-full bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.25)] transition hover:-transition hover:scale-110 duration-0.2s"
      aria-label="prevNextBtn"
      onClick={onClick}
    >
      <Icon icon="Chevron" direction={direction} size={30} color="gray60" />
    </button>
  );
}
