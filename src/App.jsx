import {useState} from "react";
import {GameModeSelector} from "./component/GameModeSelector.jsx";
import {AnimatedBackground} from "./component/Animated.Background.jsx";
import {StatusMessage} from "./component/status.message.jsx";
import {GlassCard} from "./component/glass.card.jsx";
import {SidePanel} from "./component/side.panel.jsx";
import {EMPTY_BOARD, PLAYER_O, PLAYER_X, WINNING_LINES} from "./constants/constants.js";
import {Square} from "./component/square.jsx";
import {calculateWinner, isBoardFull} from "./utils/utils.js";

export default function App() {
  const [gameMode, setGameMode] = useState(null)
  const [currentMove, setCurrentMove] = useState(0)
  const [history, setHistory] = useState([EMPTY_BOARD])
  const xIsNext = currentMove % 2 === 0
  // console.log(xIsNext)
  const currentSquares = history[currentMove]
  // console.log(currentSquares)
  const winner = calculateWinner(currentSquares)

  const winningLine = winner
    ? WINNING_LINES.find(([a, b, c]) =>
      currentSquares[a] && // ✅ null check যোগ করুন
      currentSquares[a] === currentSquares[b] &&
      currentSquares[b] === currentSquares[c]
    )
    : null;

  const handleSquareClick = (index) => {
    // Don't allow clicks if square is filled, game over, or AI is thinking
    if (currentSquares[index] || winner ) {
      console.log('Blocked: square filled or winner or AI thinking');
      return;
    }

    // console.log(index)
    const next = [...currentSquares]
    next[index] = xIsNext ? PLAYER_X : PLAYER_O
    handlePlay(next)
  }

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0,currentMove +1), nextSquares];
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  const startGame = (mode) => {
    setGameMode(mode)
  }

  const backMenu = () => {
    setGameMode(null)
  }

  if(!gameMode) {
    return (
      <>
        <AnimatedBackground/>
        <GameModeSelector onSelectMode={startGame}/>
      </>
    )
  }


  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 animate-gradient">TIC TAC TOE</h1>
            {gameMode === 'ai-medium' && (
              <p className="text-white/60 mt-2 text-lg">
                🤖 AI Mode
              </p>
            )}
          </header>

          <div className="flex flex-col lg:flex-row items-start justify-center gap-8">
            {/* Board Section */}
            <div className="flex flex-col items-center gap-8">
              <GlassCard className="px-8 py-6 min-w-[280px]">
                <StatusMessage
                  winner={winner}
                  xIsNext={xIsNext}
                  isDraw={!winner && isBoardFull(currentSquares)}
                />
              </GlassCard>
              <GlassCard className="p-6">
                <div className="grid grid-cols-3 gap-3">
                  {
                    currentSquares.map((square, index) => (
                      <Square
                        key={index}
                        value={square}
                        onSquareClick={() => handleSquareClick(index)}
                        isWinningSquare={winningLine?.includes(index)}

                      />
                    ))
                  }
                </div>
              </GlassCard>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-80 flex flex-col gap-6">
              <SidePanel title="History" icon="📜">
                <button className="w-full mb-4 px-6 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-red-500 to-pink-500 hover:scale-105 transition-all">
                  🔄 New Game
                </button>
                <button
                  onClick={backMenu}
                  className="w-full mb-4 px-6 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:scale-105 transition-all"
                >
                  🏠 Back to Menu
                </button>
                <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
                  {history.map((_, move) => (
                    <button key={move} onClick={() => {
                      setCurrentMove(move);

                    }} className={`w-full px-4 py-2 rounded-lg text-sm font-semibold transition-all ${move === currentMove ? 'bg-white/20 text-white' : 'text-white/50 hover:bg-white/5'}`}>
                      {move === 0 ? "🎮 Start" : `Move #${move}`}
                    </button>
                  ))}
                </div>
                <div className="space-y-5">
                  <div className="flex justify-between items-center py-5">
                    <span className="text-white/60">Total Moves</span>
                    <span className="text-2xl font-bold text-white">{currentMove}</span>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Status</span>
                    <span className={`font-bold ${winner ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {winner ? '🏁 Finished' : '⚡ Playing'}
                    </span>

                  </div>
                  {gameMode !== 'human' && (
                    <>
                      <div className="h-px bg-white/10" />
                      <div className="flex justify-between items-center">
                        <span className="text-white/60">Mode</span>
                        <span className="font-bold text-cyan-400">
                          🤖 AI Medium
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </SidePanel>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}