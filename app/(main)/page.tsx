import TopDesigner from "@/components/designer/TopDesigner";
import Hero from "@/components/home/Hero";
import CategoryJist from "@/components/poster/CategorieJist";
import Trending from "@/components/poster/Trending";
import Link from "next/dist/client/link";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-bg-light overflow-x-hidden">
      <Hero />

      <div className="m-2 mt-8">
        <div className="flex justify-center lg:justify-between m-2 gap-5">
          <h1 className="font-display  font-extrabold text-4xl ">
            Top Categories
          </h1>
          <Link
            href="/categories"
            className="py-1    border-accent border-2  hover:bg-accent text-black shadow-ring font-semibold px-4 rounded"
          >
            View All
          </Link>
        </div>
        <CategoryJist />
      </div>

      <div className="m-2 mt-5">
        <div className="flex justify-center  lg:justify-between m-2 gap-5">
          <h1 className="font-display  font-extrabold text-4xl ">
            Trending Posters
          </h1>
          <Link
            href="/explore"
            className="py-1    border-accent border-2  hover:bg-accent text-black shadow-ring font-semibold px-4 rounded"
          >
            View All
          </Link>
        </div>
        <Trending />
      </div>

      <div className="m-2 mt-5">
        <div className="flex justify-center lg:justify-between m-2 gap-5">
          <h1 className="font-display  font-extrabold text-4xl ">
            Top Designers
          </h1>
          <Link
            href="/designers"
            className="py-1    border-accent border-2  hover:bg-accent text-black shadow-ring font-semibold px-4 rounded"
          >
            View All
          </Link>
        </div>

        <TopDesigner />

      </div>
      <div className="h-50"></div>
    </div>
  );
}
