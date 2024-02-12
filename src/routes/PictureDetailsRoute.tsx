import Wave from "../components/wave.tsx";
import Authentication from "../components/Authentication.tsx";
import useLocalStorage from "use-local-storage";
import { Toggle } from "../components/misc/Toggle.tsx"
import CheckLogin from "../auth/CheckLogin.tsx";
import PictureDetails from "../components/gallery/PictureDetails.tsx"
import Navbar from "../components/navbar/Navbar.tsx";
import MobileNavbar from "../components/mobile-navbar/MobileNavbar.tsx";

export default function PictureDetailsRoute() {
    const [isDark, setIsDark] = useLocalStorage("isDark", false);
    if (!CheckLogin()) {
        return (
            <>
                <p>Eingeloggt!</p>
            </>
        );
    } else {
        return (

            <>
                <Navbar></Navbar>
                <MobileNavbar></MobileNavbar>
                <Wave />
                <PictureDetails />
            </>
        );
    }
}