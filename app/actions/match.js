import { prisma } from "@/prisma/seed";

export const viewMatchByTournamentId = async (id) => {
  return await prisma.match.findMany({
    where: {
      tournament: { id: id },
    },
    include: {
      teams: true,
      tournament: true,
    },
  });
};

export const updateMatch = async (id, score, loser, winner) => {
  return await prisma.match.update({
    data: {
      loser: loser,
      winner: winner,
      score: score,
    },
    where: {
      id: id,
    },
    include: {
      teams: true,
      tournament: true,
    },
  });
};
