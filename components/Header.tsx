/* eslint-disable @next/next/no-img-element */
import {
  CogIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ViewGridIcon,
  ViewListIcon,
} from "@heroicons/react/outline";
import { IoApps, IoAppsOutline } from "react-icons/io5";
import { useSession } from "next-auth/react";
import { Session } from "next-auth/core/types";

interface user {
  data: null
}

function Header() {
  const { data: session} = useSession()

  return (
    <>
      <div className="flex flex-col sticky">
        <div className="flex py-3">
          {/* leftsode */}
          <div className="flex items-center space-x-4 ml-3">
            <ViewListIcon className="h-5 w-5 text-gray-500" />
            <div className="flex items-center space-x-2">
              <img
                className="rounded-full object-contain h-10 w-10"
                src={"/icon/logo.png"}
                alt=''
              />
              <h2 className="text-gray-500 text-2xl">Contacts</h2>
            </div>
          </div>

          <div className="flex flex-1 flex-grow justify-between items-center">
            {/* middle section */}
            <div className="flex ml-20 bg-gray-200 w-7/12 h-full py-3 rounded-md group ">
              <form className="flex flex-1 space-x-2">
                <div className="rounded-full  hover:bg-gray-300 w-fit h-fit mx-3 py-2 px-3">
                  <SearchIcon className="h-5 w-5 " />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-transparent outline-none placeholder:text-sm font-normal text-gray-500"
                />
              </form>
            </div>

            {/* right section */}
            <div className="flex w-2/12 items-center justify-between mr-3">
              <div className="flex space-x-8">
                <QuestionMarkCircleIcon className="h-5 w-5 text-gray-500" />
                <CogIcon className="h-5 w-5 text-gray-500" />
              </div>
              <div className="flex  items-center space-x-3">
                <IoAppsOutline className="h-5 w-5 text-gray-500" />
                <img
                  className="rounded-full h-10 w-10"
                  src={session?.user?.image!}
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
