import ChevronLeftIcon from "@/components/icons/ChevronLeft";
import ChevronRightIcon from "@/components/icons/ChevronRight";

export default function Pagination() {
  return (
    <div className="flex items-center justify-end py-4 px-5 space-x-6 font-medium text-sm">
      <span>1-10 of 13</span>
      <ChevronLeftIcon className="w-6 h-6" />
      <ChevronRightIcon className="w-6 h-6" />
    </div>
  );
}
