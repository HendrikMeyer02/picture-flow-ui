import { useTranslation } from "react-i18next";
import CheckLogin from "../auth/CheckLogin";
import Gallery from "../components/gallery";
import "../components/main_feed.css";
import Header from "../components/misc/Header";
import MobileNavbar from "../components/mobile-navbar/MobileNavbar";
import Navbar from "../components/navbar/Navbar";

export default function MainFeed() {
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
        <Navbar />
        <MobileNavbar />
        <div className="gallery-header">
          <Header />
        </div>
        <Gallery />
      </>
    );
  }
}
