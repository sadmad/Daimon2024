import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Slide from "./slides/Slide";
import TopBar from "./topbar/TopBar";
import Blocks from "./fist-containers/Twoblock";
import SecBlocks from "./3block/secBlock";
import DaimonPage from "./DaimonPage";
import "./Home.css";
import Login from "./login/Login";
import { useState, useEffect } from "react";

const Home = () => {
  //to change the stateof the login form
  const [showLogin, setDisplayForm] = useState(false);

  //the function help close button on the login container close it
  const loginFormIlustrator = (formDisplay) => {
    setDisplayForm((current) => !current);
  };

  //the login form with popup after 6 seconds

  useEffect(() => {
    setTimeout(() => {
      setDisplayForm(true);
    }, 6000);
  }, []);

  return (
    <>
      <Router>
        <main className="p-3 mb-2 bg-dark text-white w-100 p-3 mw-100">
          <TopBar formDisplay={loginFormIlustrator} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Slide />
                  <Blocks />
                  <SecBlocks />
                </>
              }
            />
            <Route path="/DaimonPage" element={<DaimonPage />} />
          </Routes>
          {showLogin && <Login formDisplay={loginFormIlustrator} />}
        </main>
        <footer className="pt-3 mt-4 text-muted border-top">
          &copy; TU Cluasthal 2022
        </footer>
      </Router>
    </>
  );
};

export default Home;
