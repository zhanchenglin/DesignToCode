import { ArrowLeft, Search } from "lucide-react";
import { RestaurantCard } from "@/components/RestaurantCard";
import { FilterButton } from "@/components/FilterButton";
import { useState } from "react";

export default function Index() {
  const [activeTab, setActiveTab] = useState<"spots" | "vouchers">("spots");

  const restaurants = [
    {
      name: "Koko Kitchen - Cilandak Town Square",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/3e2e924861414fb69829ea6c1e7161dc7e3bb9a5?width=208",
      rating: 4.9,
      reviewCount: 339,
      distance: "200m",
      category: "Chinese restaurant",
      isOpen: true,
      location: "Cilandak Barat",
      badge: {
        text: "Jakarta After Dark",
        rank: "No.01",
      },
      offers: [
        {
          name: "Ayam Asam Manis",
          discount: "-20%",
          price: "Rp61.681",
          image:
            "https://api.builder.io/api/v1/image/assets/TEMP/f193b8b658c1001676abbcbb4461738dbc71c4be?width=72",
          hasCoupon: true,
        },
        {
          name: "Nasi Ayam TaliwangRp 84.0...",
          discount: "-50%",
          price: "Rp30.000",
          image:
            "https://api.builder.io/api/v1/image/assets/TEMP/b9fbb29221bb6e304d988988b46d0d5131de1595?width=72",
          hasCoupon: false,
        },
      ],
    },
    {
      name: "Kopi Kenangan SPBU Minangkabau Jakarta Selatan (Container)",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/9e2574d6d65c7e4b7b70c70b1527c5e21094f5b3?width=208",
      rating: 4.9,
      reviewCount: 339,
      distance: "200m",
      category: "Chinese restaurant",
      isOpen: true,
      location: "Cilandak Barat",
      offers: [
        {
          name: "Ayam Asam Manis",
          discount: "-20%",
          price: "Rp61.681",
          image:
            "https://api.builder.io/api/v1/image/assets/TEMP/f193b8b658c1001676abbcbb4461738dbc71c4be?width=72",
          hasCoupon: true,
        },
        {
          name: "Nasi Ayam TaliwangRp 84.0...",
          discount: "-50%",
          price: "Rp30.000",
          image:
            "https://api.builder.io/api/v1/image/assets/TEMP/b9fbb29221bb6e304d988988b46d0d5131de1595?width=72",
          hasCoupon: false,
        },
      ],
    },
    {
      name: "Tianlala, Menteng Atas",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/5383fdac0e362c6f46f08eb1d50f20a06bb48dbc?width=208",
      rating: 4.9,
      reviewCount: 339,
      distance: "200m",
      category: "Chinese restaurant",
      isOpen: true,
      location: "Cilandak Barat",
    },
    {
      name: "Martabak Pizza Orins - Pegangsaan (Tambak)",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/95cd7d8f60c0ea7f69437b5da7bdebd1a6e63ecd?width=208",
      rating: 4.9,
      reviewCount: 339,
      distance: "200m",
      category: "Chinese restaurant",
      isOpen: true,
      location: "Cilandak Barat",
      badge: {
        text: "Jakarta After Dark",
        rank: "No.01",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-['Roboto',system-ui,sans-serif]">
      <div className="max-w-md mx-auto bg-white min-h-screen">
      <div className="sticky top-0 z-50 bg-brand-yellow">
        <div className="flex items-center justify-between px-5 py-2 h-10">
          <div className="text-xs font-medium">19:30</div>
          <div className="flex items-center gap-1">
            <svg className="w-5 h-4" viewBox="0 0 20 16">
              <path
                d="M15.7879 9.21213C15.905 9.09497 16.095 9.09497 16.2121 9.21213L17.4879 10.4879C17.6769 10.6769 17.543 11 17.2757 11H14.7243C14.457 11 14.3231 10.6769 14.5121 10.4879L15.7879 9.21213Z"
                fill="black"
              />
              <path
                d="M15.7879 13.7879C15.905 13.905 16.095 13.905 16.2121 13.7879L17.4879 12.5121C17.6769 12.3231 17.543 12 17.2757 12H14.7243C14.457 12 14.3231 12.3231 14.5121 12.5121L15.7879 13.7879Z"
                fill="black"
              />
            </svg>
            <svg className="w-[22px] h-4" viewBox="0 0 22 16">
              <text
                x="3"
                y="12"
                fontSize="10"
                fontWeight="600"
                fill="black"
              >
                5G
              </text>
            </svg>
            <div className="flex items-center justify-center w-[26px] h-4 relative">
              <div className="absolute inset-0 border border-black/30 rounded-sm" />
              <div className="absolute left-[2px] top-[2px] bottom-[2px] right-[2px] bg-black" />
              <span className="text-[10px] font-semibold relative z-10 text-white">
                100
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center px-2 pr-4 h-12 gap-1">
          <button className="w-12 h-12 flex items-center justify-center">
            <ArrowLeft className="w-6 h-6" />
          </button>

          <div className="flex-1 flex items-center gap-1 h-9 px-1 bg-white rounded-3xl">
            <div className="p-2">
              <Search className="w-4 h-4 text-black/30" />
            </div>
            <input
              type="text"
              placeholder="keyword"
              className="flex-1 text-sm outline-none bg-transparent"
              defaultValue="keyword"
            />
            <button className="h-7 px-3 bg-brand-yellow rounded-[14px] text-xs font-bold">
              Search
            </button>
          </div>
        </div>

        <div className="flex items-end gap-4">
          <button
            onClick={() => setActiveTab("spots")}
            className="flex-1 flex flex-col items-center gap-1"
          >
            <span
              className={`text-lg leading-6 ${
                activeTab === "spots"
                  ? "font-semibold text-black"
                  : "font-normal text-black/54"
              }`}
            >
              Spots
            </span>
            {activeTab === "spots" && (
              <div className="h-0.5 w-[53px] bg-black rounded-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("vouchers")}
            className="flex-1 flex flex-col items-center gap-1"
          >
            <span
              className={`text-lg leading-6 ${
                activeTab === "vouchers"
                  ? "font-semibold text-black"
                  : "font-normal text-black/54"
              }`}
            >
              Vouchers
            </span>
            {activeTab === "vouchers" && (
              <div className="h-0.5 w-[53px] bg-black rounded-full" />
            )}
          </button>
        </div>
      </div>

      <div className="px-3.5 pt-4">
        <div className="flex items-start gap-2 mb-4 overflow-x-auto scrollbar-hide pb-1 -mx-3.5 px-3.5">
          <FilterButton label="Sort by" hasDropdown />
          <FilterButton label="Categories" hasDropdown />
          <FilterButton label="Coupon" variant="coupon" />
          <FilterButton label="Open Now" />
        </div>

        <div className="flex flex-col">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant} />
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
