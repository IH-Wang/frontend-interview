interface DeleteIconProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  className?: string;
  onClick?: () => void;
}

export default function Delete({
  size = 24,
  color = "#3A3541",
	strokeWidth = 1,
  className = "",
	onClick
}: DeleteIconProps) {
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
      className={`cursor-pointer ${className}`}
			onClick={onClick}
    >
      <rect x="7" y="7.5" width="10" height="12" />
      <line x1="6" y1="5" x2="18" y2="5" />
      <line x1="10" y1="4" x2="14" y2="4" />
    </svg>
  );
}

