import Link from "next/link";
import LinkButton from "./LinkButton";

function Navigation({ profile }) {
  return (
    <ul className="flex items-center justify-between gap-3 px-3 pt-2 text-sm">
      <li>
        <Link href="/admin/listings">Listings</Link>
      </li>
      <li>
        <Link href="/admin/users">Users</Link>
      </li>
      <li>
        <Link href="/admin/contact">Contact</Link>
      </li>
      <li>
        <Link href="/admin/maintenence">Maintenence</Link>
      </li>

      <LinkButton
        size="small"
        variant="accent"
        text="sm"
        href="/admin/dashboard"
      >
        Admin
      </LinkButton>
    </ul>
  );
}

export default Navigation;
