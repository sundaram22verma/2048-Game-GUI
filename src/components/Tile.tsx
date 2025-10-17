import { cn } from "@/lib/utils";

interface TileProps {
  value: number;
  position: { row: number; col: number };
  isNew?: boolean;
  isMerged?: boolean;
}

const getTileStyles = (value: number) => {
  const styles: Record<number, string> = {
    2: "bg-tile-2 text-tile-2-fg",
    4: "bg-tile-4 text-tile-4-fg",
    8: "bg-tile-8 text-tile-8-fg",
    16: "bg-tile-16 text-tile-16-fg",
    32: "bg-tile-32 text-tile-32-fg",
    64: "bg-tile-64 text-tile-64-fg",
    128: "bg-tile-128 text-tile-128-fg",
    256: "bg-tile-256 text-tile-256-fg",
    512: "bg-tile-512 text-tile-512-fg",
    1024: "bg-tile-1024 text-tile-1024-fg",
    2048: "bg-tile-2048 text-tile-2048-fg",
  };

  return styles[value] || "bg-tile-2048 text-tile-2048-fg";
};

const getTileSize = (value: number) => {
  if (value < 100) return "text-5xl";
  if (value < 1000) return "text-4xl";
  return "text-3xl";
};

export const Tile = ({ value, position, isNew, isMerged }: TileProps) => {
  const tileSize = 100 / 4; // 4x4 grid
  const gap = (3 * 0.75) / 4; // gap-3 converted to percentage

  return (
    <div
      className={cn(
        "absolute flex items-center justify-center font-bold rounded-md shadow-md",
        "tile-slide",
        isNew && "tile-pop",
        isMerged && "tile-merge",
        getTileStyles(value)
      )}
      style={{
        width: `calc(${tileSize}% - ${gap}rem)`,
        height: `calc(${tileSize}% - ${gap}rem)`,
        left: `calc(${position.col * tileSize}% + ${position.col * 0.75}rem)`,
        top: `calc(${position.row * tileSize}% + ${position.row * 0.75}rem)`,
      }}
    >
      <span className={cn("font-bold", getTileSize(value))}>{value}</span>
    </div>
  );
};
