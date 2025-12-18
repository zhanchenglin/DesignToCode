import { Star } from "lucide-react";

interface OfferItem {
  name: string;
  discount: string;
  price: string;
  image: string;
  hasCoupon?: boolean;
}

interface RestaurantCardProps {
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  distance: string;
  category: string;
  isOpen: boolean;
  location: string;
  badge?: {
    text: string;
    rank: string;
  };
  offers?: OfferItem[];
}

export function RestaurantCard({
  name,
  image,
  rating,
  reviewCount,
  distance,
  category,
  isOpen,
  location,
  badge,
  offers,
}: RestaurantCardProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex gap-2">
        <div className="w-[104px] h-[104px] flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="flex-1 flex flex-col gap-0.5 min-w-0">
          <h3 className="font-semibold text-base leading-5 line-clamp-2">
            {name}
          </h3>

          <div className="flex items-center gap-2 h-[18px]">
            <div className="flex items-center gap-0.5">
              {[...Array(fullStars)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 fill-[#FFDA35] text-[#FFDA35]"
                />
              ))}
              {hasHalfStar && (
                <div className="relative w-3 h-3">
                  <Star className="w-3 h-3 fill-[#E3E7ED] text-[#E3E7ED] absolute" />
                  <div className="absolute inset-0 overflow-hidden w-1/2">
                    <Star className="w-3 h-3 fill-[#FFDA35] text-[#FFDA35]" />
                  </div>
                </div>
              )}
            </div>
            <span className="text-xs text-black/70 leading-[18px]">
              {rating}({reviewCount})
            </span>
            <span className="text-xs text-black/70 leading-[18px] line-clamp-1">
              {distance}
            </span>
          </div>

          <div className="flex items-center h-[18px]">
            <span className="text-xs text-black/70 leading-[18px] line-clamp-1">
              {category}
            </span>
          </div>

          <div className="flex items-center gap-0.5 h-[18px]">
            <span
              className={`text-xs leading-[18px] line-clamp-1 ${
                isOpen ? "text-[#12AB39]" : "text-black/70"
              }`}
            >
              {isOpen ? "Open" : "Closed"}
            </span>
            <svg
              className="w-0.5 h-0.5 flex-shrink-0"
              viewBox="0 0 2 2"
              fill="none"
            >
              <circle cx="1" cy="1" r="1" fill="black" fillOpacity="0.3" />
            </svg>
            <span className="text-xs text-black/70 leading-[18px] line-clamp-1">
              {location}
            </span>
          </div>

          {badge && (
            <div className="flex items-center gap-1 h-[18px]">
              <div className="flex items-center gap-1 px-1 bg-[#FFFBD6] rounded h-[18px]">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 18 18">
                  <defs>
                    <linearGradient
                      id="gradient1"
                      x1="1.05946"
                      y1="0.206425"
                      x2="13.4185"
                      y2="17.9997"
                    >
                      <stop stopColor="#FFAD01" />
                      <stop offset="1" stopColor="#FF8B00" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 4C0 1.79086 1.79086 0 4 0H18V18H4C1.79086 18 0 16.2091 0 14V4Z"
                    fill="#FAF19D"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16ZM9.66727 4.72469C9.35239 4.0183 8.34974 4.0183 8.03486 4.72469L7.33282 6.29967C7.20295 6.59101 6.92763 6.79104 6.61041 6.82452L4.89558 7.00552C4.12646 7.08669 3.81662 8.04027 4.39114 8.55802L5.67208 9.7124C5.90904 9.92595 6.0142 10.2496 5.94802 10.5616L5.59024 12.2485C5.42977 13.005 6.24093 13.5944 6.91088 13.208L8.40459 12.3464C8.68091 12.1871 9.02122 12.1871 9.29754 12.3464L10.7913 13.208C11.4612 13.5944 12.2724 13.005 12.1119 12.2485L11.7541 10.5616C11.6879 10.2496 11.7931 9.92595 12.03 9.7124L13.311 8.55802C13.8855 8.04027 13.5757 7.08669 12.8066 7.00552L11.0917 6.82452C10.7745 6.79104 10.4992 6.59101 10.3693 6.29967L9.66727 4.72469Z"
                    fill="#A89231"
                  />
                </svg>
                <span className="text-xs text-[#817602] leading-[18px]">
                  {badge.text}
                </span>
                <div className="w-px h-2" />
                <span className="text-xs text-[#817602] leading-[18px]">
                  {badge.rank}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {offers && offers.length > 0 && (
        <div className="flex gap-1.5 overflow-x-auto scrollbar-hide -mr-4 pr-4">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="flex items-center gap-1.5 p-1.5 bg-gray-100 rounded-lg min-w-[172px]"
            >
              <img
                src={offer.image}
                alt={offer.name}
                className="w-9 h-9 rounded object-cover flex-shrink-0"
              />
              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-xs leading-[18px] line-clamp-1">
                  {offer.name}
                </span>
                <div className="flex items-center gap-0.5">
                  <span className="text-[10px] font-bold leading-[14px] text-[#DD0866]">
                    {offer.discount}
                  </span>
                  <div className="flex items-center flex-1 gap-0.5">
                    <span className="text-xs font-semibold leading-[18px] text-[#DD0866] line-clamp-1">
                      {offer.price}
                    </span>
                    {offer.hasCoupon && (
                      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16">
                        <path
                          d="M12.3668 2.72038C13.5501 2.72058 14.5103 3.6806 14.5103 4.86393V5.87272C14.51 6.24046 14.2111 6.53847 13.8433 6.53874C13.4754 6.53874 13.1767 6.24062 13.1763 5.87272V4.86393C13.1763 4.41697 12.8137 4.05456 12.3668 4.05436H3.63338C3.1863 4.05436 2.82381 4.41685 2.82381 4.86393V5.89909C3.71493 6.18189 4.36092 7.0159 4.36092 8.00065C4.36057 8.98502 3.7146 9.81749 2.82381 10.1003V11.1374C2.82407 11.5842 3.18646 11.9469 3.63338 11.9469H7.36678C7.7348 11.9471 8.03377 12.2459 8.03377 12.6139C8.0333 12.9816 7.73451 13.2798 7.36678 13.2799H3.63338C2.45008 13.2799 1.49008 12.3206 1.48982 11.1374V8.87175H2.15681C2.63748 8.87155 3.02748 8.48117 3.02791 8.00065C3.02791 7.51972 2.6377 7.12976 2.15681 7.12956H1.48982V4.86393C1.48982 3.68047 2.44992 2.72038 3.63338 2.72038H12.3668ZM6.15388 5.79557C6.52207 5.79557 6.82088 6.09438 6.82088 6.46257V9.53776C6.82066 9.90576 6.52194 10.2048 6.15388 10.2048C5.78604 10.2045 5.48711 9.90561 5.48689 9.53776V6.46257C5.48689 6.09452 5.7859 5.79582 6.15388 5.79557Z"
                          fill="#DD0866"
                        />
                        <circle cx="11.4874" cy="10.1931" r="3.25" fill="#DD0866" />
                        <path
                          d="M9.9395 10.1735L10.9631 11.0942C11.0898 11.2082 11.2859 11.1938 11.3946 11.0626L13.0354 9.08309"
                          stroke="white"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="w-5 flex-shrink-0" />
        </div>
      )}

      <div className="h-px bg-black/12" />
    </div>
  );
}
