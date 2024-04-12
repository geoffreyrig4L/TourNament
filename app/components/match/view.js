import { updateMatchMiddleware } from "./middleware";
import { useState } from "react";

const View = ({ match, index }) => {
  const [matchState, setMatchState] = useState(match);

  const finishMatch = async (e) => {
    const scoreTeam1 = Math.ceil(Math.random(0, 7) * 7);
    const scoreTeam2 = Math.ceil(Math.random(0, 7) * 7);
    const score = scoreTeam1 + " - " + scoreTeam2;
    const loser =
      scoreTeam1 > scoreTeam2 ? match.teams[1].name : match.teams[0].name;
    const winner =
      scoreTeam1 > scoreTeam2 ? match.teams[0].name : match.teams[1].name;
    e.target.classList.add("opacity-30", "pointer-events-none");
    updateMatchMiddleware(match.id, score, loser, winner)
      .then((res) => setMatchState(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="flex flex-row items-center space-x-6 bg-white/10 p-6 rounded-md ">
        <b className="primary opacity-50">Match n°{index + 1}</b>
        <ul>
          {matchState?.teams?.map((team) => (
            <li key={team.id}>{team.name}</li>
          ))}
        </ul>
        <button
          onClick={(e) => {
            finishMatch(e);
          }}
          style={{
            boxShadow:
              "inset 0 2px 4px 0 rgba(2, 6, 23, 0.3), inset 0 -2px 4px 0 rgba(203, 213, 225)",
          }}
          className={`submitButton ${
            matchState?.winner !== null && "opacity-30 pointer-events-none"
          }`}
        >
          Commencer
        </button>
      </div>
      {matchState?.winner !== null && (
        <ul className="my-2">
          <li>
            <b className="tertiary">Score : </b>
            {matchState.score ?? "N/A"}
          </li>
          <li className="tertiary">
            <b>Victoire pour {matchState.winner ?? "N/A"}</b>
          </li>
        </ul>
      )}
    </div>
  );
};

export default View;
