import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DashBoardWrapper from "./DashboardWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project Management | Howard Phung",
  description: "Fullstack project management application with Next and NodeJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashBoardWrapper>{children}</DashBoardWrapper>
      </body>
    </html>
  );
}
