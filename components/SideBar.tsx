import SiderOptions from "./SiderOptions";
import { UserIcon } from "@heroicons/react/outline";
import {
  FiDownloadCloud,
  FiPlus,
  FiPrinter,
  FiTrash2,
  FiUpload,
} from "react-icons/fi";
import {
  IoChevronUpOutline,
  IoPersonOutline,
  IoArchiveOutline,
} from "react-icons/io5";
import { BiHistory, BiMessageAltAdd } from "react-icons/bi";

function SideBar() {
  return (
    <div className="w-2/12">
      {/* compose button */}
      <div className="flex items-center space-x-2 group max-w-fit  shadow-md p-3 rounded-full hover:cursor-pointer hover:bg-gray-100">
        <img src="/icon/plus.png" alt="" className="w-10 h-8" />
        <button className="text-sm text-blue-600 pr-3"> create Contact</button>
      </div>

      <div className="flex flex-col flex-grow mt-10 ml-10">
        <div className="border-t">
          <SiderOptions
            Icon={IoPersonOutline}
            title={"Contacts"}
            value={315}
            selected={true}
          />
          {/* BiDuplicate */}
          <SiderOptions Icon={BiMessageAltAdd} title={"Merge & Fix"} />
          <SiderOptions Icon={BiHistory} title={"Frequently Contacted"} />
        </div>

        <div className="border-t mt-5">
          <SiderOptions Icon={IoChevronUpOutline} title={"Labels"} />
          <SiderOptions Icon={FiPlus} title={"Create Label"} />
        </div>

        <div className="border-t mt-5">
          <SiderOptions Icon={FiUpload} title={"Import"} />
          <SiderOptions Icon={FiDownloadCloud} title={"Export"} />
          <SiderOptions Icon={FiPrinter} title={"Print"} />
        </div>
        <div className="border-t mt-5">
          <SiderOptions Icon={IoArchiveOutline} title={"Other Contacts"} />
          <SiderOptions Icon={FiTrash2} title={"Trash"} />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
