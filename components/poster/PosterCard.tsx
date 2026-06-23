"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Session } from "next-auth";
import { useAuthDialog } from "../providers/auth-provider";

interface PosterCardProps {
  session: Session | null;
  id: string;
  title: string;
  designerName: string;
  category: string;
  mockupUrl: string;
  posterImageUrl: string;
  basePrice: number;
  sizes: string[];
  isWishlisted?: boolean;
}

export default function PosterCard({
  session,  
  id,
  title,
  designerName,
  category,
  mockupUrl,
  posterImageUrl,
  basePrice,
  sizes,
  isWishlisted = false,
}: PosterCardProps) {
  const [wished, setWished] = useState(isWishlisted);
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedToWall, setAddedToWall] = useState(false);

  const {openLogin} = useAuthDialog();

  const handleWishlist = () => {
  if (!session) {
    openLogin();
    return;
  }

  setWished((prev) => !prev);

  // TODO:
  // wishlist API
};

  const handleAddToCart = () => {
  if (!session) {
    openLogin();
    return;
  }

  setAddedToCart((prev) => !prev);
};

const handleAddToWall = () => {
  if (!session) {
    openLogin();
    return;
  }

  setAddedToWall(prev => !prev);

  // TODO:
  // add to wall store
};

  return (
    <div
      className="
        group relative
        overflow-hidden rounded-2xl
        border border-bg-border dark:border-bg-dborder
        bg-bg-surface dark:bg-bg-dsurf
        shadow-sm
        transition-all duration-200
        hover:-translate-y-1 hover:shadow-xl
      "
    >
      {/* Wishlist */}
      <button
        type="button"
        aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
        onClick={handleWishlist}
        className="
          absolute right-3 top-3 z-20
          flex h-9 w-9 items-center justify-center
          rounded-full
          bg-white/90 dark:bg-bg-dsurf/90
          backdrop-blur-sm shadow

          opacity-100 scale-100
          md:opacity-0 md:scale-75
          md:group-hover:opacity-100  
          md:group-hover:scale-100

          transition-all duration-200
        "
      >
        <Heart
          className={`h-4 w-4 transition-colors ${
            wished ? "fill-accent stroke-accent" : "stroke-ink-secondary"
          }`}
        />
      </button>

      {/* Clickable content */}
      <Link
        href={`/posters/${id}`}
        aria-label={`View ${title}`}
        className="block"
      >
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={mockupUrl}
            alt={`${title} frame mockup`}
            fill
            className="
              object-cover
              transition-transform duration-300
              group-hover:scale-[1.03]
            "
          />

          {/* Poster */}
         <div className="absolute left-[10.5%] top-[7%] h-[95%] w-[79%] overflow-hidden">
            <Image
              src={posterImageUrl}
              alt={title}
              fill
              className="object-cover"
            />
          </div>

          {/* Category */}
          <span
            className="
              absolute left-3 top-3 z-10
              rounded-md
              bg-accent
              px-3 py-1
              text-[10px] font-semibold uppercase tracking-wide
              text-white
            "
          >
            {category}
          </span>

          {/* Mobile + Desktop Actions */}
          <div
            className="
              absolute bottom-0 left-0 right-0 z-10
              flex gap-2 p-2

              bg-linear-to-t
              from-black/75
              to-transparent

              translate-y-0

              md:translate-y-full
              md:group-hover:translate-y-0

              transition-transform duration-200
            "
          >
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleAddToCart();
              }}
              className={`
    flex h-9 w-9 shrink-0 items-center justify-center
    rounded-lg border transition-colors

    ${
      addedToCart
        ? "bg-accent border-accent text-white"
        : "bg-white/15 border-white/25 text-white hover:bg-white/25"
    }
  `}
            >
              <ShoppingCart className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleAddToWall();
              }}
              className={`
                  flex-1 rounded-lg py-2 text-[12px]
                  font-medium text-white transition-colors

                  ${
                    addedToWall
                      ? "bg-green-600 hover:bg-green-600"
                      : "bg-accent hover:bg-accent-hover"
                  }
                `}
                          >
              {addedToWall ? "Added to Wall ✓" : "+ Wall"}
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-3">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              <h3
                className="
                  line-clamp-1
                  text-sm font-bold
                  text-ink-primary
                  dark:text-ink-invert

                  sm:text-base
                "
              >
                {title}
              </h3>

              <p
                className="
                  mt-0.5
                  text-xs
                  text-ink-secondary
                  dark:text-ink-isec
                "
              >
                by {designerName}
              </p>
            </div>

            <div className="shrink-0 text-right">
              <p className="text-[10px] text-ink-muted">From</p>

              <div className="font-bold text-accent">
                <span className="text-sm">₹</span>
                <span className="text-lg sm:text-xl">{basePrice}</span>
              </div>
            </div>
          </div>

          {/* Sizes */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {sizes.map((size) => (
              <span
                key={size}
                className="
                  flex h-7 min-w-10 items-center justify-center
                  rounded-md

                  border border-bg-border
                  dark:border-bg-dborder

                  px-2
                  text-[10px]
                  font-medium
                  text-ink-muted
                "
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}
