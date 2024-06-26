"use client";
import Link from "next/link";

const ViewAll = ({ tournaments }) => {
  return tournaments?.length > 0 ? (
    <div className="pb-24">
      <h1 className="my-8 font-bold opacity-40 text-center">
        Liste des tournois
      </h1>
      <div className="flex flex-col-reverse">
        {tournaments.map((tournament, indexTournament) => (
          <div key={indexTournament} className="p-7 border-b-2 border-white/30">
            <Link href={`tournaments/${tournament.id}`}>
              <h1 className="font-bold text-xl secondary link my-4">
                {tournament.name}
              </h1>
            </Link>
            <ul className="pl-6">
              {Object.keys(tournament).map((keys, indexKey) => {
                return (
                  <li key={indexKey}>
                    <b className="tertiary">{keys} : </b>
                    {tournament[keys].toString() ?? "N/A"}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div>
      <h1 className="my-8 font-bold opacity-60 text-center">
        Liste des tournois
      </h1>
      <h1 className="my-8 font-bold opacity-50 text-center">
        - Aucun tournoi-{" "}
      </h1>
    </div>
  );
};

export default ViewAll;
