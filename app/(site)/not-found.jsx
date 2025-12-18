import Link from "next/link";

function Notfound() {
  return (
    <main>
      <h1>This Page Could Not Be Found</h1>
      <Link href="/">Go Back Home</Link>
    </main>
  );
}

export default Notfound;
