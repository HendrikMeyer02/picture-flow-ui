import CreatePost from "../components/createPost.tsx";
import Wave from "../components/wave.tsx";
import Navbar from "../components/navbar/Navbar.tsx";
import MobileNavbar from "../components/mobile-navbar/MobileNavbar.tsx";
import CheckLogin from "../auth/CheckLogin.tsx";
import { useTranslation } from "react-i18next";
export default function CreatePostPage() {
    const { t } = useTranslation();
    if (!CheckLogin()) {
        return (
            <>
                <p>{t("infoNotLoggedIn")}</p>
            </>
        );
    } else {
        return (
            <>
                <Wave />
                <Navbar />
                <MobileNavbar />
                <CreatePost />
            </>
        );
    }
}
