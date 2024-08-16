import { UserButton } from "@clerk/nextjs";
import { SearchIcon } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="p-5 shadow-sm border-b-2 flex justify-between items-center">
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg">
        <SearchIcon />
        <input type="text" placeholder="search" className="outline-none" />
      </div>
      {/* message */}
      <div className="flex gap-5 items-center">
        <h2 className="hidden lg:block lg:bg-primary lg:p-2 lg:rounded-full lg:text-sm lg:text-white lg:px-2 select-none ">
          🔥 Join membership program just for $10/month and get access to all
        </h2>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;