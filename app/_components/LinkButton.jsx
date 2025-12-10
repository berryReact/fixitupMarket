import Link from "next/link";

function LinkButton({
  children,
  href,
  variant = "primary",
  size = "medium",
  text = "nrm",
  corner = "sm",
}) {
  const variants = {
    primary:
      "font-semibold text-brand-steel  bg-brand-yellow hover:bg-brand-steel hover:text-brand-yellow",
    secondary:
      "bg-rust-500 text-rust-50 font-medium hover:bg-rust-50 hover:text-rust-500",
  };

  const sizes = {
    small: "px-2 py-1",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-xl",
  };

  const textSize = {
    sm: "text-xs",
    med: "text-sm",
    nrm: "text-base",
    lg: "text-lg",
    xlg: "text-xl",
  };

  const corners = {
    xsm: "rounded-xs",
    sm: "rounded-sm",
    med: "rounded-md",
    lg: "rounded-lg",
    xlg: "rounded-xl",
    xxlg: "rounded-2xl",
  };

  return (
    <Link
      className={`self-center ${corners[corner]} ${textSize[text]} ${variants[variant]} ${sizes[size]} transition-all duration-200`}
      href={href}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
