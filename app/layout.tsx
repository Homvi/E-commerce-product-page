import "./globals.scss";
import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import Navbar from "./components/Navbar";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sneakers",
  description: "Sneakers shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={kumbhSans.className} lang="en">
      <body>
        <section className="max-w-[1250px] mx-auto">
          <Navbar />
          {children}
        </section>
      </body>
    </html>
  );
}
