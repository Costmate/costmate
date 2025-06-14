import { NavLink, useLocation } from "react-router-dom";
import { cn, accentClassNames } from "@/lib/utils";

export default function NavButton({ path, text, action, icon }) {
  const currentPath = useLocation().pathname;
  const { accentBorder, accentText, accentSoftBgColor } = accentClassNames;
  const isActive = currentPath.toLowerCase().includes(path.toLowerCase());
  const activeClassNames = "border-l-4 font-bold rounded-sm";

  return (
    <NavLink to={path} onClick={() => action(false)}>
      <div
        className={cn(
          "hover:text-gray-500 w-full flex transition justify-start gap-4 items-center p-2",
          isActive ? accentBorder : '',
          isActive ? activeClassNames : '',
          isActive ? accentText : '',
          isActive ? accentSoftBgColor : '',
        )}
      >
        {icon} {text}
      </div>
    </NavLink>
  );
}
