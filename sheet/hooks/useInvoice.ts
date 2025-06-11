import { useState, useCallback, useMemo, useEffect } from "react";

import { mockFetch, AccountData } from "@/app/api/mock";
import { useDebounce } from "./useDebounce";
import { PAGE_SIZE } from "@/constants";

export function useInvoice() {
  const [accountList, setAccountList] = useState<AccountData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isSelectAll, setIsSelectAll] = useState(false);
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedList, setSelectedList] = useState<number[]>([]);
  const [removedList, setRemovedList] = useState<number[]>([]);

  const debouncedSearch = useDebounce(search);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await mockFetch({
        page: currentPage,
        pageSize: PAGE_SIZE,
        search: debouncedSearch,
      });
      setAccountList(res.data);
      if (!total) {
        setTotal(res.totalCount);
      }
    } catch {
      setAccountList([]);
      setSearch("");
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, debouncedSearch, total]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const filterList = useMemo(
    () => accountList.filter((account) => !removedList.includes(account.id)),
    [accountList, removedList]
  );
  const filterTotal = useMemo(() => filterList.length, [filterList]);

  // 單選
  const toggleSelect = (id: number) => {
    if (selectedList.includes(id)) {
      setSelectedList((prev) => prev.filter((i) => i !== id));
    } else {
      setSelectedList((prev) => [...prev, id]);
    }
    if (isSelectAll) {
      setIsSelectAll(false);
    }
  };

  // 全選
  const toggleSelectAll = () => {
    if (!isSelectAll) {
      setSelectedList(filterList.map((item) => item.id));
    } else {
      setSelectedList([]);
    }
    setIsSelectAll(!isSelectAll);
  };

  // 單筆刪除
  const deleteOne = (id: number) => {
    setRemovedList((prev) => [...prev, id]);
  };

  // 選中刪除
  const deleteSelected = () => {
    setRemovedList((prev) => [...prev, ...selectedList]);
  };

  const onRefresh = () => {
    setCurrentPage(1);
    setSearch("");
    setSelectedList([]);
    setRemovedList([]);
    setIsError(false);
    fetchData();
  };

  const onSearch = (q: string) => {
    if (!isError) {
      setSearch(q);
      setCurrentPage(1);
    }
  };

  const gotoPage = (page: number) => setCurrentPage(page);

  return {
    isLoading,
    isError,
    isSelectAll,
    total: total - removedList.length,
    filterTotal,
    filterList,
    selectedList,
    search,
    currentPage,
    count: accountList.length,
    gotoPage,
    onSearch,
    onRefresh,
    toggleSelect,
    toggleSelectAll,
    deleteOne,
    deleteSelected,
  };
}
