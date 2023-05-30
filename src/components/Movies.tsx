import React from "react";
import MovieCard from "./MovieCard";

type moviesType = {
  MovieList: any;
};
const MoviesCard = ({ MovieList }: moviesType) => {
  return (
    <>
      {/* <pre>{JSON.stringify(MovieList, null, 4)}</pre> */}
      <div className=" max-w-[90vw] mx-auto sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3">
        {MovieList.map((movie: any) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
};

export default MoviesCard;
