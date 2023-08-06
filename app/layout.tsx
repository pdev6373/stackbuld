import { Footer } from "@/components";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

const tthoves = localFont({
  src: [
    {
      path: "../assets/fonts/TTHoves-Light.woff2",
      weight: "300",
      style: "normal",
    },

    {
      path: "../assets/fonts/TTHoves-Regular.woff2",
      weight: "400",
      style: "normal",
    },

    {
      path: "../assets/fonts/TTHoves-Medium.woff2",
      weight: "500",
      style: "normal",
    },

    {
      path: "../assets/fonts/TTHoves-DemiBold.woff2",
      weight: "600",
      style: "normal",
    },

    {
      path: "../assets/fonts/TTHoves-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Stackbuld",
  description:
    "Harness the power of scalable software solutions to elevate your business performance and profitability.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={tthoves.className}>
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
