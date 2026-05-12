import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  padding?: boolean;
}

export default function PageContainer({
  children,
  maxWidth = "2xl",
  padding = true
}: PageContainerProps) {
  const maxWidthClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    full: "max-w-full"
  };

  return (
    <div className={`mx-auto w-full ${maxWidthClasses[maxWidth]} ${padding ? "p-6 md:p-8" : ""}`}>
      {children}
    </div>
  );
}
