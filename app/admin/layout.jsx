import { requireAdmin } from "@/app/_lib/auth/require-user";
import Footer from "@/app/_components/Footer";
import AdminHeader from "@/app/_components/AdminHeader";

export default async function AdminLayout({ children }) {
  const { user, profile } = await requireAdmin("/login");

  return (
    <>
      <AdminHeader user={user} profile={profile} />
      <main className="mx-auto flex min-h-0 w-full flex-1 flex-col">
        {children}
      </main>
      <Footer />
    </>
  );
}
