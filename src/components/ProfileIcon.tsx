import React, { useState, useRef } from 'react';
import "./profileIcon.css";

interface Props {
  size?: number;
}

export default function ProfileIcon({ size }: Props) {
  const [profileImage, setProfileImage] = useState("./img/icon/profile_icon.png");
  const fileInputRef = useRef<HTMLInputElement>(null); // Stellt sicher, dass der Typ mit Ihrer Umgebung übereinstimmt
  const iconSize = size ? `${size}px` : undefined;

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target!.result as string);
      };
      reader.readAsDataURL(file);
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
