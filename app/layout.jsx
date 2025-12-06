import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

import "@/app/_styles/globals.css";

export const metadata = {
  title: "New Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className="min-h-screen bg-primary-950 text-primary-100"> */}
      <body className="">
        <header className="flex items-center justify-between">
          <Logo />

          <Navigation />
        </header>

        <main>{children}</main>

        <footer>copyright 2025 &copy; </footer>
      </body>
    </html>
  );
}
