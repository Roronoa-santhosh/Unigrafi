import React from "react";
import PosterCard from "./PosterCard";

function Trending() {
  const trendingItems = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
  }));

  return (
    <section className="w-full py-6">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-2 pb-2">
          {trendingItems.map((item) => (
            <div
              key={item.id}
              className="
                shrink-0
                w-[calc(50%-8px)]
                sm:w-[calc(33.333%-11px)]
                lg:w-[calc(25%-12px)]
              "
            >
              <PosterCard />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trending;