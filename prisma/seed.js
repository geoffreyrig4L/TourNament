import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

async function main() {
  const teams = [
    {
      name: "Équipe A",
      victory: 0,
      defeat: 0,
      total_matches: 0,
      sport: "Football",
    },
    {
      name: "Équipe B",
      victory: 0,
      defeat: 0,
      total_matches: 0,
      sport: "Football",
    },
    {
      name: "Équipe C",
      victory: 0,
      defeat: 0,
      total_matches: 0,
      sport: "Football",
    },
    {
      name: "Équipe D",
      victory: 0,
      defeat: 0,
      total_matches: 0,
      sport: "Football",
    },
    {
      name: "Équipe E",
      victory: 0,
      defeat: 0,
      total_matches: 0,
      sport: "Football",
    },
    {
      name: "Équipe F",
      victory: 0,
      defeat: 0,
      total_matches: 0,
      sport: "Football",
    },
    {
      name: "Équipe G",
      victory: 0,
      defeat: 0,
      total_matches: 0,
      sport: "Football",
    },
    {
      name: "Équipe H",
      victory: 0,
      defeat: 0,
      total_matches: 0,
      sport: "Football",
    },
    {
      name: "Équipe 1",
      victory: 0,
      defeat: 0,
      total_matches: 0,
      sport: "Basketball",
    },
    {
      name: "Équipe 2",
      victory: 0,
      defeat: 0,
      total_matches: 0,
      sport: "Basketball",
    },
    {
      name: "Équipe 3",
      victory: 0,
      defeat: 0,
      total_matches: 0,
      sport: "Basketball",
    },
    {
      name: "Équipe 4",
      victory: 0,
      defeat: 0,
      total_matches: 0,
      sport: "Basketball",
    },
    {
      name: "Équipe 5",
      victory: 0,
      defeat: 0,
      total_matches: 0,
      sport: "Basketball",
    },
    {
      name: "Équipe 6",
      victory: 0,
      defeat: 0,
      total_matches: 0,
      sport: "Basketball",
    },
    {
      name: "Équipe 7",
      victory: 0,
      defeat: 0,
      total_matches: 0,
      sport: "Basketball",
    },
    {
      name: "Équipe 8",
      victory: 0,
      defeat: 0,
      total_matches: 0,
      sport: "Basketball",
    },
    {
      name: "Équipe I",
      victory: 0,
      defeat: 0,
      total_matches: 0,
      sport: "Rugby",
    },
    {
      name: "Équipe II",
      victory: 0,
      defeat: 0,
      total_matches: 0,
      sport: "Rugby",
    },
    {
      name: "Équipe III",
      victory: 0,
      defeat: 0,
      total_matches: 0,
      sport: "Rugby",
    },
    {
      name: "Équipe IV",
      victory: 0,
      defeat: 0,
      total_matches: 0,
      sport: "Rugby",
    },
    {
      name: "Équipe V",
      victory: 0,
      defeat: 0,
      total_matches: 0,
      sport: "Rugby",
    },
    {
      name: "Équipe VI",
      victory: 0,
      defeat: 0,
      total_matches: 0,
      sport: "Rugby",
    },
    {
      name: "Équipe VII",
      victory: 0,
      defeat: 0,
      total_matches: 0,
      sport: "Rugby",
    },
    {
      name: "Équipe VIII",
      victory: 0,
      defeat: 0,
      total_matches: 0,
      sport: "Rugby",
    },
  ];
  let cpt = 1;
  for (const team of teams) {
    const { name, sport } = team;
    try {
      await prisma.team.upsert({
        update: {},
        where: { id: cpt },
        create: {
          name,
          sport,
        },
      });
      cpt++;
    } catch (error) {
      console.error(`Erreur lors de la création de l'équipe ${name} :`, error);
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
