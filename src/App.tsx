import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { LoadingContext, MortyContext, PageContext } from "./Context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage/Loadingpage";
import ResultPage from "./pages/ResultPage/ResultPage";
import SingleResultPage from "./pages/SingleResultPage";
import { IInfo, IResult } from "./Interface/RickAndMortyResponse";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [characterData, setCharacterData] = useState<IResult[] | null>(null);
  const [page, setPage] = useState<IInfo | null>(null);
  return (
    <>
      <MortyContext.Provider value={{ characterData, setCharacterData }}>
        <LoadingContext.Provider value={{ loading, setLoading }}>
          <PageContext.Provider value={{ page, setPage }}>
            {loading ? (
              <LoadingPage />
            ) : (
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />

                  <Route path="/search" element={<ResultPage />} />
                  <Route path="/search/:id" element={<SingleResultPage />} />
                </Routes>
              </BrowserRouter>
            )}
          </PageContext.Provider>
        </LoadingContext.Provider>
      </MortyContext.Provider>
    </>
  );
}

export default App;
