"use client";
import React from "react";
import { IoMdSync } from "react-icons/io";

const Error = ({ error, reset }: any) => {
  return (
    <div className="text-center mt-16">
      <h1>Something went wrong.</h1>

      <p
        className="flex gap-1  justify-center items-center cursor-pointer text-yellow-800 font-bold hover:text-amber-600"
        onClick={() => reset()}
      >
        Try again <IoMdSync className="text-lg  " />
      </p>
    </div>
  );
};

export default Error;
