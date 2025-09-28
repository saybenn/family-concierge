// components/ui/CTAButton.js
import Link from "next/link";
import { btnPrimary } from "./ui/classnames";

export default function CTAButton({
  href = "#book",
  children = "Book Now",
  attrs = {},
}) {
  return (
    <Link href={href} {...attrs} className={btnPrimary}>
      {/* optional: inject icon here if needed */}
      {children}
    </Link>
  );
}
