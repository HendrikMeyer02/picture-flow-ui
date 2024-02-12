import Wave from "../components/Wave.tsx";
import Navbar from "../components/navbar/Navbar.tsx";
import MobileNavbar from "../components/mobile-navbar/MobileNavbar.tsx";
import Search from "../components/search/Search.tsx";
import CheckLogin from "../auth/CheckLogin.tsx";
import BackButton from "../components/BackButton.tsx";
export default function SearchPage() {
    if (!CheckLogin()) {
        return (
            <>
                <p>Nicht eingeloggt!</p>
            </>
        );
    } else {
        return (
            <>
                {/* <BackButton link="/main"></BackButton> */}
                <Navbar></Navbar>
                <Wave />
                <MobileNavbar></MobileNavbar>
                <Search />
            </>
        );
    }
}