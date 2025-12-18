import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import { getOptionalUser } from "@/app/_lib/auth/require-user";

async function MainLayout({ children }) {
  const { user, supabase, profile } = await getOptionalUser();
  return (
    <>
      <Header user={user} profile={profile} />
      <main className="mx-auto flex min-h-0 w-full flex-1 flex-col">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
