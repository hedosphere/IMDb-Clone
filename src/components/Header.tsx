import React from "react";
import MenuItem from "./MenuItem";
import { AiTwotoneHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
//

export const Header = () => {
  return (
    <div className="m-4 flex justify-between">
      <div className="flex gap-2">
        <MenuItem Icon={AiTwotoneHome} address="/" title="HOME" />
        <MenuItem Icon={BsFillInfoCircleFill} address="/about" title="ABOUt" />
      </div>
      {/*  */}
      <div className="flex gap-4">
        <div className=" cursor-pointer ">
          <MdLightMode className="text-white2 " />
        </div>
        <div>IMDb Clone</div>
      </div>
    </div>
  );
};
