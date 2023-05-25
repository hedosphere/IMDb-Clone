import Link from "next/link";
import { type } from "os";
import React from "react";

type MenuType = {
  title: string;
  address: string;
  Icon: any;
};

const MenuItem = ({ address, title, Icon }: MenuType) => {
  return (
    <div className="  text-2xl ">
      <Link href={address} className="hover:text-yellow-600">
        <div className="text-5xl sm:hidden ">
          <Icon />
        </div>
        <div className=" uppercase hidden sm:inline ">{title}</div>
      </Link>
    </div>
  );
};
export default MenuItem;
