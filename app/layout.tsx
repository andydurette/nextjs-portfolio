// "use client";
import type { Metadata } from "next";
import { Montserrat, Yellowtail, PT_Serif } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const montserrat_init = Montserrat({
  subsets: [],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

const yellowtail_init = Yellowtail({
  subsets: [],
  weight: "400",
  variable: "--font-yellowtail",
});

const ptserif = PT_Serif({
  subsets: [],
  weight: ["400"],
  variable: "--font-ptserif",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andy Durette",
  description:
    "A Full Stack Developer & Designer specialized in React, Node Js and AWS",
};

import { Provider } from "jotai";

function Providers({ children }: any) {
  return <Provider>{children}</Provider>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.className} 
          ${montserrat_init.variable} 
          ${yellowtail_init.variable} 
          ${ptserif.variable}
        `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
