"use client";
import { useState, useEffect } from "react";
import { viewAllTeamsMiddleware } from "./middleware";

const ViewAll = () => {
  const [teams, setTeams] = useState(null);

  useEffect(() => {
    viewAllTeamsMiddleware()
      .then((res) => {
        setTeams(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    teams !== null && (
      <div className="p-5">
        <h1 className="my-4 font-bold primary">Toutes les équipes</h1>
        {teams.map((team, indexTeam) => (
          <ul key={indexTeam} className="p-7 border-b-2 border-white/30">
            <h1 className="my-4 font-bold secondary">{team.name}</h1>
            {Object.keys(team).map((key, indexKey) => {
              console.log(key);
              return (
                <li key={indexKey}>
                  <b className="tertiary">{key} : </b>
                  {team[key].toString() ?? "N/A"}
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    )
  );
};

export default ViewAll;
