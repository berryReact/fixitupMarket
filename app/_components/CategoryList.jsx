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
    icon: <DevicePhoneMobileIcon className="h-4 w-4 text-metal-800" />,
  },
  {
    name: "Tools/Hardware",
    href: "/categories",
    icon: <WrenchScrewdriverIcon className="h-4 w-4 text-metal-800" />,
  },
  {
    name: "Appliances",
    href: "/categories",
    icon: <TvIcon className="h-4 w-4 text-metal-800" />,
  },
  {
    name: "Computers/Parts",
    href: "/categories",
    icon: <CpuChipIcon className="h-4 w-4 text-metal-800" />,
  },
  {
    name: "Misc",
    href: "/categories",
    icon: <WrenchScrewdriverIcon className="h-4 w-4 text-metal-800" />,
  },
];

function CategoryList() {
  return (
    <div className="overflow-x-auto py-3">
      <div className="mx-auto flex w-max items-center gap-3 px-4">
        {navLinks.map((link) => (
          <LinkButton
            variant="primaryDark"
            corner="sm"
            border="neutral"
            size="xsmall"
            text="xsm"
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
