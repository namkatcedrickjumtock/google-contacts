import {
  CogIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ViewGridIcon,
  ViewListIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

function Header() {
  return (
    <div className="flex items-center">

      {/* leftsode */}
      <div className="flex items-center space-x-4 p-3">
        <ViewListIcon className="h-5 w-5 text-gray-500" />
        <Image
          className="rounded-full"
          src={"/icon/logo.png"}
          width={50}
          height={50}
          objectFit="contain"
        />
        <h2 className="text-gray-500">Contacts</h2>
      </div>

      {/* middle section */}
      {/* <div className="">
        <form className="">
          <SearchIcon className="h-5 w-5" />
          <input type="text" placeholder="Search" />
        </form>
      </div> */}

      {/* right section */}
      {/* <div>
        <div>
          <QuestionMarkCircleIcon className="h-5 w-5" />
          <CogIcon className="h-5 w-5" />
        </div>
        <div>
          <ViewGridIcon className="h-5 w-5 text-gray-500" />
          <Image
            className="rounded-full"
            src={"/icon/logo.png"}
            width={50}
            height={50}
            objectFit="contain"
          />
        </div>
      </div> */}
    </div>
  );
}

export default Header;
