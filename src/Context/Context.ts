import { createContext } from "react";
import { IInfo, IResult } from "../Interface/RickAndMortyResponse";

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

interface IPageContext {
  page: IInfo | null;
  setPage: React.Dispatch<React.SetStateAction<IInfo | null>>;
}

export const PageContext = createContext<IPageContext | null>(null);
