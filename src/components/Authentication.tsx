import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import "./authentication.css";
import Footer from "./footer";
import Header from "./misc/Header";

export default function Authentication() {
  //Global constants
  const [loginState, setLogin] = useState(true);
  const [buttonText, setButtonText] = useState("Login");
  const [emailErrorMessage, setEmailErrorMessage] = useState(
    "Invalid email address."
  );
  const navigate = useNavigate();
  const cookies = new Cookies();
  const { t } = useTranslation();

  //Login Validation

  //flips elements for registration
  function flipElements() {
    const switchText = document.getElementById("signupTrigger");
    const gridItems = document.querySelectorAll(".grid-item");
    const usernameInput = document.getElementById(
      "username-input"
    ) as HTMLInputElement;
    const forgotPassword = document.getElementById(
      "forgot-password"
    ) as HTMLInputElement;
    const usernameErr = document.getElementById("username-err");
    usernameErr!.style.display = "none";
    const emailErr = document.getElementById("email-err");
    emailErr!.style.display = "none";
    usernameInput.value = "";

    if (loginState == true) {
      //Wenn man zur Registrierung geht
      forgotPassword.style.display = "none";
      setButtonText("SignUp");
      switchText!.innerHTML = "Existing account";

      gridItems.forEach((item) => {
        item.classList.toggle("hidden");
      });

      gridItems.forEach((item) => {
        item.classList.toggle("unhidden");
      });

      setLogin(false);
    } else {
      //Wenn man zum Login geht

      setButtonText("Login");
      switchText!.innerHTML = "No account";
      forgotPassword.style.display = "none";
      forgotPassword.innerHTML = "Wrong login data!";

      gridItems.forEach((item) => {
        item.classList.toggle("hidden");
      });

      gridItems.forEach((item) => {
        item.classList.toggle("unhidden");
      });

      setLogin(true);
    }
  }

  //Events
  const [values, setValues] = useState({
    email: "",
    password: "",
    userName: "",
  });

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    const forgotPassword = document.getElementById(
      "forgot-password"
    ) as HTMLInputElement;
    e.preventDefault();

    if (loginState == true) {
      const token = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          email: values["email"],
          password: values["password"],
        }),
      });
      const authToken = await token.json();
      if (token.statusText == "OK") {
        login(authToken.AuthToken);
        navigate("/main");
      } else {
        forgotPassword.style.display = "block";
      }
    } else {
      const token = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          email: values["email"],
          password: values["password"],
          username: values["userName"],
        }),
      });
      const responseBody = await token.text();
      if (token.ok) {
        const authToken = JSON.parse(responseBody);
        login(authToken.AuthToken);
        navigate("/main");
      } else {
        console.log(responseBody);
        if (responseBody === '{"detail":"Username already exists"}') {
          const usernameErr = document.getElementById("username-err");
          usernameErr!.style.display = "block";
        } else if (responseBody === '{"detail":"Email already exists"}') {
          const emailErr = document.getElementById("email-err");
          setEmailErrorMessage("Email already exists");
          emailErr!.style.display = "block";
          setEmailErrorMessage("Ungültige E-Mail Adresse.");
        }
      }
    }
  };

  //Überprüft die Eingaben
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailErr = document.getElementById("email-err");

    setValues({ ...values, [e.target.name]: e.target.value });

    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (e.target.name == "email") {
      if (emailReg.test(e.target.value)) {
        emailErr!.style.display = "none";
      } else {
        emailErr!.style.display = "block";
      }
    }
  };

  const login = (token: unknown) => {
    const today = new Date();

    cookies.set("authorization", token, {
      expires: new Date(today.getTime() + 3600000 * 24 * 14),
    });
  };

  return (
    <>
      <div className="authentication-container">
        <form
          className="glass"
          id="authentication-form"
          onSubmit={handleSubmit}
        >
          <div id="header">
            <div id="authentication-back-arrow-container">
              <Link id="authentication-back-arrow-link" to="/">
                <img
                  id="authentication-back-arrow"
                  src="./img/icon/back-arrow.png"
                ></img>
              </Link>
            </div>

            <Header></Header>
            <img id="authentication-header-image" src="img/logo.png"></img>
          </div>
          <div id="error"></div>

          <div className="form grid-item hidden" id="username-form">
            <input
              id="username-input"
              onChange={onChange}
              value={values["userName"]}
              type="text"
              name="userName"
              autoComplete="off"
            />
            <label htmlFor="username" className="label-name">
              <span className="content-name">{t("userName")}</span>
            </label>
          </div>
          <p className="error" id="username-err">
            {t("userNameTaken")}
          </p>

          <div className="form" id="email-form">
            <input
              onChange={onChange}
              value={values["email"]}
              id="email-input"
              type="text"
              name="email"
              autoComplete="off"
              required
            />
            <label htmlFor="email" className="label-name">
              <span className="content-name">{t("email")}</span>
            </label>
          </div>
          <p className="error" id="email-err">
            {emailErrorMessage}
          </p>

          <div className="form" id="password-form">
            <input
              onChange={onChange}
              value={values["password"]}
              id="password-input"
              type="password"
              name="password"
              autoComplete="off"
              required
            />
            <label htmlFor="password" className="label-name">
              <span className="content-name">{t("password")}</span>
            </label>
          </div>
          {loginState && (
            <p className="error" id="password-err">
              {t("authenticationWrongLoginData")}
            </p>
          )}

          <p id="forgot-password">{t("authenticationWrongLoginData")}</p>
          <input
            type="submit"
            autoComplete="off"
            id="authentication-button"
            value={buttonText}
            className="square-button"
          ></input>
          <p id="signupTrigger" onClick={flipElements}>
            {t("authenticationNewAccount")}
          </p>
        </form>
        <Footer />
      </div>
    </>
  );
}
