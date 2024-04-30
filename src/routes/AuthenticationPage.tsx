import { useTranslation } from "react-i18next";
import useLocalStorage from "use-local-storage";
import CheckLogin from "../auth/CheckLogin.tsx";
import Authentication from "../components/Authentication.tsx";
import { Toggle } from "../components/misc/Toggle.tsx";
import Wave from "../components/wave.tsx";
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
        <Toggle
          isChecked={isDark}
          handleChange={() => setIsDark(!isDark)}
          styling={undefined}
          newID={undefined}
        ></Toggle>
        <Authentication />
      </>
    );
  }
}
