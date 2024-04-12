"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createTournamentMiddleware } from "./middleware";

const Create = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const schema = z.object({
    sport: z.string(),
    name: z.string(),
  });

  const onSubmit = (data) => {
    schema.parse(data);
    try {
      createTournamentMiddleware(data);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
      <div className="flex flex-row items-center space-x-4">
        <label htmlFor="sport">
          Créer un <b>TourNament</b> de
        </label>
        <select className="input" {...register("sport")}>
          <option value="Rugby">Rugby</option>
          <option value="Football">Football</option>
          <option value="Basketball">Basketball</option>
        </select>
        {errors.sport && <span>{errors.sport.message}</span>}
      </div>
      <div className="flex flex-row items-center space-x-4">
        <label htmlFor="name">du nom de</label>
        <input className="input" {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

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
  );
};

export default Create;
