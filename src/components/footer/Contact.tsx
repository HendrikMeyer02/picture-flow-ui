import BackButton from "../BackButton";
import { Toggle } from "../misc/Toggle.tsx";
import useLocalStorage from "use-local-storage";
import { useTranslation } from "react-i18next";
export default function Contact() {
    const [isDark, setIsDark] = useLocalStorage("isDark", false);
    const { t } = useTranslation();

    return (
        <>
            <BackButton link="/"></BackButton>
            <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} ></Toggle>

            <div className="standard-container">
                <div className="standard-content-container glass">
                    <h1>{t("contact")}</h1>

                    <p><strong>{t("contactMessageHeader")}</strong></p>
                    <p>{t("contactMessageContent")}</p>

                    <p><strong>{t("contactHowTo")}</strong></p>
                    <p>{t("contactMailUs")}</p>
                    <address>
                        Picture Flow Ltd.<br />
                        Image Avenue 42<br />
                        12345 Pictureville
                    </address>

                    <p>{t("contactMailFunnyMessage")}</p>

                    <p><strong>{t("phone")}</strong></p>
                    <p>{t("contactPhoneFunnyMessage")}</p>

                    <p><strong>{t("email")}</strong></p>
                    <p>{t("contactEmailMessage")} <a href="mailto:hallo@bilderfluss.com">hallo@bilderfluss.com</a></p>

                    <p><strong>{t("contactSocialMedia")}</strong></p>
                    <p>{t("contactSocialMediaFunnyMessage")}</p>

                    <p><strong>{t("contactVisitUs")}</strong></p>
                    <p>{t("contactVisitUsFunnyMessage")}</p>
                </div>
            </div>
        </>
    )
}