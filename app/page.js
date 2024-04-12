import Create from "@/app/components/tournament/create";
import ViewAll from "@/app/components/tournament/viewAll";
import { prisma } from "@/prisma/seed";

const Home = async () => {
  const tournaments = await prisma.tournament.findMany();
  return (
    <div className="main flex flex-col space-y-4">
      <Create />
      <ViewAll tournaments={tournaments} />
    </div>
  );
};

export default Home;
