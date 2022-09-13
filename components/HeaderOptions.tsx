import { IoEllipsisVertical } from "react-icons/io5";

function HeaderOptions() {
  return (
    <div className="grid grid-rows-1 grid-flow-col mx-9 font-bold px-3 mb-2  border-b ">
      <p className="text-gray-500 text-sm">Name</p>
      <p className="text-gray-500 text-sm">Email</p>

      <p className="text-gray-500 text-sm">Phone Number</p>
      <p className="text-gray-500 text-sm ">Job Title & Company</p>
      <IoEllipsisVertical className="h-5 justify-self-end w-5text-gray-500" />
    </div>
  );
}

export default HeaderOptions;
