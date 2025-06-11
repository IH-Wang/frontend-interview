interface ButtonProps {
  text: string;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className = "",
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={`md:w-[150px] h-10 rounded-md text-center text-[15px] font-medium text-white cursor-pointer disabled:hover:cursor-not-allowed ${className}`}
      onClick={() => {
        onClick();
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
