import React from "react"
import {  Dog, Volleyball, Flower2, CableCar, Fan } from "lucide-react"
import { VideoCameraIcon, MusicalNoteIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

const categories = [
  { name: "Anime", icon: <Fan className="w-4 h-4" />, href: "/categories/anime" },
  { name: "Movie", icon: <VideoCameraIcon className="w-4 h-4" />, href: "/categories/movie" },
  { name: "Music", icon: <MusicalNoteIcon className="w-4 h-4" />, href: "/categories/music" },
  { name: "Car", icon: <CableCar className="w-4 h-4" />, href: "/categories/car" },
  { name: "Series", icon: <Dog className="w-4 h-4" />, href: "/categories/series" },
  { name: "Sports", icon: <Volleyball className="w-4 h-4" />, href: "/categories/sports" },
  { name: "Minimalist", icon: <Flower2 className="w-4 h-4" />, href: "/categories/minimalist" },
]

function CategoryJist() {
  return (
    <div className="w-full max-w-full overflow-x-auto no-scrollbar">
      <div className="flex gap-2 sm:gap-3 py-2 w-max">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="
              flex items-center gap-1.5
              px-3 py-1.5 rounded-full
              bg-bg-surface dark:bg-bg-dsurf
              border border-bg-border dark:border-bg-dborder
              text-xs sm:text-sm
              text-ink-secondary dark:text-ink-isec
              hover:border-accent hover:text-accent
              transition-colors
              shrink-0 whitespace-nowrap
            "
          >
            {category.icon}
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryJist