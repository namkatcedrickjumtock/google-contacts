import { SVGProps } from "react";

interface Props {
  value?: number;
  title: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  active?: boolean;
}

function SiderOptions({ Icon, title, value, active }: Props) {
  return (
    <div className="flex space-x-3 hover:bg-blue-200 rounded-tr-full rounded-br-full p-2">
      <Icon className="h-5 w-5 text-gray-500" />
      <p className="text-gray-500 ">{title}</p>
      <p className="text-gray-500">{value}</p>
    </div>
  );
}

export default SiderOptions;
