import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import { IResult } from "../Interface/RickAndMortyResponse";

const SingleResultPage = () => {
  const [singleResult, setSingleResult] = useState<IResult | null>(null);

  const { id } = useParams<{ id?: string }>();
  console.log(id);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleResult(data))
      .catch((err) => console.error("Fehler Detail page", err));
  }, [id]);

  console.log(singleResult);

  return (
    <>
      <Link to="/">
        <div className="hero hero-detail min-h-screen ">
          <section
            className=" card-wrapper hero-content bg-stone-900 hero-overlay bg-opacity-50 min-w-full
    ">
            <div className="card bg-sky-400 w-96 shadow-xl text-white">
              <figure>
                <img
                  src={singleResult?.image}
                  alt={singleResult?.name}
                  className="image mt-4 rounded-lg max-w-4xl"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {singleResult?.name.toUpperCase()}
                  <div className="badge badge-secondary">
                    {singleResult?.gender}
                  </div>
                </h2>
                <p> Location: {singleResult?.location.name}</p>{" "}
                <p>Origin: {singleResult?.origin.name} </p>
                <p className="text-black">
                  {/* Base Experience: {singleResult?..base_experience} */}
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline badge-primary badge-lg">
                    hello
                  </div>
                  <div
                    className="badge badge-outline badge-secondary badge-lg tooltip"
                    data-tip={singleResult?.episode}>
                    Products
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Link>
    </>
  );
};

export default SingleResultPage;
