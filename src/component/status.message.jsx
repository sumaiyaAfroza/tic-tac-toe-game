import {PLAYER_O, PLAYER_X} from "../constants/constants.js";
import {getPlayerStyle} from "../utils/utils.js";


export const StatusMessage = ({ winner, isDraw, xIsNext, isAIThinking, gameMode }) => {

  if (isAIThinking && gameMode && gameMode !== 'human') {
    return (
      <div className="flex items-center gap-3 justify-center">
        <span className="text-3xl animate-bounce">🤔</span>
        <span className="text-2xl font-bold text-cyan-400">AI is thinking...</span>
      </div>
    );
  }

  if (winner) {
    const isPlayerWin = winner === PLAYER_X;
    const isAIMode = gameMode && gameMode !== 'human';

    return (
      <div className="flex items-center gap-3 justify-center">
        <span className="text-3xl animate-bounce">
          {isAIMode ? (isPlayerWin ? '🎉' : '🤖') : '🏆'}
        </span>
        <div className="flex flex-col">
          <span className="text-sm text-white/60 font-medium">Winner</span>
          <span className={`text-4xl font-black ${getPlayerStyle(winner, 'text')}`}>
            {isAIMode ? (isPlayerWin ? 'You Won!' : 'AI Wins!') : winner}
            {/* false তাই: 'X' display হবে */}
          </span>
        </div>
      </div>
    );
  }

  if (isDraw) {
    return (
      <div className="flex items-center gap-3 justify-center">
        <span className="text-3xl">🤝</span>
        <span className="text-2xl font-bold text-amber-400">Draw Game!</span>
      </div>
    );
  }
  const currentPlayer = xIsNext ? PLAYER_X : PLAYER_O;
  // const isAIMode = gameMode && gameMode !== 'human';


  return (
    <div className="flex items-center gap-3">
      <span className="text-white/60 font-medium">Next Turn</span>
      <span className={`text-4xl font-black ${getPlayerStyle(currentPlayer, 'text')}`}>
        { currentPlayer}
      </span>
    </div>
  );
};
