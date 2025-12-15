import Logo from "@/app/_components/Logo";
import LoginForm from "@/app/_components/LoginForm";
import { signUpUserFormAction } from "@/app/_lib/actions";
import LinkButton from "@/app/_components/LinkButton";

export const metadata = {
  title: "Sign-up",
  description:
    "Create an account to list your broken or damaged items for sale.",
};

export default async function Page() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="">
        <Logo />
      </div>
      <h2 className="text-center text-2xl">Signup</h2>
      <div className="">
        <form action={signUpUserFormAction}>
          <LoginForm />
        </form>
      </div>
      <div className="">
        <p className="mb-5">Or login here...</p>
        <LinkButton href="/login">Login Page</LinkButton>
      </div>
    </div>
  );
}
