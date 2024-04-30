import { useTranslation } from "react-i18next";
import useLocalStorage from "use-local-storage";
import BackButton from "../backButton";
import { Toggle } from "../misc/Toggle.tsx";

export default function PrivacyPolicy() {
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
          <h1>{t("privacyDataProtectionDisclaimer")}</h1>

          <p>
            <strong>{t("privacyDataProtectionTitle")}</strong>
          </p>
          <p>{t("privacyDataProtectionText")}</p>

          <p>
            <strong>{t("privacyDataCollectionTitle")}</strong>
          </p>
          <p>{t("privacyDataCollectionText")}</p>

          <p>
            <strong>{t("privacyDataUsageTitle")}</strong>
          </p>
          <p>{t("privacyDataUsageText")}</p>

          <p>
            <strong>{t("privacyCookiesTitle")}</strong>
          </p>
          <p>{t("privacyCookiesText")}</p>

          <p>
            <strong>{t("privacyChangeDisclaimerTitle")}</strong>
          </p>
          <p>{t("privacyChangeDisclaimerText")}</p>
        </div>
      </div>
    </>
  );
}
