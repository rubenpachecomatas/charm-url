import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { Providers } from "./_components/Providers";

const onest = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Charm Url",
  description: "Your charming url in seconds!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={onest.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
