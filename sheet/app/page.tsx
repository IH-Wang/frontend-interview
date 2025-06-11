"use client";
import ActionBar from "@/components/Invoice/ActionBar";
import Table from "@/components/Invoice/Table";
import { useInvoice } from "@/hooks/useInvoice";

export default function Home() {
  const {
    isLoading,
    isError,
    isSelectAll,
    search,
    filterList,
    selectedList,
    total,
    filterTotal,
    currentPage,
    count,
    onSearch,
    deleteSelected,
    onRefresh,
    toggleSelect,
    toggleSelectAll,
    deleteOne,
    gotoPage,
  } = useInvoice();
  return (
    <main className="mt-4">
      <div className="bg-white rounded-md shadow">
        <ActionBar
          search={search}
          deleteDisabled={selectedList.length === 0}
          isError={isError}
          onSearch={(e) => onSearch(e.target.value)}
          onDelete={deleteSelected}
          onRefresh={onRefresh}
        />
        <Table
          isError={isError}
          isLoading={isLoading}
          isSelectedAll={isSelectAll}
          dataList={filterList}
          selectedList={selectedList}
          total={total}
          PageSize={filterTotal}
          page={currentPage}
          count={count}
          onSelect={toggleSelect}
          onSelectAll={toggleSelectAll}
          onDeleteOne={deleteOne}
          onChangePage={gotoPage}
        />
      </div>
    </main>
  );
}
