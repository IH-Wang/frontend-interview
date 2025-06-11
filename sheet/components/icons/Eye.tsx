interface EyeIconProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  className?: string;
  onClick?: () => void;
}

export default function Eye({
  size = 24,
  color = "#3A3541",
  strokeWidth = 2,
  className = "",
  onClick,
}: EyeIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`cursor-pointer stroke-gray-400 ${className}`}
      onClick={onClick}
    >
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
