// components/poster/Trending.tsx
import React from "react"
import PosterCard from "./PosterCard"
import{auth} from "@/auth"

const dummyPosters = [
  {
    id: "1",
    title: "1965 Mustang",
    designerName: "Jamie",
    category: "Car",
    mockupUrl: "/mockup poster img.png",
    posterImageUrl: "/car.jpg",
    basePrice: 99,
    sizes: ["A4", "A3"],
  },
  {
    id: "2",
    title: "Warrior Spirit",
    designerName: "Roronoa",
    category: "Anime",
    mockupUrl: "/mockup poster img.png",
    posterImageUrl: "/car.jpg",
    basePrice: 199,
    sizes: ["A4", "A3", "A2"],
  },
  // add more or just reuse same data for now
]

async function Trending() {
  // repeat dummy data to fill 12 cards for testing
  const trendingItems = Array.from({ length: 12 }, (_, index) => ({
    ...dummyPosters[index % dummyPosters.length],
    id: `${index + 1}`, // unique id per card
  }))
  const session = await auth();

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
              <PosterCard  session={session} {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trending