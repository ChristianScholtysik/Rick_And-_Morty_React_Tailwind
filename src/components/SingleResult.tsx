import { useEffect, useState } from "react";
import { IResult } from "../Interface/RickAndMortyResponse";
import { Link } from "react-router-dom";

interface ISingleResultProps {
  item: IResult;
}

const SingleResult: React.FC<ISingleResultProps> = (props) => {
  console.log(props.item.url);
  const [singleResult, setSingleResult] = useState<IResult | null>(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${props.item.id}`)
      .then((res) => res.json())
      .then((data) => setSingleResult(data))
      .catch((err) => console.error("Error by fetching data", err));
  }, []);

  console.log(singleResult);

  return (
    <>
      <Link to={`/search/${props.item.id}`}>
        <div className="card card-compact glass w-96 shadow-xl">
          <figure>
            <img
              src={props.item.image}
              alt={props.item.name}
              className="rounded-lg"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{props.item.name}</h2>
            <p>{props.item.gender}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">{props.item.name}</button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SingleResult;
