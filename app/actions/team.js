import { prisma } from "@/prisma/seed";

export const viewTeam = async (id) => {
  return await prisma.team.findUnique({
    where: {
      id,
    },
  });
};

export const viewAllTeams = async () => {
  const teams = await prisma.team.findMany();
  return teams;
};

export const createTeam = async (data) => {
  const team = await prisma.team.create({
    data: {
      name: data.name,
      sport: data.sport,
    },
  });
  return team;
};
