export default function Button({
  as: As = "a",
  href = "#",
  children,
  className = "",
  ...rest
}) {
  const cls =
    "inline-flex items-center justify-center rounded-md px-4 py-2 font-medium bg-[var(--primary)] text-black hover:opacity-90 " +
    className;
  return (
    <As href={href} className={cls} {...rest}>
      {children}
    </As>
  );
}
