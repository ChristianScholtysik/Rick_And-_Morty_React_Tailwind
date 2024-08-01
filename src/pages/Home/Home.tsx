import Search from "../../components/Search";
import "./Home.css";
import "../../../public/background.jpg";
import "/public/background.jpg";
const Home = () => {
  return (
    <>
      <section className="home-wrapper">
        <div className="Home bg-center bg-no-repeat bg-cover ">
          <div className="hero  min-h-screen flex justify-start p-8">
            <div className="hero-content flex-col basis-1/4 flex-row-reverse glass rounded-lg">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold text-cutout text-center ">
                  Rick and Morty API
                </h1>
                <p className="py-6 text-amber-900 ">
                  Fetching from the Rick and Morty API. The Rick and Morty API
                  is a REST(ish) and GraphQL API based on the television show
                  Rick and Morty. You will have access to about hundreds of
                  characters, images, locations and episodes. The Rick and Morty
                  API is filled with canonical information as seen on the TV
                  show.
                </p>
              </div>
              <Search />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
