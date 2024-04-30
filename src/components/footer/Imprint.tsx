import { useTranslation } from "react-i18next";
import useLocalStorage from "use-local-storage";
import BackButton from "../backButton";
import { Toggle } from "../misc/Toggle.tsx";

export default function Imprint() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  const { t } = useTranslation();

  return (
    <>
      <BackButton link="/"></BackButton>
      <Toggle
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      ></Toggle>

      <div className="standard-container">
        <div className="standard-content-container glass">
          <h1>{t("imprint")}</h1>

          <p>
            <strong>{t("imprintResponsibility")}</strong>
          </p>
          <p>Max Chaospixel</p>
          <p>
            Image Avenue 42
            <br />
            12345 Pictureville
          </p>

          <p>
            <strong>{t("phone")}</strong>
          </p>
          <p>555-123-4567</p>

          <p>
            <strong>{t("email")}</strong>
          </p>
          <p>max@pictureflow.com</p>

          <p>
            <strong>{t("imprintTradeRegister")}</strong>
          </p>
          <p>{t("imprintMotto")}</p>

          <p>
            <strong>{t("imprintTaxId")}</strong>
          </p>
          <p>{t("imprintTaxId")}: 42-Picture-Flow</p>

          <p>
            <strong>{t("imprintDisclaimer")}</strong>
          </p>
          <p>{t("imprintDisclaimerMessage")}</p>

          <p>
            <strong>{t("imprintCopyright")}</strong>
          </p>
          <p>{t("imprintCopyrightMessage")}</p>

          <p>
            <strong>{t("imprintSupport")}</strong>
          </p>
          <p>{t("imprintSupportMessage")}</p>
        </div>
      </div>
    </>
  );
}
