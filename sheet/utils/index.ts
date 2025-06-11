import { DATE_LOCALE } from "@/constants";

/**
 * 日期格式轉換
 * @param timestamp
 * @return string
 */
export const formatDate = (timestamp: number) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return new Date(timestamp).toLocaleDateString(DATE_LOCALE, options);
};

/**
 * 頭像對應(因為只有八張頭像)
 * @param id
 * @return number
 */
export const getAvatarIndex = (id: number) => (id % 8) + 1;

/**
 * 將數字金額轉換為帶有貨幣符號的格式化字串。
 * @param amount 數字金額。
 * @return string
 */
export const formatAmount = (amount: number, digit: number = 0) => {
  const isNegative: boolean = amount < 0;
  const absoluteAmount: number = Math.abs(amount);
  return `${isNegative ? "-" : ""}$${absoluteAmount.toFixed(digit)}`;
};

/**
 * 比對字串是否只有數字
 * @param str
 * @return boolean
 */
export const isOnlyDigits = (str: string) => {
  const regex = /^\d+$/;
  return regex.test(str);
};

/**
 * 比對字串是否是 email 格式
 * @param str
 * @return boolean
 */
export const isValidEmail = (str: string) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(str);
};
