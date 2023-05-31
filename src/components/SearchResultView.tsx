"use client";
import React from "react";

const SearchResult = ({ SearchResult, params }: any) => {
  return (
    <div>
      {SearchResult && params && (
        <p>
          Movies with
          <span className=" mx-1 font-bold underline underline-offset-4 ">
            "{params.replace(/%20/gi, " ")}"
          </span>
          Keywords
        </p>
      )}
    </div>
  );
};

export default SearchResult;
