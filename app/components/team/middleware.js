"use server";

import {
  viewTeam,
  viewAllTeams,
  createTeam,
  updateScoreTeam,
} from "../../actions/team";

export const viewTeamMiddleware = async (id) => {
  return await viewTeam(id);
};

export const createTeamMiddleware = async (data) => {
  return await createTeam(data);
};

export const viewAllTeamsMiddleware = async () => {
  return await viewAllTeams();
};

export const updateScoreTeamMiddleware = async (id, victory) => {
  return await updateScoreTeam(id, victory);
};
