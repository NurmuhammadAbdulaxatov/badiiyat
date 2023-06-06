import React, { useEffect } from "react";
import logImg from "../../assets/login-rasm.png";
import "./login.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";


const Login = () => {
  const navigate = useNavigate();

  // let location = useLocation();

  // console.log(location.pathname);

  // if(location.pathname == "/login") {

  // }

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
        if (data.message) {
          toast(data.message, { type: "error" });
        } else {
          localStorage.setItem("token", data.token);
          window.location = "/user-home";
        }
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
