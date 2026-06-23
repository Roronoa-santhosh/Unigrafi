import React from "react";
import PosterCard from "@/components/poster/PosterCard";
import { auth } from "@/auth";

export default async function ExplorePage() {
  const session = await auth();

  const posters = [
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
    {
      id: "3",
      title: "Tokyo Nights",
      designerName: "Akira",
      category: "City",
      mockupUrl: "/mockup poster img.png",
      posterImageUrl: "/car.jpg",
      basePrice: 149,
      sizes: ["A4", "A3"],
    },
    {
      id: "4",
      title: "Formula One",
      designerName: "Max",
      category: "Sports",
      mockupUrl: "/mockup poster img.png",
      posterImageUrl: "/car.jpg",
      basePrice: 249,
      sizes: ["A4", "A3", "A2"],
    },
  ];

  const explorePosters = Array.from(
    { length: 20 },
    (_, index) => ({
      ...posters[index % posters.length],
      id: `${index + 1}`,
    })
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Explore Posters
        </h1>

        <p className="mt-2 text-sm text-ink-secondary">
          Discover unique posters created by talented designers.
        </p>
      </div>

      <div
        className="
          grid
          grid-cols-2
          gap-4
          lg:grid-cols-4
        "
      >
        {explorePosters.map((poster) => (
          <PosterCard
            key={poster.id}
            session={session}
            id={poster.id}
            title={poster.title}
            designerName={poster.designerName}
            category={poster.category}
            mockupUrl={poster.mockupUrl}
            posterImageUrl={poster.posterImageUrl}
            basePrice={poster.basePrice}
            sizes={poster.sizes}
          />
        ))}
      </div>
    </section>
  );
}