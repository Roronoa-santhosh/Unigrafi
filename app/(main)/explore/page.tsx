import React from 'react'
import PosterCard from '@/components/poster/PosterCard'

function page() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6">

      <div
        className="
          grid
          grid-cols-2
          gap-4
          sm:grid-cols-3
          xl:grid-cols-4
        "
      >
        <PosterCard />
        <PosterCard />
        <PosterCard />
        <PosterCard />
        <PosterCard />
        <PosterCard />
        <PosterCard />
        <PosterCard />
      </div>

    </section>
  )
}

export default page
