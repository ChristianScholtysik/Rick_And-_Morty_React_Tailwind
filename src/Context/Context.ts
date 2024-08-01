import { createContext } from "react";
import { IResult } from "../Interface/RickAndMortyResponse";

interface ILoading {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoadingContext = createContext<ILoading | null>(null);

interface IMortyContext {
  characterData: IResult[] | null;
  setCharacterData: React.Dispatch<React.SetStateAction<IResult[] | null>>;
}

export const MortyContext = createContext<IMortyContext | null>(null);
