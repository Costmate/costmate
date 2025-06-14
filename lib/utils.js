import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const accentClassNames = {
  accent: "bg-[#550948]",
  accentHover: "hover:bg-[#ca2eb0]",
  accentText: "text-[#550948]",
  accentBorder: "border-[#550948]",
  accentSoftBgColor: "bg-[rgba(85,9,72,0.05)]",
  accentBgColor30: "bg-[#CCB5C8]",
};

export function getPageTitle(currentPath) {
  const pages = [
    "Dashboard",
    "Recipes",
    "Inventory",
    "Orders",
    "Analytics",
    "Suppliers",
    "Learn",
    "Settings",
  ];

  return (
    pages.find((page) =>
      currentPath.toLowerCase().includes(page.toLowerCase())
    ) || "Page not found"
  );
}
