import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./LandingPage.css";
import Carousel from "./carousel/Carousel";
import Header from "./misc/Header";
import { Toggle } from "./misc/Toggle.tsx";
import useLocalStorage from "use-local-storage";
import CheckLogin from "../auth/CheckLogin.tsx";
import { sayHi } from "./backend_api/utils.js";
import { useTranslation } from "react-i18next";
export default function LandingPage() {

    sayHi();
    const [isDark, setIsDark] = useLocalStorage("isDark", false);
    const { t } = useTranslation();
    if (CheckLogin()) {
        return (
            <>
                <p>{t("infoLoggedIn")}</p>
            </>
        );
    } else {

        return (
            <>
                <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} ></Toggle>

                <div id="landingPage-container">
                    <Header></Header>

                    <div className="" id="text">
                        <div className="drop-shadow-text" id="description">
                            <span>
                            {t("landingPageDescription")}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="wave-top-bottom" id="landingPage-carousel">
                    <Carousel />
                </div>

                <div id="call-to-register-container">
                    <div className="drop-shadow-text" id="call-to-register">
                        {" "}
                        <span>
                        {t("landingPageCallToRegister")}{" "}
                        </span>
                    </div>
                </div>

                <div id="go-to-login-container">
                    <Link to={`/authentication`}>
                        <a href="javascript:void(0)" className="wave-button">
                            <span>{t("landingPageLoginButton")}</span>
                            <div className="wave"></div>
                        </a>
                    </Link>
                    {/* <Link to={`/login`}><input className="glass square-button" id="go-to-login" type="submit" value="Zu Bilderfluss"></input></Link> */}
                </div>

                <div id="landingPage-footer-container">
                    <Footer />
                </div>
            </>
        );
    }
}
