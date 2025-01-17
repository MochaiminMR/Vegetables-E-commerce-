import type { Metadata } from "next";
import { Poppins } from "next/font/google";

// components
import { Toaster } from "@/components/ui/toaster";

// utils
import { cn } from "@/lib/utils";

// styles
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Vegeta",
  description: "Ecommerce Platform",
  applicationName: "Vegeta",
  authors: {
    name: "Mochaimin Muhamad Rizq",
    url: "https://mochaiminmr.vercel.app/",
  },
  icons: "/logo.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, "text-neutral-600")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
