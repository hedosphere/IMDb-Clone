// import MoviesCard from "@/components/Movies";
import { AiOutlineSync } from "react-icons/ai";

import Image from "next/image";

const TMDB_API_KEY = process.env.TMDB_API_KEY;

export default async function Home({ params }: any) {
  const { MovieId } = params;

  const TMDBurl = `https://api.themoviedb.org/3/movie/${MovieId}?api_key=${TMDB_API_KEY}`;

  let res = await fetch(TMDBurl, { next: { revalidate: 10000 } });

  if (!res.ok) throw new Error("Fail to load new movies");

  let data = await res.json();
  // console.log("MovieId", data);
  return (
    <div className="w-full ">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
     
      
        <div className="p-4 md:p-8 max-w-[90vw] mx-auto grid grid-rows md:grid-cols-2 gap-4  align-middle ">
          <div className="">
            {" "}
            <Image
              height={300}
              width={500}
              src={`https://image.tmdb.org/t/p/original/${
                data.backdrop_path || data.poster_path
              }`}
              placeholder="blur"
              blurDataURL="/Loading_spinner.svg"
              alt={data.original_title}
              className=" rounded-lg "
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div className=" pb-4 ">
            <h1 className="mb-3 font-bold  dark:text-white text-black">
              {data.original_title}
            </h1>
            <p className="mb-2">
              <span className=" font-bold  dark:text-white text-black mr-2">
                OverView:
              </span>
              <span className="dark:opacity-75">{data.overview}</span>
            </p>

            <p className="mb-2">
              <span className=" font-bold  dark:text-white text-black mr-2">
                Date Released:
              </span>
              <span className="dark:opacity-75">{data.release_date}</span>
            </p>

            <p className="mb-2">
              <span className=" font-bold  dark:text-white text-black mr-2">
                Rating:
              </span>
              <span className="dark:opacity-75">{data.vote_count}</span>
            </p>
          </div>
        </div>
    
      
    </div>
  );
}
