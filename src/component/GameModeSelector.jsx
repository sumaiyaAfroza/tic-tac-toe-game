import {GlassCard} from './glass.card.jsx';

export const GameModeSelector = ({ onSelectMode }) => {

  const handleModeClick = (mode) => {
    // console.log(mode)
    onSelectMode(mode)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">

      <div className="max-w-4xl w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 animate-gradient mb-6 leading-tight">
            TIC TAC TOE
          </h1>
          <p className="text-white/60 text-xl font-medium">Choose your battle mode</p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
            <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse"></div>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Mode Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Human vs Human */}
          <div onClick={() => handleModeClick('human')} className="group cursor-pointer">
            <GlassCard className="p-10 hover:scale-105 hover:shadow-[0_0_50px_rgba(217,70,239,0.3)] transition-all duration-500 relative overflow-hidden">
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="text-center relative z-10">
                <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  👥
                </div>
                <h2 className="text-4xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-fuchsia-400 group-hover:to-pink-400 transition-all">
                  Human vs Human
                </h2>
                <p className="text-white/60 text-lg mb-4">Challenge your friend</p>

                {/* Features */}
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm text-white/50">
                    <span className="text-green-400">✓</span>
                    <span>Local multiplayer</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-white/50">
                    <span className="text-green-400">✓</span>
                    <span>Turn-based gameplay</span>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="inline-flex items-center gap-2 text-fuchsia-400 font-semibold">
                    <span>Start Game</span>
                    <span className="animate-pulse">→</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* AI Medium */}
          <div onClick={() => handleModeClick('ai-medium')} className="group cursor-pointer">
            <GlassCard className="p-10 hover:scale-105 hover:shadow-[0_0_50px_rgba(34,211,238,0.3)] transition-all duration-500 relative overflow-hidden border-2 border-amber-500/20">


              {/* Recommended badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                RECOMMENDED
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="text-center relative z-10">
                <div className="text-7xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  🎯
                </div>
                <h2 className="text-4xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all">
                  AI Medium
                </h2>
                <p className="text-white/60 text-lg mb-4">Battle the smart AI</p>

                {/* Features */}
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm text-white/50">
                    <span className="text-cyan-400">✓</span>
                    <span>Minimax algorithm</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-white/50">
                    <span className="text-cyan-400">✓</span>
                    <span>Winnable matches</span>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold">
                    <span>Challenge AI</span>
                    <span className="animate-pulse">→</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};