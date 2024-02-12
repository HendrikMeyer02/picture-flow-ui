import Cookie from "universal-cookie"

export default function CheckLogin() {
    const cookie = new Cookie;
    const cookies = cookie.get("authorization");

    if (cookies != null) {
        return true;
    } else {
        return false;
    }
}