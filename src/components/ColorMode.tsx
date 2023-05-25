"use client";
import React, { useState, useEffect } from "react";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const ColorMode = () => {
  const [isMounted, setIsMounted] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => setIsMounted(true), []);

  const currentTheme = theme == "system" ? systemTheme : theme;
  return (
    <div className="hover:text-amber-500 cursor-pointer text-xl ">
      {isMounted &&
        (currentTheme == "dark" ? (
          <MdLightMode
            onClick={() => setTheme("light")}
            className="text-white2 "
          />
        ) : (
          <BsFillMoonFill
            onClick={() => setTheme("dark")}
            className="text-white2 "
          />
        ))}
    </div>
  );
};

export default ColorMode;
