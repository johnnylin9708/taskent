import type { Metadata } from "next";
import { Amplify } from "aws-amplify";

import { Inter } from "next/font/google";
import "./globals.css";
import config from "@/amplifyconfiguration.json";
import { siteConfig } from "@/config/site";

Amplify.configure(config);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `${siteConfig.name} | %s` },
  description: siteConfig.description,
  icons: [{ url: "/logo.svg", href: "/logo.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
