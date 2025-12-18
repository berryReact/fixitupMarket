import Link from "next/link";
import LinkButton from "./LinkButton";

function Navigation({ profile }) {
  return (
    <ul className="flex items-center justify-between gap-3 px-3 pt-2 text-sm">
      <li>
        <Link href="/listings">All Listings</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/account">Account</Link>
      </li>

      {profile?.role === "admin" ||
        (profile?.role === "supervisor" && (
          <LinkButton
            size="small"
            variant="accent"
            text="sm"
            href="/admin/dashboard"
          >
            {" "}
            Admin
          </LinkButton>
        ))}
    </ul>
  );
}

export default Navigation;
