import logo from "@/public/logo-placeholder.png";
import Image from "next/image";

function Logo() {
  return (
    <a href="/" className="z-10 flex items-center gap-4">
      <Image src={logo} height="200" width="200" alt="" />

      <span className="text-xl font-semibold text-primary-100">
        New Website
      </span>
    </a>
  );
}

export default Logo;
