import Link from "next/link";

function Navigation() {
  return (
    <ul className="flex gap-4">
      <li>
        <Link href="/">Home</Link>
      </li>

      <li>
        <Link href="/listings">Listings</Link>
      </li>

      <li>
        <Link href="/about">About</Link>
      </li>

      <li>
        <Link href="/contact">Contact</Link>
      </li>

      <li>
        <Link href="/account">Account</Link>
      </li>
    </ul>
  );
}

export default Navigation;
