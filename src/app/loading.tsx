import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className="h-[60vh] w-full flex items-center justify-center bg-transparent ">
      <Image
        src={"/Loading_Spinner.svg"}
        height={500}
        width={500}
        alt="Loading..."
      />
    </div>
  );
};

export default loading;
