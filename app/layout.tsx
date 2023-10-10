import "./globals.scss";
import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });
import { Providers } from "@/lib/providers";

export const metadata: Metadata = {
  title: "Sneakers",
  description: "Sneakers shop",
};

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html className={kumbhSans.className} lang="en">
        <body>
          <Navbar />
          <section className="max-w-[1250px] mx-auto">{props.children}</section>
        </body>
      </html>
    </Providers>
  );
}
