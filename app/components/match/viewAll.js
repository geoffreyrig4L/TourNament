"use client";

import View from "./view";

const ViewAll = ({ matches }) => {
  return (
    <div className="flex flex-col items-start space-y-16 px-16 py-8">
      {matches?.map((match, index) => (
        <div key={index}>
          <View match={match} index={index} />
        </div>
      ))}
    </div>
  );
};

export default ViewAll;
