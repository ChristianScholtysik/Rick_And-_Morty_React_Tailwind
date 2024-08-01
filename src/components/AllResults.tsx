import { useContext } from "react";
import SingleResult from "./SingleResult";
import { MortyContext } from "../Context/Context";

const AllResults = () => {
  const mortyContext = useContext(MortyContext);

  if (mortyContext?.characterData === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className="allResults">
      <div className="morty-list">
        {mortyContext?.characterData.map((item, index) => (
          <SingleResult key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default AllResults;
