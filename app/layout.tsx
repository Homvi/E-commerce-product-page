import "./globals.scss";
import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });
import { Providers } from "@/lib/providers";
import Head from "next/head";

export const metadata: Metadata = {
  title: "SNEAKERS",
  description: "Sneakers shop",
};

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html className={kumbhSans.className} lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body className="overflow-x-hidden">
          <section className="max-w-[1250px] mx-auto">
            <Navbar />
            {props.children}
          </section>
        </body>
      </html>
    </Providers>
  );
}
