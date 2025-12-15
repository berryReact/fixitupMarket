import "@/app/_styles/globals.css";

import { Orbitron } from "next/font/google";
import Header from "@/app/_components/Header";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
import { getOptionalUser } from "./_lib/auth/require-user";
import LinkButton from "@/app/_components/LinkButton";
import { signOutFormAction } from "./_lib/actions";
import SubmitButton from "@/app/_components/SubmitButton";

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

export default async function RootLayout({ children }) {
  const { user, supabase, profile } = await getOptionalUser();

  return (
    <html lang="en">
      <body
        className={`${orbitron.className} flex min-h-dvh flex-col bg-hazard-100 text-metal-900 antialiased`}
      >
        <Header user={user} profile={profile} />
        <div className="brushed-metal-bg flex flex-1 flex-col">
          <main className="mx-auto flex min-h-0 w-full flex-1 flex-col">
            {children}
          </main>

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

        <footer className="px-4 py-4 text-xs text-metal-700">
          <div className="flex items-center justify-between">
            {/* copyright 2025 &copy; */}
            <Link href="/admin/login">Admin</Link>
            <LinkButton size="small" variant="accent" text="sm" href="/signup">
              Sign up
            </LinkButton>
            {user && (
              <form action={signOutFormAction}>
                <SubmitButton size="small" variant="accent">
                  Logout
                </SubmitButton>
              </form>
            )}
          </div>
        </footer>
      </body>
    </html>
  );
}
