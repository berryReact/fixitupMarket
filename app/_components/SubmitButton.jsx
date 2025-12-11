function SubmitButton({
  children,
  isSubmitting,
  pendingText = "Submitting...",
  variant = "primary",
  size = "medium",
  text = "nrm",
  corner = "sm",
  border = "none",
  shadow = "none",
}) {
  const variants = {
    primary:
      "font-semibold text-brand-steel tracking-wide  bg-brand-yellow hover:bg-brand-steel hover:text-brand-yellow",
    secondary:
      "bg-rust-400 text-paper-50 tracking-wide font-semibold hover:bg-rust-50 hover:text-rust-500",
  };

  const sizes = {
    xsmall: "px-[.3rem] py-[.1rem]",
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

  const borderColor = {
    none: "border-transparent",
    primary: "border border-hazard-300",
    secondary: "border border-metal-700",
    accent: "border border-hazard-500",
    light: "border border-metal-300",
    neutral: "border border-metal-500",
    dark: "border border-metal-900",
    danger: "border border-red-600",
  };

  const shadows = {
    none: "shadow-none",
    sm: "shadow-metal-sm",
    nrm: "shadow-metal-nrm",
    md: "shadow-metal-md",
    lg: "shadow-metal-lg",
    xl: "shadow-metal-xlg",
  };
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`self-center ${shadows[shadow]} ${borderColor[border]} ${corners[corner]} ${textSize[text]} ${variants[variant]} ${sizes[size]} transition-all duration-200`}
    >
      {isSubmitting ? pendingText : children}
    </button>
  );
}
export default SubmitButton;
