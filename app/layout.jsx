import "@/app/_styles/globals.css";

import { Orbitron } from "next/font/google";
import Header from "@/app/_components/Header";

export const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | Fix-It-Up",
    default: "Welcome | Fix-it-up",
  },
  description:
    "A marketplace for broken, damaged, and fixable items. Buy, sell, and repurpose.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.className} bg-metal-200 text-metal-900 flex min-h-screen flex-col antialiased`}
      >
        <Header />
        <div className="brushed-metal-bg flex-1">
          <main className="bg-metal-100 mx-auto w-full">{children}</main>
        </div>

        <footer className="text-metal-700 px-4 py-4 text-xs">
          copyright 2025 &copy;{" "}
        </footer>
      </body>
    </html>
  );
}
