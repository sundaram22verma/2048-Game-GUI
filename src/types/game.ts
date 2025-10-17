export type Tile = {
  id: string;
  value: number;
  position: { row: number; col: number };
  isNew?: boolean;
  isMerged?: boolean;
};

export type GameState = {
  board: (Tile | null)[][];
  score: number;
  bestScore: number;
  gameOver: boolean;
  won: boolean;
};

export type Direction = "up" | "down" | "left" | "right";
