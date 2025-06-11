import { useMemo } from "react";

import ChevronLeftIcon from "@/components/icons/ChevronLeft";
import ChevronRightIcon from "@/components/icons/ChevronRight";
import { PAGE_SIZE } from "@/constants";

export default function Pagination({
  page,
  pageSize,
  total,
  isLoading,
  onPageChange,
}: {
  page: number;
  pageSize: number;
  total: number;
  isLoading: boolean;
  onPageChange: (page: number) => void;
}) {
  const maxPage = useMemo(() => Math.ceil(total / 10), [total]);
  const start = useMemo(() => PAGE_SIZE * (page - 1) + 1, [page]);
  const end = useMemo(
    () => PAGE_SIZE * (page - 1) + pageSize,
    [page, pageSize]
  );
  return (
    <div className="flex items-center justify-end py-4 px-5 space-x-6 font-medium text-sm">
      {isLoading ? (
        <>
          <span className="w-10 h-4 bg-gray-200 animate-pulse" />
          <span className="w-18 h-6 bg-gray-200 animate-pulse" />
        </>
      ) : (
        <>
          <span>
            {start}-{end} of {total}
          </span>
          <ChevronLeftIcon
            className={`w-6 h-6 ${
              page < maxPage
                ? "stroke-gray-200 hover:cursor-not-allowed"
                : "stroke-gray-400"
            }`}
            onClick={() => {
              if (page === maxPage) {
                onPageChange(maxPage - 1);
              }
            }}
          />
          <ChevronRightIcon
            className={`w-6 h-6 ${
              page === maxPage
                ? "stroke-gray-200 hover:cursor-not-allowed"
                : "stroke-gray-400"
            }`}
            onClick={() => {
              if (page < maxPage) {
                onPageChange(page + 1);
              }
            }}
          />
        </>
      )}
    </div>
  );
}
