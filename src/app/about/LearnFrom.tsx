import Link from "next/link";
import React from "react";

const LearnFrom = () => {
  return (
    <div>
      <Link
        target="_blank"
        className="mt-12 pt-12 underline  text-red-900 cursor-pointer"
        href={"https://www.hostinger.com/tutorials/web-developer-portfolio"}
      >
        Use this to build your Portfolio
      </Link>
    </div>
  );
};

export default LearnFrom;
