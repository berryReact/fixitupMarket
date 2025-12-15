import LoginForm from "@/app/_components/LoginForm";
import Logo from "@/app/_components/Logo";
import { signInAdminFormAction } from "@/app/_lib/actions";

function Page() {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-8 py-4">
        <Logo />
      </div>
      <h2 className="pb-6 text-2xl font-semibold">Admin</h2>
      <form action={signInAdminFormAction}>
        <LoginForm />
      </form>
    </div>
  );
}

export default Page;
