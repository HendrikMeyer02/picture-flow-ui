import React, { useState, useRef, useEffect } from 'react';
import "./profileIcon.css";
import Cookie from "universal-cookie";

interface Props {
  size?: number;
  authorId: string;
}

export default function ProfileIcon({ size, authorId }: Props) {
  const cookie = new Cookie();
  const [profileImage, setProfileImage] = useState("./img/icon/profile_icon.png");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const iconSize = size ? `${size}px` : undefined;
  const authorization = cookie.get("authorization");

  useEffect(() => {
    fetch(`http://localhost:8000/api/profilepicture/${authorId}`, {
      method: "GET",
      headers: {
        auth: authorization,
      },
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Fehler beim Abrufen der Daten");
      }
      return response.blob();
    })
    .then((imageBlob) => {
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setProfileImage(imageObjectURL);
    })
    .catch((error) => console.error("Fehler beim Laden des Bildes: ", error));
  }, [authorId, authorization]); // Abhängigkeiten hinzugefügt

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target!.result as string);
      };
      reader.readAsDataURL(file);

      fetch(`http://localhost:8000/api/profilepicture`, {
        method: "POST",
        headers: {
          auth: authorization,
        },
        body: reader.readAsDataURL(file),
      });
    }
  };

  return (
    <div
      className={`rounded-circle glass ${!size ? "icon" : ""}`}
      style={iconSize ? { width: iconSize, height: iconSize } : {}}
    >
      <button
        className="uploadButton btn btn-light btn-lg"
        onClick={() => fileInputRef.current?.click()}
      >
        <img
          src={profileImage}
          className="uploadIMG"
          alt="Upload"
        />
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        style={{ display: "none" }}
        accept="image/*"
      />
    </div>
  );
}
