import "./App.css";
import useLocalStorage from "use-local-storage";
import { AuthWrapper } from './auth/AuthWrapper';
import { BrowserRouter } from 'react-router-dom';


function App({ children }) {

  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  return (
    <>
      <div className="App" data-theme={isDark ? "dark" : "light"} >
        <AuthWrapper>
          {children}
        </AuthWrapper>
      </div>
    </>)
}

export default App;
