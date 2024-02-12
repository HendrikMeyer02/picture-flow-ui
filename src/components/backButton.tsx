import { useEffect, useState } from "react";
import "./backButton.css";
interface Props {
  link: string;
}

export default function BackButton({ link }: Props) {
  const [buttonSize, setButtonSize] = useState(0);

  useEffect(() => {
    function updateButtonSize() {
      const minWidth = 30;
      const maxWidth = 200;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Berechne die Größe basierend auf der Bildschirmbreite oder -höhe
      const newSize = Math.min(
        Math.max(minWidth, Math.min(screenWidth, screenHeight) * 0.125),
        maxWidth
      );

      setButtonSize(newSize);
    }

    updateButtonSize();
    window.addEventListener("resize", updateButtonSize);

    // Bereinige das Event-Listening bei Komponentenentfernung
    return () => {
      window.removeEventListener("resize", updateButtonSize);
    };
  }, []);

  return (
    <div className="backButton">
      <a href={link}>
        <svg
          width={buttonSize}
          height={buttonSize}
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 12 L18 25 L30 38"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </a>
    </div>
  );
}
