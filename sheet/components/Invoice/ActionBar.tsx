export default function ActionBar() {
  return (
    <section className="flex flex-wrap items-center justify-end p-5 gap-4">
      <input
        type="text"
        placeholder="Search Invoice"
        className="md:w-[150px] h-10 border-gray-200 rounded-md border outline-none px-4 text-center focus:border-gray-400"
      />
      <button
        className="md:w-[150px] h-10 bg-[var(--color-red)] rounded-md text-center text-[15px] font-medium text-white cursor-pointer"
      >
        DELETE
      </button>
      <button
        className="md:w-[150px] h-10 bg-[var(--color-purple)] rounded-md text-center text-[15px] font-medium text-white cursor-pointer"
      >
        REFRESH INVOICE
      </button>
    </section>
  );
}
