import { type } from "os";
import React from "react";


type moviesType = {
  MovieList:any
};
const MoviesCard = ({ MovieList }:moviesType) => {
  return (
    <div>
      {MovieList.map((movie: any) => (
        <div key={movie.id}>{movie.original_title}</div>
      ))}
    </div>
  );
};

export default MoviesCard;
