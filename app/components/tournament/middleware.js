"use server";

import { viewAllTournaments, createTournament } from "../../actions/tournament";

export const createTournamentMiddleware = async (data) => {
  await createTournament(data);
};

export const viewAllTournamentsMiddleware = async () => {
  return await viewAllTournaments();
};
