import { clsx } from "clsx";

interface TextProps {
  size?: "sm" | "md" | "lg";
  children: string;
  asChild?: boolean;
}

export function Text({ size = "md", children, asChild }: TextProps) {
    const Comp = 
  return (
    <span
      className={clsx("text-gray-100 font-sans", {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-md": size === "lg",
      })}
    >
      {children}
    </span>
  );
}
