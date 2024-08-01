import React, { useContext, useState } from "react";

import "./Search.css";
import { IResult } from "../Interface/RickAndMortyResponse";

import { MortyContext } from "../Context/Context";

import { Link } from "react-router-dom";
import AllResults from "./AllResults";

const Search = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [characterData, setCharacterData] = useState<IResult[] | null>(null);
  const mortyContext = useContext(MortyContext);

  const FetchUrl = () => {
    const BASE_URL = "https://rickandmortyapi.com/api/character";
    const CHARACTERNAME = `?name=${searchInput}`;
    const CHARAKTERSTATUS = `&status=${selectedStatus}`;
    const CHARACTERGENDER = `&gender=${selectedGender}`;
    const CHARACTERSEARCH_URL = `${BASE_URL}${CHARACTERNAME}${CHARAKTERSTATUS}${CHARACTERGENDER}`;
    return CHARACTERSEARCH_URL;
  };

  //   console.log(FetchUrl());

  const handleSearch = () => {
    fetch(FetchUrl())
      .then((res) => res.json())
      .then((data) => mortyContext?.setCharacterData(data.results))
      .catch((err) => console.error("Fetch Failed", err));
  };
  console.log("Character", characterData);

  return (
    <>
      <section className="gap-4 flex flex-col w-80 justify-center items-center text-stone-900">
        <label className="input input-bordered flex items-center gap-2 w-80 justify-center bg-stone-400 text-stone-900">
          <input
            type="text"
            className="grow text-stone-900 placeholder:text-stone-900"
            placeholder="Search"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSearchInput(event.target.value)
            }
            value={searchInput}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <select
          className="select select-bordered w-full max-w-xs bg-stone-400 text-stone-900"
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            setSelectedStatus(event.target.value)
          }
          value={selectedStatus}>
          <option value="" disabled selected>
            Filter by status
          </option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <select
          className="select select-bordered w-full max-w-xs bg-stone-400 text-stone-900"
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            setSelectedGender(event.target.value)
          }
          value={selectedGender}>
          <option value="" disabled selected>
            Filter by Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
        <Link to="/search">
          <button
            onClick={handleSearch}
            className="btn bg-sky-600 w-64 border-transparent text-white hover:bg-amber-600 hover:border-transparent">
            Search
          </button>
        </Link>
      </section>
    </>
  );
};

export default Search;
