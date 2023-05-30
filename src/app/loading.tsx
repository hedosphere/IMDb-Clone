import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className=" mt-2  w-full flex  justify-center bg-transparent ">
      <Image
        src={"/Loading_Spinner.svg"}
        height={300}
        width={300}
        alt="Loading..."
      />
    </div>
  );
};

export default loading;
