import Wave from "../components/wave.tsx";
import Authentication from "../components/Authentication.tsx";
import useLocalStorage from "use-local-storage";
import { Toggle } from "../components/misc/Toggle.tsx"
import CheckLogin from "../auth/CheckLogin.tsx";
export default function AuthenticationPage() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  if (CheckLogin()) {
    return (
      <>
        <p>Eingeloggt!</p>
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
