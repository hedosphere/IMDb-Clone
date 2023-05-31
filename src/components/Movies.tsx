import React from "react";
import MovieCard from "./MovieCard";

type moviesType = {
  MovieList: any;
  SearchResult: any;
  params?: any;
};
const MoviesCard = ({ MovieList, SearchResult, params }: moviesType) => {
  // let reg = /%20/gi;

  // let param = "";
  // if (params) param = params.replace(/%20/gi, " ");

  return (
    <div className="max-w-[90vw] mx-auto ">
      {/* <pre>{JSON.stringify(MovieList, null, 4)}</pre> */}
      {/* <div className="my-3 text-amber-500 text-lg">
        {SearchResult && params && (
          <p>
            Movies with
            <span className=" mx-1 font-bold underline underline-offset-4 ">
              "{params && params}"
            </span>
            Keywords
          </p>
        )}
      </div> */}
      <div className=" sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3">
        {MovieList.map((movie: any) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesCard;
