const TMDB_API_KEY = process.env.TMDB_API_KEY;
import MoviesCard from "@/components/Movies";
import React from "react";

const page = async ({ params }: any) => {
  //   console.log(params.search, "route");

  const TMDBurl = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${params.search}&language=en-US&include_adult=false`;

  let res = await fetch(TMDBurl, { next: { revalidate: 10000 } });

  if (!res.ok) throw new Error("Fail to load new movies");

  let movie = await res.json();

  //   console.log("movie.results.length", movie.results.length);
  return (
    <div>
      {/* <pre>{JSON.stringify(movie.results, null, 4)}</pre> */}
      {movie.results && movie.results.length < 1 ? (
        <h1 className="text-red-900 flex justify-center mt-12  capitalize text-5xl">
          No result found
        </h1>
      ) : (
        <MoviesCard
          SearchResult={true}
          params={params.search}
          MovieList={movie.results}
        />
      )}
    </div>
  );
};

export default page;
