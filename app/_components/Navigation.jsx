import Link from "next/link";

function Navigation() {
  return (
    <ul className="flex items-center justify-between gap-4 px-4 pt-2 text-sm">
      {/* <li>
        <Link href="/">Home</Link>
      </li> */}

      <li>
        <Link href="/listings">Listings</Link>
      </li>

      {/* <li>
        <Link href="/about">About</Link>
      </li> */}

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
