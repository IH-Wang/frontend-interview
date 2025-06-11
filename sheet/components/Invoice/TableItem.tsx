import { useState } from "react";

import { AccountData } from "@/app/api/mock";
import Avatar from "@/components/Avatar";
import { formatAmount, formatDate, getAvatarIndex } from "@/utils";
import DeleteIcon from "@/components/icons/Delete";
import EyeIcon from "@/components/icons/Eye";

const ItemCell: React.FC<React.PropsWithChildren<{ className: string }>> = ({
  children,
  className,
}) => {
  return (
    <td
      className={`text-center flex items-center justify-center font-medium text-sm text-gray-400 ${className}`}
    >
      {children}
    </td>
  );
};

const renderBalanceContent = (
  isShowBalance: boolean,
  hasPaid: boolean,
  balance: string
) => {
  if (isShowBalance) {
    return <span>{balance}</span>;
  }
  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-medium ${
        hasPaid
          ? "bg-[var(--color-background-green)]"
          : "bg-[var(--color-background-red)]"
      } ${hasPaid ? "text-[var(--color-text-green)]" : "text-white"}`}
    >
      {hasPaid ? "Paid" : "Unpaid"}
    </span>
  );
};

export default function TableItem({
  item,
  isSelected,
  onSelect,
  onDeleteOne,
}: {
  item: AccountData;
  isSelected: boolean;
  onSelect: (id: number) => void;
  onDeleteOne: (id: number) => void;
}) {
  const [isShowBalance, setIsShowBalance] = useState(false);
  return (
    <tr className="flex w-full border-b border-x border-gray-200 hover:bg-gray-100 py-2">
      <ItemCell className="flex items-center justify-start pl-5 basis-[5%]">
        {" "}
        <input
          type="checkbox"
          className="w-5 h-5"
          checked={isSelected}
          onChange={() => onSelect(item.id)}
        />
      </ItemCell>
      <ItemCell className="basis-[10%]">
        <a href="#" className="text-[var(--color-purple)] hover:underline">
          #{item.id}
        </a>
      </ItemCell>
      <ItemCell className="basis-[26%] flex justify-center ">
        <div className="flex items-center gap-3 w-[300px]">
          <Avatar index={getAvatarIndex(item.id)} />
          <div className="text-left">
            <div className="text-gray-800 font-medium">{item.name}</div>
            <div className="text-gray-400 text-xs">{item.mail}</div>
          </div>
        </div>
      </ItemCell>
      <ItemCell className="basis-[12%]">
        {formatAmount(item.totalBalance)}
      </ItemCell>
      <ItemCell className="basis-[15%]">{formatDate(item.issueDate)}</ItemCell>
      <ItemCell className="basis-[14%]">
        {renderBalanceContent(
          isShowBalance,
          item.hasPaid,
          formatAmount(item.balance)
        )}
      </ItemCell>
      <ItemCell className="basis-[18%] space-x-12">
        <DeleteIcon onClick={() => onDeleteOne(item.id)} />
        <EyeIcon
          onClick={() => setIsShowBalance((prev) => !prev)}
          className={isShowBalance ? "stroke-gray-500" : ""}
        />
      </ItemCell>
    </tr>
  );
}
