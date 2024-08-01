import { useContext, useState } from "react";
import SingleResult from "./SingleResult";
import { MortyContext } from "../Context/Context";

const AllResults = () => {
  const mortyContext = useContext(MortyContext);
  const [showResults, setShowResults] = useState(5);

  if (mortyContext?.characterData === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className="allResults ">
      <div className="morty-list">
        {mortyContext?.characterData
          .slice(0, showResults)
          .map((item, index) => (
            <SingleResult key={index} item={item} />
          ))}
      </div>
      <div className="justify-end">
        <button
          className="btn  btn-secondary btn-lg mt-2 "
          onClick={() => setShowResults(showResults + 5)}>
          Show More Characters
        </button>
      </div>
    </section>
  );
};

export default AllResults;
