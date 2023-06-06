import React from "react";
import logImg from "../../assets/login-rasm.png";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  function handleSignUp(e) {
    e.preventDefault();

    let { email, password } = e.target;

    fetch("http://13.48.147.57/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token), (window.location = "/");
      });

    // let token = "qwerty";

    // localStorage.setItem("token_yes", token);
    // navigate("/");
  }

  return (
    <>
      <div className="login">
        <section>
          <div className="portion rasm">
            <img src={logImg} alt="login" />
          </div>

          <div className="portion form">
            <form onSubmit={handleSignUp}>
              <h1>Sign up</h1>
              <p>
                Do not have an account? <Link to={"/register"}>Sign In</Link>
              </p>

              <input type="email" name="email" placeholder="Email" />
              <input type="password" name="password" placeholder="Password" />

              <button type="submit">Next step</button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
