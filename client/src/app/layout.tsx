import { ThemeProvider } from "@/components";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import DashBoardWrapper from "./DashboardWrapper";
import "./globals.css";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DashBoardWrapper>{children}</DashBoardWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
