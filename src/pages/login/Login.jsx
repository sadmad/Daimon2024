import "./Login.css";
import Form from "./Form";
import { useState } from "react";

const Login = () => {
  //const isLogin = false;

  // const requestOptions = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json", Accept: "application/json" },
  //   body: JSON.stringify(item),
  // };

  // async function tockenHandler() {
  //   const responce = await fetch("http://localhost:5000/login", requestOptions);
  //   const data = await responce.json();
  // }
  //const [isLogedIn, setIsLogedIn] = useState(false);
  const [logInStatus, setlogInStatus] = useState("");

  const resultIllustrator = (resultOfLogin) => {
    const loginData = resultOfLogin;
    if (loginData.status === 200) {
      sessionStorage.setItem("tok", loginData.token);
      sessionStorage.setItem("login", true);
      //setIsLogedIn(true);
    } else if (loginData.status === 422) {
      setlogInStatus(loginData.message);
    }
    
  };

  return (
    <div className="Login mx-auto align-middle">
      <div className="p-3 mb-2 .bg-light ">
        <div className="logoContainer align-middle">
          <img
            alt="tu-logo"
            className="TUCLogo"
            src="https://www.presse.tu-clausthal.de/fileadmin/_processed_/c/3/csm_Logo_EN_gr%C3%BCn_404735dda6.jpg"
          />
        </div>
        {sessionStorage.getItem('login') ? (
          <div className="loged-in">Your log in was successful!</div>
        ) : logInStatus ? (
          <div className="formContainer">
            <Form onLogin={resultIllustrator} />
            <p>{logInStatus}</p>
          </div>
        ) : (
          <div className="formContainer">
            <Form onLogin={resultIllustrator} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
