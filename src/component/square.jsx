

export const Square = ({ value, onSquareClick, isWinningSquare, disabled }) => {
  return (
    <button
      onClick={onSquareClick}
      disabled={value !== null || disabled}
      className={`group relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 backdrop-blur-md rounded-2xl font-black text-5xl sm:text-6xl lg:text-7xl transition-all duration-300 ease-out
        ${!value && !disabled && 'hover:scale-105 active:scale-95'}
        ${isWinningSquare ? 'bg-gradient-to-br from-emerald-500/30 to-teal-500/30 border-2 border-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.6)] animate-pulse' : 'bg-white/5 border-2 border-white/20 hover:border-white/40 hover:bg-white/10'}
        ${value && getPlayerStyle(value, 'glow')} 
        ${disabled && !value && 'opacity-50 cursor-wait'}
        ${value && 'cursor-not-allowed'}`}
    >
      <span className={`relative z-10 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] ${value ? getPlayerStyle(value, 'text') : 'text-white/30'}`}>
        {value || <span className={`opacity-0 ${!disabled && 'group-hover:opacity-40'} transition-opacity text-4xl`}>+</span>}
      </span>
      {value && <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${getPlayerStyle(value, 'gradient')} opacity-20 blur-xl`} />}
    </button>
  );
};