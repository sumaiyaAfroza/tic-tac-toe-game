import {PLAYER_STYLES, WINNING_LINES} from "../constants/constants.js";

export function getPlayerStyle(player, type = "text") {
  return PLAYER_STYLES[player]?.[type] || "";
}

export function calculateWinner (squares) {
  for(const [a,b,c] of WINNING_LINES)  {
    if( squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null;
}

export const isBoardFull = (squares) => {
  return squares.every(square => square !== null)
}

// খালি ঘর গুলো বের করো
function getAvailableMoves(squares) {
  return squares.map((squares, index) => squares === null ? index : null)
    .filter(index => index !== null)
}


