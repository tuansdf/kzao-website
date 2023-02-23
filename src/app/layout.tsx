import { primaryFont } from "@/app/fonts";
import { ReactNode } from "react";
import "./globals.css";

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head />
      <body className={primaryFont.className + " min-h-screen"}>
        {children}
      </body>
    </html>
  );
}
