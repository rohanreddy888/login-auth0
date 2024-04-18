import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

import AuthProvider from "./components/AuthProvider";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Auth0 Demo",
  description:
    "This app demonstrates the funtionality of Auth0 using Google, Github & LinkedIn Login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
