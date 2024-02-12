import BackButton from "../BackButton";
import { Toggle } from "../misc/Toggle.tsx";
import useLocalStorage from "use-local-storage";
export default function Contact() {
    const [isDark, setIsDark] = useLocalStorage("isDark", false);

    return (
        <>
            <BackButton link="/"></BackButton>
            <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} ></Toggle>

            <div className="standard-container">
                <div className="standard-content-container glass">
                    <h1>Kontakt</h1>

                    <p><strong>Wir freuen uns über Ihre Nachricht!</strong></p>
                    <p>Haben Sie Fragen, Anregungen oder möchten Sie einfach Hallo sagen? Zögern Sie nicht, uns zu kontaktieren. Wir lieben es, Post von unseren pixeligen Freunden zu erhalten.</p>

                    <p><strong>So erreichen Sie uns:</strong></p>
                    <p>Schicken Sie eine Flaschenpost an:</p>
                    <address>
                        Bilderfluss GmbH<br />
                        Musterstraße 42<br />
                        12345 Bilderstadt
                    </address>

                    <p>Oder senden Sie uns eine Brieftaube mit Ihrer Nachricht. Wir sorgen dafür, dass sie geschult ist, um unsere Nachrichten zu überbringen.</p>

                    <p><strong>Telefon:</strong></p>
                    <p>Wenn Sie denken, dass Sie uns erreichen können, haben Sie wahrscheinlich geträumt.</p>

                    <p><strong>E-Mail:</strong></p>
                    <p>Senden Sie Ihre Nachricht per Gedankenübertragung an: <a href="mailto:hallo@bilderfluss.com">hallo@bilderfluss.com</a></p>

                    <p><strong>Social Media:</strong></p>
                    <p>Folgen Sie uns auf Facebook, Instagram und Twitter, um die neuesten pixeligen Mysterien zu entdecken. Aber Achtung, es könnte süchtig machen!</p>

                    <p><strong>Besuchen Sie uns persönlich:</strong></p>
                    <p>Wir lieben Besuch! Aber wir warnen Sie, unser Büro ist so voller Bilder, dass Sie vielleicht nie wieder herausfinden.</p>
                </div>
            </div>
        </>
    )
}