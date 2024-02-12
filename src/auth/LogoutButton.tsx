import { Link } from "react-router-dom"
import Cookie from "universal-cookie"
export default function LogoutButton({ styling }) {

    const logOut = () => {
        const cookie = new Cookie();
        cookie.remove("authorization")
    }

    return (
        <>
            <Link to={"/landingpage"} style={styling}
            >
                <img src="../img/icon/logout.png" onClick={logOut} style={styling}></img>
            </Link>
        </>
    );

}