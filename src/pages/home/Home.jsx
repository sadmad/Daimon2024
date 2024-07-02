import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Slide from "./components/slides/Slide";
import TopBar from "./components/topbar/TopBar";
import Blocks from "./components/fist-containers/Twoblock";
import SecBlocks from "./components/3block/secBlock";
import DaimonPage from "./pages/daimon/DaimonPage";
import Footer from "./components/footer/Footer";
import "./Home.css";
import Login from "./components/login/Login";
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
                  {showLogin && <Login formDisplay={loginFormIlustrator} />}
                </>
              }
            />
            <Route path="/DaimonPage" element={<DaimonPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default Home;
