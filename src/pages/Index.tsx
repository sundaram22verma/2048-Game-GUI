import { useState, useEffect, useCallback } from "react";
import { GameBoard } from "@/components/GameBoard";
import { ScoreBoard } from "@/components/ScoreBoard";
import { GameOverModal } from "@/components/GameOverModal";
import { initializeGame, move } from "@/utils/gameLogic";
import { GameState, Direction } from "@/types/game";

const Index = () => {
  const [gameState, setGameState] = useState<GameState>(initializeGame());
  const [showModal, setShowModal] = useState(false);

  const handleNewGame = useCallback(() => {
    setGameState(initializeGame());
    setShowModal(false);
  }, []);

  const handleMove = useCallback(
    (direction: Direction) => {
      setGameState((prevState) => {
        const newState = move(prevState, direction);
        
        // Show modal after a short delay to let animations finish
        if ((newState.gameOver || newState.won) && !showModal) {
          setTimeout(() => setShowModal(true), 300);
        }
        
        return newState;
      });
    },
    [showModal]
  );

  const handleContinue = useCallback(() => {
    setShowModal(false);
    setGameState((prev) => ({ ...prev, won: false }));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState.gameOver) return;

      const keyMap: Record<string, Direction> = {
        ArrowUp: "up",
        ArrowDown: "down",
        ArrowLeft: "left",
        ArrowRight: "right",
      };

      const direction = keyMap[e.key];
      if (direction) {
        e.preventDefault();
        handleMove(direction);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameState.gameOver, handleMove]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-8">
      <div className="w-full max-w-[600px]">
        <ScoreBoard
          score={gameState.score}
          bestScore={gameState.bestScore}
          onNewGame={handleNewGame}
        />

        <div className="mb-6 bg-card rounded-lg p-4 shadow-sm">
          <p className="text-sm text-muted-foreground text-center">
            <strong>How to play:</strong> Use arrow keys to move tiles. Tiles with the
            same number merge into one when they touch. Get to{" "}
            <strong className="text-primary">2048</strong> to win!
          </p>
        </div>

        <GameBoard board={gameState.board} />

        <GameOverModal
          isOpen={showModal}
          won={gameState.won}
          score={gameState.score}
          onNewGame={handleNewGame}
          onContinue={gameState.won ? handleContinue : undefined}
        />
      </div>
    </div>
  );
};

export default Index;
