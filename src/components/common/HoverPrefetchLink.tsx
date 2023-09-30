"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

interface PropsType extends LinkProps {
  href: string;
  children: React.ReactNode;
}

export default function HoverPrefetchLink({
  children,
  prefetch,
  href,
  ...res
}: PropsType) {
  const router = useRouter();
  return (
    <Link
      href={href}
      prefetch={false}
      onMouseEnter={() => {
        router.prefetch(href);
      }}
      {...res}
    >
      {children}
    </Link>
  );
}
