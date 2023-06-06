import React, { useEffect, useState } from "react";
import logImg from "../../assets/login-rasm.png";
import "./register.scss";
import { Link, json, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState({});

  let api = `http://13.48.147.57/user/register`;

  const handleSignIn = (e) => {
    e.preventDefault();

    let { firstName, lastName, number, email, password } = e.target;

    fetch(api, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: firstName.value,
        last_name: lastName.value,
        phone: number.value,
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
  };

  return (
    <>
      <div className="login">
        <section>
          <div className="portion rasm">
            <img src={logImg} alt="login" />
          </div>

          <div className="portion form">
            <form onSubmit={handleSignIn}>
              <h1>Sign in</h1>
              <p>
                Already have an account? <Link to={"/login"}>Sign up</Link>
              </p>

              <input
                type="text"
                name="firstName"
                required
                placeholder="First name"
              />
              <input
                type="text"
                name="lastName"
                required
                placeholder="Last name"
              />
              <input
                type="tel"
                name="number"
                required
                min="9"
                placeholder="Phone"
              />
              <input type="email" name="email" required placeholder="Email" />
              <input
                type="password"
                name="password"
                required
                placeholder="Password"
              />

              <button type="submit">Next step</button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;
