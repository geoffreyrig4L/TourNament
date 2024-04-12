"use server";

import { updateMatch, viewMatchByTournamentId } from "../../actions/match";

export const viewMatchMiddleware = async (id) => {
  return viewMatchByTournamentId(id);
};

export const updateMatchMiddleware = async (id, score, loser, winner) => {
  return updateMatch(id, score, loser, winner);
};
