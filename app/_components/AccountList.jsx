import { UserIcon, Squares2X2Icon } from "@heroicons/react/24/outline";

import LinkButton from "./LinkButton";

const navLinks = [
  {
    name: "Profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-metal-800" />,
  },
  {
    name: "Listings",
    href: "/account/listings",
    icon: <Squares2X2Icon className="h-5 w-5 text-metal-800" />,
  },
];

function AccountList() {
  return (
    <div className="grid grid-cols-2 items-center">
      {navLinks.map((link) => (
        <LinkButton
          variant="primaryDark"
          size="large"
          text="lg"
          href={link.href}
          key={link.name}
        >
          <span className="flex items-center gap-[.5rem]">
            {link.icon}
            <span>{link.name}</span>
          </span>
        </LinkButton>
      ))}
    </div>
  );
}

export default AccountList;
