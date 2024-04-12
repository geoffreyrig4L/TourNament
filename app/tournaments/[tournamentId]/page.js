import { prisma } from "@/prisma/seed";
import View from "@/app/components/tournament/view";

async function TournamentPage({ params }) {
  const { tournamentId } = params;

  const tournament = await prisma.tournament.findUnique({
    where: {
      id: +tournamentId,
    },
    include: {
      teams: true,
      matches: true,
    },
  });

  return (
    <div className="main">
      <View tournament={tournament} />
    </div>
  );
}

export default TournamentPage;
