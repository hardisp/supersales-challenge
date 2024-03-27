"use client";

import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "@app/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider cssVarsRoot="#app" theme={customTheme} resetCSS>
      {children}
    </ChakraProvider>
  );
}
