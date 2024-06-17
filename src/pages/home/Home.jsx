
import Slide from "./slides/Slide";
import TopBar from "./topbar/TopBar";
import Blocks from "./fist-containers/Twoblock";
import SecBlocks from "./3block/secBlock";
import "./Home.css";
import Login from "./login/Login";
import { useState } from "react";
import { useEffect } from "react";

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
      <main className="p-3 mb-2 bg-dark text-white w-100 p-3 mw-100">
        <TopBar formDisplay={loginFormIlustrator} />
        <Slide />
        <Blocks />
        <SecBlocks />
        {/* formDisplay pass the loginFormIlustrator function to the cilde
        set the pupup */}

        {showLogin ? <Login formDisplay={loginFormIlustrator}></Login> : ""}
      </main>
      
      <footer className="pt-3 mt-4 text-muted border-top">
        &copy; TU Cluasthal 2022
      </footer>
    </>
  );
};

export default Home;
