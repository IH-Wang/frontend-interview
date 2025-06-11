interface ChevronLeftProps {
  size?: number | string;
  strokeWidth?: number;
  className?: string;
  onClick?: () => void;
}

export default function ChevronLeft({
  size = 24,
  strokeWidth = 2,
  className = "",
  onClick,
}: ChevronLeftProps) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      className={`cursor-pointer stroke-gray-400 ${className}`}
      onClick={onClick}
    >
      <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
