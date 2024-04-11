import "./footer.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function Footer() {
    const { t } = useTranslation();
    return (
        <>
            <footer>
                <ul className="footer-items">
                    <li>
                        <Link to="/imprint">
                            <a href="">{t("imprint")}</a>
                        </Link>

                    </li>
                    <li>
                        <Link to="/contact">
                            <a href="">{t("contact")}</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/privacy_policy">

                            <a href="">{t("privacy")}</a>
                        </Link>
                    </li>
                </ul>
            </footer>
        </>
    )
}