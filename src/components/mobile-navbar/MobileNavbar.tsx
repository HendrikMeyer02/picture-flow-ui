import { Link } from "react-router-dom";
import "./MobileNavbar.css"
import useLocalStorage from "use-local-storage";
import { Toggle } from "../misc/Toggle.tsx";
import LogoutButton from "../../auth/LogoutButton.tsx";

export default function MobileNavbar() {
    const [isDark, setIsDark] = useLocalStorage("isDark", false);

    return (
        <>
            <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} newID={"hide"}></Toggle >

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
                    <LogoutButton></LogoutButton>
                </div>
            </div >
        </>
    )
}