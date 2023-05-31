// import MoviesCard from "@/components/Movies";
import { AiOutlineSync } from "react-icons/ai";

import Image from "next/image";

const TMDB_API_KEY = process.env.TMDB_API_KEY;

export default async function MoviePage({ params }: any) {
  const { MovieId } = params;

  const TMDBurl = `https://api.themoviedb.org/3/movie/${MovieId}?api_key=${TMDB_API_KEY}`;

  let res = await fetch(TMDBurl, { next: { revalidate: 10000 } });

  if (!res.ok) throw new Error("Fail to load new movies");

  let movie = await res.json();
  // console.log("MovieId", movie);
  return (
    <div className="w-full ">
      {/* <pre>{JSON.stringify(movie, null, 2)}</pre> */}

      <div className="p-4 md:p-8 max-w-[90vw] mx-auto grid grid-rows md:grid-cols-2 gap-4  align-middle ">
        <div className="">
          {" "}
          <Image
            height={300}
            width={500}
            src={`https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
            }`}
            placeholder="blur"
            blurDataURL="/Loading_spinner.svg"
            alt={movie.title || movie.original_title}
            className=" rounded-lg "
            style={{
              maxHeight: "400px",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div className=" pb-4 ">
          <h1 className="mb-3 font-bold  dark:text-white text-black">
            {movie.title || movie.original_title}
          </h1>
          <p className="mb-2">
            <span className=" font-bold  dark:text-white text-black mr-2">
              OverView:
            </span>
            <span className="dark:opacity-75">{movie.overview}</span>
          </p>

          <p className="mb-2">
            <span className=" font-bold  dark:text-white text-black mr-2">
              Date Released:
            </span>
            <span className="dark:opacity-75">{movie.release_date}</span>
          </p>

          <p className="mb-2">
            <span className=" font-bold  dark:text-white text-black mr-2">
              Rating:
            </span>
            <span className="dark:opacity-75">{movie.vote_count}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
