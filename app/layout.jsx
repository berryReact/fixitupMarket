import "@/app/_styles/globals.css";

import { Orbitron } from "next/font/google";
import Header from "@/app/_components/Header";
import { Toaster } from "react-hot-toast";

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
          <main className="mx-auto w-full">{children}</main>
          <Toaster
            position="top-center"
            toastOptions={{
              // Global default styles
              style: {
                background: "#1f1f1f", // dark metal
                color: "#f5f5f5",
                border: "1px solid #3b3b3b", // subtle metal border
                padding: "10px 14px",
                fontSize: "0.95rem",
              },

              // Icon colors
              iconTheme: {
                primary: "#facc15", // yellow (Tailwind amber-400)
                secondary: "#1f1f1f",
              },

              // Styled success
              success: {
                style: {
                  background: "#1d2b1f", // dark green metal
                  border: "1px solid #22c55e",
                  color: "#dcfce7",
                },
                iconTheme: {
                  primary: "#22c55e",
                  secondary: "#1d2b1f",
                },
              },

              // Styled error
              error: {
                style: {
                  background: "#2b1d1d",
                  border: "1px solid #ef4444",
                  color: "#fee2e2",
                },
                iconTheme: {
                  primary: "#ef4444",
                  secondary: "#2b1d1d",
                },
              },
            }}
          />
        </div>

        <footer className="text-metal-700 px-4 py-4 text-xs">
          copyright 2025 &copy;{" "}
        </footer>
      </body>
    </html>
  );
}
