export default function Button({
  as: As = "a",
  href = "#",
  children,
  className = "",
  variant = "primary",
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition";
  const styles = {
    primary: "bg-[#4CC38A] text-black hover:opacity-90",
    secondary: "border border-white/15 text-white hover:bg-white/10",
  };
  return (
    <As
      href={href}
      className={`${base} ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </As>
  );
}
