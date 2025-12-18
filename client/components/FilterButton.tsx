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
      <button className="flex h-8 px-3 items-center gap-0.5 rounded-full border border-black/8 bg-white whitespace-nowrap">
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none">
          <path
            d="M9.26576 12.0585C9.07551 12.8738 8.26062 13.3803 7.44536 13.1901L5.84576 12.8168C6.04364 11.9677 5.51569 11.1192 4.66661 10.9211C3.87056 10.7354 3.07511 11.1873 2.81536 11.9441L2.77019 12.0991L1.17154 11.726C0.356343 11.5357 -0.150237 10.7208 0.0400064 9.90558L2.07822 1.1715C2.2686 0.35647 3.08351 -0.150185 3.89862 0.0399676L5.49822 0.413255C5.30006 1.26243 5.82801 2.11165 6.67714 2.3099C7.47342 2.49572 8.26999 2.04332 8.52956 1.28612L8.57379 1.13098L10.1724 1.50404C10.9876 1.69427 11.494 2.5093 11.304 3.32445L9.26576 12.0585ZM8.17 5.25052C8.23825 4.95788 8.05654 4.66548 7.7639 4.59719L4.68833 3.87947C4.3959 3.81157 4.10328 3.99315 4.03501 4.28556C3.96676 4.57802 4.1488 4.87033 4.4411 4.93889L7.51667 5.65662C7.80933 5.72491 8.1017 5.54318 8.17 5.25052Z"
            fill="#DD0866"
          />
        </svg>
        <span className="text-base font-black italic text-[#DD0866] leading-5">
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
