/* eslint-disable @next/next/no-img-element */
import { IoEllipsisVertical, IoSquareOutline } from "react-icons/io5";

import { RiMore2Line, RiPencilLine, RiStarLine } from "react-icons/ri";

const Contacts = () => {
  return (
    <div className="grid grid-rows-1 grid-flow-col p-5 hover:bg-gray-100 cursor-pointer group">
      <div className="flex space-x-3 items-center relative">
        <IoSquareOutline className="h-5 w-5 opacity-0 text-gray-500 group-hover:opacity-100 absolute left-4 border-5" />
        <img
          className="h-7 w-7 rounded-full group-hover:opacity-0"
          src={"https:links.papareact.com/gll"}
          alt=""
        />
        <p className="text-gray-500 text-[15px">user name</p>
      </div>

      <p className="mxo">671738755</p>

      {/* contact ;efts */}
      <div className="flex items-center space-x-3">
        <RiStarLine className="h-3 w-3 text-gray-500" />
        <RiPencilLine className="h-3 w-3 text-gray-500" />
        <RiMore2Line className="h-3 w-3 text-gray-500" />
      </div>
    </div>
  );
};

export default Contacts;
