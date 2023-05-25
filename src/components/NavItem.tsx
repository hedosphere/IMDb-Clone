"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type NavItemType = {
  param: string;
  title: string;
};

const NavItem = ({ param, title }: NavItemType) => {
  const searchParams = useSearchParams();

  const genre = searchParams.get("genre");
  return (
    <div className=" cursor-pointer hover:text-amber-600 font-semibold">
      <Link
        className={`${
          genre &&
          genre == param &&
          "underline underline-offset-[10px] decoration-[3px] decoration-amber-500"
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavItem;
