import Image from "next/image";
import React from "react";
import { AiOutlineSync } from "react-icons/ai";

const loading = () => {
  return (
    <div className=" mt-2  min-h-full  min-w-full flex  justify-center ">
      <div className=" mt-6  min-h-full  min-w-full flex  justify-center ">
        {/*  MdCloudSync FaSync  AiOutlineSync*/}
        <AiOutlineSync className=" animate-spin text-[10rem] mt-10 duration-500 transition-all  " />
      </div>
    </div>
  );
};

export default loading;
