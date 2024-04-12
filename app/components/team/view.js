"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { viewTeamMiddleware as viewTeamMiddleware } from "./middleware";

const View = () => {
  const [team, setTeam] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const schema = z.object({
    id: z.string().nonempty("Veuillez entrer un identifiant"),
  });

  const onSubmit = (data) => {
    schema.parse(data);
    viewTeamMiddleware(+data.id)
      .then((res) => setTeam(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="my-8 font-bold ">Rechercher une équipe</h1>
      <form
        action={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 w-[350px]"
      >
        <label htmlFor="id">Identifiant</label>
        <input className="input" {...register("id")} />
        {errors.id && <span>{errors.id.message}</span>}
        <button
          type="submit"
          style={{
            boxShadow:
              "inset 0 2px 4px 0 rgba(2, 6, 23, 0.3), inset 0 -2px 4px 0 rgba(203, 213, 225)",
          }}
          className="submitButton"
        >
          Rechercher
        </button>
      </form>
      {team !== null && (
        <ul className="p-7">
          {Object.keys(team).map((keys, index) => {
            return (
              <li key={index}>
                <b className="tertiary">{keys} : </b>
                {team[keys].toString() ?? "N/A"}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default View;
