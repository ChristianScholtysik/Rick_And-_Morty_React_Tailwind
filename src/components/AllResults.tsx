import { useContext, useEffect, useState } from "react";
import SingleResult from "./SingleResult";
import { MortyContext, PageContext } from "../Context/Context";

const AllResults = () => {
  const mortyContext = useContext(MortyContext);
  const pageContext = useContext(PageContext);
  const [showResults, setShowResults] = useState(20);

  const fetchNewPageData = () => {
    useEffect(() => {
      fetch(
        `https://rickandmortyapi.com/api/character/${pageContext?.page?.next}`
      )
        .then((res) => res.json())
        .then((data) => mortyContext?.setCharacterData(data))
        .catch((err) => console.error("Fehler Detail page", err));
    }, []);
  };

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
          onClick={fetchNewPageData()}>
          Show More Characters
        </button>
      </div>
    </section>
  );
};

export default AllResults;
