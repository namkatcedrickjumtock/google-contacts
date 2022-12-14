import { SVGProps } from "react";

interface Props {
  value?: number;
  title: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  selected?: boolean;
}

function SiderOptions({ Icon, title, value, selected }: Props) {
  return (
    <div className="flex space-x-3  rounded-tr-full rounded-br-full p-2  hover:bg-blue-100">
      <Icon className="h-5 w-5 text-gray-500" />
      <p className={`text-gray-500 ${selected && "text-blue-500 font-bold"}`}>
        {title}
      </p>
      <p className={`text-gray-500 ${selected && "text-blue-500 font-bold"}`}>{value}</p>
    </div>
  );
}

export default SiderOptions;
