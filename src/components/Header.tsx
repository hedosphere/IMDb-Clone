import MenuItem from "./MenuItem";
import { AiTwotoneHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import ColorMode from "./ColorMode";
//

export const Header = () => {
  return (
    <div className="max-w-[90vw] mx-auto py-3  select-none">
      <div className=" items-center flex justify-between gap-4">
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
            <ColorMode />
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
