interface ChevronRightProps {
  size?: number | string;
  strokeWidth?: number;
  className?: string;
  onClick?: () => void;
}

export default function ChevronRight({
  size = 24,
  strokeWidth = 2,
  className = "",
  onClick,
}: ChevronRightProps) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      className={`cursor-pointer ${className}`}
      onClick={onClick}
    >
      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
