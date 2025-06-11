import Image from "next/image";

interface AvatarProps {
  index: number;
  className?: string;
  width?: number;
  height?: number;
}

const Avatar: React.FC<AvatarProps> = ({
  index,
  className = "",
  width = 32,
  height = 32,
}) => {
  const src = `/avatar/${index}.webp`;

  return (
    <Image
      src={src}
      alt={`Avatar image ${index}`}
      width={width}
      height={height}
      className={`rounded-full ${className}`}
    />
  );
};

export default Avatar;
