import Link from "next/link";

function Notfound() {
  return (
    <main>
      <h1>This Listing Could Not Be Found</h1>
      <Link href="/listings">Go Back to Listings</Link>
    </main>
  );
}

export default Notfound;
