import Button from "../Button";

export default function ActionBar({
  search,
  deleteDisabled,
  isError,
  onSearch,
  onDelete,
  onRefresh,
}: {
  search: string;
  deleteDisabled: boolean;
  isError: boolean;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: () => void;
  onRefresh: () => void;
}) {
  return (
    <section className="flex flex-wrap items-center justify-end p-5 gap-4">
      <input
        type="text"
        value={search}
        placeholder="Search Invoice"
        className="md:w-[150px] h-10 border-gray-200 rounded-md border outline-none px-4 text-center focus:border-gray-400 disabled:hover:cursor-not-allowed disabled:bg-gray-100"
        onChange={onSearch}
        disabled={isError}
      />
      <Button
        className="bg-[var(--color-red)] disabled:bg-red-200"
        disabled={deleteDisabled}
        onClick={onDelete}
        text="DELETE"
      />

      <Button
        className="bg-[var(--color-purple)]"
        onClick={onRefresh}
        text="REFRESH INVOICE"
      />
    </section>
  );
}
