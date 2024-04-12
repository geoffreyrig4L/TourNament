import Create from "@/app/components/tournament/create";
import ViewAll from "@/app/components/tournament/viewAll";

const Home = () => {
  return (
    <div className="main flex flex-col space-y-4">
      <Create />
      <ViewAll />
    </div>
  );
};

export default Home;
