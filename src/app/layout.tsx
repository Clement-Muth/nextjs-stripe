import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ApplicationKernel from "~/core/ApplicationKernel";
import Header from "~/app/views/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={inter.className} suppressHydrationWarning>
        <ApplicationKernel>
          <Header />
          {children}
        </ApplicationKernel>
      </body>
    </html>
  );
}
