import CreatePost from "../components/createPost.tsx";
import Wave from "../components/wave.tsx";
import Navbar from "../components/navbar/Navbar.tsx";
import MobileNavbar from "../components/mobile-navbar/MobileNavbar.tsx";
import CheckLogin from "../auth/CheckLogin.tsx";
export default function CreatePostPage() {
    if (!CheckLogin()) {
        return (
            <>
                <p>Nicht eingeloggt!</p>
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
