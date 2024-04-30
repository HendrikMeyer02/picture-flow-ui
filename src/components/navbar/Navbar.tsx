import { Link } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import LogoutButton from "../../auth/LogoutButton.tsx";
import { Toggle } from "../misc/Toggle.tsx";
import "./navbar.css";

export default function Navbar() {
  // const toggle = document.getElementById("toggle")!.style.marginTop = "6rem";

  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  return (
    <div className="functionality-container">
      <Link to="/main">
        <div className="logo-container">
          <p className="logo-text">Picture&nbsp;Flow</p>
          <div className="logo-icon">
            <img src="../../img/logo-flipped.png" alt="loco loco logo" />
          </div>
        </div>
      </Link>

      <div className="searchbar-container">
        {/* <input
                    type="text"
                    className="searchbar-input"
                    placeholder="Suche..."
                /> */}
        <Link to="/search">
          <button className="searchbar-button">
            <img src="../../img/search_icon.png" alt="Search Icon" />
          </button>
        </Link>
        <Link to="/create_post">
          <div className="profile-container">
            <button className="profile-button">
              <img src="../../img/icon/add.png" alt="Profile Icon" />
            </button>
          </div>
        </Link>

        <Toggle
          isChecked={isDark}
          handleChange={() => setIsDark(!isDark)}
          styling={{ display: "block", margin: 0, position: "static" }}
          newID={""}
        ></Toggle>

        <Link to="/profile">
          <div className="profile-container">
            <button className="profile-button">
              <img
                id="profile-button_img"
                src="../../img/profile_icon.png"
                alt="Profile Icon"
              />
            </button>
          </div>
        </Link>
        <LogoutButton styling={{ width: 25 + "px" }}></LogoutButton>
      </div>
    </div>
  );
}
