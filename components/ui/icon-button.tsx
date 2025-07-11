import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

function IconButton({
  onClick,
  icon,
  className,
}: IconButtonProps): React.ReactElement {
  return (
    <button
      onClick={onClick}
      className={cn(
        `rounded-full
        flex
        items-center
        justify-center
        bg-white
        border
        shadow-md
        p-2
        hover:scale-110
        transition`,
        className
      )}
    >
      {icon}
    </button>
  );
}

export default IconButton;
