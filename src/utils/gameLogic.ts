import { Tile, GameState, Direction } from "@/types/game";

const BOARD_SIZE = 4;

export const createEmptyBoard = (): (Tile | null)[][] => {
  return Array(BOARD_SIZE)
    .fill(null)
    .map(() => Array(BOARD_SIZE).fill(null));
};

export const generateId = (): string => {
  return `${Date.now()}-${Math.random()}`;
};

export const getEmptyPositions = (board: (Tile | null)[][]): { row: number; col: number }[] => {
  const positions: { row: number; col: number }[] = [];
  board.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (!cell) {
        positions.push({ row: rowIndex, col: colIndex });
      }
    });
  });
  return positions;
};

export const addRandomTile = (board: (Tile | null)[][]): (Tile | null)[][] => {
  const emptyPositions = getEmptyPositions(board);
  if (emptyPositions.length === 0) return board;

  const newBoard = board.map((row) => [...row]);
  const randomPosition = emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
  const value = Math.random() < 0.9 ? 2 : 4;

  newBoard[randomPosition.row][randomPosition.col] = {
    id: generateId(),
    value,
    position: randomPosition,
    isNew: true,
  };

  return newBoard;
};

export const initializeGame = (): GameState => {
  let board = createEmptyBoard();
  board = addRandomTile(board);
  board = addRandomTile(board);

  const savedBestScore = localStorage.getItem("bestScore");
  const bestScore = savedBestScore ? parseInt(savedBestScore, 10) : 0;

  return {
    board,
    score: 0,
    bestScore,
    gameOver: false,
    won: false,
  };
};

const slideLine = (line: (Tile | null)[]): { line: (Tile | null)[]; score: number } => {
  // Remove nulls
  const tiles = line.filter((tile) => tile !== null) as Tile[];
  const newLine: (Tile | null)[] = Array(BOARD_SIZE).fill(null);
  let score = 0;
  let targetIndex = 0;

  for (let i = 0; i < tiles.length; i++) {
    if (i < tiles.length - 1 && tiles[i].value === tiles[i + 1].value) {
      // Merge tiles
      const mergedValue = tiles[i].value * 2;
      newLine[targetIndex] = {
        ...tiles[i],
        value: mergedValue,
        isMerged: true,
      };
      score += mergedValue;
      targetIndex++;
      i++; // Skip next tile as it's merged
    } else {
      newLine[targetIndex] = tiles[i];
      targetIndex++;
    }
  }

  return { line: newLine, score };
};

export const move = (state: GameState, direction: Direction): GameState => {
  if (state.gameOver) return state;

  let newBoard = state.board.map((row) => [...row]);
  let totalScore = 0;
  let moved = false;

  const processLine = (line: (Tile | null)[], reverse: boolean): (Tile | null)[] => {
    const toProcess = reverse ? [...line].reverse() : line;
    const { line: processed, score } = slideLine(toProcess);
    totalScore += score;

    const result = reverse ? [...processed].reverse() : processed;
    
    // Check if anything moved
    for (let i = 0; i < line.length; i++) {
      if (line[i]?.value !== result[i]?.value) {
        moved = true;
      }
    }

    return result;
  };

  if (direction === "left") {
    newBoard = newBoard.map((row) => processLine(row, false));
  } else if (direction === "right") {
    newBoard = newBoard.map((row) => processLine(row, true));
  } else if (direction === "up") {
    for (let col = 0; col < BOARD_SIZE; col++) {
      const column = newBoard.map((row) => row[col]);
      const processedColumn = processLine(column, false);
      processedColumn.forEach((tile, row) => {
        newBoard[row][col] = tile;
      });
    }
  } else if (direction === "down") {
    for (let col = 0; col < BOARD_SIZE; col++) {
      const column = newBoard.map((row) => row[col]);
      const processedColumn = processLine(column, true);
      processedColumn.forEach((tile, row) => {
        newBoard[row][col] = tile;
      });
    }
  }

  // Update positions
  newBoard = newBoard.map((row, rowIndex) =>
    row.map((tile, colIndex) =>
      tile ? { ...tile, position: { row: rowIndex, col: colIndex } } : null
    )
  );

  if (!moved) return state;

  // Add new tile
  newBoard = addRandomTile(newBoard);

  const newScore = state.score + totalScore;
  const newBestScore = Math.max(state.bestScore, newScore);

  // Save best score
  localStorage.setItem("bestScore", newBestScore.toString());

  // Check for win condition
  const won = newBoard.some((row) => row.some((tile) => tile?.value === 2048));

  // Check for game over
  const gameOver = checkGameOver(newBoard);

  return {
    board: newBoard,
    score: newScore,
    bestScore: newBestScore,
    gameOver,
    won: won && !state.won,
  };
};

const checkGameOver = (board: (Tile | null)[][]): boolean => {
  // Check for empty cells
  if (getEmptyPositions(board).length > 0) return false;

  // Check for possible merges horizontally
  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE - 1; col++) {
      if (board[row][col]?.value === board[row][col + 1]?.value) {
        return false;
      }
    }
  }

  // Check for possible merges vertically
  for (let col = 0; col < BOARD_SIZE; col++) {
    for (let row = 0; row < BOARD_SIZE - 1; row++) {
      if (board[row][col]?.value === board[row + 1][col]?.value) {
        return false;
      }
    }
  }

  return true;
};
