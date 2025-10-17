import { Tile as TileType } from "@/types/game";
import { Tile } from "./Tile";

interface GameBoardProps {
  board: (TileType | null)[][];
}

export const GameBoard = ({ board }: GameBoardProps) => {
  return (
    <div className="relative bg-game-board rounded-lg p-3 shadow-lg">
      {/* Grid background */}
      <div className="grid grid-cols-4 gap-3">
        {Array(16)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="aspect-square bg-game-empty rounded-md"
            />
          ))}
      </div>

      {/* Tiles layer */}
      <div className="absolute inset-3">
        <div className="relative w-full h-full">
          {board.flat().map(
            (tile) =>
              tile && (
                <Tile
                  key={tile.id}
                  value={tile.value}
                  position={tile.position}
                  isNew={tile.isNew}
                  isMerged={tile.isMerged}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};
