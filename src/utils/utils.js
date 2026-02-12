import {PLAYER_STYLES} from "../constants/constants.js";

export function getPlayerStyle(player, type = "text") {
  return PLAYER_STYLES[player]?.[type] || "";
}

