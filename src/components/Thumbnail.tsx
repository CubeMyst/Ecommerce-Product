interface ThumbnailProps {
  src: string;
  alt?: string;
  onClick: () => void;
  isActive?: boolean;
}

export default function ThumbnailItem({
  src,
  alt,
  onClick,
  isActive,
}: ThumbnailProps) {
  return (
    <button
      onClick={onClick}
      className={`w-16 overflow-hidden rounded-lg border-2 relative ${
        isActive ? "border-Orange" : "border-transparent"
      }`}
    >
      <img src={src} className="w-full" alt={alt} />
      {isActive ? (
        <div className="w-full h-full bg-white absolute inset-0 bg-opacity-70 transition-all duration-200"></div>
      ) : (
        <div className="w-full h-full hover:bg-white absolute inset-0 hover:bg-opacity-40 transition-all duration-200"></div>
      )}
    </button>
  );
}
