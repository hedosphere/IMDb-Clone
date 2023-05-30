import Image from "next/image";
import Link from "next/link";

import React from "react";
import { FiThumbsUp } from "react-icons/fi";

const MovieCard = ({ movie }: any) => {
  return (
    <div className=" my-4 sm:my-0 rounded-lg hover:sm:shadow-md dark:sm:hover:shadow-white sm:hover:shadow-slate-400 group cursor-pointer sm:p-3 border border-slate-400  transition-shadow duration-300">
      <Link href={`/movie/${movie.id}`}>
        <Image
          height={300}
          width={500}
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          placeholder="blur"
          blurDataURL="/Loading_spinner.svg"
          alt={movie.original_title}
          className=" rounded-t-lg dark:group-hover:opacity-50 group-hover:opacity-70"
          style={{
            height: "auto",
            width: "100%",
          }}
        />
        <div className="p-2">
          <p className=" line-clamp-2">{movie.overview}</p>
          <h2 className="font-bold line-clamp-1 text-lg">{movie.title}</h2>
          <p className="flex items-center">
            <span>{movie.release_date}</span>
            <FiThumbsUp className="ml-3 mr-1" /> <span>{movie.vote_count}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
