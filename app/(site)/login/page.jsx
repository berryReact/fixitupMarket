import LoginForm from "@/app/_components/LoginForm";
import { signInUserFormAction } from "@/app/_lib/actions";
import Logo from "@/app/_components/Logo";

export const metadata = {
  title: "Login",
  description: "Log in to your Fix-It-Up Market account.",
};

function Page() {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-8 py-4">
        <Logo />
      </div>
      <div>
        <form action={signInUserFormAction}>
          <LoginForm />
        </form>
      </div>
    </div>
  );
}

export default Page;
