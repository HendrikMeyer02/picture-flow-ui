import { ReactNode } from "react";
import useLocalStorage from "use-local-storage";
import "./App.css";
import { AuthWrapper } from "./auth/AuthWrapper";
import "./i18n/config.ts";

function App({ children }: { children: ReactNode }) {
  const [isDark] = useLocalStorage("isDark", false);

  return (
    <>
      <div className="App" data-theme={isDark ? "dark" : "light"}>
        <AuthWrapper>{children}</AuthWrapper>
      </div>
    </>
  );
}

export default App;
