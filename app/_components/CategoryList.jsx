import {
  TvIcon,
  WrenchScrewdriverIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

import LinkButton from "./LinkButton";

const navLinks = [
  {
    name: "Electronics",
    href: "/categories",
    icon: <DevicePhoneMobileIcon className="text-rust-50 h-4 w-4" />,
  },
  {
    name: "Tools/Hardware",
    href: "/categories",
    icon: <WrenchScrewdriverIcon className="text-rust-50 h-4 w-4" />,
  },
  {
    name: "Appliances",
    href: "/categories",
    icon: <TvIcon className="text-rust-50 h-4 w-4" />,
  },
  {
    name: "Computers/Parts",
    href: "/categories",
    icon: <CpuChipIcon className="text-rust-50 h-4 w-4" />,
  },
  {
    name: "Misc",
    href: "/categories",
    icon: <WrenchScrewdriverIcon className="text-rust-50 h-4 w-4" />,
  },
];

function CategoryList() {
  return (
    <div className="overflow-x-auto py-5">
      <div className="mx-auto flex w-max items-center gap-4 px-6">
        {navLinks.map((link) => (
          <LinkButton
            variant="secondary"
            corner="sm"
            border="neutral"
            size="xsmall"
            text="sm"
            shadow="nrm"
            href={link.href}
            key={link.name}
          >
            <span className="flex gap-[.35rem]">
              {link.icon}
              <span>{link.name}</span>
            </span>
          </LinkButton>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
