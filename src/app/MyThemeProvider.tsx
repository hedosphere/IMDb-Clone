"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

const MyThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <div className=" dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default MyThemeProvider;
