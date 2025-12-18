import { ChevronDown } from "lucide-react";

interface FilterButtonProps {
  label: string;
  hasDropdown?: boolean;
  variant?: "default" | "coupon";
}

export function FilterButton({
  label,
  hasDropdown = false,
  variant = "default",
}: FilterButtonProps) {
  if (variant === "coupon") {
    return (
      <button className="flex h-8 px-3 items-center gap-0.5 rounded-full border border-black/8 bg-white">
        <svg className="w-4 h-4" viewBox="0 0 16 16">
          <path
            d="M12.3668 2.72038C13.5501 2.72058 14.5103 3.6806 14.5103 4.86393V5.87272C14.51 6.24046 14.2111 6.53847 13.8433 6.53874C13.4754 6.53874 13.1767 6.24062 13.1763 5.87272V4.86393C13.1763 4.41697 12.8137 4.05456 12.3668 4.05436H3.63338C3.1863 4.05436 2.82381 4.41685 2.82381 4.86393V5.89909C3.71493 6.18189 4.36092 7.0159 4.36092 8.00065C4.36057 8.98502 3.7146 9.81749 2.82381 10.1003V11.1374C2.82407 11.5842 3.18646 11.9469 3.63338 11.9469H7.36678C7.7348 11.9471 8.03377 12.2459 8.03377 12.6139C8.0333 12.9816 7.73451 13.2798 7.36678 13.2799H3.63338C2.45008 13.2799 1.49008 12.3206 1.48982 11.1374V8.87175H2.15681C2.63748 8.87155 3.02748 8.48117 3.02791 8.00065C3.02791 7.51972 2.6377 7.12976 2.15681 7.12956H1.48982V4.86393C1.48982 3.68047 2.44992 2.72038 3.63338 2.72038H12.3668ZM6.15388 5.79557C6.52207 5.79557 6.82088 6.09438 6.82088 6.46257V9.53776C6.82066 9.90576 6.52194 10.2048 6.15388 10.2048C5.78604 10.2045 5.48711 9.90561 5.48689 9.53776V6.46257C5.48689 6.09452 5.7859 5.79582 6.15388 5.79557Z"
            fill="#DD0866"
          />
        </svg>
        <span className="text-base font-black italic bg-gradient-to-r from-[#DD0866] to-[#DD0866] bg-clip-text text-transparent leading-5">
          {label}
        </span>
      </button>
    );
  }

  return (
    <button className="flex h-8 px-3 items-center gap-0.5 rounded-full border border-black/8 bg-white">
      <span className="text-sm leading-5">{label}</span>
      {hasDropdown && <ChevronDown className="w-4 h-4" />}
    </button>
  );
}
