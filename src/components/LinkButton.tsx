"use client";

import Link from "next/link";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function LinkButton({ href, children, className }: LinkButtonProps) {
  const defaultStyles =
    "bg-[#F6AE2D] text-[#0D2538] py-[0.7rem] px-[1.2rem] no-underline rounded-[5px] font-medium transition-colors duration-300 hover:bg-[#0D2538] hover:text-white shadow-md text-center block";

  return (
    <Link href={href} className={`${defaultStyles} ${className}`}>
      {children}
    </Link>
  );
}