import type { SVGProps } from "react";

export function WaffleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 3h18v18H3z" />
      <path d="M8 3v18" />
      <path d="M16 3v18" />
      <path d="M3 8h18" />
      <path d="M3 16h18" />
    </svg>
  );
}
