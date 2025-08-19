import "./styles.css";
import { fonts } from "@repo/design-system/lib/fonts";
import { cn } from "@repo/design-system/lib/utils";
import type { ReactNode } from "react";

type RootLayoutProperties = {
  readonly children: ReactNode;
  readonly params: Promise<{
    locale: string;
  }>;
};

const RootLayout = async ({ children }: RootLayoutProperties) => {
  return (
    <html
      lang="en"
      className={cn(fonts, "scroll-smooth")}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
