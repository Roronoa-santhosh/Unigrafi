import Image from "next/image";
import { Heart } from "lucide-react";

export default function PosterCard() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-bg-border bg-bg-surface shadow-sm transition-all hover:shadow-lg ">

      {/* Image */}
      <div className="relative aspect-2/3 overflow-hidden">

        {/* Mockup */}
        <Image
          src="/mockup poster img.png"
          alt="mockup"
          fill
          className="object-cover"
        />

        {/* Poster */}
        <div className="absolute top-[16%] left-[11%] h-[72%] w-[78%]">
          <Image
            src="/car.jpg"
            alt="poster"
            fill
            className="object-cover"
          />
        </div>

        {/* Category */}
        <span className="absolute left-3 top-3 rounded-md bg-accent px-3 py-1 text-[10px] font-medium text-white">
          Car
        </span>

        {/* Wishlist */}
        <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow">
          <Heart className="h-4 w-4 text-ink-secondary" />
        </button>
      </div>

      {/* Content */}
      <div className="p-3">

        {/* Title + Price */}
        <div className="flex items-start justify-between gap-2">

          <div className="min-w-0 flex-1">
            <h3 className="line-clamp-2 text-sm font-bold text-ink-primary sm:text-lg">
              1965 Mustang
            </h3>

            <p className="mt-1 text-xs text-ink-secondary sm:text-sm">
              by Jamie
            </p>
          </div>

          <div className="shrink-0 text-right">
            <p className="text-[10px] text-ink-muted sm:text-xs">
              From
            </p>

            <div className="font-bold text-accent">
              <span className="text-sm sm:text-base">₹</span>
              <span className="text-lg sm:text-2xl">99</span>
            </div>
          </div>

        </div>

        {/* Sizes + CTA */}
        <div className="mt-4 flex items-center gap-2">

          <button className="flex h-8 min-w-12 items-center justify-center rounded-md border border-bg-border px-3 text-xs font-medium">
            A4
          </button>

          <button className="flex h-8 min-w-12 items-center justify-center rounded-md border border-bg-border px-3 text-xs font-medium">
            A3
          </button>

          <button className="ml-auto rounded-lg bg-accent px-3 py-2 text-xs font-medium text-white transition hover:opacity-90">
            + Wall
          </button>

        </div>

      </div>
    </div>
  );
}