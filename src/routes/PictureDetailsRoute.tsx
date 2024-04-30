import { useTranslation } from "react-i18next";
import CheckLogin from "../auth/CheckLogin.tsx";
import PictureDetails from "../components/gallery/PictureDetails.tsx";
import MobileNavbar from "../components/mobile-navbar/MobileNavbar.tsx";
import Navbar from "../components/navbar/Navbar.tsx";
import Wave from "../components/wave.tsx";

export default function PictureDetailsRoute() {
  const { t } = useTranslation();
  if (!CheckLogin()) {
    return (
      <>
        <p>{t("infoLoggedIn")}</p>
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
