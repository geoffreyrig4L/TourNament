"use server";

import { viewTeam, viewAllTeams, createTeam } from "../../actions/team";

export const viewTeamMiddleware = async (id) => {
  return await viewTeam(id);
};

export const createTeamMiddleware = async (data) => {
  return await createTeam(data);
};

export const viewAllTeamsMiddleware = async () => {
  return await viewAllTeams();
};
