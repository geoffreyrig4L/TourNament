import Create from "@/app/components/tournament/create";
import ViewAll from "../components/tournament/viewAll";

const TournamentsPage = () => {
  return (
    <div className="main flex flex-col space-y-4">
      <Create />
      <ViewAll />
    </div>
  );
};

export default TournamentsPage;
