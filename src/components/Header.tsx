import MenuItem from "./MenuItem";
import { AiTwotoneHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import ColorModeSwitch from "./ColorMode";
//

export const Header = () => {
  return (
    <div className=" py-8  select-none  ">
      {/* <div className=" py-3  select-none border-b border-gray-700  border-opacity-10 dark:border-white  "> */}
      <div className="max-w-[90vw] mx-auto items-center flex justify-between gap-4">
        <div className="flex gap-6">
          <MenuItem Icon={AiTwotoneHome} address="/" title="HOME" />
          <MenuItem
            Icon={BsFillInfoCircleFill}
            address="/about"
            title="ABOUt"
          />
        </div>
        {/*  */}
        <div className="flex items-center gap-4">
          <>
            <ColorModeSwitch />
          </>
          <div>
            <span className="bg-amber-500 rounded-lg p-1  mr-1 text-2xl">
              IMDb
            </span>
            <span className="hidden sm:inline text-whitex">Clone</span>
          </div>
        </div>
      </div>
    </div>
  );
};
