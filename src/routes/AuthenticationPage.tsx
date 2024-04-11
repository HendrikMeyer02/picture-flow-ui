import Wave from "../components/wave.tsx";
import Authentication from "../components/Authentication.tsx";
import useLocalStorage from "use-local-storage";
import { Toggle } from "../components/misc/Toggle.tsx"
import CheckLogin from "../auth/CheckLogin.tsx";
import { useTranslation } from "react-i18next"
export default function AuthenticationPage() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  const { t } = useTranslation();
  if (CheckLogin()) {
    return (
      <>
        <p>{t("infoLoggedIn")}</p>
      </>
    );
  } else {
    return (

      <>
        <Wave />
        <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} ></Toggle>
        <Authentication />
      </>
    );
  }
}
