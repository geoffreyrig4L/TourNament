import { viewMatchMiddleware } from "../match/middleware";
import ViewAll from "../match/viewAll";

const View = async ({ tournament }) => {
  const matches = await viewMatchMiddleware(tournament.id);

  return (
    <div className="flex flex-col space-y-4 items-center">
      <h1 className="text-3xl font-bold secondary">{tournament.name}</h1>
      <h2 className="text-xl tertiary">Tournoi de {tournament.sport}</h2>
      <div className="relative">
        <h3>{matches?.length * 2} Participants</h3>
      </div>
      <ViewAll matches={matches} />
    </div>
  );
};

export default View;
