import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({ 
    lng: "en",
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    /*resources: {
        en: {
          translation: {
            "contact": "Contact",
            "contactMessageHeader": "We're looking forward to hearing from you!",
            "contactMessageContent": "If you have any question or suggestion or just want to say hello? Don't hesitate to contact us! We love receiving messages from our picture-friends!",
            "contactHowTo": "How to contact us:",
            "contactMailUs": "Mail us:",
            "contactMailFunnyMessage": "Or you could send a messenger pidgeon. We'll make sure it's trained to get your message to us :)",
            "phone": "Phone:",
            "contactPhoneFunnyMessage": "If you think you could get a call with us, you surely have dreamt that.",
            "email": "E-Mail:",
            "contactEmailMessage": "Send us an e-mail at:",
            "contactSocialMedia": "Social Media:",
            "contactSocialMediaFunnyMessage": "Follow us on Facebook, Instagram, and Twitter to discover our latest information. Beware, it might be addictive!",
            "contactVisitUs": "Come visit us:",
            "contactVisitUsFunnyMessage": "We'd love you to visit us at our office. It's so packed with pictures, you might not find your way back out again!",
        
            "imprint": "Imprint",
            "privacy": "Privacy",
        
            "imprintResponsibility": "I'm responsible for your chaotic picture collection",
            "imprintTradeRegister": "Trade Register:",
            "imprintMotto": "Our motto: Anything goes",
            "imprintTaxId": "Tax ID:",
            "imprintDisclaimer": "Disclaimer:",
            "imprintDisclaimerMessager": "We're not liable for selfies gone wrong or missing socks in your pictures!",
            "imprintCopyright": "Copyright",
            "imprintCopyrightMessage": "Our pictures are open source or stealthily stolen of masters of photography. No worries, no one's missing them!",
            "imprintSupport": "Customer Support:",
            "imprintSupportMessage": "Our customer support is currently doing some wild life photography and is unable to reply. We hope to get back to you soon!",
        
            "privacyDataProtectionDisclaimer": "Data Protection Disclaimer",
            "privacyDataProtectionTitle": "Your data is safe with us!",
            "privacyDataProtectionText": "We at picture flow take data protection serious, so long as it doesn't get to serious.",
            "privacyDataCollectionTitle": "What data do we collect?",
            "privacyDataCollectionText": "We collect everything we can get our hands on. Be it your thoughts, your favourite colours or even your preferences regarding cats. Everything goes straight to our thought data base.",
            "privacyDataUsageTitle": "How do we use your data?",
            "privacyDataUsageText": "We use them as we see fit! The more data the better!",
            "privacyCookiesTitle": "Cookies:",
            "privacyCookiesText": "We love cookies as much as we love your data! Alas, our website lacks real cookies. Nontheless, we collect digital cookies. They don't taste good but help us improve our webiste for you!",
            "privacyChangeDisclaimerTitle": "Changes in our privacy terms and conditions:",
            "privacyChangeDisclaimerText": "We reserve the right to change our privacy policies at any moment. In case of changes we'll inform you in time via e-mail.",
        
            "authenticationLogin": "Login",
            "authenticationInvalidAddress": "Invalid address!",
            "authenticationSignUp": "Sign up",
        
            "infoLoggedIn": "Logged in!",
            "infoNotLoggedIn": "Not logged in!",
            "landingPageDescription": "Picture Flow is a platform for you to share your images and pictures and to find and share inspiration and creativity!",
            "landingPageCallToRegister": "Sign up today and dive into an endless stream of marvelous pictures!",
            "landingPageLoginButton": "Login",
            "headerPictureFlow": "Picture Flow",
            
            "userName": "User name",
            "userNameTaken": "This user name has already been taken",
            "password": "Password",
            "authenticationWrongLoginData": "Wrong login data!",
            "authenticationNewAccount": "New account"
          },
        },
      },*/
  });

export default i18n;