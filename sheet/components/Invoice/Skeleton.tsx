import { PAGE_SIZE } from "@/constants";

const ItemCell: React.FC<React.PropsWithChildren<{ className: string }>> = ({
  children,
  className,
}) => {
  return (
    <td className={`flex items-center justify-center ${className}`}>
      {children}
    </td>
  );
};

export default function SkeletonTable() {
  return Array.from({ length: PAGE_SIZE }).map((_, i) => (
    <tr key={i} className="flex w-full border-b border-x border-gray-200 py-2">
      <ItemCell className="justify-start pl-5 basis-[5%]">
        <span className="w-5 h-5 bg-gray-200 animate-pulse" />
      </ItemCell>
      <ItemCell className="basis-[10%]">
        <span className="w-10 h-4 bg-gray-200 animate-pulse" />
      </ItemCell>
      <ItemCell className="basis-[26%]">
        <div className="flex items-center gap-3 w-[300px]">
          <span className="w-8 h-8 rounded-4xl bg-gray-200 animate-pulse" />
          <div className="flex flex-col space-y-1">
            <span className="w-[200px] h-4 bg-gray-200 animate-pulse" />
            <span className="w-[200px] h-3 bg-gray-200 animate-pulse" />
          </div>
        </div>
      </ItemCell>
      <ItemCell className="basis-[12%]">
        {" "}
        <span className="w-20 h-4 bg-gray-200 animate-pulse" />
      </ItemCell>
      <ItemCell className="basis-[15%]">
        {" "}
        <span className="w-20 h-4 bg-gray-200 animate-pulse" />
      </ItemCell>
      <ItemCell className="basis-[14%]">
        {" "}
        <span className="w-20 h-4 bg-gray-200 animate-pulse" />
      </ItemCell>
      <ItemCell className="basis-[18%]">
        <span className="w-20 h-4 bg-gray-200 animate-pulse" />
      </ItemCell>
    </tr>
  ));
}
