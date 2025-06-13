import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const accentClassNames = {
  accent: "bg-[#550948]",
  accentHover: "hover:bg-[#ca2eb0]",
  accentText: "text-[#550948]",
  accentBorder: "border-[#550948]",
};

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
