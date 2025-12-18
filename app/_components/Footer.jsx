import { getOptionalUser } from "@/app/_lib/auth/require-user";
import LinkButton from "./LinkButton";
import SubmitButton from "./SubmitButton";
import { signOutFormAction } from "@/app/_lib/actions";

async function Footer() {
  const { user } = await getOptionalUser();
  return (
    <footer className="bg-hazard-100 px-4 py-4 text-xs text-metal-700">
      <div className="flex items-center justify-between">
        {!user && (
          <LinkButton size="small" variant="accent" href="/signup">
            Sign up
          </LinkButton>
        )}

        <LinkButton size="small" variant="accent" href="/">
          App Home
        </LinkButton>
        {!user && (
          <LinkButton size="small" variant="accent" href="/login">
            Login
          </LinkButton>
        )}
        {user && (
          <form action={signOutFormAction}>
            <SubmitButton size="small" variant="accent">
              Logout
            </SubmitButton>
          </form>
        )}
      </div>
    </footer>
  );
}

export default Footer;
