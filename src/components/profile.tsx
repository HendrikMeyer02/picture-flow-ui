import { ChangeEvent, useEffect, useState } from "react";
import { useLocation } from "react-router";
import Cookie from "universal-cookie";
import "./LandingPage.css";
import ProfileIcon from "./ProfileIcon";
import "./authentication.css";
import Pictures from "./gallery/Pictures";
import "./profile.css";

function Profile() {
  const cookie = new Cookie();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const authorIdParam = queryParams.get("authorId");
  const authorname = queryParams.get("authorName");
  const [images, setImages] = useState([]);
  //Events
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const authorization = cookie.get("authorization");

  const [userData, setUserData] = useState({
    id: 0,
    username: "",
    email: "",
  });
  const authorId = authorIdParam ? parseInt(authorIdParam) : null;
  const isIDequalToLogin = authorId === userData.id || authorId === null;

  const emailInput = document.getElementById("email-input") as HTMLInputElement;
  const nameInput = document.getElementById("name-input") as HTMLInputElement;
  const passwordInput = document.getElementById(
    "password-input"
  ) as HTMLInputElement;

  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "Name",
    email: "Email",
    password: "Passwort",
  });

  useEffect(() => {
    if (authorname !== null) {
      setFormData({ ...formData, name: authorname });
    }
    const getNameEmailID = () => {
      return fetch("http://localhost:8000/api/getOwnUser", {
        method: "GET",
        headers: {
          auth: authorization,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Fehler beim Abrufen der Daten");
          }
          return response.json();
        })
        .then((data) => {
          setUserData(data);
          return data;
        });
    };

    const setNameEmail = (data) => {
      setFormData({
        name: data?.username || "Name",
        email: data?.email || "Email",
        password: "Dein Passwort",
      });
    };

    getNameEmailID().then((data) => {
      if (isIDequalToLogin) {
        setNameEmail(data);
      }
      if (isIDequalToLogin) {
        getPictures(data.id);
      } else {
        getPictures(authorId);
      }
    });
    const profilePicture = fetch(
      `http://localhost:8000/api/pictures/profilepicture/${authorId}`,
      {
        method: "GET",
        headers: {
          auth: authorization,
        },
      }
    ).then((response) => {
      if (!response.ok) {
        throw new Error("Fehler beim Abrufen der Daten");
      }
      return response.json();
    });
    console.log(profilePicture);
  }, [authorization, isIDequalToLogin, authorId]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setIsButtonVisible(value !== "" && isIDequalToLogin);
  };

  const save = async () => {
    if (emailInput && nameInput && passwordInput) {
      const emailValue = emailInput.value;
      const nameValue = nameInput.value;
      const passwordValue = passwordInput.value;

      const requestBody = {};

      const emailErr = document.getElementById("email-err");
      const save = document.getElementById("save");

      const emailInputField = document.getElementById(
        "email-input"
      ) as HTMLInputElement;

      const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      console.log(emailInputField.value);

      if (
        emailReg.test(emailInputField!.value) ||
        emailInputField.value == ""
      ) {
        emailErr!.style.display = "none";
        if (emailValue !== "") {
          requestBody.email = emailValue;
        }

        if (nameValue !== "") {
          requestBody.username = nameValue;
        }

        if (passwordValue !== "") {
          requestBody.password = passwordValue;
        }
        if (Object.keys(requestBody).length > 0) {
          const token = await fetch("http://localhost:8000/api/updateProfile", {
            method: "POST",
            headers: {
              auth: authorization,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
          });
          console.log(token);
          const authtoken = await token.json();
          console.log(authtoken);
          newtoken(authtoken.AuthToken);
        } else {
          console.log("Mindestens ein Feld muss ausgefüllt sein.");
        }
        save!.style.backgroundColor = "lightgreen";
      } else {
        emailErr!.style.display = "block";
        save!.style.backgroundColor = "darkred";
      }
    }
  };

  const newtoken = (token) => {
    const today = new Date();
    cookie.set("authorization", token, {
      expires: new Date(today.getTime() + 3600000 * 24 * 14),
    });
  };

  const getPictures = async (id: number) => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/pictures/getpicturesofprofile/" + id,
        {
          method: "GET",
          headers: {
            auth: authorization,
          },
        }
      );
      const jsonResult = await response.json();
      console.log(await jsonResult.pictures);

      setImages(jsonResult.pictures);
    } catch (error) {
      console.error("Error fetching pictures:", error);
    }
  };

  return (
    <>
      <div className="top">
        <div className="row">
          <div className="col-md-6 container d-flex justify-content-center align-items-center">
            <ProfileIcon></ProfileIcon>
          </div>
        </div>
        <div className="row">
          <div className="placeholder-big"></div>
        </div>
        <div className="col-md-6 container glass" id="profile-form">
          <div className="mb-3">
            <div className="placeholder-small"></div>
            <label htmlFor="name-input" className="form-label">
              Name
            </label>
            {isIDequalToLogin && (
              <input
                type="text"
                className="form-control"
                id="name-input"
                placeholder={formData.name}
                onChange={handleInputChange}
              ></input>
            )}
            {!isIDequalToLogin && <h3>{formData.name}</h3>}
          </div>
          {isIDequalToLogin && (
            <>
              <div className="mb-3">
                <label htmlFor="email-input" className="form-label">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="email-input"
                  placeholder={formData.email}
                  onChange={handleInputChange}
                ></input>
                <p className="error" id="email-err" style={{ color: "red" }}>
                  Ungültige E-Mail Adresse.
                </p>
              </div>
              <div className="mb-3">
                <label htmlFor="password-input" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password-input"
                  placeholder={formData.password}
                  onChange={handleInputChange}
                ></input>
              </div>
            </>
          )}

          {isButtonVisible && (
            <div className="mb-3">
              <div
                className="d-flex justify-content-center align-items-center"
                id="save_button"
              >
                <button className="wave-button" id="save" onClick={save}>
                  speichern
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="placeholder-big"></div>
      <div className="profile-picture-gallery picture-gallery">
        <Pictures pictures={images}></Pictures>
      </div>
    </>
  );
}

export default Profile;
