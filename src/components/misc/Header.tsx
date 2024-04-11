
import { useTranslation } from "react-i18next";

export default function Header() {
    const { t } = useTranslation();
    return (
        <><div className="bf">
            <h2>{t("headerPictureFlow")}</h2>
            <h2>{t("headerPictureFlow")}</h2>
        </div></>)
}
