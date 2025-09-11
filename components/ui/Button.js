// components/ui/Button.jsx
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

  const variants = {
    primary: "bg-app-primary text-black hover:opacity-90",
    secondary: "border border-white/15 text-white hover:bg-white/10",
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  return (
    <As href={href} className={cls} {...rest}>
      {children}
    </As>
  );
}
