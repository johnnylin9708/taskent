import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import config from "@/amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
