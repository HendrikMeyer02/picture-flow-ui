import { Link } from "react-router-dom";
import Cookie from "universal-cookie";

interface LogoutButtonProps {
  styling: React.CSSProperties | undefined;
}

export default function LogoutButton({ styling }: LogoutButtonProps) {
  const logOut = () => {
    const cookie = new Cookie();
    cookie.remove("authorization");
  };

  return (
    <>
      <Link to={"/landingpage"} style={styling}>
        <img
          src="../img/icon/logout.png"
          onClick={logOut}
          style={styling}
        ></img>
      </Link>
    </>
  );
}
