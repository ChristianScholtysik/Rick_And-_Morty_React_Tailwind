import { useContext, useEffect } from "react";
import "./Loadingpage.css";
import { LoadingContext } from "../../Context/Context";

const LoadingPage = () => {
  const loadingContext = useContext(LoadingContext);

  useEffect(() => {
    setTimeout(() => {
      loadingContext?.setLoading(false);
    }, 2000);
  }, []);

  //   useEffect(() => {
  //     if (data) {
  //       movieContext?.setMovies(data);
  //     }
  //   }, []);

  return (
    <section className="loader">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default LoadingPage;
