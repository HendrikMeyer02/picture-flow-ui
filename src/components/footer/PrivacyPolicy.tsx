import BackButton from "../BackButton";
import { Toggle } from "../misc/Toggle.tsx";
import useLocalStorage from "use-local-storage"

export default function PrivacyPolicy() {
    const [isDark, setIsDark] = useLocalStorage("isDark", false);

    return (
        <>
            <BackButton link="/"></BackButton>
            <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} ></Toggle>


            <div className="standard-container">
                <div className="standard-content-container glass">
                    <h1>Datenschutzerklärung</h1>

                    <p><strong>Ihre Daten sind bei uns sicher... und verschwommen.</strong></p>
                    <p>Bei Bilderfluss nehmen wir den Datenschutz sehr ernst, solange es nicht zu ernst wird.</p>

                    <p><strong>Welche Daten wir sammeln:</strong></p>
                    <p>Wir sammeln alles, was uns in die Hände fällt. Das können Ihre Gedanken, Ihre Lieblingsfarben oder sogar Ihre Vorliebe für Katzenbilder sein. Wir speichern sie sicher in unserem Gedankenarchiv.</p>

                    <p><strong>Wie wir Ihre Daten verwenden:</strong></p>
                    <p>Wir verwenden Ihre Daten, um unsere eigenen Gedanken zu bereichern. Je mehr Daten, desto besser! Sie könnten unsere nächste kreative Inspiration sein.</p>

                    <p><strong>Wie Sie sich schützen können:</strong></p>
                    <p>Tragen Sie immer eine gedankensichere Mütze, wenn Sie unsere Website besuchen. Das schützt vor Datenverlust und spontanen Ideenraub.</p>

                    <p><strong>Cookies:</strong></p>
                    <p>Wir lieben Kekse genauso wie Daten, aber auf unserer Website gibt es keine echten Kekse. Trotzdem sammeln wir "digitale Kekse" (Cookies) - sie schmecken nicht gut, helfen uns aber dabei, die Website zu optimieren.</p>

                    <p><strong>Änderungen an dieser Datenschutzerklärung:</strong></p>
                    <p>Wir können diese Datenschutzerklärung ändern, wann immer wir wollen. Wir sind schließlich die Könige des digitalen Chaos.</p>
                </div>
            </div>
        </>
    )
}