
import { Cabin } from "next/font/google"
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';


const cabin = Cabin({ subsets: ["latin"] });

export const metadata = {
  title: "Parth K.",
  description: "Portfolio website of Parth Kabra made with NextJS and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cabin.className}>
        {children}
        <Analytics mode={'production'} />;

      </body>
    </html>
  );
}
