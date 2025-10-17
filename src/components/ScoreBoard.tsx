import { Button } from "./ui/button";

interface ScoreBoardProps {
  score: number;
  bestScore: number;
  onNewGame: () => void;
}

export const ScoreBoard = ({ score, bestScore, onNewGame }: ScoreBoardProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-6xl font-bold text-primary">2048</h1>
      
      <div className="flex gap-3 items-center">
        <div className="bg-game-board rounded-lg px-6 py-3 text-center min-w-[100px] shadow-md">
          <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
            Score
          </div>
          <div className="text-2xl font-bold text-foreground">{score}</div>
        </div>
        
        <div className="bg-game-board rounded-lg px-6 py-3 text-center min-w-[100px] shadow-md">
          <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
            Best
          </div>
          <div className="text-2xl font-bold text-foreground">{bestScore}</div>
        </div>
        
        <Button
          onClick={onNewGame}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-6 text-base shadow-md"
        >
          New Game
        </Button>
      </div>
    </div>
  );
};
