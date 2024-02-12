import Wave from "../components/wave";
import LandingPage from "../components/LandingPage";
import CheckLogin from "../auth/CheckLogin";
import MainFeed from "./MainFeed";

export default function Root() {

  if (CheckLogin()) {
    return (
      <>
        <Wave />
        <MainFeed />
      </>
    );
  } else {
    return (
      <>
        <Wave />
        <LandingPage />
      </>
    );
  }

}
