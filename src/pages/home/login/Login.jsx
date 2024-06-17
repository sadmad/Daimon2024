import "./Login.css";
import Logo from "../../../images/Logo-white.png";
import { useState } from "react";
import ReactLaoding from "react-loading";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [logInStatus, setlogInStatus] = useState("");

  //showing the result of the login or if it was successful rediredt to dashboard
  const resultIllustrator = (resultOfLogin) => {
    const loginData = resultOfLogin;
    if (loginData.status === 200) {
      sessionStorage.setItem("tok", loginData.token);
      sessionStorage.setItem("login", true);
      //setIsLogedIn(true);
    } else if (loginData.status === 422) {
      setlogInStatus(loginData.message);
    }
    //console.log(logInStatus);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      mode: "cors",
      body: formData,
    });

    result = await result.json();

    resultIllustrator(result);
    setIsLoading(false);
    //reload the page if the login is successful and reload the page to
    //see the dashboard
    window.location.reload();
  };
  return (
    <>
      <div className="container-login fixed-top top-50 start-50 translate-middle">
        <div className="fixed-top justify-top-right">
          <button
            type="button"
            className="btn-close btn-close-white d-flex"
            aria-label="Close"
            onClick={props.formDisplay}
          ></button>
        </div>
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <div className="form-card">
            <div className="card">
              <div className="card-head bg-white">
                <div className="d-flex align-items-center justify-content-center my-2">
                  <div className="login-logo">
                    <img
                      src="https://www.presse.tu-clausthal.de/fileadmin/_processed_/c/3/csm_Logo_EN_gr%C3%BCn_404735dda6.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {isLoading ? (
                <div className="load">
                  <ReactLaoding
                    className="react-loading"
                    type={"spinningBubbles"}
                    color={"gray"}
                  />
                  <br/>
                  <div className="block-text-load">
                    <span className="load-text">Login</span>
                  </div>
                </div>
              ) : (
                <div className="card-form">
                  <p className="text-center text-muted fs-08 mt-3">
                    Login With your registered Email
                  </p>
                  <div className="d-flex align-items-center input-field">
                    <span className="far fa-envelope text-muted"></span>
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      name="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="d-flex align-items-center input-field">
                    <span className="fas fa-key text-muted"></span>
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control"
                      name="pass"
                      required
                      onChange={(e) => setPass(e.target.value)}
                    />
                  </div>
                  <div className="d-flex align-items-center">
                    <input type="checkbox" name="remember" id="remember" />
                    <label className="text-muted ms-2" for="remember">
                      Remember me
                    </label>
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="btn btn-primary mt-3" onClick={submitHandler}>
                      Sign In
                    </div>
                  </div>
                </div>
              )}
            </div>
            {logInStatus ? (
              <div className="login-status">
                <span>{logInStatus}</span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
