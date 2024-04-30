import { useTranslation } from "react-i18next";
import CheckLogin from "../auth/CheckLogin.tsx";
import MobileNavbar from "../components/mobile-navbar/MobileNavbar.tsx";
import Navbar from "../components/navbar/Navbar.tsx";
import Search from "../components/search/Search.tsx";
import Wave from "../components/wave.tsx";

export default function SearchPage() {
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
        {/* <BackButton link="/main"></BackButton> */}
        <Navbar></Navbar>
        <Wave />
        <MobileNavbar></MobileNavbar>
        <Search />
      </>
    );
  }
}
