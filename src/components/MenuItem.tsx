import Link from "next/link";

import React from "react";

type MenuType = {
  title: string;
  address: string;
  Icon: any;
};

const MenuItem = ({ address, title, Icon }: MenuType) => {
  return (
    <div className="   ">
      <Link href={address} className="hover:text-amber-500">
        <div className="text-2xl sm:hidden ">
          <Icon />
        </div>
        <div className=" uppercase hidden sm:inline ">{title}</div>
      </Link>
    </div>
  );
};
export default MenuItem;
