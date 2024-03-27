import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Supersales App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  navigation,
}: Readonly<{
  children: React.ReactNode;
  navigation: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {navigation}
          {children}
        </Providers>
      </body>
    </html>
  );
}
