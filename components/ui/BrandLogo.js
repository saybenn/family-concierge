import Image from "next/image";

export default function BrandLogo() {
  return (
    <div className="h-7 flex items-center">
      <Image
        src="/images/logos/ubs-nav-light.png"
        alt="Unique Butler Service"
        height={28}
        width={160}
        className="dark:hidden h-42 w-auto"
        priority
      />
      <Image
        src="/images/logos/ubs-nav-dark.png"
        alt="Unique Butler Service"
        height={28}
        width={160}
        className="hidden dark:block h-42 w-auto"
        priority
      />
    </div>
  );
}
