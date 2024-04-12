import Link from "next/link";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tournament",
  // icons: {
  //   icon: "icon.png",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-row justify-between mx-12 p-4 items-end">
          <Link className="link" href="/">
            <h1 className="font-bold text-3xl">TourNament</h1>
          </Link>
          <div className="flex flex-row space-x-12 ml-12">
            <Link className="link primary" href="/teams">
              Equipes
            </Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
