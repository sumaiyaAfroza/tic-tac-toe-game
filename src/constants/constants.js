export const PLAYER_X = "X";
export const PLAYER_O = "O";
export const EMPTY_BOARD = Array(9).fill(null);

export const WINNING_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];



export const PLAYER_STYLES = {
  [PLAYER_X]: {
    gradient: "from-fuchsia-500 via-pink-500 to-rose-500",
    text: "text-fuchsia-400",
    glow: "shadow-[0_0_30px_rgba(217,70,239,0.5)]",
    ring: "ring-fuchsia-400/50",
  },
  [PLAYER_O]: {
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    text: "text-cyan-400",
    glow: "shadow-[0_0_30px_rgba(34,211,238,0.5)]",
    ring: "ring-cyan-400/50",
  },
};