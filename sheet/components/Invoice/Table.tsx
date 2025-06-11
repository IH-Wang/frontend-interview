import { AccountData } from "@/app/api/mock";
import TableItem from "./TableItem";
import Pagination from "./Pagination";
import Skeleton from "./Skeleton";
import { PAGE_SIZE } from "@/constants";

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

export default function Table({
  isSelectedAll,
  isError,
  isLoading,
  dataList,
  selectedList,
  total,
  PageSize,
  page,
  count,
  onSelectAll,
  onSelect,
  onDeleteOne,
  onChangePage,
}: {
  isSelectedAll: boolean;
  isError: boolean;
  isLoading: boolean;
  dataList: AccountData[];
  selectedList: number[];
  total: number;
  PageSize: number;
  page: number;
  count: number;
  onSelect: (id: number) => void;
  onSelectAll: () => void;
  onDeleteOne: (id: number) => void;
  onChangePage: (page: number) => void;
}) {
  return (
    <section className="overflow-x-auto">
      <table className="min-w-full text-sm table-fixed">
        <thead className="bg-[var(--background-header)] border-b-1 border-gray-100 text-gray-500">
          <tr className="flex w-full font-semibold py-4">
            <HeaderCell className="flex items-center justify-start pl-5 basis-[5%]">
              <input
                type="checkbox"
                className="w-5 h-5"
                checked={isSelectedAll}
                onChange={() => onSelectAll()}
              />
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
          {!isError &&
            (isLoading ? (
              <Skeleton />
            ) : (
              dataList.map((item) => {
                const isSelected = selectedList.includes(item.id);
                return (
                  <TableItem
                    key={item.id}
                    item={item}
                    isSelected={isSelected}
                    onSelect={onSelect}
                    onDeleteOne={onDeleteOne}
                  />
                );
              })
            ))}
        </tbody>
      </table>
      {!isError && !isLoading && PageSize === 0 && (
        <div className="flex items-center justify-center py-6 text-lg font-bold">
          No data
        </div>
      )}
      {isError && (
        <div className="flex items-center justify-center py-6 text-lg text-red-500 font-bold">
          Fetch Error, please refresh again!
        </div>
      )}
      {/* Pagination */}
      {!isError &&
        PageSize > 0 &&
        total >= PAGE_SIZE &&
        (page === 1 ? count === PAGE_SIZE : true) && (
          <Pagination
            page={page}
            pageSize={PageSize}
            total={total}
            isLoading={isLoading}
            onPageChange={onChangePage}
          />
        )}
    </section>
  );
}
