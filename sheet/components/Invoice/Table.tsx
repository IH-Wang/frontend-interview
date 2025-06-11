import { mockData } from "@/app/api/mock";
import TableItem from "./TableItem";
import Pagination from "./Pagination";

const HeaderCell: React.FC<React.PropsWithChildren<{ className: string }>> = ({
  children,
  className,
}) => {
  return (
    <th
      className={`text-center relative after:absolute ${'after:content-[""]'} after:top-1/2 after:right-0 after:w-[2px] after:h-4 after:bg-gray-300 after:-translate-y-1/2 after:transform first:after:hidden last:after:hidden ${className}`}
    >
      {children}
    </th>
  );
};

export default function Table() {
  return (
    <section className="overflow-x-auto">
      <table className="min-w-full text-sm table-fixed">
        <thead className="bg-[var(--background-header)] border-b-1 border-gray-100 text-gray-500">
          <tr className="flex w-full font-semibold py-4">
            <HeaderCell className="flex items-center justify-start pl-5 basis-[5%]">
              <input type="checkbox" className="w-5 h-5" />
            </HeaderCell>
            <HeaderCell className="basis-[10%]">ID</HeaderCell>
            <HeaderCell className="basis-[26%]">CLIENT</HeaderCell>
            <HeaderCell className="basis-[12%]">TOTAL</HeaderCell>
            <HeaderCell className="basis-[15%]">ISSUED DATE</HeaderCell>
            <HeaderCell className="basis-[14%]">BALANCE</HeaderCell>
            <HeaderCell className="basis-[18%]">ACTION</HeaderCell>
          </tr>
        </thead>
        <tbody>
          {mockData.slice(0, 10).map((item) => (
            <TableItem key={item.id} {...item} />
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <Pagination />
    </section>
  );
}
