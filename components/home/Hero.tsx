
import { ArrowRight} from "lucide-react";
import HeroSvg from "./HeroSvg";
import Link from "next/link";


export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-b-3xl bg-bg-dark">
      {/* Rays */}
      <div className="absolute inset-0 pointer-events-none">

      </div>

      {/* Orange glow */}
      <div className="absolute right-0 top-1/2 h-87.5 w-87.5 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl p-5 ">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Content */}
            <div className="space-y-6">
              <h1 className="font-display text-5xl text-center sm:text-left  font-bold leading-[0.9] sm:text-6xl lg:text-7xl">
                <span className="text-white">Walls That</span>
                <br />
                <span className="text-orange-500">Tell Stories</span>
              </h1>

              {/* Mobile SVG */}
              <div className="flex justify-center py-2 lg:hidden">
              <HeroSvg className="w-47.5 " />
              </div>

              <p className="font-sans  leading-relaxed text-secondary  md:max-w-lg md:text-lg">
                Discover posters from independent artists who pour their soul
                into every design. No algorithms, no corporate art just raw
                creativity.
              </p>

              <div className="flex flex-wrap  justify-around sm:justify-start gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                  Verified artists
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                  Direct support
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                  Original work
                </span>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/explore"
                  className="w-full bg-accent text-ink-primary hover:bg-orange-600 flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold sm:w-auto"
                >
                  Explore Posters
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                <Link
                  href="/designers"
               
                  className="hidden w-full items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm font-semibold bg-accent-DEFAULT text-ink-primary hover:bg-olive-400 sm:flex sm:w-auto"
                >
                  For Creators
                </Link>
              </div>
            </div>

            {/* Desktop SVG */}
            <div className="hidden justify-center lg:flex">
              <HeroSvg className="w-130" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}