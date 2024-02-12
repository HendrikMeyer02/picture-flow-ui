import "./footer.css";
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <>
            <footer>
                <ul className="footer-items">
                    <li>
                        <Link to="/imprint">
                            <a href="">Impressum</a>
                        </Link>

                    </li>
                    <li>
                        <Link to="/contact">
                            <a href="">Kontakt</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/privacy_policy">

                            <a href="">Datenschutz</a>
                        </Link>
                    </li>
                </ul>
            </footer>
        </>
    )
}