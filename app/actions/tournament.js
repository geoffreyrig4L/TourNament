import { prisma } from "@/prisma/seed";

export const createTournament = async (data) => {
  console.log(data);
  const teams = await prisma.team.findMany({
    where: {
      sport: data.sport,
    },
  });
  const tournament = await prisma.tournament.create({
    data: {
      name: data.name,
      sport: data.sport,
      teams: {
        connect: teams.map((team) => ({ id: team.id })),
      },
      matches: {
        create: [
          {
            teams: {
              connect: [teams[0], teams[1]],
            },
          },
          {
            teams: {
              connect: [teams[2], teams[3]],
            },
          },
          {
            teams: {
              connect: [teams[4], teams[5]],
            },
          },
          {
            teams: {
              connect: [teams[6], teams[7]],
            },
          },
        ],
      },
    },
  });
};
