"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createTeamMiddleware } from "./middleware";

const Create = () => {
  const [team, setTeam] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const schema = z.object({
    name: z.string(),
    sport: z.string(),
  });

  const onSubmit = (data) => {
    schema.parse(data);
    createTeamMiddleware(data)
      .then((res) => setTeam(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1 className="my-8 font-bold">Créer une équipe</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <label htmlFor="sport">Sport</label>
        <select className="input" {...register("sport")}>
          <option value="Rugby">Rugby</option>
          <option value="Football">Football</option>
          <option value="Basketball">Basketball</option>
        </select>
        {errors.sport && <span>{errors.sport.message}</span>}

        <label htmlFor="name">Nom</label>
        <input className="input" {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}

        <button
          type="submit"
          style={{
            boxShadow:
              "inset 0 2px 4px 0 rgba(2, 6, 23, 0.3), inset 0 -2px 4px 0 rgba(203, 213, 225)",
          }}
          className="submitButton"
        >
          Créer
        </button>
      </form>
      {team !== null && (
        <div className="p-5">
          <h1 className="my-4 font-bold primary">Équipe créée</h1>
          <ul>
            {Object.keys(team).map((keys, index) => {
              return (
                <li key={index}>
                  <b className="tertiary">{keys} : </b>
                  {team[keys].toString() ?? "N/A"}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Create;
