import type { CSSProperties, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  offset?: number;
  as?: "div" | "section" | "span" | "li" | "ul" | "ol" | "p" | "article";
  className?: string;
}

export default function Reveal({
  children,
  delay = 0,
  offset = 20,
  as: Tag = "div",
  className = "",
}: RevealProps) {
  const style = {
    "--reveal-delay": `${delay}ms`,
    "--reveal-offset": `${offset}px`,
  } as CSSProperties;

  return (
    <Tag className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
