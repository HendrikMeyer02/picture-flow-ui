import { Link } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import LogoutButton from "../../auth/LogoutButton.tsx";
import { Toggle } from "../misc/Toggle.tsx";
import "./MobileNavbar.css";

export default function MobileNavbar() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  return (
    <>
      <Toggle
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
        newID={"hide"}
        styling={undefined}
      ></Toggle>

      <div id="mobileNavbar-container">
        <div className="glass" id="image-container">
          <Link to={`/search`}>
            <img id="search" src="./img/search_icon.png"></img>
          </Link>
          <Link to={`/create_post`}>
            <img id="add" src="./img/icon/add.png"></img>
          </Link>
          <Link to={`/main`}>
            <img id="home" src="./img/icon/home.png"></img>
          </Link>
          <Link to={`/profile`}>
            <img id="profile" src="./img/icon/profile_icon.png"></img>
          </Link>
          <LogoutButton styling={undefined}></LogoutButton>
        </div>
      </div>
    </>
  );
}
