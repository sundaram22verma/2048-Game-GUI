import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

interface GameOverModalProps {
  isOpen: boolean;
  won: boolean;
  score: number;
  onNewGame: () => void;
  onContinue?: () => void;
}

export const GameOverModal = ({
  isOpen,
  won,
  score,
  onNewGame,
  onContinue,
}: GameOverModalProps) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center">
            {won ? "🎉 You Won!" : "Game Over!"}
          </DialogTitle>
          <DialogDescription className="text-center text-lg pt-4">
            {won
              ? `Congratulations! You reached 2048!`
              : "No more moves available."}
          </DialogDescription>
        </DialogHeader>
        
        <div className="text-center py-4">
          <div className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
            Final Score
          </div>
          <div className="text-4xl font-bold text-primary">{score}</div>
        </div>

        <div className="flex gap-3 justify-center">
          <Button
            onClick={onNewGame}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8"
          >
            New Game
          </Button>
          {won && onContinue && (
            <Button
              onClick={onContinue}
              variant="outline"
              className="font-bold px-8"
            >
              Continue
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
