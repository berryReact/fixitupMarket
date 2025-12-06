import Link from "next/link";

function Navigation() {
  return (
    <ul className="flex gap-4">
      <li>
        <Link href="/account">Account</Link>
      </li>

      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
  );
}

export default Navigation;
