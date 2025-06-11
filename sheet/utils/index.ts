export const formatDate = (timestamp: number) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return new Date(timestamp).toLocaleDateString("en-GB", options);
};
