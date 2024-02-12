import BackButton from "../BackButton";
import { Toggle } from "../misc/Toggle.tsx";
import useLocalStorage from "use-local-storage"

export default function Imprint() {
    const [isDark, setIsDark] = useLocalStorage("isDark", false);

    return (
        <>
            <BackButton link="/"></BackButton>
            <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} ></Toggle>

            <div className="standard-container">
                <div className="standard-content-container glass">
                    <h1>Impressum</h1>

                    <p><strong>Verantwortlich für die chaotische Bildersammlung:</strong></p>
                    <p>Max Pixelchaos</p>
                    <p>Musterstraße 42<br />12345 Bilderstadt</p>

                    <p><strong>Telefon:</strong></p>
                    <p>555-123-4567</p>

                    <p><strong>E-Mail:</strong></p>
                    <p>max@bilderfluss.com</p>

                    <p><strong>Handelsregister für zufällige Motivsuche:</strong></p>
                    <p>Unser Motto: "Alles ist möglich!"</p>

                    <p><strong>Umsatzsteuer-Identifikationsnummer für kreative Verwirrung:</strong></p>
                    <p>USt-IdNr.: 42-Fluss-Bild</p>

                    <p><strong>Haftungsausschluss:</strong></p>
                    <p>Wir übernehmen keine Verantwortung für verirrte Selfies oder verschwundene Socken auf unseren Bildern.</p>

                    <p><strong>Urheberrechtshinweis:</strong></p>
                    <p>Alle Bilder sind entweder gemeinfrei oder von den Weltmeistern der Schnappschüsse geklaut. Keine Sorgen, niemand vermisst sie!</p>

                    <p><strong>Kunden-Support:</strong></p>
                    <p>Unser Kundensupport ist derzeit in einem wilden Fotoshooting und kann nicht antworten. Wir hoffen, dass sie bald zurück sind, aber niemand weiß genau, wo sie sich gerade befinden.</p>
                </div>
            </div>


        </>
    )
}