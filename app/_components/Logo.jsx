import logo from "@/public/logo-placeholder.png";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="z-10 flex items-center gap-4">
      <Image src={logo} height="200" width="300" alt="" />
    </Link>
  );
}

export default Logo;
