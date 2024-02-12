
import Gallery from "../components/Gallery";
import Wave from "../components/Wave";
import "../components/main_feed.css";
import Header from "../components/misc/Header";
import MobileNavbar from "../components/mobile-navbar/MobileNavbar";
import Navbar from "../components/navbar/Navbar";
import CheckLogin from "../auth/CheckLogin";

export default function MainFeed() {
  if (!CheckLogin()) {
    return (
      <>
        <p>Nicht eingeloggt!</p>
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <MobileNavbar />
        <div className="gallery-header"><Header /></div>
        <Gallery />
      </>
    );
  }

}
