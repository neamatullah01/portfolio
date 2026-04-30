"use client";

import { ThemeProvider } from "next-themes";
import { ReactLenis } from "lenis/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <ReactLenis root>
        {children}
      </ReactLenis>
    </ThemeProvider>
  );
}
