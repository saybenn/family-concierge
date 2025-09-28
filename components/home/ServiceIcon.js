// components/ServiceIcon.tsx
import {
  ShoppingBag,
  ShoppingCart,
  Sunrise,
  Baby,
  Heart,
  Check,
  Wine,
  Luggage,
  Suitcase,
  FoldHorizontal,
  Sparkles,
  Clapperboard,
  Confetti,
  Bauble,
  Gift,
  PackageOpen,
  Boxes,
  Bolt,
  Shield,
  Star,
  FileShield,
  ShieldCheck,
} from "lucide-react";

export function ServiceIcon({
  slug,
  size = 40,
  className = "",
  strokeWidth = 2,
}) {
  const map = {
    "errand-blitz": (
      <ShoppingBag
        size={size}
        strokeWidth={strokeWidth}
        className={className}
      />
    ),
    "morning-launch": (
      <Sunrise size={size} strokeWidth={strokeWidth} className={className} />
    ),
    "new-baby-setup": (
      <Baby size={size} strokeWidth={strokeWidth} className={className} />
    ),
    "wellness-checkins": (
      <div
        className={`relative inline-block ${className}`}
        style={{ width: size, height: size }}
      >
        <Heart size={size} strokeWidth={strokeWidth} />
        <Check
          size={Math.max(12, size * 0.35)}
          className="absolute -right-1 -top-1 bg-white rounded-full p-[2px]"
          strokeWidth={2}
        />
      </div>
    ),
    "date-night-helper": (
      <Wine size={size} strokeWidth={strokeWidth} className={className} />
    ),
    "travel-helper": (
      <Luggage size={size} strokeWidth={strokeWidth} className={className} />
    ),
    "weekend-home-reset": (
      <div
        className={`relative inline-block ${className}`}
        style={{ width: size, height: size }}
      >
        <FoldHorizontal size={size} strokeWidth={strokeWidth} />
        <Sparkles
          size={Math.max(12, size * 0.35)}
          className="absolute -right-1 -top-1"
        />
      </div>
    ),
    "party-prep-tidy": (
      <div
        className={`relative inline-block ${className}`}
        style={{ width: size, height: size }}
      >
        <Clapperboard size={size} strokeWidth={strokeWidth} />
        <Confetti
          size={Math.max(12, size * 0.35)}
          className="absolute -right-1 -top-1"
        />
      </div>
    ),
    "holiday-decor": (
      <Bauble size={size} strokeWidth={strokeWidth} className={className} />
    ),
    "move-in-refresh": (
      <PackageOpen
        size={size}
        strokeWidth={strokeWidth}
        className={className}
      />
    ),
    "gift-concierge": (
      <Gift size={size} strokeWidth={strokeWidth} className={className} />
    ),
    // Value props:
    fast: <Bolt size={size} strokeWidth={strokeWidth} className={className} />,
    expert: (
      <div
        className={`relative inline-block ${className}`}
        style={{ width: size, height: size }}
      >
        <Shield size={size} strokeWidth={strokeWidth} />
        <Star
          size={Math.max(12, size * 0.35)}
          className="absolute inset-0 m-auto"
        />
      </div>
    ),
    insurance: (
      <FileShield size={size} strokeWidth={strokeWidth} className={className} />
    ),
  };
  return (
    map[slug] ?? (
      <ShoppingCart
        size={size}
        strokeWidth={strokeWidth}
        className={className}
      />
    )
  );
}
